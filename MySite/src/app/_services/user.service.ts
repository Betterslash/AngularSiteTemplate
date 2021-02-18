import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';
import { User } from '../_common/user.model';
import { RegisterUser } from '../_common/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }
    register(user: RegisterUser) {
        return this.http.post(environment.apiUrl + 'register', user, {responseType: 'text'});
    }
}
