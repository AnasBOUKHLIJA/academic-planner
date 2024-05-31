import { Component, OnInit } from '@angular/core';
import { KernelServiceService } from '../services/kernel-service.service';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from '../services/utils.service';
import { SecurityServiceService } from '../services/security-service.service';
import { Profile } from '../models/Profile';
import { SecurityDTO } from '../models/msg/SecurityDTO';
import { StudentService } from '../services/student.service';
import { TeacherService } from '../services/teacher.service';
import { Course } from '../models/Course';
import { Registration } from '../models/Registration';
import { Promotion } from '../models/Promotion';
import { PromotionCourse } from '../models/PromotionCourse';
import { RegistrationWithCourses } from '../models/RegistrationWithCourses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent  implements OnInit {

  profile                       : Profile;
  securityDTO                   : SecurityDTO;
  courses                       : Course[];
  registrations                 : Registration[];
  promotionCourses              : PromotionCourse[];
  registrationWithCourses       : RegistrationWithCourses[];

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
    this.securityDTO = this.securityService.getSecurityInfo();
    if(this.securityDTO.profile.code === 'teacher') {
      // Retrieve Courses teached by the teacher
      this.courses = await this.teacherService.CoursesGet(this.securityDTO.id)
    } else if(this.securityDTO.profile.code === 'student'){
      // Retrieve Courses of promotion 
      await this.fetchRegistrationsWithCourses();

      // this.registrations = await this.studentService.studentRegistrationsGet(this.securityDTO.id)
      // if(this.registrations){ 
      //   this.registrations.forEach( async e => {
      //     const registrationWithCourses = new RegistrationWithCourses();
      //     registrationWithCourses.registration = e;
      //     registrationWithCourses.promotionCourses = await this.studentService.promotionCourseGet(e.promotion.id);
      //     this.registrationWithCourses.push(registrationWithCourses);
      //   });
      // }
    }
  }

  getBackground(indice: number) {
    return this.utilsService.generateRandomSvgBackground(indice);
  }

  async fetchRegistrationsWithCourses() {
    try {
      // Fetch all registrations
      this.registrations = await this.studentService.studentRegistrationsGet(this.securityDTO.id);

      if (this.registrations) {
        // Use Promise.all to fetch promotion courses for each registration concurrently
        const registrationWithCoursesPromises = this.registrations.map(async (registration) => {
          const promotionCourses = await this.studentService.promotionCourseGet(registration.promotion.id);
          return {
            registration,
            promotionCourses
          };
        });

        this.registrationWithCourses = await Promise.all(registrationWithCoursesPromises);

        // Now the registrationWithCourses list contains the combined data
        console.log(this.registrationWithCourses);
      }
    } catch (error) {
      console.error('Error fetching registrations or promotion courses', error);
    }
  }

  openCoursePage(code: string) {
    this.router.navigate([`/course/${code}`]);
  }

}
