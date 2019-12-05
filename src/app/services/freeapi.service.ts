
import {Injectable} from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class freeApiService
{
       
    constructor(private httpclient: HttpClient ){}
     
    getcomments(): Observable<any> {
        return this.httpclient.get("https://jsonplaceholder.typicode.com/users")
     
    }
    test(data: string){
        return this.httpclient.get('https://jsonplaceholder.typicode.com/users/'+data)
    }

}