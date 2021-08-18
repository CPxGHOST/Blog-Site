import { Component } from "@angular/core";

@Component({
    selector: 'bg-addBlog',
    templateUrl: './add-blog.component.html',
    styleUrls: ['./add-blog.component.css']
})

export class AddBlogComponent{
    blogTitle: string =  'Demo';
    blogCategory: string = '';
    blogContent: string = '';

    func() : void{
        console.log('Hello');
    }

}