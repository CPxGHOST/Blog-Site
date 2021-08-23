import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddBlogComponent } from './add-blog/add-blog.component';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { BlogCardComponent } from './blog-cards/blog-card.component';
import { RouterModule } from '@angular/router';
import { ViewBlogComponent } from './view-blog/view-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogCardComponent,
    AddBlogComponent,
    ViewBlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'AllBlogs', component: BlogCardComponent},
      {path: '' , component: BlogCardComponent},
      {path: 'AddBlog' , component: AddBlogComponent},
      {path: 'ViewBlog/:id' , component: ViewBlogComponent      }
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
