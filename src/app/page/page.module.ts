import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Shared
import { AppMaterialModule } from '../shared/module/material.module';
import { AppFormsModule } from '../shared/module/forms.module';

//Routing
import { PageRoutingModule } from './page-routing.module';

//Components
import { LoginComponent  } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    imports: [
      PageRoutingModule,
      CommonModule,
      AppFormsModule,
      AppMaterialModule
    ],
    declarations: [ 
      LoginComponent, 
      RegisterComponent
    ]
  })
  export class PageModule { }