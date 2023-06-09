import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { ProductComponentComponent } from './product-component/product-component.component';

const routes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  { path: 'product', component: ProductComponentComponent },
  { path: '', component: HomeComponentComponent },
  { path: '**', component: NotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
