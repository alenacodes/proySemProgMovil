import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablinksPage } from './tablinks.page';

const routes: Routes = [
  {
    path: 'tablinks',
    component: TablinksPage,
    children: [
    {
      path: 'perfil',
      loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
    },
    {
      path:'inicio',
      loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
    },
    {
      path:'configuracion',
      loadChildren: () => import('../configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
    },
    {
      path:'',
      redirectTo: '/tablinks/perfil',
      pathMatch: 'full'
    },

    ]
  },
  {
    path: '',
    redirectTo: '/tablinks/perfil',
    pathMatch: 'full'
  },
];
/*
const routes: Routes = [
  {
    path: '',
    component: TablinksPage
  }
];
*/

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule {}
