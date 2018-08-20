import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TarefasComponent } from './tarefas.component';
import { CadTarefaComponent } from './cad-tarefa/cad-tarefa.component';

const tarefasRoutes: Routes = [
  { path: 'tarefas', component: TarefasComponent },
  { path: 'nova-tarefa/:id', component: CadTarefaComponent },
  { path: 'alterar-tarefa/:id', component: CadTarefaComponent }
];

@NgModule({
    imports: [RouterModule.forChild(tarefasRoutes)],
    exports: [RouterModule]
})
export class TarefasRoutingModule {}
