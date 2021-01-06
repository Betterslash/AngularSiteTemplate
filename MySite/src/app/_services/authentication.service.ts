import {HttpClient,  HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';
import {User} from 'user.model'
@Injectable({providedIn : 'root'})
export class AuthenticationService{
    baseUrl = 'http://192.168.1.2:2021/login'
    postId;
    errorMessage : Error;
    constructor(private http : HttpClient){
    
    }
    login(username : string, password : string){
        console.log(username, password);
        let user = <User> {username, password}; 
        const headers = new HttpHeaders()
        .set('Authorization', 'my-auth-token')
        .set('Content-Type', 'application/json');
        this.http.post<any>(this.baseUrl, JSON.stringify(user), {
            headers: headers
          }).subscribe(
            {next :data => {
            console.log(data)
        }, 
        error: error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
        }})
    }
}