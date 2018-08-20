import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FocusDirective } from './diretivas/focus.directive';

import { AppComponent } from './app.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app.routing.module';

import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { FormDeactivateGuard } from './guards/form-deactivate.guard';

@NgModule({
  declarations: [
    FocusDirective,
    AppComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LoginModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    FormDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
