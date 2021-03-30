import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RelconsultComponent } from './relconsult.component';

const routes: Routes = [
  {
    path: '',
    component: RelconsultComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelconsultRoutingModule { }
