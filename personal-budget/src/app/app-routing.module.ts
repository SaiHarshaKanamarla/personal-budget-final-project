import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { P404Component } from './p404/p404.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    // component : HomepageComponent,
    component : LoginComponent,
    pathMatch : 'full'
  },
  {
    path : 'about',
    component: AboutComponent   
  },
  {
    path : 'login',
    component: LoginComponent
  },
  {
    path : 'homepage',
    component: HomepageComponent,
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component : ContactComponent,
    pathMatch : 'full'
  },
  {
    path: 'signup',
    component : SignupComponent,
    pathMatch : 'full'
  },
  {
    path:'logout',
    component: LoginComponent
  },
  {
    path:'**',
    component: P404Component
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
