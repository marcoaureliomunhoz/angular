import { Component } from '@angular/core';

//meta dados
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//classe que representa o componente
export class AppComponent {
  title = 'Olá Tarefas';
  tarefa = '';
  tarefas = [];
  novaTarefa() {
    this.tarefas.push(this.tarefa);
    this.tarefa = '';
  }
}
