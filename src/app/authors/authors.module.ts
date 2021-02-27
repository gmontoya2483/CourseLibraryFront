import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { ListComponent } from './pages/list/list.component';
import { AuthorComponent } from './pages/author/author.component';
import { AddComponent } from './pages/add/add.component';


@NgModule({
  declarations: [
    ListComponent,
     AuthorComponent,
      AddComponent
    ],
  imports: [
    CommonModule,
    AuthorsRoutingModule
  ]
})
export class AuthorsModule { }
