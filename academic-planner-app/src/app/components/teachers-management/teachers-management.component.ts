import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserServiceService } from '../../services/user-service.service';
import { UtilsService } from '../../services/utils.service';
import { GlobalConfig } from 'src/app/models/GlobalConfig';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profile } from 'src/app/models/Profile';
import { LegalIdType } from 'src/app/models/LegalIdType';
import { Country } from 'src/app/models/Country';
import { KernelServiceService } from '../../services/kernel-service.service';
import { University } from 'src/app/models/University';
import { AdminServiceService } from '../../services/admin-service.service';
import { SpinnerService } from '../../services/spinner.service';
import { Teacher } from 'src/app/models/Teacher';

@Component({
  selector: 'app-teachers-management',
  templateUrl: './teachers-management.component.html',
  styleUrls: ['./teachers-management.component.scss'],
})
export class TeachersManagementComponent  implements OnInit {

  teacherForm : FormGroup;
  baseSize    : number = 4;
  global      : GlobalConfig;
  countries   : Country[];
  profiles    : Profile[];
  legalIdTypes : LegalIdType[];
  university   : University;
  selectedCountry: Country;
  teachers      : Teacher[];
  showForm: boolean = false;

  constructor(
    private utilsService            : UtilsService,
    private modalCtrl               : ModalController,
    private userServiceService      : UserServiceService,
    private formBuilder             : FormBuilder,
    private kernelServiceService    : KernelServiceService,
    private adminServiceService     : AdminServiceService,
    private spinnerService          : SpinnerService,
  ) {}

  async ngOnInit() {
    this.teacherForm = this.formBuilder.group({
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      thumbnail: ['', Validators.required],
      birthDate: ['', Validators.required],
      legalIdNumber: ['', Validators.required],
      legalIdType: ['', Validators.required],
      citizenship: ['', Validators.required],
      profile: ['', Validators.required],
      city: ['', Validators.required],
    });

    this.countries = await this.kernelServiceService.countriesGet();
    this.legalIdTypes = await this.kernelServiceService.legalIdTypesGet();
    this.profiles = await this.kernelServiceService.profilesGet();
    this.university = await this.kernelServiceService.universityGet();

    this.teacherForm.get('citizenship')?.valueChanges.subscribe((selectedCountry: Country) => {
      this.selectedCountry = selectedCountry;
    });

    this.teachers = await this.adminServiceService.getAllTeachers();
    console.log(this.teachers);
  }

  async submitTeacherForm() {
    if (this.teacherForm.valid) {
      this.adminServiceService.createTeacher(this.teacherForm.value);
    } else {
      console.log('Form is not valid');
    }
  }

  handleFileSelected(fileBase64 : string) {
    this.teacherForm.patchValue({
      thumbnail: fileBase64
    });
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }
}
