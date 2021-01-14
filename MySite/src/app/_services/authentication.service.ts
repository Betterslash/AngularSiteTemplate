import {HttpClient,  HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { first, map } from 'rxjs/operators';
import {User} from 'user.model'
import {BehaviorSubject, Observable} from 'rxjs'

@Injectable({providedIn : 'root'})
export class AuthenticationService{
    baseUrl = 'http://192.168.1.2:8080/login'
    postId;
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    constructor(private http : HttpClient){
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }
    
    login(username : string, password : string){
        //let user = <User> {username, password}; 
        return this.http.post(this.baseUrl, {username, password})
        .pipe(map((response : any) =>{
            console.log(response);
            localStorage.setItem('token', response);
        }))
    }
    
}
    