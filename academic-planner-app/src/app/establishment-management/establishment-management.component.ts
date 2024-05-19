import { Component, OnInit } from '@angular/core';
import { KernelServiceService } from '../services/kernel-service.service';
import { ModalController } from '@ionic/angular';
import { EstablishmentModalComponent } from '../components/establishment-modal/establishment-modal.component';
import { CourseModalComponent } from '../components/course-modal/course-modal.component';
import { University } from '../models/University';
import { Establishment } from '../models/Establishment';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../models/Department';
import { DepartmentModalComponent } from '../components/department-modal/department-modal.component';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-establishment-management',
  templateUrl: './establishment-management.component.html',
  styleUrls: ['./establishment-management.component.scss'],
})
export class EstablishmentManagementComponent  implements OnInit {

  code            : string | null;
  establishment   : Establishment;
  departments    : Department[];

  constructor(
    private kernelService : KernelServiceService,
    private utilsService: UtilsService,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  async ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.code = params.get('code');
    });  
    
    if(this.code) {
      this.establishment =  await this.kernelService.establishmentByCodeGet(this.code);
      this.departments  = await this.kernelService.departmentByEstablishmentCodeGet(this.establishment.code);
    }
  }

  async openEstablishmentModal() {
    const modal = await this.modalCtrl.create({
      component: EstablishmentModalComponent,
      cssClass: 'card-modal',
      componentProps: {
        establishment: this.establishment
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if(data) this.establishment = data.establishment;
  }

  async openCourseModal() {
    const modal = await this.modalCtrl.create({
      component: CourseModalComponent,
      cssClass: 'card-modal',
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
  }

  async openAddDepartmentModal() {
    const modal = await this.modalCtrl.create({
      component: DepartmentModalComponent,
      cssClass: 'card-modal',
      componentProps: {
        establishment: this.establishment
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if(data) this.departments.push(data.department);
  }

  async openDepartmentModal(department : Department) {
    const modal = await this.modalCtrl.create({
      component: DepartmentModalComponent,
      cssClass: 'card-modal',
      componentProps: {
        department: department,
        establishment: this.establishment
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if(data) {
      const index = this.departments.findIndex(e => e.id === data.department.id);
      if (index !== -1) {
        this.departments[index] = data.department;
      }
    }
  }

  openDepartmentPage(code: string) {
    this.router.navigate([`/department/${code}`]);
  }

  getBackground() {
    return this.utilsService.generateRandomSvgBackground();
  }
}
