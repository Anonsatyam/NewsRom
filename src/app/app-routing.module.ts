import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnologyComponent } from './technology/technology.component';
import { TopHeadingsComponent } from './top-headings/top-headings.component';

const routes: Routes = [
  { path: '', component: TopHeadingsComponent },
  { path: 'technology', component: TechnologyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
