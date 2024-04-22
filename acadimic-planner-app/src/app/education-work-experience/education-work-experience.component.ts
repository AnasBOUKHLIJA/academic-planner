import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../entities/WorkExperience';
import { UserServiceService } from '../services/user-service.service';
import { Filter } from '../entities/Msg/Filter';

@Component({
  selector: 'app-education-work-experience',
  templateUrl: './education-work-experience.component.html',
  styleUrls: ['./education-work-experience.component.scss'],
})
export class EducationWorkExperienceComponent implements OnInit {

  workExperiences: WorkExperience[];
  filter: Filter;
  filterChanged: boolean;

  constructor(private userService: UserServiceService) { }

  async ngOnInit() {
    this.filter = new Filter();
    this.filter.types = ['work', 'internship', 'school'];
    this.filter.years = ['2024', '2023', '2022', '2021', '2020'];
    this.filter.orderBy = 'date';
    this.filter.order = 'desc';

    this.workExperiences = await this.userService.workExperiencesGet(undefined, this.filter, false, true);
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
    const length = this.workExperiences?.length;
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
    const length = this.workExperiences?.length;
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

  async handleDismiss() {
    if (this.filterChanged) {
      this.workExperiences = [];
      this.workExperiences = await this.userService.workExperiencesGet(undefined, this.filter, false, true);
      this.filterChanged = false;
    }
  }
}
