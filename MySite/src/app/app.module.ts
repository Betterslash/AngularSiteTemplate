import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarLeftComponent } from './side-bar-left/side-bar-left.component';
import { ModalModule } from './_modal';
import { ContactComponent } from './contact/contact.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { MainViewComponent } from './main-view/main-view.component';
import {AuthenticationService} from './_services/authentication.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoggedInPageComponent } from './logged-in-page/logged-in-page.component'
import { ReCaptchaModule } from 'angular2-recaptcha';
// if you need forms support:
// import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

import {HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from 'src/interceptor';


@NgModule({
  declarations: [
    AppComponent,
    SideBarLeftComponent,
    ContactComponent,
    LoginModalComponent,
    MainViewComponent,
    LoggedInPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReCaptchaModule
  ],
  providers: [AuthenticationService,
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
