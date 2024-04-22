import { Injectable } from '@angular/core';
import { NetworkServiceService } from './network-service.service';
import { ConfigurationService } from './configuration.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { GlobalConfig } from '../models/GlobalConfig';
import { ModalController } from '@ionic/angular';
import { ContactMeComponent } from '../home/contact-me/contact-me.component';
import { CvViewerComponent } from '../home/cv-viewer/cv-viewer.component';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  global: GlobalConfig;
  public pages = [
    { code: 'home', title: 'Home', url: '/', icon: 'home' },
    { code: 'portfolio', title: 'Portfolio', url: '/portfolio', icon: 'briefcase' },
    { code: 'skills', title: 'Skills', url: '/skills', icon: 'construct' },
    { code: 'experiences', title: 'Experiences', url: '/education-work-experience', icon: 'business' },
    { code: 'erticles', title: 'Blogs/Articles', url: '/blogs-articles', icon: 'newspaper' },
  ];

  constructor(
    private networkService: NetworkServiceService,
    private configuration: ConfigurationService,
    private clipboard: Clipboard,
    private modalCtrl: ModalController
  ) { }

  imageGet(path: string, toBeLoaded: boolean) : Promise<string> {
    return new Promise((resolve, reject) => {
      this.networkService.get("blob/image/" + path, toBeLoaded).then((response: any) => {
        resolve(response.strArg1);
      }, error => {
        reject(error);
      });
    });
  }

  imageServeUrlBuild(path: string): string {
    return this.configuration.configuration.serverUrl + path;
  }

  pagesConfigGet() {
    return this.pages;
  }

  copyToClipBoard(text: string, needApplicationUrl: boolean){
      if(needApplicationUrl && this.configuration.configuration.applicationUrl){
          text = this.configuration.configuration.applicationUrl + text;
      }
      console.log(text);
      const done = this.clipboard.copy(text);
      console.log(done);
  }

  applicationUrlGet(): string {
    return this.configuration.configuration.applicationUrl
  }

  globalGet(): GlobalConfig {
    if(this.global) return this.global;

    this.global = new GlobalConfig();
    return this.global;
  }

  
}
