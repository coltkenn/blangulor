import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlazorAppComponent } from './blazor-app/blazor-app.component';
import { BlazorFormComponent } from './blazor-form/blazor-form.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'form'
  },
  {
    path: 'form',
    component: BlazorFormComponent
  },
  {
    path: 'counter',
    component: BlazorAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
