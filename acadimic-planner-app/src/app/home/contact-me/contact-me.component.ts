import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonModal, ModalController } from '@ionic/angular';
import { ContactMe } from 'src/app/entities/ContactMe';
import { SpinnerService } from 'src/app/services/spinner.service';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent implements OnInit {

  contactMeForm: FormGroup;

  @ViewChild(IonModal) modal: IonModal;

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private serService: UserServiceService,
    private spinnerService: SpinnerService
  ) { }

  ngOnInit() {
    this.contactMeForm = this.formBuilder.group({
      firstName: ['',
        [
          Validators.required,
          // Validators.minLength(3)
        ]
      ],
      lastName: ['',
        [
          Validators.required,
          // Validators.minLength(5)
        ]
      ],
      email: ['',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      object: ['',
        [
          Validators.required,
          // Validators.minLength(10)
        ]
      ],
      message: ['',
        [
          Validators.required,
          Validators.minLength(20)
        ]
      ],
    });
  }
  get errorControl() {
    return this.contactMeForm.controls;
  }
  
  async submitForm() {
    if (this.contactMeForm.valid) {
      let contactMe = new ContactMe();
      contactMe.firstName = this.contactMeForm.value.firstName;
      contactMe.lastName = this.contactMeForm.value.lastName;
      contactMe.email = this.contactMeForm.value.email;
      contactMe.object = this.contactMeForm.value.object;
      contactMe.message = this.contactMeForm.value.message;
      await this.serService.contactMe(contactMe);
      this.contactMeForm.reset();
    } else {
      await this.spinnerService.presentAlert('Form validation', 'Please provide all the required values!');
    }
  };

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(null, 'confirm');
  }


}
