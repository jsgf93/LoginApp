import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    public firstName: string;
    public lastName: string;
    private isUserLoggedIn: boolean;

    constructor(private http: Http) { }

    getUserLoggedIn() {
        return this.isUserLoggedIn;
    }

    login(username: string, password: string) {
        let serviceURL = "/api/Users/Authenticate";
        return this.http.post(serviceURL, { username: username, password: password })
            .map((response: Response) => {
                // login successful if there's a token in the response
                let user = response.json();
                console.log(user);
                if (user && user.token) {
                    this.firstName = user.firstName;
                    this.lastName = user.lastName;
                    this.isUserLoggedIn = true;
                }
            });
    }

    logout() {
        this.isUserLoggedIn = false;
        this.firstName = 'anonymus';
        this.lastName = 'anonymus';
    }


}
