import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { CadTarefaComponent } from './cad-tarefa/cad-tarefa.component';

const appRoutes: Routes = [
  { path: 'tarefas', component: TarefasComponent },
  { path: 'nova-tarefa/:id', component: CadTarefaComponent },
  { path: 'alterar-tarefa/:id', component: CadTarefaComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}