import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './admin/index/index.component';
import { ListCategoryComponent } from './admin/category/list-category/list-category.component';
import { ListProductComponent } from './admin/product/list-product/list-product.component';
import { ListUserComponent } from './admin/user/list-user/list-user.component';
import { AddCategoryComponent } from './admin/category/add-category/add-category.component';
import { EditCategoryComponent } from './admin/category/edit-category/edit-category.component';
import { AddProductComponent } from './admin/product/add-product/add-product.component';
import { EditProductComponent } from './admin/product/edit-product/edit-product.component';
import { AddUserComponent } from './admin/user/add-user/add-user.component';
import { EditUserComponent } from './admin/user/edit-user/edit-user.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: IndexComponent },
  //category
  { 
    path: 'list-category',
    component: ListCategoryComponent,
    children: [
      { path: 'add-category', component: AddCategoryComponent },
      { path: 'edit-category', component: EditCategoryComponent },
      // Các route khác cho list-category
    ]
  },
  
  //product
  { 
    path: 'list-product',
    component: ListProductComponent,
    children: [
      { path: 'add-product', component: AddProductComponent },
      { path: 'edit-product', component: EditProductComponent },
      // Các route khác cho list-category
    ]
  },
  //user
  { 
    path: 'list-user',
    component: ListUserComponent,
    children: [
      { path: 'add-user', component: AddUserComponent },
      { path: 'edit-user', component: EditUserComponent },
      // Các route khác cho list-category
    ]
  },

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [IndexComponent]
})
export class AppRoutingModule { }
