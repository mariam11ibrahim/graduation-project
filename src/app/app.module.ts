import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
// import { HomeComponent } from './shared/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './../app/modules/register/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { JobDetailsComponent } from './modules/components/job-details/job-details.component';
import { ViewProfileComponent } from './modules/components/view-profile/view-profile.component';
// import { SignupModule } from './modules/freelancer/signup/signup.module';


import { PostJobModule } from './modules/client/post-job/post-job.module';
import { ProposeComponent } from './modules/components/propose/propose.component';
import { MyProposalsComponent } from "./modules/freelancer/my-proposals/my-proposals.component";


// import { CardComponent } from './modules/shared/card/card.component';
// import {ClientModule} from "./modules/client/client.module";
// import { PostJobComponent } from "./modules/client/post-job/post-job.component";
// import { SideNavComponent } from './modules/client/post-job/side-nav/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,

    // SomeTextPipe,
    // SideNavComponent
    // CardComponent,
    // PostJobComponent
    FooterComponent,
    HeaderComponent,
    // HomeComponent,
    LoginComponent,
    JobDetailsComponent,
    ViewProfileComponent,
    ProposeComponent,
    MyProposalsComponent,
    // SignupModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    PostJobModule,
    // SignupModule
  ],
  // imports: [BrowserModule, AppRoutingModule, PostJobModule, HttpClientModule],
  //   exports: [
  //     SomeTextPipe,
  //  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
