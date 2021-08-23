import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data/data-service.component';

@Component({
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  form!: FormGroup;
  oldBlog! : any;

  constructor(private formBuilder: FormBuilder , public dataService: DataService , private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = String(this.route.snapshot.paramMap.get('id'));
    this.dataService.GetBlogById(id).subscribe(
      (res) => {
        this.oldBlog = res;
        this.form = this.formBuilder.group({
          _id: this.oldBlog._id,
          title: this.oldBlog.title,
          category: this.oldBlog.category,
          content: this.oldBlog.content
  
        })
        
      }
  );
  }

  onSubmit(){
    if(this.form.valid){
        this.dataService.EditBlog(this.form.value).subscribe(
            (res) => {
                alert('Blog saved!');
                this.router.navigate(['/AllBlogs']);
            },
            err => {
                console.log(err);
            }
        )
    }
  }

  onBack(): void{
    this.router.navigate(['/']);
}

}
