import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonModal, ModalController } from '@ionic/angular';
import { City } from 'src/app/models/City';
import { University } from 'src/app/models/University';
import { KernelServiceService } from '../../services/kernel-service.service';

@Component({
  selector: 'app-university-modal',
  templateUrl: './university-modal.component.html',
  styleUrls: ['./university-modal.component.scss'],
})
export class UniversityModalComponent implements OnInit {

  @Input() university: University;
  universityForm : FormGroup;
  cities : City[];

  constructor(
    private modalCtrl       : ModalController,
    private formBuilder     : FormBuilder,
    private kernelServiceService : KernelServiceService,
  ) { }

  async ngOnInit() {
    this.cities = (await this.kernelServiceService.countryGet()).cities;
    this.universityForm = this.formBuilder.group({
      id: [this.university.id, [Validators.required]],
      code: [this.university.code, [Validators.required]],
      name: [this.university.name, [Validators.required]],
      description: [this.university.description, Validators.required],
      thumbnail: [this.university.thumbnail, Validators.required],
      city: [this.university.city, Validators.required],
    });
  }
  async submitForm() {
    if (this.universityForm.valid) {
      console.log(this.universityForm)
    } else {
      console.log('Form is not valid');
    }
  }
  
}
