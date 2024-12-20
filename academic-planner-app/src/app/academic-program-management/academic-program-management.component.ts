import { Component, OnInit } from '@angular/core';
import { Course } from '../models/Course';
import { AcademicProgram } from '../models/AcademicProgram';
import { KernelServiceService } from '../services/kernel-service.service';
import { UtilsService } from '../services/utils.service';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentModalComponent } from '../components/department-modal/department-modal.component';
import { CourseModalComponent } from '../components/course-modal/course-modal.component';
import { AcademicProgramModalComponent } from '../components/academic-program-modal/academic-program-modal.component';
import { PromotionModalComponent } from '../components/promotion-modal/promotion-modal.component';
import { Promotion } from '../models/Promotion';
import { RegistrationModalComponent } from '../components/registration-modal/registration-modal.component';

@Component({
  selector: 'app-academic-program-management',
  templateUrl: './academic-program-management.component.html',
  styleUrls: ['./academic-program-management.component.scss'],
})
export class AcademicProgramManagementComponent  implements OnInit {

  code                : string | null;
  academicProgram     : AcademicProgram;
  courses             : Course[];
  promotions          : Promotion[];

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
      this.academicProgram  = await this.kernelService.academicProgramByCodeGet(this.code);
      this.courses          = await this.kernelService.coursesByAcademicProgramCodeGet(this.academicProgram.code);
      this.promotions       = await this.kernelService.promotionsByAcademicProgramCodeGet(this.academicProgram.code);
    }
  }

  async openAcademicProgramModal() {
    const modal = await this.modalCtrl.create({
      component: AcademicProgramModalComponent,
      cssClass: 'card-modal',
      componentProps: {
        academicProgram: this.academicProgram,
        department: this.academicProgram.department
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if(data && data.role === 'save') this.academicProgram = data.academicProgram;
  }

  async openAddCourseModal() {
    const modal = await this.modalCtrl.create({
      component: CourseModalComponent,
      cssClass: 'card-modal',
      componentProps: {
        academicProgram: this.academicProgram
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if(data && data.role === 'save') this.courses.push(data.course);
  }

  async openCourseModal(course : Course) {
    const modal = await this.modalCtrl.create({
      component: CourseModalComponent,
      cssClass: 'card-modal',
      componentProps: {
        course: course,
        academicProgram: this.academicProgram
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();

    if (data.role === 'delete') {
      const index = this.courses.findIndex(e => e.id === course.id);
      if (index !== -1) {
        this.courses.splice(index, 1);
      }
    } else if (data.role === 'save' && data.course) {
      const index = this.courses.findIndex(e => e.id === data.course.id);
      if (index !== -1) {
        this.courses[index] = data.course;
      }
    }
  }

  async openAddPromotionModal() {
    const modal = await this.modalCtrl.create({
      component: PromotionModalComponent,
      cssClass: 'card-modal',
      componentProps: {
        academicProgram: this.academicProgram
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if(data && data.role === 'save') this.promotions.push(data.promotion);
  }

  async openRegistrationModal(promotion: Promotion) {
    const modal = await this.modalCtrl.create({
      component: RegistrationModalComponent,
      cssClass: 'card-modal',
      componentProps: {
        promotion: promotion,
        academicProgram: this.academicProgram
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data.role === 'save' && data.promotion) {
      const index = this.promotions.findIndex(e => e.id === data.promotion.id);
      if (index !== -1) {
        this.promotions[index] = data.promotion;
      }
    }
  }

  async openPromotionModal(promotion : Promotion) {
    const modal = await this.modalCtrl.create({
      component: PromotionModalComponent,
      cssClass: 'card-modal',
      componentProps: {
        promotion: promotion,
        academicProgram: this.academicProgram
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();

    if (data.role === 'delete') {
      const index = this.promotions.findIndex(e => e.id === promotion.id);
      if (index !== -1) {
        this.promotions.splice(index, 1);
      }
    } else if (data.role === 'save' && data.promotion) {
      const index = this.promotions.findIndex(e => e.id === data.promotion.id);
      if (index !== -1) {
        this.promotions[index] = data.promotion;
      }
    }
  }

  openCoursePage(code: string) {
    this.router.navigate([`/course/${code}`]);
  }

  getBackground(indice: number) {
    return this.utilsService.generateRandomSvgBackground(indice);
  }

  async reloadPromotions(){
    this.promotions       = await this.kernelService.promotionsByAcademicProgramCodeGet(this.academicProgram.code);
  }

  async reloadCourses(){
    this.courses          = await this.kernelService.coursesByAcademicProgramCodeGet(this.academicProgram.code);
  }

}
