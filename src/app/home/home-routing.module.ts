import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'ajuda',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/ajuda/ajuda.module').then(m => m.AjudaPageModule)
          }
        ]
      },
      {
        path: 'mensagem',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/mensagem/mensagem.module').then(m => m.MensagemPageModule)
          }
        ]
      },
      {
        path: 'online',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/online/online.module').then(m => m.OnlinePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/online',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/online',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
