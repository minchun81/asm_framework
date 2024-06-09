// src/app/admin/admin-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponentComponent,
    children: [
      { path: '', component: IndexComponent }, // Route mặc định cho admin
      { path: 'list-category', component: ListCategoryComponent },
      { path: 'edit-category', component: EditCategoryComponent },
      { path: 'add-category', component: AddCategoryComponent },
      { path: 'list-product', component: ListProductComponent },
      { path: 'edit-product', component: EditProductComponent },
      { path: 'add-product', component: AddProductComponent },
      { path: 'list-user', component: ListUserComponent },
      { path: 'edit-user', component: EditUserComponent },
      { path: 'add-user', component: AddUserComponent },
    ]
  },
  { path: '**', redirectTo: 'admin' } // Route wildcard để chuyển hướng về admin
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
