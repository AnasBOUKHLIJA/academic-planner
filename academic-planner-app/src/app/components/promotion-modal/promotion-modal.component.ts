import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AcademicProgram } from 'src/app/models/AcademicProgram';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { KernelServiceService } from 'src/app/services/kernel-service.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { Promotion } from 'src/app/models/Promotion';
import { Semester } from 'src/app/models/Semester';
import { PromotionCourse } from 'src/app/models/PromotionCourse';
import { Course } from 'src/app/models/Course';

@Component({
  selector: 'app-promotion-modal',
  templateUrl: './promotion-modal.component.html',
  styleUrls: ['./promotion-modal.component.scss'],
})
export class PromotionModalComponent  implements OnInit  {

  @Input() promotion        : Promotion;
  @Input() academicProgram  : AcademicProgram;
  semesters                 : Semester[];
  promotionForm             : FormGroup;
  actualSemester            : Semester;
  promotionCourses          : PromotionCourse[];
  actualPromotionCourses    : PromotionCourse[];
  courses                   : Course[];


  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private kernelService: KernelServiceService,
    private spinnerService: SpinnerService,
    private adminServiceService: AdminServiceService
  ) { }
  
  async ngOnInit() {
    this.promotionForm = this.formBuilder.group({
      id: [this.promotion ? this.promotion.id : '' ],
      startYear: [this.promotion ? new Date(this.promotion.startYear) : new Date() , [Validators.required]],
      endYear: [this.promotion ? new Date(this.promotion.endYear) : new Date() , [Validators.required]],
      actualSemester:  [this.promotion ? this.promotion.actualSemester: '' , [Validators.required]],
      academicProgram: [this.promotion ? this.promotion.academicProgram : '' , [Validators.required]],
      promotionCourses: [this.promotion ? this.promotion.promotionCourses : '' , [Validators.required]],
    });

    if (! this.promotion) this.promotionForm.patchValue({ academicProgram: this.academicProgram });
    this.semesters = await this.kernelService.semestersGet();
    this.courses   = await this.kernelService.coursesByAcademicProgramCodeGet(this.academicProgram.code);

    this.promotionCourses = []; 
    this.courses.forEach(course => {
        const promotionCourse = new PromotionCourse();
        promotionCourse.course = course;
        this.promotionCourses.push(promotionCourse);
    });
    
    if (this.promotion) {
      this.actualSemester = this.semesters[this.semesters.findIndex(e => e.id === this.promotion.actualSemester.id)];
      const promotionCourseIds = this.promotion.promotionCourses.map(pc => pc.course.id);
      this.actualPromotionCourses = this.promotionCourses.filter(pc => 
          promotionCourseIds.includes(pc.course.id)
      );
  }
  
  }

  async submitForm() {
    if (this.promotionForm.valid) {
      const promotion = await this.adminServiceService.savePromotion(this.promotionForm.value);
      this.promotionForm.reset();
      this.modalCtrl.dismiss({ promotion : promotion, role : 'save'});
    } else {
      this.spinnerService.presentAlert('error','Form is not valid')
    }
  }

  closeModal() {
    this.modalCtrl.dismiss({ role : 'nothing'});
  }

  async delete() {
    await this.adminServiceService.deletePromotion(this.promotion.id);
    this.promotionForm.reset();
    this.modalCtrl.dismiss({ promotion : this.promotion, role : 'delete'});
  }
}
