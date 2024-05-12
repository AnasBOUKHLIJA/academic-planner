import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { UtilsService } from './services/utils.service';
import { GlobalConfig } from './models/GlobalConfig';
import { ActivatedRoute, Data, NavigationEnd, Router } from '@angular/router';
import { MetaService } from './services/meta.service';
import { filter, map, mergeMap, tap } from 'rxjs/operators';

register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  pages: any[];
  global: GlobalConfig;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private metaService: MetaService,
    public utilsService: UtilsService
  ) { }

  async ngOnInit() {
    this.utilsService.setDefaultLanguage();
    this.pages = this.utilsService.pagesConfigGet();
    this.global = this.utilsService.globalGet();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data),
        tap(({ title, description }: Data) => {
          this.metaService.setTitle(title);
          this.metaService.setDescription(description);
        })
      ).subscribe();
  }

}
