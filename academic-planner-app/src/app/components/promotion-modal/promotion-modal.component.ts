import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AcademicProgram } from 'src/app/models/AcademicProgram';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { KernelServiceService } from 'src/app/services/kernel-service.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { Promotion } from 'src/app/models/Promotion';
import { Semester } from 'src/app/models/Semester';

@Component({
  selector: 'app-promotion-modal',
  templateUrl: './promotion-modal.component.html',
  styleUrls: ['./promotion-modal.component.scss'],
})
export class PromotionModalComponent  implements OnInit {

  @Input() promotion        : Promotion;
  @Input() academicProgram  : AcademicProgram;
  semesters                 : Semester[];
  promotionForm             : FormGroup;
  

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private kernelServiceService: KernelServiceService,
    private spinnerService: SpinnerService,
    private adminServiceService: AdminServiceService
  ) { }
  
  async ngOnInit() {
    this.promotionForm = this.formBuilder.group({
      id: [this.promotion ? this.promotion.id : '' ],
      startYear: [this.promotion ? this.promotion.startYear : '' , [Validators.required]],
      endYear: [this.promotion ? this.promotion.endYear : '' , [Validators.required]],
      actualSemester: [this.promotion ? this.promotion.actualSemester : '' , [Validators.required]],
      academicProgram: [this.promotion ? this.promotion.academicProgram : '' , [Validators.required]],
    });

    if (! this.promotion) this.promotionForm.patchValue({ academicProgram: this.academicProgram });

    this.semesters = await this.kernelServiceService.semestersGet();
  }

  async submitForm() {
    console.log(this.promotionForm.value);
    if (this.promotionForm.valid) {
      const promotion = await this.adminServiceService.savePromotion(this.promotionForm.value);
      this.promotionForm.reset();
      this.modalCtrl.dismiss({ promotion : promotion});
    } else {
      this.spinnerService.presentAlert('error','Form is not valid')
    }
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
