import { Injectable } from '@angular/core';
import { NetworkServiceService } from './network-service.service';
import { ConfigurationService } from './configuration.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { GlobalConfig } from '../models/GlobalConfig';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  global: GlobalConfig;
  public pages = {
    admin: [
      { code: 'dashboard', title: 'Dashboard', url: '/dashboard', icon: 'home' },
      { code: 'establishment-management', title: 'Establishment Management', url: '/establishment-management', icon: 'business' },
      { code: 'user-management', title: 'User Management', url: '/user-management', icon: 'people' },
      { code: 'course-management', title: 'Course Management', url: '/course-management', icon: 'book' },
    ],
    teacher: [
      { code: 'dashboard', title: 'Dashboard', url: '/dashboard', icon: 'home' },
      { code: 'course', title: 'Courses Management', url: '/courses', icon: 'book' },
      { code: 'absence', title: 'Absences Management', url: '/absences', icon: 'calendar' },
      { code: 'grade', title: 'Grades Management', url: '/grades', icon: 'school' },
      { code: 'student', title: 'Students', url: '/students', icon: 'people' },
    ],
    student: [
      { code: 'dashboard', title: 'Dashboard', url: '/dashboard', icon: 'home' },
      { code: 'course', title: 'My Courses', url: '/courses', icon: 'book' },
      { code: 'absence', title: 'My Absences', url: '/absences', icon: 'calendar' },
      { code: 'grade', title: 'My Grades', url: '/grades', icon: 'school' },
      { code: 'student', title: 'Students', url: '/students', icon: 'people' },
    ]

  };

  constructor(
    private networkService: NetworkServiceService,
    private configuration: ConfigurationService,
    private clipboard: Clipboard,
    private modalCtrl: ModalController
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


}
