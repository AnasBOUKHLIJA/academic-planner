import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Project } from '../entities/Project';
import { UserServiceService } from '../services/user-service.service';
import { Filter } from '../entities/Msg/Filter';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('.5s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('.5s ease-in-out', style({ opacity: 0, transform: 'translateY(20px)' })),
      ]),
    ]),
  ],

})
export class PortfolioComponent implements OnInit {

  @ViewChild('filterElement') filterElement: ElementRef;
  projects: Project[];
  page: number = 0;
  pages: number = 0;
  pageSize: number = 6;
  count: number;
  filter: Filter;
  filterChanged: boolean = false;

  constructor(private userService: UserServiceService) { }

  async ngOnInit() {
    this.filter = new Filter();
    this.filter.types = ['app-multi-platform', 'app-mobile', 'app-web', 'data-visualisation'];
    this.filter.years = ['2024', '2023', '2022', '2021', '2020'];
    this.filter.orderBy = 'date';
    this.filter.order = 'desc';

    this.count = await this.userService.projectsCountGet(this.filter, false, true);
    this.pages = Math.ceil(this.count / this.pageSize);
    this.projects = await this.userService.projectsGet(this.page * this.pageSize, this.pageSize, this.filter, false, true);
  }

  getGridArea(index: number): string {
    index++;
    let depart = index % 2 == 0 ? 3 : 1;
    const indexFloor = depart == 3 ? (index - 1) : index;
    const first = index == 1 || index == 2 ? depart : (4 * Math.floor(indexFloor / 2)) + depart;
    const second = depart == 1 ? 1 : 5;
    depart = depart == 3 ? 6 : 4;
    const third = (4 * Math.floor((depart == 6 ? (index - 1) : index) / 2)) + depart;
    const fourth = index % 2 == 0 ? 8 : 4;
    const css = `${first} / ${second} / ${third} / ${fourth}`;
    return css;
  }

  getGridAreaIcon(index: number): string {
    index++;
    let depart = index % 2 == 0 ? 3 : 1;
    const indexFloor = depart == 3 ? (index - 1) : index;
    let first = index == 1 || index == 2 ? depart : (4 * Math.floor(indexFloor / 2)) + depart;
    first++;
    depart = depart == 3 ? 6 : 4;
    let third = (4 * Math.floor((depart == 6 ? (index - 1) : index) / 2)) + depart;
    third--;
    const css = `${first} / 4 / ${third} / 5`;
    return css;
  }

  getRowsNumber(): string {
    const length = this.projects?.length;
    const rows = (2 * length) + 1;
    return `repeat(${rows}, 220px)`;
  }

  getDatePosition(index: number): string {
    let css = 'calc(50% + 60px)';
    const isPair = index % 2 == 0;
    if (isPair) {
      css = 'left: ' + css;
    } else {
      css = 'right: ' + css;
    }
    return css;
  }

  getGridMidle(): string {
    const length = this.projects?.length;
    const rows = (2 * length) + 1;
    return `2 / 4 / ${rows} / 5`;
  }

  handleChange(target: string, ev: any) {
    switch (target) {
      case 'orderBy': {
        this.filter.orderBy = ev.target.value;
        break;
      }
      case 'order': {
        this.filter.order = ev.target.value;
        break;
      }
      case 'types': {
        this.filter.types = ev.target.value;
        break;
      }
      case 'years': {
        this.filter.years = ev.target.value;
        break;
      }
    }
    this.filterChanged = true;
  }

  async paginate(action: string) {
    if (action === 'next' && (this.page + 1) * this.pageSize < this.count) {
      this.page++;
      this.projects = await this.userService.projectsGet(this.page * this.pageSize, (this.page + 1) * this.pageSize, this.filter, false, true);
    } else if (action === 'prev' && this.page > 0) {
      this.page--;
      this.projects = await this.userService.projectsGet(this.page * this.pageSize, (this.page + 1) * this.pageSize, this.filter, false, true);
    }
    this.scrollToTop();
  }

  scrollToTop() {
    if (this.filterElement) {
      const filterElement: HTMLElement = this.filterElement.nativeElement;
      filterElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  async handleDismiss() {
    if(this.filterChanged){
      this.projects = [];
      this.page = 0;
      this.pageSize = 6;
      this.count = await this.userService.projectsCountGet(this.filter, false, true);
      this.pages = Math.ceil(this.count / this.pageSize);
      this.projects = await this.userService.projectsGet(this.page * this.pageSize, this.pageSize, this.filter, false, true);
      this.filterChanged = false;
    }
  }

  getTitle(name: string, type: string): string {

    let title = '';

    if(type === 'app-multi-platform'){
      title = 'Multi PlMulti Platform Application';
    } else if(type === 'app-mobile'){
      title = 'Mobile Application';
    } else if(type === 'app-web'){
      title = 'Web Application';
    } else if(type === 'data-visualisation'){
      title = 'Data visualisation';
    }

    title += ': ' + name; 
    return title;
  }

}
