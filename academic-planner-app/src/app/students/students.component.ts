import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {

  name: string = "boteina";

  constructor(
    private spinnerService : SpinnerService,
  ) {}

  ngOnInit() {}

  showSpinner() {
    this.spinnerService.presentAlert('top', 'TEST');
  }
}
