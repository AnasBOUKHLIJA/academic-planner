import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/entities/Article/Article';
import { MetaService } from 'src/app/services/meta.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {

  articleCode: string;

  article: Article;
  firstLevel: number = 1;

  constructor(
    private meta: MetaService,
    private userService: UserServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(async (params) => {
      this.articleCode = params['code'];
      this.article = await this.userService.articleGet(this.articleCode, true);
      this.meta.setTitle(this.article.title);
      this.meta.setDescription(this.article.description);
    });
  }
}


