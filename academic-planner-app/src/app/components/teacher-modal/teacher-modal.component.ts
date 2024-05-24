import { Component, Input, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/Teacher';

@Component({
  selector: 'app-teacher-modal',
  templateUrl: './teacher-modal.component.html',
  styleUrls: ['./teacher-modal.component.scss'],
})
export class TeacherModalComponent  implements OnInit {

  @Input() teacher: Teacher;

  constructor() { }

  ngOnInit() {}

}
