import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { isPlatformServer, isPlatformBrowser } from '@angular/common';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    constructor(
        private http: Http,
        @Inject(PLATFORM_ID) private platformId: Object
    ) { }

    login(username: string, password: string) {
        let serviceURL = "/api/users/authenticate";
        return this.http.post(serviceURL, { username: username, password: password })
            .map((response: Response) => {
                // login successful if there's a token in the response
                let user = response.json();
                console.log(user);
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.removeItem('currentUser');
        }      
    }
}
