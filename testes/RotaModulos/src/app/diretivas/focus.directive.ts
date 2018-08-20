import { Directive, Input, ElementRef, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[autoFoco]'
})
export class FocusDirective implements OnInit {

  /*eu poderia usar esse recurso para obter o valor do atributo lá no html*/
  /*@Input() autoFoco: boolean;*/

  constructor(private elemento: ElementRef, private renderer: Renderer) {}

  ngOnInit() {
    /*eu poderia modificar o comportamento do elemento nativo somente se
      o desenvolvedor passou um valor desejado para o atributo-diretiva
      mas neste, caso para mim não interessa o valor de autoFoco
      se o desenvolvedor decorar o elemento com autoFoco eu considero que o
      elemento deve receber o foco*/

    /*if (this.autoFoco) {*/
      this.renderer.invokeElementMethod(this.elemento.nativeElement, 'focus');
    /*}*/
  }

}
