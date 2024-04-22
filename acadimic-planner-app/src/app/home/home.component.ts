import { ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { CvViewerComponent } from './cv-viewer/cv-viewer.component';
import { ModalController } from '@ionic/angular';
import { Project } from '../entities/Project';
import { UserServiceService } from '../services/user-service.service';
import { Article } from '../entities/Article/Article';
import { WorkExperience } from '../entities/WorkExperience';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Skill } from '../entities/Skill';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { Filter } from '../entities/Msg/Filter';
import { Quote } from '../entities/Quote';
import { GlobalConfig } from '../entities/GlobalConfig';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  @ViewChild("swiperSkills", { static: false }) swiperSkills?: ElementRef<{ swiper: Swiper }>;
  private swiperConfig?: SwiperOptions = {
    slidesPerView: 5,
    autoplay:{
      pauseOnMouseEnter: true,
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation:{ enabled: true }
  };

  @ViewChild("swiperQuotes", { static: false }) swiperQuotes?: ElementRef<{ swiper: Swiper }>
  private swiperQuoteConfig?: SwiperOptions = {
    autoplay:{
      pauseOnMouseEnter: true,
      delay: 6000,
      disableOnInteraction: false,
    },
    navigation:{ enabled: true }
  };

  projects        : Project[];
  articles        : Article[];
  workExperiences : WorkExperience[];
  skills          : Skill[];
  quotes          : Quote[];
  baseSize        : number = 4;
  global: GlobalConfig;

  constructor(
    private utilsService: UtilsService,
    private modalCtrl: ModalController,
    private userServiceService: UserServiceService,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    this.global = this.utilsService.globalGet();

    const filter = new Filter();
    filter.orderBy = 'date';
    filter.order = 'desc';

    this.articles         = await this.userServiceService.articlesGet(0, this.baseSize, filter, true, false);
    this.projects         = await this.userServiceService.projectsGet(0, this.baseSize, filter, true, false);
    this.workExperiences  = await this.userServiceService.workExperiencesGet(this.baseSize, filter, true, false);
    this.skills           = await this.userServiceService.skillsGet(undefined, filter, true, false);
    this.quotes           = await this.userServiceService.quotesGet(false);
    
    setTimeout(() => {
      this.adjustSwiperConfig();
      if (this.swiperQuotes?.nativeElement) {
        Object.assign(this.swiperQuotes?.nativeElement, this.swiperQuoteConfig);
        this.swiperQuotes?.nativeElement.swiper.autoplay.start();  
      }
      if (this.swiperSkills?.nativeElement) {
        Object.assign(this.swiperSkills?.nativeElement, this.swiperConfig);
        this.swiperSkills?.nativeElement.swiper.autoplay.start();
      }
    }, 500);
  }
  
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: CvViewerComponent,
      cssClass: 'fullscreen'
    });
    modal.present();
    await modal.onWillDismiss();
  }

  async openContactMeModal() {
    const modal = await this.modalCtrl.create({
      component: ContactMeComponent,
      cssClass: 'fullscreen'
    });
    modal.present();
    await modal.onWillDismiss();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.adjustSwiperConfig();
    this.cdr.detectChanges();
  }

  private adjustSwiperConfig() {
    if(this.swiperConfig){
      if (window.innerWidth <= 600) {
        this.swiperConfig.slidesPerView = 2;
      } else if (window.innerWidth <= 1024) {
        this.swiperConfig.slidesPerView = 3;
      } else {
        this.swiperConfig.slidesPerView = 5;
      }      
    }
  }

  getRange(n: number): number[] {
    return Array.from({ length: n }, (_, index) => index);
  }
  
}
