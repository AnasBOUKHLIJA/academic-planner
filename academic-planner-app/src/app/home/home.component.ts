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
import { University } from '../models/University';
import { AdminServiceService } from '../services/admin-service.service';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {


  university   : University;


  constructor(
    private utilsService            : UtilsService,
    private modalCtrl               : ModalController,
    private userServiceService      : UserServiceService,
    private cdr                     : ChangeDetectorRef,
    private formBuilder             : FormBuilder,
    private kernelServiceService    : KernelServiceService,
    private adminServiceService     : AdminServiceService,
    private spinnerService          : SpinnerService,
  ) {}

  async ngOnInit() {
    this.university = await this.kernelServiceService.universityGet();
    console.log(this.university)
  }

  

}
