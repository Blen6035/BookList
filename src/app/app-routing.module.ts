import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'book-list', pathMatch: 'full' },
  { path: 'home', loadChildren: './book-list/book-list.module#book-listModule' },
  { path: 'book-list', loadChildren: './book-list/book-list.module#BookListPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
