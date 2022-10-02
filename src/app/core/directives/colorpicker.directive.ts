import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorpicker]',
})
export class ColorpickerDirective {
  constructor(private miElemento: ElementRef) {
    console.log(this.miElemento);
  }

  @HostListener('dblclick') dobleClick(): void {
    console.log('%c' + 'Hiciste doble click', 'color:red');
    this.changeBackgoundColor('#D2E011');
    this.changeColor('#fff');
  }

  @HostListener('click') click(): void {
    console.log('%c' + 'Hiciste click', 'color:green');
    this.changeBackgoundColor('#D511E0');
    this.changeColor('#EE3D3D');
  }

  changeBackgoundColor(color: string): void {
    this.miElemento.nativeElement.style.backgroundColor = color;
  }

  changeColor(color: string): void {
    this.miElemento.nativeElement.style.color = color;
  }
}
