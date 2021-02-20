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
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from 'src/interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
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
    FormsModule, RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    ReCaptchaModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatCardModule, 
    MatToolbarModule,
    MatTabsModule
  ],
  providers: [AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
