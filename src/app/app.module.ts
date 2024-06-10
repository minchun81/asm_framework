import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './/app-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ListCategoryComponent } from './admin/category/list-category/list-category.component';
import { AddCategoryComponent } from './admin/category/add-category/add-category.component';
import { EditCategoryComponent } from './admin/category/edit-category/edit-category.component';
import { EditProductComponent } from './admin/product/edit-product/edit-product.component';
import { AddProductComponent } from './admin/product/add-product/add-product.component';
import { ListProductComponent } from './admin/product/list-product/list-product.component';
import { FooterComponent } from './admin/layouts/footer/footer.component';
import { HeaderComponent } from './admin/layouts/header/header.component';
import { ListUserComponent } from './admin/user/list-user/list-user.component';
import { AddUserComponent } from './admin/user/add-user/add-user.component';
import { EditUserComponent } from './admin/user/edit-user/edit-user.component';
import { ContactComponent } from './client/contact/contact/contact.component';
import { LoginComponent } from './client/auth/login/login.component';
import { RegisterComponent } from './client/auth/register/register.component';
import { ClientIndexComponent } from './client/client-index/client-index.component';
import { ClientProductComponent } from './client/client-product/client-product.component';


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
    ClientIndexComponent,
    ClientProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
