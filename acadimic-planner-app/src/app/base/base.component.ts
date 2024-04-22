import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContactMeComponent } from '../home/contact-me/contact-me.component';
import { UtilsService } from '../services/utils.service';
import { GlobalConfig } from '../entities/GlobalConfig';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit {

  pages: any[];
  global: GlobalConfig;
  @Input() title: string;
  @Input() introduction: string;

  currentYear: number = new Date().getFullYear();

  constructor(
    private modalCtrl: ModalController,
    private utilsService: UtilsService
  ) { }

  async ngOnInit() {   
    this.pages  = this.utilsService.pagesConfigGet();
    this.global = this.utilsService.globalGet();
  }

  async openContactMeModal() {
    const modal = await this.modalCtrl.create({
      component: ContactMeComponent,
      cssClass: 'fullscreen'
    });
    modal.present();
    await modal.onWillDismiss();
  }
}
