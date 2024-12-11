import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import { NetworkServiceService } from './network-service.service';
import { SpinnerService } from './spinner.service';
import { Registration } from '../models/Registration';
import { PromotionCourse } from '../models/PromotionCourse';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private readonly MODULE_GET_URL: string = 'student/';


  constructor(
    private configurationService  : ConfigurationService,
    private networkService        : NetworkServiceService,
    private spinnerService        : SpinnerService,
  ) {}

  studentRegistrationsGet(studentId : number): Promise<Registration[]>{
    return new Promise((resolve, reject) => {
      this.networkService.get(this.MODULE_GET_URL + "studentRegistrationsGet/" + studentId , true).then((response: any) => {
          resolve(response);
      }, error => {
          reject(error);
      }
      );
    });
  }

  promotionCourseGet(promotionId : number): Promise<PromotionCourse[]>{
    return new Promise((resolve, reject) => {
      this.networkService.get(this.MODULE_GET_URL + "promotionCourseGet/" + promotionId , true).then((response: any) => {
          resolve(response);
      }, error => {
          reject(error);
      }
      );
    });
  }


}
