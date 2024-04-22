import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BaseComponent } from './base/base.component';
import { CommonModule } from '@angular/common';
import { ConfigurationService } from './services/configuration.service';
import { environment } from 'src/environments/environment';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PortalModule } from '@angular/cdk/portal';
import { SkeletonItemComponent } from './components/skeleton-item/skeleton-item.component';
import { SkeletonImageComponent } from './components/skeleton-image/skeleton-image.component';
import { ClipboardDirective } from './directives/clipboard.directive';

export function ConfigLoader(configurationService: ConfigurationService) {
  return () => configurationService.load(environment.configFile);
}



@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    SpinnerComponent,
    SkeletonItemComponent,
    SkeletonImageComponent,
    ClipboardDirective,
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
