import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AppComponent } from './components/app/app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthenticationService } from './services/authentication.service';

const appRoutes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        component: DashboardComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        FooterComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        BrowserModule
    ],
    providers: [AuthenticationService, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModuleShared {
}
