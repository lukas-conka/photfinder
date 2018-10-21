import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router";

const APP_ROUTES : Routes = [
    { path: '', component: HomeComponent}, 
    { path: 'dashboard', component: DashboardComponent} 
];


export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);