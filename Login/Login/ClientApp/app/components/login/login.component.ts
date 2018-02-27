import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(
        private router: Router,
        private authService: AuthenticationService
    ) { }

    ngOnInit() {
        this.authService.logout();
    }

    authenticate(e: any) {
        e.preventDefault();
        let username = e.target.elements[0].value;
        let password = e.target.elements[1].value;

        this.authService.login(username, password)
            .subscribe(
            data => {
                this.router.navigate(['dashboard']);
            });
    }

}
