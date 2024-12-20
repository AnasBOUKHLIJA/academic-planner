import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';
import { Course } from '../models/Course';
import { SecurityDTO } from '../models/msg/SecurityDTO';
import { Promotion } from '../models/Promotion';
import { PromotionCourse } from '../models/PromotionCourse';
import { Registration } from '../models/Registration';
import { Grade } from '../models/Grade';
import { KernelServiceService } from '../services/kernel-service.service';
import { UtilsService } from '../services/utils.service';
import { StudentService } from '../services/student.service';
import { TeacherService } from '../services/teacher.service';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { SecurityServiceService } from '../services/security-service.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {

  courses                       : Course[];
  securityDTO                   : SecurityDTO;
  selectedCourse                : Course;
  selectedPromotion             : Promotion;
  promotionCourses              : PromotionCourse[];
  registrations                 : Registration[];

  constructor(
    private spinnerService : SpinnerService,
    private kernelService : KernelServiceService,
    private utilsService: UtilsService,
    private studentService: StudentService,
    private teacherService: TeacherService,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private router: Router,
    private securityService : SecurityServiceService,
  ) {}

  async ngOnInit() {
    this.securityDTO  = this.securityService.getSecurityInfo();
    this.courses      = await this.teacherService.CoursesGet(this.securityDTO.id);
  }


  async onCourseChange(event: any) {
    this.selectedCourse = event.detail.value;
    this.promotionCourses = await this.teacherService.coursePromotionsGet(this.selectedCourse.id);
  }

  async onPromotionChange(event: any) {
    this.selectedPromotion  = event.detail.value;
    this.registrations      = await this.teacherService.registrationsGet(this.selectedPromotion.id);
  }

}
