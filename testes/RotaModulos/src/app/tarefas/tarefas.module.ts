import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TarefasRoutingModule } from './tarefas.routing.module';

import { TarefasComponent } from './tarefas.component';
import { CadTarefaComponent } from './cad-tarefa/cad-tarefa.component';

import { TarefasService } from './tarefas.service';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      TarefasRoutingModule
    ],
    exports: [],
    declarations: [
      TarefasComponent,
      CadTarefaComponent
    ],
    providers: [
      TarefasService
    ],
})
export class TarefasModule { }
