import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprinComponent } from './imprin/imprin.component';
import { SlideshowComponent } from './slideshow/slideshow.component';

const routes: Routes = [
{path: '', component: SlideshowComponent},
{path:'imprin', component: ImprinComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



