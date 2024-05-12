import { Component, OnInit } from '@angular/core';
import { KernelServiceService } from '../services/kernel-service.service';
import { University } from '../models/University';
import { UniversityModalComponent } from '../components/university-modal/university-modal.component';
import { ModalController } from '@ionic/angular';
import { EstablishmentModalComponent } from '../components/establishment-modal/establishment-modal.component';

@Component({
  selector: 'app-university-management',
  templateUrl: './university-management.component.html',
  styleUrls: ['./university-management.component.scss'],
})
export class UniversityManagementComponent  implements OnInit {

  university : University;

  constructor(
    private kernelService : KernelServiceService,
    private modalCtrl: ModalController,
  ) { }

  async ngOnInit() {   
    this.university = await this.kernelService.universityGet();
  }

  async openUniversityModal() {
    const modal = await this.modalCtrl.create({
      component: UniversityModalComponent,
      cssClass: 'card-modal',
      componentProps: {
        university: this.university
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
  }

  async openEstablishmentModal() {
    const modal = await this.modalCtrl.create({
      component: EstablishmentModalComponent,
      cssClass: 'card-modal',
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
  }

}
