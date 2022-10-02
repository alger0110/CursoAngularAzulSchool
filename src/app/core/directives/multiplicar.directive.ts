import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMultiplicar]',
})
export class MultiplicarDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {
    console.log(this.templateRef);
  }

  @Input() set appMultiplicar(numero: number) {
    for (let i = 0; i < numero; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}
