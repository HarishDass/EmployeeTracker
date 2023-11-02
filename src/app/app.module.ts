import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EmployeeServiceService } from './shared-module/Services/employee-service.service';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule,ButtonModule,HttpClientModule,FormsModule,ReactiveFormsModule],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
