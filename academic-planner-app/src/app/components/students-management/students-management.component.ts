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
import { Student } from 'src/app/models/Student';

@Component({
  selector: 'app-students-management',
  templateUrl: './students-management.component.html',
  styleUrls: ['./students-management.component.scss'],
})
export class StudentsManagementComponent  implements OnInit {

  studentForm : FormGroup;
  baseSize    : number = 4;
  global      : GlobalConfig;
  students   : Student[];
  countries   : Country[];
  profiles    : Profile[];
  legalIdTypes : LegalIdType[];
  university   : University;
  selectedCountry: Country;
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
    this.studentForm = this.formBuilder.group({
      // id: [''],
      // username: ['', Validators.required],
      // password: ['', [Validators.required, Validators.minLength(6)]],
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
      apogeeCode: ['', Validators.required],
      studentNationalCode: ['', Validators.required]
    });

    this.countries = await this.kernelServiceService.countriesGet();
    this.legalIdTypes = await this.kernelServiceService.legalIdTypesGet();
    this.profiles = await this.kernelServiceService.profilesGet();
    this.university = await this.kernelServiceService.universityGet();

    this.studentForm.get('citizenship')?.valueChanges.subscribe((selectedCountry: Country) => {
      this.selectedCountry = selectedCountry;
    });

    this.students = await this.adminServiceService.getAllStudents();
    console.log(this.students);
  }

  async submitStudentForm() {
    if (this.studentForm.valid) {
      this.adminServiceService.createStudent(this.studentForm.value);
    } else {
      console.log('Form is not valid');
    }
  }

  handleFileSelected(fileBase64 : string) {
    this.studentForm.patchValue({
      thumbnail: fileBase64
    });
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

}
