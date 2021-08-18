import { Component, OnInit } from "@angular/core";
import { IBlog } from "src/models/blog";
import { DataService } from "../data/data-service.component";

@Component({
    selector: 'bg-blogCard',
    templateUrl: './blog-card.component.html',
    styleUrls: ['./blog-card.component.css']
})

export class BlogCardComponent implements OnInit{
    ngOnInit(): void {
        this.blogs = this.dataService.GetAllBlogs();
    }

    constructor(private dataService : DataService){
    }

    blogs: IBlog[] = [];       
    
}