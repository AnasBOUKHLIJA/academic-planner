import { Component, OnInit } from '@angular/core';
import { Establishment } from '../models/Establishment';
import { Department } from '../models/Department';
import { AcademicProgram } from '../models/AcademicProgram';
import { Promotion } from '../models/Promotion';
import { KernelServiceService } from '../services/kernel-service.service';
import { UtilsService } from '../services/utils.service';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../services/admin-service.service';
import { ClassRoom } from '../models/ClassRoom';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Schedule } from '../models/Schedule';
import { ScheduleRequest } from '../models/ScheduleRequest';
import { SecurityServiceService } from '../services/security-service.service';
import { SecurityDTO } from '../models/msg/SecurityDTO';
import { TeacherService } from '../services/teacher.service';
import { StudentService } from '../services/student.service';
import { Registration } from '../models/Registration';
import { RegistrationWithSchedules } from '../models/RegistrationWithSchedules';

@Component({
  selector: 'app-schedules-management',
  templateUrl: './schedules-management.component.html',
  styleUrls: ['./schedules-management.component.scss'],
})
export class SchedulesManagementComponent implements OnInit {

  establishments: Establishment[];
  departments: Department[];
  academicPrograms: AcademicProgram[];
  promotions: Promotion[];
  selectedEstablishment: Establishment;
  selectedDepartment: Department;
  selectedAcademicProgram: AcademicProgram;
  selectedPromotion: Promotion;
  selectedSchedule: Schedule;
  classRooms: ClassRoom[];;
  scheduleForm: FormGroup;
  scheduleData: Schedule[] = [];
  securityDTO: SecurityDTO;
  registrations                 : Registration[];
  registrationWithSchedules       : RegistrationWithSchedules[];

  hours: string[];
  days: string[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  schedule: { [key: string]: any[] } = {};

  constructor(
    private kernelService: KernelServiceService,
    private adminService: AdminServiceService,
    private utilsService: UtilsService,
    private studentService: StudentService,
    private teacherService: TeacherService,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private securityService: SecurityServiceService,

  ) { }

  async ngOnInit() {
    this.securityDTO = this.securityService.getSecurityInfo();

    this.scheduleForm = this.formBuilder.group({
      id: [this.selectedSchedule ? this.selectedSchedule.id : ''],
      course: [this.selectedSchedule ? this.selectedSchedule.course : ''],
      classRoom: [this.selectedSchedule ? this.selectedSchedule.classRoom : ''],
      dayOfWeek: [this.selectedSchedule ? this.selectedSchedule.dayOfWeek : ''],
      startTime: [this.selectedSchedule ? this.selectedSchedule.startTime : ''],
      endTime: [this.selectedSchedule ? this.selectedSchedule.endTime : ''],
    });

    this.hours = this.getHours();
    this.days.forEach(day => {
      this.schedule[day] = this.getScheduleForDay(day);
    });
    this.establishments = await this.kernelService.establishmentsGet();

    if (this.securityDTO.profile.code === 'teacher') {

      this.scheduleData = await this.teacherService.teacherScheduleGet(this.securityDTO.id);
      this.days.forEach(day => {
        this.schedule[day] = this.getScheduleForDay(day);
      });
    } else if(this.securityDTO.profile.code === 'student') {
      await this.fetchRegistrationsWithCourses();
    }
  }

  getHours(): string[] {
    const hours = [];
    for (let i = 8; i <= 18; i++) {
      hours.push(i.toString().padStart(2, '0') + ':00');
    }
    return hours;
  }

  getScheduleForDay(day: string): any[] {
    return this.scheduleData.filter(entry => entry.dayOfWeek.toLowerCase() === day.toLowerCase());
  }

  getScheduleForDay2(scheduleData: Schedule[], day: string): any[] {
    return scheduleData.filter(entry => entry.dayOfWeek.toLowerCase() === day.toLowerCase());
  }

  isCourseScheduled(day: string, hour: string): boolean {
    return this.schedule[day.toLowerCase()]?.some(entry => entry.startTime === hour);
  }

  isCourseScheduled2(schedule: any, day: string, hour: string): boolean {
    return schedule[day.toLowerCase()]?.some((entry : any) => entry.startTime === hour);
  }

  getCourse(day: string, hour: string): string {
    const entry = this.schedule[day.toLowerCase()]?.find(entry => entry.startTime === hour);
    if (entry) {
      const classRoomCode = entry.classRoom.code;
      const courseTitle = entry.course.code;
      return `${courseTitle} <=> ${classRoomCode}`;
    }
    return '';
  }

  getCourse2(schedule: any,day: string, hour: string): string {
    const entry = schedule[day.toLowerCase()]?.find((entry : any) => entry.startTime === hour);
    if (entry) {
      const classRoomCode = entry.classRoom.code;
      const courseTitle = entry.course.code;
      return `${courseTitle} <=> ${classRoomCode}`;
    }
    return '';
  }

  getCourseForTeacher(day: string, hour: string): string {
    const entry = this.schedule[day.toLowerCase()]?.find(entry => entry.startTime === hour);
    if (entry) {
      const classRoomCode = entry.classRoom.code;
      const courseTitle = entry.course.code;
      return `${courseTitle} (${classRoomCode}) <=> ${entry.promotion.academicProgram.code}`;
    }
    return '';
  }

  getColspan(day: string, hour: string): number {
    const entry = this.schedule[day.toLowerCase()]?.find(entry => entry.startTime === hour);
    if (entry) {
      const start = parseInt(entry.startTime.split(':')[0], 10);
      const end = parseInt(entry.endTime.split(':')[0], 10);
      return end - start;
    }
    return 1;
  }

  getColspan2(schedule: any, day: string, hour: string): number {
    const entry = schedule[day.toLowerCase()]?.find((entry : any) => entry.startTime === hour);
    if (entry) {
      const start = parseInt(entry.startTime.split(':')[0], 10);
      const end = parseInt(entry.endTime.split(':')[0], 10);
      return end - start;
    }
    return 1;
  }

  shouldRenderCell(day: string, hour: string): boolean {
    return !this.schedule[day.toLowerCase()]?.some(entry => {
      const start = parseInt(entry.startTime.split(':')[0], 10);
      const end = parseInt(entry.endTime.split(':')[0], 10);
      const current = parseInt(hour.split(':')[0], 10);
      return current > start && current < end;
    });
  }

  shouldRenderCell2(schedule: any, day: string, hour: string): boolean {
    return !schedule[day.toLowerCase()]?.some((entry: any) => {
      const start = parseInt(entry.startTime.split(':')[0], 10);
      const end = parseInt(entry.endTime.split(':')[0], 10);
      const current = parseInt(hour.split(':')[0], 10);
      return current > start && current < end;
    });
  }

  async onEstablishmentChange(event: any) {
    this.selectedEstablishment = event.detail.value;
    this.classRooms = await this.kernelService.classRoomsByEstablishmentCodeGet(this.selectedEstablishment.code);
    this.departments = await this.kernelService.departmentByEstablishmentCodeGet(this.selectedEstablishment.code);
  }

  async onDepartmentChange(event: any) {
    this.selectedDepartment = event.detail.value;
    this.academicPrograms = await this.kernelService.academicProgramsByDepartmentCodeGet(this.selectedDepartment.code);
  }

  async onAcademicProgramChange(event: any) {
    this.selectedAcademicProgram = event.detail.value;
    this.promotions = await this.kernelService.promotionsByAcademicProgramCodeGet(this.selectedAcademicProgram.code);
  }

  async onPromotionChange(event: any) {
    this.selectedPromotion = event.detail.value;
    this.scheduleData = await this.kernelService.getSchedules(this.selectedPromotion.id);
    this.days.forEach(day => {
      this.schedule[day] = this.getScheduleForDay(day);
    });
  }


  async submitForm() {
    const newSchedule = this.scheduleForm.value;

    // Convert times to numbers for easier comparison
    const newStartTime = parseInt(newSchedule.startTime.replace(':', ''), 10);
    const newEndTime = parseInt(newSchedule.endTime.replace(':', ''), 10);

    // Remove existing schedules that overlap with the new schedule
    this.scheduleData = this.scheduleData.filter(schedule => {
      if (schedule.dayOfWeek.toLowerCase() === newSchedule.dayOfWeek.toLowerCase()) {
        const existingStartTime = parseInt(schedule.startTime.replace(':', ''), 10);
        const existingEndTime = parseInt(schedule.endTime.replace(':', ''), 10);

        // Check if there is any overlap
        if ((newStartTime < existingEndTime && newEndTime > existingStartTime)) {
          return false; // Remove the overlapping schedule
        }
      }
      return true; // Keep non-overlapping schedules
    });

    // Add the new schedule
    this.scheduleData.push(newSchedule);

    // Update the schedule display
    this.schedule[newSchedule.dayOfWeek.toLowerCase()] = this.getScheduleForDay(newSchedule.dayOfWeek.toLowerCase());
  }


  deleteSchedule(day: string, hour: string) {
    this.scheduleData = this.scheduleData.filter(schedule =>
      !(schedule.dayOfWeek.toLowerCase() === day.toLowerCase() && schedule.startTime === hour)
    );
    this.schedule[day.toLowerCase()] = this.getScheduleForDay(day.toLowerCase());
  }

  async saveSchedule() {
    const scheduleRequest = new ScheduleRequest();
    scheduleRequest.promotion = this.selectedPromotion;
    scheduleRequest.schedules = this.scheduleData;
    this.scheduleData = await this.adminService.saveSchedules(scheduleRequest);
    this.days.forEach(day => {
      this.schedule[day] = this.getScheduleForDay(day);
    });
  }

  async fetchRegistrationsWithCourses() {
    try {
      // Fetch all registrations
      this.registrations = await this.studentService.studentRegistrationsGet(this.securityDTO.id);

      if (this.registrations) {
        // Use Promise.all to fetch promotion courses for each registration concurrently
        const registrationWithCoursesPromises = this.registrations.map(async (registration) => {
          const schedules = await this.kernelService.getSchedules(registration.promotion.id);
          this.days.forEach(day => {
            this.schedule[day] = this.getScheduleForDay2(schedules, day);
          });
          const schedule = this.schedule;
          return {
            registration,
            schedules,
            schedule,
          };
        });

        this.registrationWithSchedules = await Promise.all(registrationWithCoursesPromises);

        // Now the registrationWithCourses list contains the combined data
        console.log(this.registrationWithSchedules);
      }
    } catch (error) {
      console.error('Error fetching registrations or promotion courses', error);
    }
  }
}
