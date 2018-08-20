import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsuariosRoutingModule } from './usuarios.routing.module';

import { UsuariosService } from './usuarios.service';
import { UsuariosComponent } from './usuarios.component';
import { CadUsuarioComponent } from './cad-usuario/cad-usuario.component';
import { DetUsuarioComponent } from './det-usuario/det-usuario.component';
import { UsuariosGuard } from '../guards/usuarios.guard';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      UsuariosRoutingModule
    ],
    exports: [],
    declarations: [
      UsuariosComponent,
      CadUsuarioComponent,
      DetUsuarioComponent
    ],
    providers: [
      UsuariosService,
      UsuariosGuard
    ],
})
export class UsuariosModule { }
