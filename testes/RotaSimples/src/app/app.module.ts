import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { CadTarefaComponent } from './cad-tarefa/cad-tarefa.component';

import { TarefasService } from './tarefas.service';

import { FocusDirective } from './focus.directive';

/*
const appRoutes: Routes = [
  { path: 'tarefas', component: TarefasComponent },
  { path: 'nova-tarefa/:id', component: CadTarefaComponent },
  { path: 'alterar-tarefa/:id', component: CadTarefaComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent }
];
*/

@NgModule({
  declarations: [
    AppComponent,
    TarefasComponent,
    CadTarefaComponent,
    HomeComponent,
    FocusDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [
    TarefasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
