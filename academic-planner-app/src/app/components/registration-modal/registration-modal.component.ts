import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AcademicProgram } from 'src/app/models/AcademicProgram';
import { Filter } from 'src/app/models/Filter';
import { Promotion } from 'src/app/models/Promotion';
import { Registration } from 'src/app/models/Registration';
import { RegistrationRequest } from 'src/app/models/RegistrationRequest';
import { Student } from 'src/app/models/Student';
import { StudentsResponse } from 'src/app/models/msg/StudentsResponse';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { KernelServiceService } from 'src/app/services/kernel-service.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.scss'],
})
export class RegistrationModalComponent  implements OnInit {

  @Input() promotion        : Promotion;
  @Input() academicProgram  : AcademicProgram;
  filterForm                : FormGroup;
  filter                    : Filter = new Filter();
  pageSize                  : number = 10;
  page                      : number = 0;
  studentsResponse          : StudentsResponse;
  registrations             : Registration[] = [];

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private kernelService: KernelServiceService,
    private spinnerService: SpinnerService,
    private adminServiceService: AdminServiceService
  ) { }

  async ngOnInit() {

    this.filterForm = this.formBuilder.group({
      page: [this.page],
      pageSize: [this.pageSize],
      firstName: [this.filter.firstName],
      lastName: [this.filter.lastName],
      apogeeCode: [this.filter.apogeeCode],
      studentNationalCode: [this.filter.studentNationalCode],
    });

    this.registrations = await this.adminServiceService.getRegistrations(this.promotion.id);
    if(! this.registrations) this.registrations = [];
  }

  closeModal() {
    this.modalCtrl.dismiss({ role : 'nothing'});
  }

  async submitFilterForm() {
    if (this.filterForm.valid) {
      this.filter = this.filterForm.value;
      this.studentsResponse = await this.adminServiceService.getStudents(this.filter);
    } else {
      this.spinnerService.presentAlert('error','Form is not valid')
    }
  }

  async clearFilter() {
    this.filterForm.reset({
      page: this.page,
      pageSize: this.pageSize,
      firstName: null,
      lastName: null,
      apogeeCode: null,
      studentNationalCode: null
    });
    this.filter = this.filterForm.value;
  }


  async paginate(action: string) {
    if (action === 'next' && ! this.studentsResponse.last) {
      this.filter.page = this.studentsResponse.number+1;
    } else if (action === 'prev' && ! this.studentsResponse.first) {
      this.filter.page = this.studentsResponse.number-1;
    }
    if ((action === 'next' && ! this.studentsResponse.last) 
      || (action === 'prev' && ! this.studentsResponse.first)) {
        this.filter.pageSize = this.pageSize;
        this.studentsResponse = await this.adminServiceService.getStudents(this.filter);
    }
  }

  // Method to toggle student selection
  toggleStudentSelection(student: Student) {
    const index = this.registrations.findIndex(s => s.student.studentNationalCode === student.studentNationalCode);
    if (index === -1) {
      // Add student to selectedStudents if not already selected
      let registration = new Registration();
      registration.promotion = this.promotion;
      registration.student = student;
      this.registrations.push(registration);
    } else {
      // Remove student from selectedStudents if already selected
      this.registrations.splice(index, 1);
    }
  }

  // Method to check if a student is selected
  isSelected(student: Student): boolean {
    return this.registrations && this.registrations.some(s => s.student.studentNationalCode === student.studentNationalCode);
  }

  async save() {
    const registrationRequest = new RegistrationRequest();
    registrationRequest.promotion = this.promotion;
    registrationRequest.registrations = this.registrations;
    this.registrations = await this.adminServiceService.saveRegistrations(registrationRequest);
  }

  delete(id : number) {
    const index = this.registrations.findIndex(e => e.id === id);
      if (index !== -1) {
        this.registrations.splice(index, 1);
      }
  }
}
