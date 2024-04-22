import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Article } from '../entities/Article/Article';
import { Filter } from '../entities/Msg/Filter';

@Component({
  selector: 'app-blogs-articles',
  templateUrl: './blogs-articles.component.html',
  styleUrls: ['./blogs-articles.component.scss'],
})
export class BlogsArticlesComponent  implements OnInit {

  @ViewChild('filterElement') filterElement: ElementRef;
  articles: Article[];
  page: number = 0;
  pages: number = 0;
  pageSize: number = 6;
  count: number;
  filter: Filter;
  filterChanged: boolean = false;
  currentUrl: string = '';

  constructor(
    private userService: UserServiceService
  ) { }

  async ngOnInit() {
    this.filter = new Filter();
    this.filter.orderBy = 'date';
    this.filter.order = 'desc';

    this.count = await this.userService.articlesCountGet(this.filter, true);
    this.pages = Math.ceil(this.count / this.pageSize);
    this.articles = await this.userService.articlesGet(this.page * this.pageSize, this.pageSize, this.filter, true, true);

    this.currentUrl = window.location.href;
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
      this.articles = await this.userService.articlesGet(this.page * this.pageSize, (this.page + 1) * this.pageSize, this.filter, false, true);
    } else if (action === 'prev' && this.page > 0) {
      this.page--;
      this.articles = await this.userService.articlesGet(this.page * this.pageSize, (this.page + 1) * this.pageSize, this.filter, false, true);
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
      this.articles = [];
      this.page = 0;
      this.pageSize = 6;
      this.count = await this.userService.articlesCountGet(this.filter, true);
      this.pages = Math.ceil(this.count / this.pageSize);
      this.articles = await this.userService.articlesGet(this.page * this.pageSize, this.pageSize, this.filter, false, true);
      this.filterChanged = false;
    }
  }
}
