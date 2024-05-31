import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import { NetworkServiceService } from './network-service.service';
import { SpinnerService } from './spinner.service';
import { Course } from '../models/Course';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private readonly MODULE_GET_URL: string = 'teacher/';

  constructor(
    private configurationService  : ConfigurationService,
    private networkService        : NetworkServiceService,
    private spinnerService        : SpinnerService,
  ) {}

  CoursesGet(teacherId : number): Promise<Course[]>{
    return new Promise((resolve, reject) => {
      this.networkService.get(this.MODULE_GET_URL + "CoursesGet/" + teacherId , true).then((response: any) => {
          resolve(response);
      }, error => {
          reject(error);
      }
      );
    });
  }
}
