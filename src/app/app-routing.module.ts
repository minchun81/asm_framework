import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './admin/index/index.component';
import { ListCategoryComponent } from './admin/category/list-category/list-category.component';
import { ListProductComponent } from './admin/product/list-product/list-product.component';
import { ListUserComponent } from './admin/user/list-user/list-user.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: IndexComponent },
  { path: 'list-category', component: ListCategoryComponent },
  { path: 'list-product', component: ListProductComponent },
  { path: 'list-user', component: ListUserComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [IndexComponent]
})
export class AppRoutingModule { }
