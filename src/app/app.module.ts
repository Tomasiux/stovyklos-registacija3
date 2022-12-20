import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrationNewComponent } from './components/registration-new/registration-new.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { kidAgesDirective } from './directives/car-year.directive';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { RegistrationListComponent } from './components/registration-list/registration-list.component';
import {RouterModule, Routes} from "@angular/router";
import { NavigationComponent } from './components/navigation/navigation.component';
import { RegistrationEditComponent } from './components/registration-edit/registration-edit.component';
import { AuthComponent } from './components/auth/auth.component';
import {AuthInterceptor} from "./interceptors/auth.interceptor";
import {AuthGuard} from "./guards/auth.guard";

const routes:Routes=[
  {
    path:'',
    component:RegistrationListComponent
  },
  {
    path:'new',
    component:RegistrationNewComponent
  },
  {
    path:'edit/:id',
    component:RegistrationEditComponent
  },
  {
    path:'auth',
    component:AuthComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationNewComponent,
    kidAgesDirective,
    RegistrationListComponent,
    NavigationComponent,
    RegistrationEditComponent,
    AuthComponent
  ],
  imports: [ 
    MbscModule,  
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
