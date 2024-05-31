import { Injectable } from '@angular/core';
import { Student } from '../models/Student';
import { ConfigurationService } from './configuration.service';
import { NetworkServiceService } from './network-service.service';
import { SpinnerService } from './spinner.service';
import { Teacher } from '../models/Teacher';
import { Admin } from '../models/Admin';
import { Establishment } from '../models/Establishment';
import { KernelServiceService } from './kernel-service.service';
import { Filter } from '../models/Filter';
import { filter } from 'rxjs/operators';
import { PersonsResponse } from '../models/msg/PersonsResponse';
import { TeachersResponse } from '../models/msg/TeachersResponse';
import { StudentsResponse } from '../models/msg/StudentsResponse';
import { University } from '../models/University';
import { Department } from '../models/Department';
import { AcademicProgram } from '../models/AcademicProgram';
import { Course } from '../models/Course';
import { ClassRoom } from '../models/ClassRoom';
import { Promotion } from '../models/Promotion';
import { Registration } from '../models/Registration';
import { RegistrationRequest } from '../models/RegistrationRequest';
import { ScheduleRequest } from '../models/ScheduleRequest';
import { Schedule } from '../models/Schedule';

@Injectable({
    providedIn: 'root'
})
export class AdminServiceService {

    private readonly MODULE_GET_URL: string = 'admin/';

    constructor(
        private configurationService: ConfigurationService,
        private networkService: NetworkServiceService,
        private spinnerService: SpinnerService,
        private kernelServiceService: KernelServiceService
    ) { }

    createStudent(student: Student): Promise<Student> {
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


    getStudents(filter: Filter): Promise<StudentsResponse> {
        return new Promise((resolve, reject) => {
            this.networkService.post(this.MODULE_GET_URL + "studentsGet", filter, true).then((response: any) => {
                resolve(response);
            }, error => {
                reject(error);
            }
            );
        });
    }

    createTeacher(teacher: Teacher): Promise<Teacher> {
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

    getTeachers(filter: Filter): Promise<TeachersResponse> {
        return new Promise((resolve, reject) => {
            this.networkService.post(this.MODULE_GET_URL + "teachersGet", filter, true).then((response: any) => {
                resolve(response);
            }, error => {
                reject(error);
            }
            );
        });
    }

    getTeachersDepartment(departmentCode: string): Promise<Teacher[]> {
        return new Promise((resolve, reject) => {
            this.networkService.post(this.MODULE_GET_URL + "teachersDepartmentGet/" + departmentCode, filter, true).then((response: any) => {
                resolve(response);
            }, error => {
                reject(error);
            }
            );
        });
    }

    saveAdmin(admin: Admin): Promise<Admin> {
        return new Promise((resolve, reject) => {
            admin.citizenship.cities = [];
            this.networkService.post(this.MODULE_GET_URL + "personSave", admin, true).then((response: any) => {
                resolve(response);
            }, error => {
                reject(error);
            }
            );
        });
    }

    getAdmins(filter: Filter): Promise<PersonsResponse> {
        return new Promise((resolve, reject) => {
            filter.profileCode = 'admin';
            this.networkService.post(this.MODULE_GET_URL + "personsGet", filter, true).then((response: any) => {
                resolve(response);
            }, error => {
                reject(error);
            }
            );
        });
    }

    saveUniversity(university: University): Promise<University> {
        return new Promise((resolve, reject) => {
            this.networkService.post(this.MODULE_GET_URL + "universitySave", university, true).then((response: any) => {
                resolve(response);
            }, error => {
                reject(error);
            }
            );
        });
    }

    saveEstablishment(establishment: Establishment): Promise<Establishment> {
        return new Promise(async (resolve, reject) => {
            establishment.rank = 1;
            this.networkService.post(this.MODULE_GET_URL + "establishmentSave", establishment, true).then((response: any) => {
                resolve(response);
            }, error => {
                reject(error);
            }
            );
        });
    }

    saveDepartment(department: Department): Promise<Department> {
        return new Promise(async (resolve, reject) => {
            department.rank = 1;
            this.networkService.post(this.MODULE_GET_URL + "departmentSave", department, true).then((response: any) => {
                resolve(response);
            }, error => {
                reject(error);
            }
            );
        });
    }

    saveAcademicProgram(academicProgram: AcademicProgram): Promise<AcademicProgram> {
        return new Promise(async (resolve, reject) => {
            this.networkService.post(this.MODULE_GET_URL + "academicProgramSave", academicProgram, true).then((response: any) => {
                resolve(response);
            }, error => {
                reject(error);
            }
            );
        });
    }

    saveCourse(course: Course): Promise<Course> {
        return new Promise(async (resolve, reject) => {
            this.networkService.post(this.MODULE_GET_URL + "courseSave", course, true).then((response: any) => {
                resolve(response);
            }, error => {
                reject(error);
            }
            );
        });
    }

    saveClassRoom(classRoom: ClassRoom): Promise<ClassRoom> {
        return new Promise(async (resolve, reject) => {
            this.networkService.post(this.MODULE_GET_URL + "classRoomSave", classRoom, true).then((response: any) => {
                resolve(response);
            }, error => {
                reject(error);
            }
            );
        });
    }

    deleteClassRoom(id: number): Promise<any> {
        return new Promise(async (resolve, reject) => {
            this.networkService.delete(this.MODULE_GET_URL + "classRoomDelete/" + id, true).then((response: any) => {
                resolve(response);
            }, error => {
                reject(error);
            }
            );
        });
    }

    savePromotion(promotion: Promotion): Promise<Promotion> {
        return new Promise(async (resolve, reject) => {
            this.networkService.post(this.MODULE_GET_URL + "promotionSave", promotion, true).then((response: any) => {
                resolve(response);
            }, error => {
                reject(error);
            }
            );
        });
    }












    deleteStudent(id: number): Promise<any> {
        return new Promise((resolve, reject) => {
            this.networkService.delete(this.MODULE_GET_URL + "studentDelete/" + id, true).then((response: any) => {
                resolve(response);
            }, error => {
                reject(error);
            }
            );
        });
    }

    deleteAdmin(id: number): Promise<any> {
        return new Promise((resolve, reject) => {
            this.networkService.delete(this.MODULE_GET_URL + "adminDelete/" + id, true).then((response: any) => {
                resolve(response);
            }, error => {
                reject(error);
            }
            );
        });
    }

    deleteTeacher(id: number): Promise<any> {
        return new Promise((resolve, reject) => {
            this.networkService.delete(this.MODULE_GET_URL + "teacherDelete/" + id, true).then((response: any) => {
                resolve(response);
            }, error => {
                reject(error);
            }
            );
        });
    }

    deleteEstablishment(id: number): Promise<any> {
        return new Promise((resolve, reject) => {
            this.networkService.delete(this.MODULE_GET_URL + "establishmentDelete/" + id, true).then((response: any) => {
                resolve(response);
            }, error => {
                reject(error);
            }
            );
        });
    }

    deleteDepartment(id: number): Promise<any> {
        return new Promise((resolve, reject) => {
            this.networkService.delete(this.MODULE_GET_URL + "departmentDelete/" + id, true).then((response: any) => {
                resolve(response);
            }, error => {
                reject(error);
            }
            );
        });
    }

    deleteAcademicProgram(id: number): Promise<any> {
        return new Promise((resolve, reject) => {
            this.networkService.delete(this.MODULE_GET_URL + "academicProgramDelete/" + id, true).then((response: any) => {
                resolve(response);
            }, error => {
                reject(error);
            }
            );
        });
    }

    deletePromotion(id: number): Promise<any> {
        return new Promise((resolve, reject) => {
            this.networkService.delete(this.MODULE_GET_URL + "promotionDelete/" + id, true).then((response: any) => {
                resolve(response);
            }, error => {
                reject(error);
            }
            );
        });
    }

    deleteCourse(id: number): Promise<any> {
        return new Promise((resolve, reject) => {
            this.networkService.delete(this.MODULE_GET_URL + "courseDelete/" + id, true).then((response: any) => {
                resolve(response);
            }, error => {
                reject(error);
            }
            );
        });
    }

    saveRegistrations(registrationRequest: RegistrationRequest): Promise<Registration[]> {
        return new Promise((resolve, reject) => {
            this.networkService.post(this.MODULE_GET_URL + "registrationsSave", registrationRequest, true).then((response: any) => {
                resolve(response);
            }, error => {
                reject(error);
            }
            );
        });
    }


    getRegistrations(promotionId: number): Promise<Registration[]> {
        return new Promise((resolve, reject) => {
            this.networkService.get(this.MODULE_GET_URL + "registrationsGet/" + promotionId, true).then((response: any) => {
                resolve(response);
            }, error => {
                reject(error);
            }
            );
        });
    }

    saveSchedules(scheduleRequest: ScheduleRequest): Promise<Schedule[]> {
        return new Promise((resolve, reject) => {
            this.networkService.post(this.MODULE_GET_URL + "schedulesSave", scheduleRequest, true).then((response: any) => {
                resolve(response);
            }, error => {
                reject(error);
            }
            );
        });
    }
}
