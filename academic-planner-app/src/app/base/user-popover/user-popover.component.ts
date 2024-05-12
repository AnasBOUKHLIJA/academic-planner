import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-user-popover',
  templateUrl: './user-popover.component.html',
  styleUrls: ['./user-popover.component.scss'],
})
export class UserPopoverComponent  implements OnInit {

  selectedLanguage: string;

  constructor(
    private utilsService: UtilsService,
  ) {}

  async ngOnInit() {
    this.selectedLanguage = this.utilsService.getCurrentLanguage();   
  }

  switchLanguage(language: string) {
    console.log(language);
    this.selectedLanguage = language;
    this.utilsService.switchLanguage(language)
  }

  logoutAction() {
    
  }
}
