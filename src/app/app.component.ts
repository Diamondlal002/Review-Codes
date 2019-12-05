import { Component } from '@angular/core';
import { freeApiService } from './services/freeapi.service';

import { Comments } from './classes/comments';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';

const newLocal = "https://jsonplaceholder.typicode.com/users/";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'API-GET  with Routing and Navigation';
  arrabc: string[];
constructor(private_freeApiService: freeApiService){

}
ngOnInit(){
  
}

}