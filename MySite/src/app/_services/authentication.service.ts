import {HttpClient,  HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { first, map } from 'rxjs/operators';
import {User} from 'user'
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
    
    login(name, password){
        return this.http.post<User>(this.baseUrl, {name, password})
        .pipe(map(currentUser  =>{
            console.log(currentUser);
            localStorage.setItem('token', JSON.stringify(currentUser));
            this.currentUserSubject.next(currentUser);
            return currentUser;
        }))
    };
    
}
    