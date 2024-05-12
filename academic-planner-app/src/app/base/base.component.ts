import { Component, Input, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { UtilsService } from '../services/utils.service';
import { GlobalConfig } from '../models/GlobalConfig';
import { University } from '../models/University';
import { KernelServiceService } from '../services/kernel-service.service';
import { UserPopoverComponent } from './user-popover/user-popover.component';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit {

  pages: any[];
  global: GlobalConfig;
  university : University;
  @Input() title: string;
  @Input() introduction: string;


  currentYear: number = new Date().getFullYear();

  constructor(
    private kernelService: KernelServiceService,
    private modalCtrl: ModalController,
    private utilsService: UtilsService,
    private popoverController: PopoverController,
  ) { }

  async ngOnInit() {
    this.pages  = this.utilsService.pagesConfigGet();
    this.global = this.utilsService.globalGet();
    this.university = await this.kernelService.universityGet();
  }

  async openContactMeModal() {
    
  }


  async presentPopover(e: Event) {
    const popover = await this.popoverController.create({
      component: UserPopoverComponent,
      event: e,
    });

    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log(`Popover dismissed with role: ${role}`);
  }
}

