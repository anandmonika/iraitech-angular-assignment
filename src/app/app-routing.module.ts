import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Question3Component } from './question3/question3.component';
import { Question4Component } from './question4/question4.component';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'question1',
    component: Question1Component,
    title: 'Question 1',
  },
  {
    path: 'question2',
    component: Question2Component,
    title: 'Question 2',
  },
  {
    path: 'question3',
    component: Question3Component,
    title: 'Question 3',
  },
  {
    path: 'question4',
    component: Question4Component,
    title: 'Question 4',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
