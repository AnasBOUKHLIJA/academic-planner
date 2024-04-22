import { Injectable } from '@angular/core';
import { NetworkServiceService } from './network-service.service';
import { SpinnerService } from './spinner.service';

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

  
}