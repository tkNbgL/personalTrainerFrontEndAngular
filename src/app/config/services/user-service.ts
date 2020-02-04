import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ConfigServiceUser{
    allUserUrl = 'http://localhost:8080/user/users';
    userById = 'http://localhost:8080/user/{id}';


    constructor(private http: HttpClient){}

    getAllUsers(){
        return this.http.get(this.allUserUrl);
    }
}
