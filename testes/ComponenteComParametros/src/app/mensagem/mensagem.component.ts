import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  @Input() texto: string;
  @Input() alinhamento: string;
  @Input() negrito: string;

  defAlinhamento() {
    console.log('defAlinhamento: ', this.alinhamento);
    if (this.alinhamento === 'centro') {
      return 'center';
    }
    return 'left';
  }

  defNegrito() {
    console.log('defNegrito');
    console.log('negrito typeof: ', typeof this.negrito);
    console.log('negrito value: ', this.negrito.trim());
    console.log('negrito length: ', this.negrito.trim().length);
    return (this.negrito !== undefined);
  }

  constructor() { }

  ngOnInit() {
  }

}
