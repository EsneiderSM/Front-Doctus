import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Shared
import { AppMaterialModule } from '../shared/module/material.module';
import { AppFormsModule } from '../shared/module/forms.module';

//Routing
import { DashboardRoutingModule } from './dashboard-routing.module';

//Components
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [
        DashboardRoutingModule,
        CommonModule,
        AppFormsModule,
        AppMaterialModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class DashboardModule { }