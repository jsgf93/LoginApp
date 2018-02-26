import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    firstName: string = 'anonymus';
    lastName: string = 'anonymus';
    constructor(private authService: AuthenticationService) { }

    ngOnInit() {
        this.firstName = this.authService.firstName;
        this.lastName = this.authService.lastName;
    }

}
