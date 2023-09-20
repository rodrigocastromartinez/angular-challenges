import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { OutputComponent } from './components/output/output.component';

const routes: Routes = [
  {
    path: '',
    component: InputComponent
  },
  {
    path: 'result/:bmi',
    component: OutputComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
