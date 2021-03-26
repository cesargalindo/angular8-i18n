import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: 'hi',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: 'es',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: 'en-US',
        redirectTo: '/',
        pathMatch: 'full'
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
