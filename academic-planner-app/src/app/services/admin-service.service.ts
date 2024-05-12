import { Injectable } from '@angular/core';
import { Student } from '../models/Student';
import { ConfigurationService } from './configuration.service';
import { NetworkServiceService } from './network-service.service';
import { SpinnerService } from './spinner.service';
import { Teacher } from '../models/Teacher';
import { Admin } from '../models/Admin';
import { Establishment } from '../models/Establishment';
import { KernelServiceService } from './kernel-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private readonly MODULE_GET_URL: string = 'admin/';

  constructor(
    private configurationService  : ConfigurationService,
    private networkService        : NetworkServiceService,
    private spinnerService        : SpinnerService,
    private kernelServiceService : KernelServiceService
  ) {}

  createStudent(student: Student) : Promise<Student>{
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

  getAllStudents() : Promise<Student[]>{
    return new Promise((resolve, reject) => {
        this.networkService.get(this.MODULE_GET_URL + "studentsGet", true).then((response: any) => {
            resolve(response);
        }, error => {
            reject(error);
        }
        );
    });
  }

  createTeacher(teacher: Teacher) : Promise<Teacher>{
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

  getAllTeachers() : Promise<Teacher[]>{
    return new Promise((resolve, reject) => {
        this.networkService.get(this.MODULE_GET_URL + "teachersGet", true).then((response: any) => {
            resolve(response);
        }, error => {
            reject(error);
        }
        );
    });
  }

  createAdmin(admin: Admin) : Promise<Admin>{
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

  getAllAdmins() : Promise<Admin[]>{
    return new Promise((resolve, reject) => {
        this.networkService.get(this.MODULE_GET_URL + "personsGet/adm", true).then((response: any) => {
            resolve(response);
        }, error => {
            reject(error);
        }
        );
    });
  }
  createEstablishment(establishment: Establishment) : Promise<Establishment>{
    return new Promise( async (resolve, reject) => {
      establishment.rank = 1; //a changer aprés
      establishment.university = await this.kernelServiceService.universityGet();//a changer aprés
      this.networkService.post(this.MODULE_GET_URL + "establishmentSave", establishment, true).then((response: any) => {
            resolve(response);
        }, error => {
            reject(error);
        }
        );
    });
  }

}
