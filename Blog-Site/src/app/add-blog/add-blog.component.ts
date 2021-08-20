import { Input, OnDestroy, Output } from "@angular/core";
import { Component, EventEmitter} from "@angular/core";
import { Subscription } from "rxjs";

import { IBlog } from "src/models/blog";
import { DataService } from "../data/data-service.component";

@Component({
    templateUrl: './add-blog.component.html',
    styleUrls: ['./add-blog.component.css']
})

export class AddBlogComponent{
    
    constructor(private dataService : DataService){}
   
    // subscription!: Subscription;

    // ngOnDestroy(): void {
    //    this.subscription.unsubscribe();
    // }
    
    blogs!: IBlog[];
    blog: IBlog = {
        blogId: -1,
        blogTitle: '',
        blogContent: '',
        blogCategory: ''
    }; 

    
    addBlog() : void{
    //   this.subscription = this.dataService.AddBlog(this.blog).subscribe({
    //     next: data => console.log(data),
    //     error: err => console.log(err)
    //   });
    }  

    getBlogId(): void{  
       let id : number = -1;
       this.dataService.GetAllBlogs().subscribe({
            next: blogs => {
                this.blogs = blogs;
                this.blog.blogId = this.blogs[this.blogs.length-1].blogId+1;
                this.addBlog();
            },
            error: err => console.log(err)
        });

        
       
    }

}