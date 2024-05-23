import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListCategoryComponent } from './admin/category/list-category/list-category.component';
import { AddCategoryComponent } from './admin/category/add-category/add-category.component';
import { EditCategoryComponent } from './admin/category/edit-category/edit-category.component';
import { EditProductComponent } from './admin/product/edit-product/edit-product.component';
import { AddProductComponent } from './admin/product/add-product/add-product.component';
import { ListProductComponent } from './admin/product/list-product/list-product.component';
import { FooterComponent } from './admin/layouts/footer/footer.component';
import { ListUserComponent } from './admin/user/list-user/list-user.component';
import { AddUserComponent } from './admin/user/add-user/add-user.component';
import { EditUserComponent } from './admin/user/edit-user/edit-user.component';
import { ContactComponent } from './client/contact/contact/contact.component';
import { HeaderComponent } from './client/layouts/header/header.component';
import { LoginComponent } from './client/auth/login/login.component';
import { RegisterComponent } from './client/auth/register/register.component';
import { IndexComponent } from './client/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    EditProductComponent,
    AddProductComponent,
    ListProductComponent,
    FooterComponent,
    ListUserComponent,
    AddUserComponent,
    EditUserComponent,
    ContactComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
