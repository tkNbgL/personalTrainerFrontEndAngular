import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Hero } from '../hero';
import { User } from '../user';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  users = [
    new User(1, "utku.nebioglu@gmail.com", "123456", "utku", "nebioglu", "05348991122", null)
  ];
  
  userProfileForm = this.fb.group({
    userEmail: [''],
    userPassword: [''],
  });

  // profileForm = this.fb.group({
  //   firstName: [''],
  //   lastName: [''],
  //   address: this.fb.group({
  //     street: [''],
  //     city: [''],
  //     state: [''],
  //     zip: ['']
  //   }),
  // });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(){
    console.warn(this.userProfileForm.value);
  }

 
}
