import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Signup } from './pages/signup/signup';

const routes: Routes = [
  {
    path:'signup',
    component: Signup,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
