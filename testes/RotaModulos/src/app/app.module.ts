import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FocusDirective } from './diretivas/focus.directive';

import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { TarefasModule } from './tarefas/tarefas.module';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    FocusDirective,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    TarefasModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
