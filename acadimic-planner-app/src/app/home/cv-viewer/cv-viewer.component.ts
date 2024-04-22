import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { ModalController } from '@ionic/angular';
import { ContactMeComponent } from '../contact-me/contact-me.component';

@Component({
  selector: 'app-cv-viewer',
  templateUrl: './cv-viewer.component.html',
  styleUrls: ['./cv-viewer.component.scss'],
})
export class CvViewerComponent implements OnInit{

  cvUrl: string = 'https://drive.google.com/file/d/1CoHXJysQVEylFkDFVHw5j_Hqmj3tNbCX/view?usp=sharing'
  cvUrlSafe?: SafeResourceUrl;

  constructor(
    private modalCtrl: ModalController,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.cvUrlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.cvUrl);
  }
  
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
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
