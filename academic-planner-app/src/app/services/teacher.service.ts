import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import { NetworkServiceService } from './network-service.service';
import { SpinnerService } from './spinner.service';
import { Course } from '../models/Course';
import { PromotionCourse } from '../models/PromotionCourse';
import { Registration } from '../models/Registration';
import { GradeRequest } from '../models/GradeRequest';
import { Grade } from '../models/Grade';
import { Schedule } from '../models/Schedule';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private readonly MODULE_GET_URL: string = 'teacher/';

  constructor(
    private configurationService: ConfigurationService,
    private networkService: NetworkServiceService,
    private spinnerService: SpinnerService,
  ) { }

  CoursesGet(teacherId: number): Promise<Course[]> {
    return new Promise((resolve, reject) => {
      this.networkService.get(this.MODULE_GET_URL + "CoursesGet/" + teacherId, true).then((response: any) => {
        resolve(response);
      }, error => {
        reject(error);
      }
      );
    });
  }

  coursePromotionsGet(courseId: number): Promise<PromotionCourse[]> {
    return new Promise((resolve, reject) => {
      this.networkService.get(this.MODULE_GET_URL + "coursePromotionsGet/" + courseId, true).then((response: any) => {
        resolve(response);
      }, error => {
        reject(error);
      }
      );
    });
  }

  registrationsGet(promotionId: number): Promise<Registration[]> {
    return new Promise((resolve, reject) => {
      this.networkService.get(this.MODULE_GET_URL + "registrationsGet/" + promotionId, true).then((response: any) => {
        resolve(response);
      }, error => {
        reject(error);
      }
      );
    });
  }


  gradesSave(gradeRequest: GradeRequest): Promise<Grade[]> {
    return new Promise((resolve, reject) => {
      this.networkService.post(this.MODULE_GET_URL + "gradesSave", gradeRequest, true).then((response: any) => {
        resolve(response);
      }, error => {
        reject(error);
      }
      );
    });
  }

  gradesGet(promotionId: number, courseId: number): Promise<Grade[]> {
    return new Promise((resolve, reject) => {
      this.networkService.get(this.MODULE_GET_URL + "gradesGet/" +promotionId + "/" + courseId, true).then((response: any) => {
        resolve(response);
      }, error => {
        reject(error);
      }
      );
    });
  }

  teacherScheduleGet(teacherId: number): Promise<Schedule[]> {
    return new Promise((resolve, reject) => {
      this.networkService.get(this.MODULE_GET_URL + "teacherScheduleGet/" +teacherId, true).then((response: any) => {
        resolve(response);
      }, error => {
        reject(error);
      }
      );
    });
  }
}
