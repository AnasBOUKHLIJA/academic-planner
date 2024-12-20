import { Injectable } from '@angular/core';
import { NetworkServiceService } from './network-service.service';
import { SpinnerService } from './spinner.service';
import { ConfigurationService } from './configuration.service';
import { Country } from '../models/Country';
import { Profile } from '../models/Profile';
import { LegalIdType } from '../models/LegalIdType';
import { University } from '../models/University';
import { Establishment } from '../models/Establishment';
import { Department } from '../models/Department';
import { AcademicProgram } from '../models/AcademicProgram';
import { Degree } from '../models/Degree';
import { Course } from '../models/Course';
import { Semester } from '../models/Semester';
import { ClassRoom } from '../models/ClassRoom';
import { Person } from '../models/Person';
import { Promotion } from '../models/Promotion';
import { Registration } from '../models/Registration';
import { Schedule } from '../models/Schedule';
import { Teacher } from '../models/Teacher';
import { Student } from '../models/Student';
import { PromotionCourse } from '../models/PromotionCourse';

@Injectable({
  providedIn: 'root'
})
export class KernelServiceService {

  private readonly MODULE_GET_URL: string = 'kernel/';

  countries         : Country[];
  university        : University;
  legalIdTypes      : LegalIdType[];
  profiles          : Profile[];
  establishments    : Establishment[];
  degrees           : Degree[];
  semesters         : Semester[];

  constructor(
    private configurationService  : ConfigurationService,
    private networkService        : NetworkServiceService,
    private spinnerService        : SpinnerService,
  ) {}

  countriesGet() : Promise<Country[]>{
    return new Promise((resolve, reject) => {
      // Base on previous BE response
      if(this.countries && this.countries.length !== 0){
        resolve(this.countries);
        return;
      }

      this.networkService.get(this.MODULE_GET_URL + "countriesGet", false).then((response: any) => {
          this.countries = response;
          resolve(response);
      }, error => {
          reject(error);
      }
      );
    });
  }

  countryGet() : Promise<Country>{
    return new Promise((resolve, reject) => {
        this.networkService.get(this.MODULE_GET_URL + "countryGet/" + this.configurationService.configuration.countryCode , false).then((response: any) => {
            resolve(response);
        }, error => {
            reject(error);
        }
        );
    });
  }

  universityGet(): Promise<University>{
    return new Promise((resolve, reject) => {
      // Base on previous BE response
      if(this.university){
        resolve(this.university);
        return;
      }
      this.networkService.get(this.MODULE_GET_URL + "universityGet/" + this.configurationService.configuration.universityCode , false).then((response: any) => {
        this.university = response;
          resolve(response);
      }, error => {
          reject(error);
      }
      );
    });
  }

  establishmentByCodeGet(code : string): Promise<Establishment>{
    return new Promise((resolve, reject) => {
      this.networkService.get(this.MODULE_GET_URL + "establishmentByCodeGet/" + code , true).then((response: any) => {
          resolve(response);
      }, error => {
          reject(error);
      }
      );
    });
  }

  establishmentsGet(reload : boolean = false): Promise<Establishment[]>{
    return new Promise((resolve, reject) => {
      // Base on previous BE response
      if(!reload && this.establishments){
        resolve(this.establishments);
        return;
      }
      this.networkService.get(this.MODULE_GET_URL + "establishmentsGet" , true).then((response: any) => {
        this.establishments = response;
          resolve(response);
      }, error => {
          reject(error);
      }
      );
    });
  }

  legalIdTypesGet(): Promise<LegalIdType[]>{
    return new Promise((resolve, reject) => {
      // Base on previous BE response
      if(this.legalIdTypes && this.legalIdTypes.length !== 0){
        resolve(this.legalIdTypes);
        return;
      }
        this.networkService.get(this.MODULE_GET_URL + "legalIdTypesGet" , false).then((response: any) => {
            this.legalIdTypes = response;
            resolve(response);
        }, error => {
            reject(error);
        }
        );
    });
  }

  degreesGet(): Promise<Degree[]>{
    return new Promise((resolve, reject) => {
      // Base on previous BE response
      if(this.degrees && this.degrees.length !== 0){
        resolve(this.degrees);
        return;
      }
        this.networkService.get(this.MODULE_GET_URL + "degreesGet" , false).then((response: any) => {
            this.degrees = response;
            resolve(response);
        }, error => {
            reject(error);
        }
        );
    });
  }

  semestersGet(): Promise<Semester[]>{
    return new Promise((resolve, reject) => {
      // Base on previous BE response
      if(this.semesters && this.semesters.length !== 0){
        resolve(this.semesters);
        return;
      }
        this.networkService.get(this.MODULE_GET_URL + "semestersGet" , false).then((response: any) => {
            this.degrees = response;
            resolve(response);
        }, error => {
            reject(error);
        }
        );
    });
  }

  profilesGet(): Promise<Profile[]>{
    return new Promise((resolve, reject) => {
      // Base on previous BE response
      if(this.profiles && this.profiles.length !== 0){
        resolve(this.profiles);
        return;
      }
        this.networkService.get(this.MODULE_GET_URL + "profilesGet" , false).then((response: any) => {
            this.profiles = response;
            resolve(response);
        }, error => {
            reject(error);
        }
        );
    });
  }

  departmentByCodeGet(code : string): Promise<Department>{
    return new Promise((resolve, reject) => {
      this.networkService.get(this.MODULE_GET_URL + "departmentByCodeGet/" + code , true).then((response: any) => {
          resolve(response);
      }, error => {
          reject(error);
      }
      );
    });
  }

  departmentByEstablishmentCodeGet(establishmentCode : string): Promise<Department[]>{
    return new Promise((resolve, reject) => {
      this.networkService.get(this.MODULE_GET_URL + "departmentsGet/" + establishmentCode , true).then((response: any) => {
          resolve(response);
      }, error => {
          reject(error);
      }
      );
    });
  }

  academicProgramsByDepartmentCodeGet(departmentCode : string): Promise<AcademicProgram[]>{
    return new Promise((resolve, reject) => {
      this.networkService.get(this.MODULE_GET_URL + "academicProgramsGet/" + departmentCode , true).then((response: any) => {
          resolve(response);
      }, error => {
          reject(error);
      }
      );
    });
  }

  academicProgramByCodeGet(code : string): Promise<AcademicProgram>{
    return new Promise((resolve, reject) => {
      this.networkService.get(this.MODULE_GET_URL + "academicProgramByCodeGet/" + code , true).then((response: any) => {
          resolve(response);
      }, error => {
          reject(error);
      }
      );
    });
  }

  academicProgramGet(id : number): Promise<AcademicProgram>{
    return new Promise((resolve, reject) => {
      this.networkService.get(this.MODULE_GET_URL + "academicProgramGet/" + id , true).then((response: any) => {
          resolve(response);
      }, error => {
          reject(error);
      }
      );
    });
  }

  coursesByAcademicProgramCodeGet(academicProgramCode : string): Promise<Course[]>{
    return new Promise((resolve, reject) => {
      this.networkService.get(this.MODULE_GET_URL + "coursesGet/" + academicProgramCode , true).then((response: any) => {
          resolve(response);
      }, error => {
          reject(error);
      }
      );
    });
  }

  promotionsByAcademicProgramCodeGet(academicProgramCode : string): Promise<Promotion[]>{
    return new Promise((resolve, reject) => {
      this.networkService.get(this.MODULE_GET_URL + "promotionsGet/" + academicProgramCode , true).then((response: any) => {
          resolve(response);
      }, error => {
          reject(error);
      }
      );
    });
  }

  courseByCodeGet(code : string): Promise<Course>{
    return new Promise((resolve, reject) => {
      this.networkService.get(this.MODULE_GET_URL + "courseByCodeGet/" + code , true).then((response: any) => {
          resolve(response);
      }, error => {
          reject(error);
      }
      );
    });
  }

  classRoomsByEstablishmentCodeGet(establishmentCode : string): Promise<ClassRoom[]>{
    return new Promise((resolve, reject) => {
      this.networkService.get(this.MODULE_GET_URL + "classRoomsGet/" + establishmentCode , true).then((response: any) => {
          resolve(response);
      }, error => {
          reject(error);
      }
      );
    });
  }


  personByUsernameGet(username : string): Promise<Person>{
    return new Promise((resolve, reject) => {
      this.networkService.get(this.MODULE_GET_URL + "personByUsernameGet/" + username , true).then((response: any) => {
          resolve(response);
      }, error => {
          reject(error);
      }
      );
    });
  }

  teacherByUsernameGet(username : string): Promise<Teacher>{
    return new Promise((resolve, reject) => {
      this.networkService.get(this.MODULE_GET_URL + "teacherByUsernameGet/" + username , true).then((response: any) => {
          resolve(response);
      }, error => {
          reject(error);
      }
      );
    });
  }

  studentByUsernameGet(username : string): Promise<Student>{
    return new Promise((resolve, reject) => {
      this.networkService.get(this.MODULE_GET_URL + "studentByUsernameGet/" + username , true).then((response: any) => {
          resolve(response);
      }, error => {
          reject(error);
      }
      );
    });
  }


  getSchedules(promotionId : number): Promise<Schedule[]>{
    return new Promise((resolve, reject) => {
      this.networkService.get(this.MODULE_GET_URL + "schedulesGet/" + promotionId   , true).then((response: any) => {
          resolve(response);
      }, error => {
          reject(error);
      }
      );
    });
  }


}
