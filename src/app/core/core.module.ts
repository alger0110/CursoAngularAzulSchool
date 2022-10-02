import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiplicarDirective } from './directives/multiplicar.directive';
import { ColorpickerDirective } from './directives/colorpicker.directive';



@NgModule({
  declarations: [
    MultiplicarDirective,
    ColorpickerDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MultiplicarDirective,
    ColorpickerDirective
  ]
})
export class CoreModule { }
