import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelconsultComponent } from './relconsult.component';
import { RelconsultRoutingModule } from './relconsult-routing';

@NgModule({
  declarations: [RelconsultComponent],
  imports: [
    CommonModule,
    RelconsultRoutingModule
  ]
})
export class RelconsultModule { }
