import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IBlog } from "src/models/blog";
import { DataService } from "../data/data-service.component";

@Component({
    // selector: 'bg-blogCard',
    templateUrl: './blog-card.component.html',
    styleUrls: ['./blog-card.component.css']
})

export class BlogCardComponent implements OnInit , OnDestroy{
    blogs: IBlog[] = []; 
    subscription!: Subscription;

    ngOnInit(): void {
        this.subscription = this.dataService.GetAllBlogs().subscribe({
            next: blogs => this.blogs = blogs,
            error: err => console.log(err)
        });
    }

    constructor(private dataService : DataService){
    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

          
    
}