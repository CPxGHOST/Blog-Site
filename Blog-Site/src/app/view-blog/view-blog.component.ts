import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './view-blog.component.html',
    styleUrls: ['./view-blog.component.css']
})

export class ViewBlogComponent implements OnInit{

    pageTitle: string = '';

    constructor(private route: ActivatedRoute){}
        
    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.pageTitle += id; 
    }

}