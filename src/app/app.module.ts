import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiErrorInterceptorService } from './services/api-error-interceptor.service';
import { NoImagePipe } from './pipes/no-image.pipe';

@NgModule({
  declarations: [AppComponent, NoImagePipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiErrorInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
