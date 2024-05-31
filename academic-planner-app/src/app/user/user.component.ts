import { Component, OnInit } from '@angular/core';
import { Person } from '../models/Person';
import { Student } from '../models/Student';
import { Teacher } from '../models/Teacher';
import { AdminServiceService } from '../services/admin-service.service';
import { KernelServiceService } from '../services/kernel-service.service';
import { UtilsService } from '../services/utils.service';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminModalComponent } from '../components/admin-modal/admin-modal.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent  implements OnInit {

  username  : string | null;
  type      : string | null;
  person    : Person;
  student   : Student;
  teacher   : Teacher;

  constructor(
    private adminService: AdminServiceService,
    private kernelService: KernelServiceService,
    private utilsService: UtilsService,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  async ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.username = params.get('username');
      this.type     = params.get('type');
    });

    console.log(this.username);
    console.log(this.type);

    if(this.username && this.type){
      if (this.type === 'student') {
        this.student  = await this.kernelService.studentByUsernameGet(this.username);
      } else if (this.type === 'teacher') {
        this.teacher  = await this.kernelService.teacherByUsernameGet(this.username);
      } else this.person   = await this.kernelService.personByUsernameGet(this.username);
    }
    
  }

  async openPersonModal() {
    const modal = await this.modalCtrl.create({
      component: AdminModalComponent,
      cssClass: 'card-modal',
      componentProps: {
        person: this.person
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if(data) this.person = data.person;
  }

}
