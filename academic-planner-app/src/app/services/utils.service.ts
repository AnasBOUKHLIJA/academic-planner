import { Injectable } from '@angular/core';
import { NetworkServiceService } from './network-service.service';
import { ConfigurationService } from './configuration.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { GlobalConfig } from '../models/GlobalConfig';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  global: GlobalConfig;
  public pages = {

    admin: [
      { code: 'dashboard',  url: '/', icon: 'home' },
      { code: 'university', url: '/university-management', icon: 'business' },
      { code: 'users',      url: '/users-management', icon: 'people' },
      { code: 'schedules',  url: '/schedules-management', icon: 'time' },
      { code: 'absences',   url: '/absences-management', icon: 'calendar' },
    ],
    teacher: [
      { code: 'dashboard',  url: '/dashboard', icon: 'home' },
      { code: 'course',     url: '/courses', icon: 'book' },
      { code: 'absence',    url: '/absences', icon: 'calendar' },
      { code: 'grade',      url: '/grades', icon: 'school' },
      { code: 'student',    url: '/students', icon: 'people' },
    ],
    student: [
      { code: 'dashboard',  url: '/dashboard', icon: 'home' },
      { code: 'course',     url: '/courses', icon: 'book' },
      { code: 'absence',    url: '/absences', icon: 'calendar' },
      { code: 'grade',      url: '/grades', icon: 'school' },
      { code: 'student',    url: '/students', icon: 'people' },
    ]

  };

  constructor(
    private networkService: NetworkServiceService,
    private configuration: ConfigurationService,
    private clipboard: Clipboard,
    private modalCtrl: ModalController,
    private translate: TranslateService
  ) { }

  imageGet(path: string, toBeLoaded: boolean): Promise<string> {
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
    return this.pages.admin;
  }

  copyToClipBoard(text: string, needApplicationUrl: boolean) {
    if (needApplicationUrl && this.configuration.configuration.applicationUrl) {
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
    if (this.global) return this.global;

    this.global = new GlobalConfig();
    return this.global;
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  setDefaultLanguage() {
    this.switchLanguage(this.configuration.configuration.defaultLanguage);
  }

  getDefaultLanguage() {
    return this.configuration.configuration.defaultLanguage;
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }
}
