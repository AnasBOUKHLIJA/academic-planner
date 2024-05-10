import { ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserServiceService } from '../services/user-service.service';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { UtilsService } from '../services/utils.service';
import { GlobalConfig } from '../models/GlobalConfig';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { City } from '../models/City';
import { Profile } from '../models/Profile';
import { LegalIdType } from '../models/LegalIdType';
import { Country } from '../models/Country';
import { KernelServiceService } from '../services/kernel-service.service';
import { Univesity } from '../models/Univesity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  studentForm : FormGroup;
  baseSize    : number = 4;
  global      : GlobalConfig;
  countries   : Country[];
  profiles    : Profile[];
  legalIdTypes : LegalIdType[];
  univesity   : Univesity;

  constructor(
    private utilsService: UtilsService,
    private modalCtrl: ModalController,
    private userServiceService: UserServiceService,
    private cdr: ChangeDetectorRef,
    private formBuilder: FormBuilder,
    private kernelServiceService: KernelServiceService,
  ) {}

  async ngOnInit() {
    this.studentForm = this.formBuilder.group({
      // id: [''],
      // username: ['', Validators.required],
      //password: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      legalIdNumber: ['', Validators.required],
      legalIdType: ['', Validators.required],
      citizenship: ['', Validators.required],
      profile: ['', Validators.required],
      city: ['', Validators.required],
      apogeeCode: ['', Validators.required],
      studentNationalCode: ['', Validators.required]
    });

    this.countries = await this.kernelServiceService.countriesGet();
    this.legalIdTypes = await this.kernelServiceService.legalIdTypesGet();
    this.profiles = await this.kernelServiceService.profilesGet();
    this.univesity = await this.kernelServiceService.universityGet();

    console.log(this.countries);
    console.log(this.legalIdTypes);
    console.log(this.profiles);
    console.log(this.univesity);
  }

  async submitForm() {
    if (this.studentForm.valid) {
      console.log('Student data:', this.studentForm.value);
      // Submit data
    } else {
      console.log('Form is not valid');
    }
  }

}
