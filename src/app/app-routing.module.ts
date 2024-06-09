import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IndexComponent as ClientIndexComponent } from './client/index/index.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ClientIndexComponent },
  //category
  // { 
  //   path: 'list-category',
  //   component: ListCategoryComponent,
  //   children: [
  //     { path: 'add-category', component: AddCategoryComponent },
  //     { path: 'edit-category', component: EditCategoryComponent },
  //   ]
  // },
  
  // //product
  // { 
  //   path: 'list-product',
  //   component: ListProductComponent,
  //   children: [
  //     { path: 'add-product', component: AddProductComponent },
  //     { path: 'edit-product', component: EditProductComponent },
  //   ]
  // },
  // //user
  // { 
  //   path: 'list-user',
  //   component: ListUserComponent,
  //   children: [
  //     { path: 'add-user', component: AddUserComponent },
  //     { path: 'edit-user', component: EditUserComponent },
  //   ]
  // },

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
})
export class AppRoutingModule { }
