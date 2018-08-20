import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const appRoutes: Routes = [
  { path: 'tarefas',
      loadChildren: 'app/tarefas/tarefas.module#TarefasModule', /* lazy loading */
      canActivate: [ AuthGuard ],
      canLoad: [ AuthGuard ]
  },
  { path: 'usuarios',
      loadChildren: 'app/usuarios/usuarios.module#UsuariosModule', /* lazy loading */
      canActivate: [ AuthGuard ],
      canLoad: [ AuthGuard ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: false})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
