import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';

// Routing Module
import { AppRoutingModule } from './app.routing';

//Layouts
import { LayoutPageComponent } from './shared/layout/layout-page/layout-page.component';
import { LayoutDashboardComponent } from './shared/layout/layout-dashboard/layout-dashboard.component';

// Componentes
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutPageComponent, 
    LayoutDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
