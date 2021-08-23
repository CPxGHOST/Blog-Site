import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { IBlog } from "src/models/blog";
import { BlogInterface } from "src/models/IBlog";
import { DataService } from "../data/data-service.component";

@Component({
    templateUrl: './blog-card.component.html',
    styleUrls: ['./blog-card.component.css']
})

export class BlogCardComponent implements OnInit{
    
    blogs: BlogInterface[] = []; 
    subscription!: Subscription;
    data: any;

    constructor(private dataService : DataService , private router: Router){  }

     ngOnInit(): void {
        this.dataService.GetAllBlogs().subscribe(
            (blogs) => {this.data = blogs;
                console.log(this.data.length);  
                this.blogs = this.data;
            }
        ); 
    }

     moveToAddBlog(){
        this.router.navigate(['/AddBlog']);
    }      
    
    deleteBlog(id: string){
        this.dataService.DeleteBlog(id).subscribe(
            () => {
                window.location.reload();
            }
        );
    }
}