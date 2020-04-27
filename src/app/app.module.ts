import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileComponent } from './mobile/mobile.component';
import { EmployeeTwoComponent } from './employee-two/employee-two.component';
import { EmployeeThrirdComponent } from './employee-thrird/employee-thrird.component';
import { RegistrationComponent } from './registration/registration.component';



@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    EmployeeTwoComponent,
    EmployeeThrirdComponent,
    RegistrationComponent,
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
