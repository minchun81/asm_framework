import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    ListCategoryComponent,
    HeaderComponent,
    FooterComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    EditProductComponent,
    AddProductComponent,
    ListProductComponent,
    ListUserComponent,
    AddUserComponent,
    EditUserComponent,
    AdminComponentComponent,
    IndexComponent

  ]
})
export class AdminModule { }
