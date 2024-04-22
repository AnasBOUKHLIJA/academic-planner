import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/entities/Project';
import { MetaService } from 'src/app/services/meta.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {

  projectCode: string;

  project: Project;
  firstLevel: number = 1;

  constructor(
    private meta: MetaService,
    private userService: UserServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(async (params) => {
      this.projectCode = params['code'];
      this.project = await this.userService.projectGet(this.projectCode, true);
      this.meta.setTitle(this.project.name);
      this.meta.setDescription(this.project.description);
    });
  }

}
