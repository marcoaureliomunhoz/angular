import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login.routing.module';

import { LoginComponent } from './login.component';
import { UsuariosService } from '../usuarios/usuarios.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ],
  exports: [],
  declarations: [
    LoginComponent
  ],
  providers: [
    UsuariosService
  ]
})
export class LoginModule { }
