import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TarefasRoutingModule } from './tarefas.routing.module';

import { TarefasComponent } from './tarefas.component';
import { CadTarefaComponent } from './cad-tarefa/cad-tarefa.component';
import { DetTarefaComponent } from './det-tarefa/det-tarefa.component';

import { TarefasService } from './tarefas.service';
import { TarefasGuard } from './../guards/tarefas.guard';
import { TarefaResolver } from './guards/tarefa.resolver';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      TarefasRoutingModule
    ],
    exports: [],
    declarations: [
      TarefasComponent,
      CadTarefaComponent,
      DetTarefaComponent
    ],
    providers: [
      TarefasService,
      TarefasGuard,
      TarefaResolver
    ],
})
export class TarefasModule { }
