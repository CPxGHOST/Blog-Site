import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import {tap , catchError} from 'rxjs/operators'
import { IBlog } from "src/models/blog";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
    providedIn: 'root'
})
export class DataService{
  
    private dataUrl = 'api/data/blogs.json'
    constructor(private http : HttpClient){}

    GetAllBlogs(): Observable<IBlog[]>{
        return this.http.get<IBlog[]>(this.dataUrl).pipe(
            tap(data=> console.log('All',JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    // AddBlog(blog: IBlog) : Observable<object>{
    //    let body = JSON.stringify(blog);
    //    this.http.post(this.dataUrl , body , httpOptions).pipe(
    //        tap(data=>)
    //    )
    // }


    private handleError(err : HttpErrorResponse){
        console.log(err);
        return throwError(err);
    }

}