import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';

@Component({
  selector: 'app-student-modal',
  templateUrl: './student-modal.component.html',
  styleUrls: ['./student-modal.component.scss'],
})
export class StudentModalComponent  implements OnInit {

  @Input() student: Student;

  constructor() { }

  ngOnInit() {}

}
