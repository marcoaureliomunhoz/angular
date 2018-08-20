import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TarefasGuard } from './../guards/tarefas.guard';

import { TarefasComponent } from './tarefas.component';
import { CadTarefaComponent } from './cad-tarefa/cad-tarefa.component';
import { DetTarefaComponent } from './det-tarefa/det-tarefa.component';
import { FormDeactivateGuard } from '../guards/form-deactivate.guard';

import { TarefaResolver } from './guards/tarefa.resolver';

/* como o módulo de tarefas está sendo carregado por demanda
   não podemos incluir a palavra chave de acesso ao módulo
   nos paths das rotas */

const tarefasRoutes: Routes = [
  { path: '', component: TarefasComponent,
      canActivate: [ TarefasGuard ]
  },
  { path: ':id', component: CadTarefaComponent,
      canActivate: [ TarefasGuard ],
      canDeactivate: [ FormDeactivateGuard ]
  },
  { path: ':id/detalhar', component: DetTarefaComponent,
      canActivate: [ TarefasGuard ],
      /* o resolver é chamado antes de criar o component da rota */
      resolve: {
        tarefa: TarefaResolver
      }
  }
];

@NgModule({
    imports: [RouterModule.forChild(tarefasRoutes)],
    exports: [RouterModule]
})
export class TarefasRoutingModule {}
