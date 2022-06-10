import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/user.service';

@Component
({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  @ViewChild('loginRef', { static: true }) loginElement !: ElementRef;
  auth2: any;
  show = false;
  Name: any;
  loginForm !: FormGroup;
  user = [];
  loginDetails: any= []
  constructor(private route: Router, private fb: FormBuilder, private router:Router, private service: UserService) { }


  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.service.getAllUser().subscribe((res): any =>{
      console.log(res)
      this.loginDetails= res;
    })



  }
 

  login() {
    let myUser={
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    console.log(myUser)
    console.log(this.loginDetails)
    
    let duplicateUser= false
    this.loginDetails.forEach((item: any) =>{
      if(myUser.email == item.email && myUser.password == item.pass){
      
        duplicateUser= true;
      }
    
    })
    if(duplicateUser){
      alert('You are logged in successfully')
      this.route.navigateByUrl('dashboard')
    }else{
      alert('Invalid Credentials')
    }
   
  }

  

}