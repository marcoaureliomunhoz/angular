import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuariosGuard } from './../guards/usuarios.guard';

import { UsuariosComponent } from './usuarios.component';
import { CadUsuarioComponent } from './cad-usuario/cad-usuario.component';
import { DetUsuarioComponent } from './det-usuario/det-usuario.component';
import { FormDeactivateGuard } from './../guards/form-deactivate.guard';

const usuariosRoutes: Routes = [
  { path: '', component: UsuariosComponent,
      canActivate: [ UsuariosGuard ]
  },
  { path: ':id', component: CadUsuarioComponent,
      canActivate: [ UsuariosGuard ],
      canDeactivate: [ FormDeactivateGuard ]
  },
  { path: ':id/detalhar', component: DetUsuarioComponent,
      canActivate: [ UsuariosGuard ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(usuariosRoutes)],
    exports: [RouterModule]
})
export class UsuariosRoutingModule {}
