import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkExperience } from 'src/app/entities/WorkExperience';
import { MetaService } from 'src/app/services/meta.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {

  experienceCode: string;

  experience: WorkExperience;
  firstLevel: number = 1;

  constructor(
    private meta: MetaService,
    private userService: UserServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(async (params) => {
      this.experienceCode = params['code'];
      this.experience = await this.userService.workExperienceGet(this.experienceCode, true);
      this.meta.setTitle(this.experience.title);
      this.meta.setDescription(this.experience.description);
    });
  }

}
