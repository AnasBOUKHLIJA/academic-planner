import { Injectable } from '@angular/core';
import { Student } from '../models/Student';
import { ConfigurationService } from './configuration.service';
import { NetworkServiceService } from './network-service.service';
import { SpinnerService } from './spinner.service';
import { Teacher } from '../models/Teacher';
import { Admin } from '../models/Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private readonly MODULE_GET_URL: string = 'admin/';

  constructor(
    private configurationService  : ConfigurationService,
    private networkService        : NetworkServiceService,
    private spinnerService        : SpinnerService,
  ) {}

  createStudent(student: Student) : Promise<Student[]>{
    return new Promise((resolve, reject) => {
        student.citizenship.cities = [];
        this.networkService.post(this.MODULE_GET_URL + "studentSave", student, true).then((response: any) => {
            resolve(response);
        }, error => {
            reject(error);
        }
        );
    });
  }

  createTeacher(teacher: Teacher) : Promise<Teacher[]>{
    return new Promise((resolve, reject) => {
        teacher.citizenship.cities = [];
        this.networkService.post(this.MODULE_GET_URL + "teacherSave", teacher, true).then((response: any) => {
            resolve(response);
        }, error => {
            reject(error);
        }
        );
    });
  }

  createAdmin(admin: Admin) : Promise<Admin[]>{
    return new Promise((resolve, reject) => {
        admin.citizenship.cities = [];
        this.networkService.post(this.MODULE_GET_URL + "adminSave", admin, true).then((response: any) => {
            resolve(response);
        }, error => {
            reject(error);
        }
        );
    });
  }

}
