import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




import { LoginComponent } from './login/login.component';





@NgModule({
  declarations: [
    LoginComponent,

  
    
  ],
  imports: [
    CommonModule,
 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:
  [
    LoginComponent,
   

  ]
})
export class LogintypesModule { }
