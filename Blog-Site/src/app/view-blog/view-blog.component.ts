import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    templateUrl: './view-blog.component.html',
    styleUrls: ['./view-blog.component.css']
})

export class ViewBlogComponent{
    @Input() blogTitle: string = '';
    @Input() blogContent: string = '';
    @Input() blogCategory: string = '';

}