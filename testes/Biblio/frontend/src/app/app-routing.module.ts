import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaComponent } from './editoras/lista/lista.component';
import { CadastroComponent } from './editoras/cadastro/cadastro.component';

const routes: Routes = [
  { path: '', component: ListaComponent },
  { path: 'cadastrar', component: CadastroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
