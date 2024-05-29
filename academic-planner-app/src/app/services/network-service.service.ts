import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SpinnerService } from './spinner.service';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NetworkServiceService {

  constructor(
    private configuration: ConfigurationService,
    private http: HttpClient,
    private spinner: SpinnerService,
    private alertController: AlertController
  ) { }

  private getAuthToken(): string | null {
    const storedInfo = localStorage.getItem('securityInfo');
    const securityDTO = storedInfo ? JSON.parse(storedInfo) : null;
    if(! securityDTO) return null;
    return 'Bearer ' + securityDTO.token;
  }

  private getUsername(): string | null {
    const storedInfo = localStorage.getItem('securityInfo');
    const securityDTO = storedInfo ? JSON.parse(storedInfo) : null;
    if(! securityDTO) return null;
    return securityDTO.username;
  }

  public post(module: string, query: any, toBeLoaded: boolean): Promise<any> {
    if (toBeLoaded) this.spinner.show();
    const token       = this.getAuthToken();
    const username    = this.getUsername();
    const endPointUrL = this.configuration.configuration.serverUrl + module;

    let httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    if (token)  httpHeaders = httpHeaders.set('Authorization', token);
    if (username)  httpHeaders = httpHeaders.set('username', username);

    let httpOptions = {
      headers: httpHeaders,
      params: undefined,
      reportProgress: false,
      withCredentials: true
    }

    return new Promise((resolve, reject) => {
      this.http.post(endPointUrL, query, httpOptions).subscribe({
        next: (response: any) => {
          this.spinner.hide();
          resolve(response);

          // if (response.response.code === ServerCode.ACCEPTED) {
          //   resolve(response);
          // } else {
          //   this.presentAlert('Oops!', response.error.reason);
          //   reject(response.response.reason);
          // }
        },
        error: (error) => {
          if (toBeLoaded) this.spinner.hide();
          let errorMessage = error.error.message ? error.error.message : "Something went wrong. Please try again";
          this.presentAlert('Oops!', errorMessage);
          reject(error);
        }
      });
    });
  }

  public get(module: string, toBeLoaded: boolean): Promise<any> {
    if (toBeLoaded) this.spinner.show();
    const token       = this.getAuthToken();
    const username    = this.getUsername();
    const endPointUrL = this.configuration.configuration.serverUrl + module;

    let httpHeaders: HttpHeaders = new HttpHeaders();

    if (token)  httpHeaders = httpHeaders.set('Authorization', token);
    if (username)  httpHeaders = httpHeaders.set('username', username);


    let httpOptions = {
      headers: httpHeaders,
      params: undefined,
      reportProgress: false,
      withCredentials: true
    }

    return new Promise((resolve, reject) => {
      this.http.get(endPointUrL, httpOptions).subscribe({
        next: (response: any) => {
          this.spinner.hide();
          if (response?.response?.code) {
            if (response.response.code === ServerCode.ACCEPTED) {
              resolve(response);
            } else {
              this.presentAlert('Oops!', response.error.message);
              reject(response.error.message);
            }
          } else {
            resolve(response);
          }

        },
        error: (error) => {
          if (toBeLoaded) this.spinner.hide();
          let errorMessage = error.error.message ? error.error.message : "Something went wrong. Please try again";
          this.presentAlert('Oops!', errorMessage);
          reject(error);
        }
      });
    });
  }

  public delete(module: string, toBeLoaded: boolean): Promise<any> {
    if (toBeLoaded) this.spinner.show();
    const token       = this.getAuthToken();
    const username    = this.getUsername();
    const endPointUrL = this.configuration.configuration.serverUrl + module;

    let httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',

    });

    if (token)  httpHeaders = httpHeaders.set('Authorization', token);
    if (username)  httpHeaders = httpHeaders.set('username', username);

    let httpOptions = {
      headers: httpHeaders,
      params: undefined,
      reportProgress: false,
      withCredentials: true
    }

    return new Promise((resolve, reject) => {
      this.http.delete(endPointUrL, httpOptions).subscribe({
        next: (response: any) => {
          this.spinner.hide();
          if (response?.response?.code) {
            if (response.response.code === ServerCode.ACCEPTED) {
              resolve(response);
            } else {
              this.presentAlert('Oops!', response.error.message);
              reject(response.error.message);
            }
          } else {
            resolve(response);
          }

        },
        error: (error) => {
          if (toBeLoaded) this.spinner.hide();
          let errorMessage = error.error.message ? error.error.message : "Something went wrong. Please try again";
          this.presentAlert('Oops!', errorMessage);
          reject(error);
        }
      });
    });
  }

  private async presentAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  loadedImages: Set<string> = new Set();

  isImageLoaded(image: string): boolean {
    return this.loadedImages.has(image);
  }

  imageLoaded(event: any) {
    // This event is triggered when an image is loaded
    // Add the loaded image to the set
    this.loadedImages.add(event.target['src']);
  }
}


export enum ServerCode {
  ACCEPTED = 'Accepted',
  DECLINED = 'Declined',
  INPROGRESS = 'InProgress',
  ERROR = 'Error',
}
