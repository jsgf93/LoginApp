import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    private currentUser: User;
    
    constructor(private authService: AuthenticationService) {}

    ngOnInit() {
        this.currentUser = JSON.parse( localStorage.getItem('currentUser') || '{}');
    }

}
