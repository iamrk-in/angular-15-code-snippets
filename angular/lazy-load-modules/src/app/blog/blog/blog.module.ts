import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { SigninComponent } from '../signin/signin.component';
import { BlogDetailsComponent } from '../blog-details/blog-details.component';


@NgModule({
  declarations: [
    SigninComponent, 
    BlogDetailsComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
