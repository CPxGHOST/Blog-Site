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
  
    private dataUrl = 'http://localhost:3000/blogs/'
    constructor(private http : HttpClient){}

    selectedBlog!: BlogInterface;

    GetAllBlogs() : Observable<BlogInterface[]> {
     return this.http.get<BlogInterface[]>(this.dataUrl);
    }

    AddBlog(blog : BlogInterface){
       return this.http.post(this.dataUrl , blog); 
    }

    GetBlogById(id: string) : Observable<BlogInterface>{
        return this.http.get<BlogInterface>(`${this.dataUrl}/${id}`);
    }

    EditBlog(updatedBlog: BlogInterface){
      return this.http.put(`${this.dataUrl}/${updatedBlog._id}`,updatedBlog);
    }

    DeleteBlog(id: string){
     return this.http.delete(`${this.dataUrl}/${id}`);
    }
    

}