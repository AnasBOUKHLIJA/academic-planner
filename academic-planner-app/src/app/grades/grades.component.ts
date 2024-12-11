import { Component, OnInit } from '@angular/core';
import { Course } from '../models/Course';
import { SecurityDTO } from '../models/msg/SecurityDTO';
import { KernelServiceService } from '../services/kernel-service.service';
import { UtilsService } from '../services/utils.service';
import { StudentService } from '../services/student.service';
import { TeacherService } from '../services/teacher.service';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { SecurityServiceService } from '../services/security-service.service';
import { PromotionCourse } from '../models/PromotionCourse';
import { Promotion } from '../models/Promotion';
import { Registration } from '../models/Registration';
import { Grade } from '../models/Grade';
import { GradeRequest } from '../models/GradeRequest';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss'],
})
export class GradesComponent  implements OnInit {

  courses                       : Course[];
  securityDTO                   : SecurityDTO;
  selectedCourse                : Course;
  selectedPromotion             : Promotion;
  promotionCourses              : PromotionCourse[];
  registrations                 : Registration[];
  grades                        : Grade[] = [];

  constructor(
    private kernelService : KernelServiceService,
    private utilsService: UtilsService,
    private studentService: StudentService,
    private teacherService: TeacherService,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private router: Router,
    private securityService : SecurityServiceService,
  ) { }

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
    const existingGrades    = await this.teacherService.gradesGet(this.selectedPromotion.id, this.selectedCourse.id);

    this.grades = this.registrations.map(registration => {
      const existingGrade = existingGrades.find(grade => grade.student.id === registration.student.id);
      return existingGrade ? existingGrade : {
        id: null,
        grade: 0,
        course: this.selectedCourse,
        promotion: this.selectedPromotion,
        student: registration.student
      };
    });

  }

  updateGrade(index: number, newGrade: number) {
    this.grades[index].grade = newGrade;
  }

  async saveGrades() {
    const gradeRequest = new GradeRequest(); 
    gradeRequest.course = this.selectedCourse;
    gradeRequest.promotion = this.selectedPromotion;
    gradeRequest.grades = this.grades;
    this.grades = await this.teacherService.gradesSave(gradeRequest);
  }
}
