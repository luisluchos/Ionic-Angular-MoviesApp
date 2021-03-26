import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {path: '',redirectTo: 'movies',pathMatch: 'full'},

  {
    path: 'movies',
    children:[
      {
        path:'',
        loadChildren: () => import('./pages/movies/movies.module').then( m => m.MoviesPageModule)
      },
      {
        path:':movieId',
        loadChildren: () => import('./pages/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
      }
    ]    
  },

  { path: '404',  loadChildren: () => import('./pages/page-not-found/page-not-found.module').then( m => m.PageNotFoundPageModule) },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
