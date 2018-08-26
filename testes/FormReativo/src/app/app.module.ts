import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListTarefasComponent } from './tarefas/list-tarefas/list-tarefas.component';
import { CadTarefaComponent } from './tarefas/cad-tarefa/cad-tarefa.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppRoutingModule } from './app.routing.module';
import { TarefasService } from './tarefas/tarefas.service';
import { CadTarefaReativaComponent } from './tarefas/cad-tarefa-reativa/cad-tarefa-reativa.component';

@NgModule({
  declarations: [
    AppComponent,
    CadTarefaComponent,
    ListTarefasComponent,
    CadTarefaReativaComponent
  ],
  imports: [
    TooltipModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    TarefasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
