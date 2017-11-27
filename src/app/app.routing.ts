import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { LayoutPageComponent } from './shared/layout/layout-page/layout-page.component';
import { LayoutDashboardComponent } from './shared/layout/layout-dashboard/layout-dashboard.component';

export const routes: Routes = [
  {
    path: 'page',
    component: LayoutPageComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './page/page.module#PageModule',
      }
    ]
  },
  {
    path: 'dashboard',
    component: LayoutDashboardComponent,
    data: {
      title: 'Dashboard'
    },
    children: [
      {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}