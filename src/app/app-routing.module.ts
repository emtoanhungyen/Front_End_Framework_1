import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './components/demo.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: 'demo', component: DemoComponent },
  { path: 'table', component: PagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
