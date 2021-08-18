import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddBlogComponent } from './add-blog/add-blog.component';

import { AppComponent } from './app.component';
import { BlogCardComponent } from './blog-cards/blog-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BlogCardComponent,
    AddBlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [NavBarComponent , AppComponent]
})
export class AppModule { }
