import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Skill } from '../entities/Skill';
import { UserServiceService } from '../services/user-service.service';
import { Filter } from '../entities/Msg/Filter';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent  implements OnInit {

  @ViewChild('gridParent') gridParent: ElementRef;
  @ViewChild('filterElement') filterElement: ElementRef;
  skills : Skill[] = [];
  filter: Filter;
  filterChanged: boolean = false;

  constructor(private userService: UserServiceService, private renderer: Renderer2) { }

  async ngOnInit() {
    this.filter = new Filter();
    this.filter.levels = ['advanced', 'intermediate', 'beginner'];
    this.filter.years = ['2024', '2023', '2022', '2021', '2020'];
    this.filter.orderBy = 'date';
    this.filter.order = 'desc';

    this.skills = await this.userService.skillsGet(undefined, this.filter, false, true);
  }

  getGridArea(index: number): string {
    index++;
    const rowsNumber = 5; 

    const first = Math.ceil(index / rowsNumber);
    const second = index - ((first - 1)*5);
    const third = first + 1;
    const fourth = second - 1;
    const css = `${first} / ${second} / ${third} / ${fourth}`;
    return css;
  }

  getRowsNumber(): string{
    let rowsNumber = 5; 

    if (this.gridParent?.nativeElement) {
      const computedStyles = window.getComputedStyle(this.gridParent.nativeElement);
      const gridColumnValue = computedStyles.getPropertyValue('grid-template-columns');
      const columnValues = gridColumnValue.split(' ');
      rowsNumber = columnValues.length;
    }
    const count = this.skills?.length;
    const rows = Math.ceil(count / rowsNumber) ;

    return `repeat(${rows}, 250px)`;
  }

  handleChange(target: string, ev: any){
    switch (target) {
      case 'orderBy': {
        this.filter.orderBy = ev.target.value;
        break;
      }
      case 'levels': {
        this.filter.levels = ev.target.value;
        break;
      }
      case 'years': {
        this.filter.years = ev.target.value;
        break;
      }
    }
    this.filterChanged = true;
  }

  async handleDismiss(){
    if(this.filterChanged){
      this.skills = [];
      this.skills = await this.userService.skillsGet(undefined, this.filter, false, true);
      this.filterChanged = false;
    }

  }
}
