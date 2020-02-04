import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ConfigServiceUser } from '../config/services/user-service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  user:User;

  constructor(public loginService: ConfigServiceUser ) { }

  ngOnInit() {
  }

  showAllUsers(){
    this.loginService.getAllUsers().subscribe((data: User[]) => this.user = {
      id: data[0]['id'],
      email: data[0]['email'],
      password: data[0]['password'],
      first_name: data[0]['firstName'],
      last_name: data[0]['lastName'],
      mobile_number: data[0]['mobileNumber'],
      user_information: null
    });
  }

  fetchUserData(){
    this.showAllUsers();
    console.log(this.user);
  }
    
}
