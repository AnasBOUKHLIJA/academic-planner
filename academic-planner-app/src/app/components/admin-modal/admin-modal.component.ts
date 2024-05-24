import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Country } from 'src/app/models/Country';
import { LegalIdType } from 'src/app/models/LegalIdType';
import { Person } from 'src/app/models/Person';
import { Profile } from 'src/app/models/Profile';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { KernelServiceService } from 'src/app/services/kernel-service.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-admin-modal',
  templateUrl: './admin-modal.component.html',
  styleUrls: ['./admin-modal.component.scss'],
})
export class AdminModalComponent  implements OnInit {

  @Input() person : Person;
  adminForm       : FormGroup;
  countries       : Country[];
  profiles        : Profile[];
  legalIdTypes    : LegalIdType[];
  selectedCountry : Country;

  constructor(
    private utilsService            : UtilsService,
    private modalCtrl               : ModalController,
    private userServiceService      : UserServiceService,
    private formBuilder             : FormBuilder,
    private kernelServiceService    : KernelServiceService,
    private adminServiceService     : AdminServiceService,
    private spinnerService          : SpinnerService,
    private router                  : Router
  ) {}

  async ngOnInit() {
    this.adminForm = this.formBuilder.group({
      id            : [this.person ? this.person.id : '', Validators.required],
      username      : [this.person ? this.person.username : '', Validators.required],
      password      : [this.person ? this.person.password : '', Validators.required],
      gender        : [this.person ? this.person.gender : '', Validators.required],
      email         : [this.person ? this.person.email : '', [Validators.required, Validators.email]],
      firstName     : [this.person ? this.person.firstName : '', Validators.required],
      lastName      : [this.person ? this.person.lastName : '', Validators.required],
      thumbnail     : [this.person ? this.person.thumbnail : '', Validators.required],
      birthDate     : [this.person ? this.person.birthDate : '', Validators.required],
      legalIdNumber : [this.person ? this.person.legalIdNumber : '', Validators.required],
      legalIdType   : [this.person ? this.person.legalIdType : '', Validators.required],
      citizenship   : [this.person ? this.person.citizenship : '', Validators.required],
      city          : [this.person ? this.person.city : '', Validators.required],
      profile       : [this.person ? this.person.profile : '', Validators.required]
    });

    this.countries = await this.kernelServiceService.countriesGet();
    this.legalIdTypes = await this.kernelServiceService.legalIdTypesGet();
    this.profiles = await this.kernelServiceService.profilesGet();

    this.adminForm.get('citizenship')?.valueChanges.subscribe((selectedCountry: Country) => {
      this.selectedCountry = selectedCountry;
    });
  }

  handleFileSelected(fileBase64 : string) {
    this.adminForm.patchValue({
      thumbnail: fileBase64
    });
  }
  
  async submitForm() {
    if (this.adminForm.valid) {
      const person = await this.adminServiceService.saveAdmin(this.adminForm.value);
      this.adminForm.reset();
      this.modalCtrl.dismiss({ person : person });
    } else {
      this.spinnerService.presentAlert('error','Form is not valid')
    }
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
