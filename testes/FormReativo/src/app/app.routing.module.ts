import { CadTarefaReativaComponent } from './tarefas/cad-tarefa-reativa/cad-tarefa-reativa.component';
import { CadTarefaComponent } from './tarefas/cad-tarefa/cad-tarefa.component';
import { ListTarefasComponent } from './tarefas/list-tarefas/list-tarefas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'tarefas', component: ListTarefasComponent },
  { path: 'tarefas/:id/cadastro', component: CadTarefaComponent },
  { path: 'tarefas/:id/cadastro-reativo', component: CadTarefaReativaComponent },
  { path: '', redirectTo: '/tarefas', pathMatch: 'full' },
  { path: '**', redirectTo : '/tarefas' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: false})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
