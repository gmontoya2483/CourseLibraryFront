import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/pages/error-page/error-page.component';

const routes: Routes = [
{
  path: 'authors',
  loadChildren: () => import('./authors/authors.module').then (m => m.AuthorsModule)
},
{
  path: '404',
  component: ErrorPageComponent
},
{
  path: '**',
  redirectTo: '404'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
