// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { Routes, RouterModule } from '@angular/router';



// @ts-ignore
// @ts-ignore
const routes: Routes = [
  {
    path: 'book',
    loadChildren: () => import('./book/book.module').then(module => module.BookModule)
  },
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
