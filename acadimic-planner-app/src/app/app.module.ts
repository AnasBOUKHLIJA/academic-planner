import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { BaseComponent } from './base/base.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationWorkExperienceComponent } from './education-work-experience/education-work-experience.component';
import { BlogsArticlesComponent } from './blogs-articles/blogs-articles.component';
import { CvViewerComponent } from './home/cv-viewer/cv-viewer.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { WorkExperienceItemComponent } from './components/work-experience-item/work-experience-item.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { ContactMeComponent } from './home/contact-me/contact-me.component';
import { CommonModule } from '@angular/common';
import { ConfigurationService } from './services/configuration.service';
import { environment } from 'src/environments/environment';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PortalModule } from '@angular/cdk/portal';
import { SkeletonItemComponent } from './components/skeleton-item/skeleton-item.component';
import { SkeletonImageComponent } from './components/skeleton-image/skeleton-image.component';
import { ContentItemComponent } from './components/content-item/content-item.component';
import { ArticleComponent } from './blogs-articles/article/article.component';
import { PrismComponent } from './components/prism/prism.component';
import { ClipboardDirective } from './directives/clipboard.directive';
import { ExperienceComponent } from './education-work-experience/experience/experience.component';
import { ProjectComponent } from './portfolio/project/project.component';

export function ConfigLoader(configurationService: ConfigurationService) {
  return () => configurationService.load(environment.configFile);
}

import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-scss';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    ProjectComponent,
    HomeComponent,
    BaseComponent,
    SkillsComponent,
    EducationWorkExperienceComponent,
    BlogsArticlesComponent,
    CvViewerComponent,
    ProjectItemComponent,
    ArticleItemComponent,
    WorkExperienceItemComponent,
    ContactMeComponent,
    SpinnerComponent,
    SkeletonItemComponent,
    SkeletonImageComponent,
    ContentItemComponent,
    ArticleComponent,
    PrismComponent,
    ClipboardDirective,
    ExperienceComponent
    ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    IonicModule.forRoot({
      mode: 'md',
    }), 
    AppRoutingModule, 
    ReactiveFormsModule, 
    FormsModule,
    CommonModule,
    HttpClientModule,
    PortalModule,
  ],
  providers: [
    ClipboardDirective,
    ConfigurationService,
    {
    provide: APP_INITIALIZER,
    useFactory: ConfigLoader,
    deps: [ConfigurationService],
    multi: true
    }, 
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule {}
