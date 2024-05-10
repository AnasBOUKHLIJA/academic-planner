import { Injectable } from '@angular/core';
import { NetworkServiceService } from './network-service.service';
import { SpinnerService } from './spinner.service';
import { ConfigurationService } from './configuration.service';
import { Country } from '../models/Country';
import { Profile } from '../models/Profile';
import { LegalIdType } from '../models/LegalIdType';
import { Univesity } from '../models/Univesity';

@Injectable({
  providedIn: 'root'
})
export class KernelServiceService {

  private readonly MODULE_GET_URL: string = '/kernel/';

  constructor(
    private configurationService  : ConfigurationService,
    private networkService        : NetworkServiceService,
    private spinnerService        : SpinnerService,
  ) {}

  countriesGet() : Promise<Country[]>{
    return new Promise((resolve, reject) => {
        this.networkService.get(this.MODULE_GET_URL + "countriesGet", false).then((response: any) => {
            resolve(response);
        }, error => {
            reject(error);
        }
        );
    });
  }
  
  countryGet() : Promise<Country>{
    return new Promise((resolve, reject) => {
        this.networkService.get(this.MODULE_GET_URL + "countryGet/" + this.configurationService.configuration.countryCode , false).then((response: any) => {
            resolve(response);
        }, error => {
            reject(error);
        }
        );
    });
  }

  universityGet(): Promise<Univesity>{
    return new Promise((resolve, reject) => {
        this.networkService.get(this.MODULE_GET_URL + "universityGet/" + this.configurationService.configuration.universityCode , false).then((response: any) => {
            resolve(response);
        }, error => {
            reject(error);
        }
        );
    });
  }

  legalIdTypesGet(): Promise<LegalIdType[]>{
    return new Promise((resolve, reject) => {
        this.networkService.get(this.MODULE_GET_URL + "legalIdTypesGet" , false).then((response: any) => {
            resolve(response);
        }, error => {
            reject(error);
        }
        );
    });
  }

  profilesGet(): Promise<Profile[]>{
    return new Promise((resolve, reject) => {
        this.networkService.get(this.MODULE_GET_URL + "profilesGet" , false).then((response: any) => {
            resolve(response);
        }, error => {
            reject(error);
        }
        );
    });
  }

}