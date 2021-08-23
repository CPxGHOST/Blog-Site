import { getLocaleNumberFormat } from "@angular/common";
import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { ActivatedRoute, Router, RouterLinkWithHref } from "@angular/router";
import { BlogInterface } from "src/models/IBlog";
import { DataService } from "../data/data-service.component";

@Component({
    templateUrl: './view-blog.component.html',
    styleUrls: ['./view-blog.component.css']
})

export class ViewBlogComponent implements OnInit{

    pageTitle: string = '';
    blog!: any;
    pageContent: string = '';

    constructor(private route: ActivatedRoute , private dataService: DataService , private router: Router){}
        
    ngOnInit(): void {
        let id = String(this.route.snapshot.paramMap.get('id'));
        this.dataService.GetBlogById(id).subscribe(
            (res) => {
                this.blog = res;
                this.pageTitle = this.blog.title;
                this.pageContent = this.blog.content;
            }
        );
    }
    
    onBack(): void{
        this.router.navigate(['/']);
    }

}