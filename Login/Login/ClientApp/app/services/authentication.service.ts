import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {


    constructor(private http: Http) { }

    login(username: string, password: string) {
        let serviceURL = "/api/Users/Authenticate";
        return this.http.post(serviceURL, { username: username, password: password })
            .map((response: Response) => {
                // login successful if there's a token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
