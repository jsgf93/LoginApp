import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    private currentUser: User;
    constructor() {
        const userJson = localStorage.getItem('currentUser');
        this.currentUser = userJson !== null ? JSON.parse(userJson) : new User();
    }

    ngOnInit() {
        console.log(this.currentUser);
    }

}
