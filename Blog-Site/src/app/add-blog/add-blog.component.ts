import { Input, OnDestroy, OnInit, Output } from "@angular/core";
import { Component, EventEmitter} from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

import { IBlog } from "src/models/blog";
import { DataService } from "../data/data-service.component";

@Component({
    templateUrl: './add-blog.component.html',
    styleUrls: ['./add-blog.component.css']
})

export class AddBlogComponent implements OnInit{
    
    constructor(public dataService : DataService , private router: Router){}
   
    ngOnInit(): void {
        // this.form = this.formBuilder.group({
        //     _id: [''],
        //     title: ['' , Validators.required],
        //     category: ['', Validators.required],
        //     content: ['', Validators.required]
        // });
    }
      
    // onSubmit(){
    //   if(this.form.valid){
    //       this.dataService.AddBlog(this.form.value).subscribe(
    //           (res) => {
    //               alert('Blog saved!');
    //               this.router.navigate(['/AllBlogs']);
    //           },
    //           err => {
    //               console.log(err);
    //           }
    //       )
    //   }
    // }

    onSubmit2(signInForm: NgForm){
        if(signInForm.valid){
            console.log(signInForm.value);   
            this.dataService.AddBlog(signInForm.value).subscribe(
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