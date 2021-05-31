import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'encuestas',
    loadChildren: () => import('./pages/encuestas/encuestas.module').then( m => m.EncuestasPageModule)
  },
  {
    path: 'crearencuesta',
    loadChildren: () => import('./pages/crearencuesta/crearencuesta.module').then( m => m.CrearencuestaPageModule)
  },
  {
    path: 'crearencuesta/:id',
    loadChildren: () => import('./pages/crearencuesta/crearencuesta.module').then( m => m.CrearencuestaPageModule)
  },
  {
    path: 'resultado',
    loadChildren: () => import('./pages/resultado/resultado.module').then( m => m.ResultadoPageModule)
  },
  {
    path: 'preguntas',
    loadChildren: () => import('./pages/preguntas/preguntas.module').then( m => m.PreguntasPageModule)
  },
   {
    path: 'preguntas/:id',
    loadChildren: () => import('./pages/preguntas/preguntas.module').then( m => m.PreguntasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
