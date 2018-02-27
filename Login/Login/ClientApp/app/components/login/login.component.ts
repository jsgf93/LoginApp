import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    private model: any = {};
    private loading = false;

    constructor(
        private router: Router,
        private authService: AuthenticationService
    ) { }

    ngOnInit() {
        this.authService.logout();
    }

    authenticate(e: any) {
        this.loading = true;
        this.authService.login(this.model.username, this.model.password)
            .subscribe(
            data => {
                this.router.navigate(['']);
            });
    }

}
