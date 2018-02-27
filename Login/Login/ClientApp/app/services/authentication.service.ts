import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

    private isUserLoggedIn: boolean;

    constructor(private http: Http) { }

    getUserLoggedIn() {
        return this.isUserLoggedIn;
    }

    setUserLoggedIn() {
        this.isUserLoggedIn = true;
    }

    login(username: string, password: string) {
        let serviceURL = "/api/users/authenticate";
        return this.http.post(serviceURL, { username: username, password: password })
            .map((response: Response) => {
                // login successful if there's a token in the response
                let user = response.json();
                console.log(user);
                if (user && user.token) {
                    localStorage.setItem('currentUser',JSON.stringify(user));
                    this.isUserLoggedIn = true;
                }
            });
    }

    logout() {
        this.isUserLoggedIn = false;
        localStorage.removeItem('currentUser');
    }


}
