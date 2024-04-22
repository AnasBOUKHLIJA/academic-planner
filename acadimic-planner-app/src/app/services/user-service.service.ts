import { Injectable } from '@angular/core';
import { Project } from '../entities/Project';
import { Article } from '../entities/Article/Article';
import { WorkExperience } from '../entities/WorkExperience';
import { Skill } from '../entities/Skill';
import { Quote } from '../entities/Quote';
import { BaseRequest } from '../entities/Msg/BaseRequest';
import { Filter } from '../entities/Msg/Filter';
import { NetworkServiceService } from './network-service.service';
import { ContactMe } from '../entities/ContactMe';
import { SpinnerService } from './spinner.service';
import { BaseResponse } from '../entities/Msg/BaseResponse';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private readonly MODULE_URL: string = 'user/';
  projects        : Project[];
  articles        : Article[];
  workExperiences : WorkExperience[];
  skills          : Skill[];
  quotes          : Quote[];

  constructor(
    private networkService: NetworkServiceService,
    private spinnerService: SpinnerService
    ) {}

  projectsGet(page: number, pageSize: number, filter: Filter | undefined, HomeItems: boolean, toBeLoaded: boolean): Promise<Project[]> {
    return new Promise((resolve, reject) => {
      // Base on previous BE response
      if(HomeItems && this.projects && this.projects.length !== 0){
        resolve(this.projects.slice(page*pageSize, pageSize));
        return;
      }

      let request: BaseRequest = new BaseRequest();
      request.page = page;
      request.pageSize = pageSize;
      if(filter) request.filter = filter;
      this.networkService.post(this.MODULE_URL + "projects", request, toBeLoaded).then((response: any) => {
        if(HomeItems) this.projects = response.projects;
        resolve(response.projects);
      }, error => {
        reject(error);
      });
    });
  }

  projectGet(code: string, toBeLoaded: boolean): Promise<Project> {
    return new Promise((resolve, reject) => {
      let request: BaseRequest = new BaseRequest();
      request.strArg1 = code;
      this.networkService.post(this.MODULE_URL + "project", request, toBeLoaded).then((response: any) => {
        resolve(response.project);
      }, error => {
        reject(error);
      });
    });
  }

  projectsCountGet(filter: Filter | undefined, HomeItems: boolean, toBeLoaded: boolean): Promise<number> {
    return new Promise((resolve, reject) => {
      let request: BaseRequest = new BaseRequest();
      request.blnArg1 = true;
      if(filter) request.filter = filter;
      this.networkService.post(this.MODULE_URL + "projects", request, toBeLoaded).then((response: any) => {
        resolve(response.lngArg1);
      }, error => {
        reject(error);
      });
    });
  }

  skillsGet(size: number | undefined, filter: Filter | undefined, HomeItems: boolean, toBeLoaded: boolean): Promise<Skill[]> {
    return new Promise((resolve, reject) => {
      // Base on previous BE response
      if(HomeItems && this.skills && this.skills.length !== 0){
        size = size ?? this.skills.length;
        resolve(this.skills.slice(0, size));
        return;
      }
      let request: BaseRequest = new BaseRequest();
      if(filter) request.filter = filter;
      this.networkService.post(this.MODULE_URL + "skills", request, toBeLoaded).then((response: any) => {
        size = size ?? response.skills.length;
        if(HomeItems) this.skills = response.skills;
        resolve(response.skills.slice(0, size));
      }, error => {
        reject(error);
      });
    });
  }

  quotesGet(toBeLoaded: boolean): Promise<any[]> {
    return new Promise((resolve, reject) => {
      // Base on previous BE response
      if(this.quotes && this.quotes.length !== 0){
        resolve(this.quotes);
        return;
      }

      let request: BaseRequest = new BaseRequest();
      this.networkService.post(this.MODULE_URL + "quotes", request, toBeLoaded).then((response: any) => {
        this.quotes = response.quotes;
        resolve(response.quotes);
      }, error => {
        reject(error);
      });
    });
  }

  workExperiencesGet(size: number | undefined, filter: Filter | undefined, HomeItems: boolean, toBeLoaded: boolean): Promise<WorkExperience[]> {
    return new Promise((resolve, reject) => {
      // Base on previous BE response
      if(HomeItems && this.workExperiences && this.workExperiences.length !== 0){
        size = size ?? this.workExperiences.length;
        resolve(this.workExperiences.slice(0, size));
        return;
      }

      let request: BaseRequest = new BaseRequest();
      if(filter) request.filter = filter;
      this.networkService.post(this.MODULE_URL + "workExperiences", request, toBeLoaded).then((response: any) => {
        size = size ?? response.workExperiences.length;
        if(HomeItems) this.workExperiences = response.workExperiences;
        resolve(response.workExperiences.slice(0, size));
      }, error => {
        reject(error);
      });
    });
  }

  workExperienceGet(code: string, toBeLoaded: boolean): Promise<WorkExperience> {
    return new Promise((resolve, reject) => {
      let request: BaseRequest = new BaseRequest();
      request.strArg1 = code;
      this.networkService.post(this.MODULE_URL + "workExperience", request, toBeLoaded).then((response: any) => {
        resolve(response.workExperience);
      }, error => {
        reject(error);
      });
    });
  }

  articlesGet(page: number, pageSize: number, filter: Filter | undefined, HomeItems: boolean, toBeLoaded: boolean): Promise<Article[]> {
    return new Promise((resolve, reject) => {
      // Base on previous BE response
      if(HomeItems && this.articles && this.articles.length !== 0){
        resolve(this.articles.slice(page*pageSize, pageSize));
        return;
      }

      let request: BaseRequest = new BaseRequest();
      request.page = page;
      request.pageSize = pageSize;
      if(filter) request.filter = filter;
      this.networkService.post(this.MODULE_URL + "articles", request, toBeLoaded).then((response: any) => {
        if(HomeItems) this.articles = response.articles;
        resolve(response.articles);
      }, error => {
        reject(error);
      });
    });
  }

  articleGet(code: string, toBeLoaded: boolean): Promise<Article> {
    return new Promise((resolve, reject) => {
      let request: BaseRequest = new BaseRequest();
      request.strArg1 = code;
      this.networkService.post(this.MODULE_URL + "article", request, toBeLoaded).then((response: any) => {
        resolve(response.article);
      }, error => {
        reject(error);
      });
    });
  }

  articlesCountGet(filter: Filter| undefined, toBeLoaded: boolean): Promise<number> {
    let request: BaseRequest = new BaseRequest();
    if(filter) request.filter = filter;
    request.blnArg1 = true;
    return new Promise((resolve, reject) => {
      this.networkService.post(this.MODULE_URL + "articles", request, toBeLoaded).then((response: any) => {
        resolve(response.lngArg1);
      }, error => {
        reject(error);
      });
    });
  }

  contactMe(contactMe: ContactMe): Promise<BaseResponse> {
    return new Promise((resolve, reject) => {
      this.networkService.post(this.MODULE_URL + "contactMe", contactMe, true).then((response: any) => {
        this.spinnerService.presentToast('bottom', 'Your message has been send successfully');
        resolve(response);
      }, error => {
        reject(error);
      });
    });
  }
}



// Arrays functions search => find, filter, includes, indexOf
// find => We use the Array.find() method to find the first element that meets a certain condition
// filter => We can use the Array.filter() method to find elements in an array that meet a certain condition
//   Use includes if you want to check if an array contains a particular value.
// Use indexOf if you want to find the index of a particular item in an array. 