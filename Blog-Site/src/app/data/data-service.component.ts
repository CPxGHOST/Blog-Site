import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import {tap , catchError} from 'rxjs/operators'
import { IBlog } from "src/models/blog";
import { BlogInterface } from "src/models/IBlog";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
    providedIn: 'root'
})
export class DataService{
  
    private dataUrl = 'api/data/blogs.json';
    private dummyUrl = 'http://localhost:3000/blogs/'
    constructor(private http : HttpClient){}

    selectedBlog!: BlogInterface;

    GetAllBlogs() {
     return this.http.get(this.dummyUrl);
    }

    AddBlog(blog : BlogInterface){
       return this.http.post(this.dummyUrl , blog); 
    }

    DummyFunction() {
       return this.http.get(this.dummyUrl);
    }

    private handleError(err : HttpErrorResponse){
        console.log(err);
        return throwError(err);
    }

}