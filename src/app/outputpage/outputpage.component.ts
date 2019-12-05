import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { freeApiService } from '../services/freeapi.service';
import { Comments } from '../classes/comments';
import { ActivatedRoute } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
@Component({
  selector: 'app-outputpage',
  templateUrl: './outputpage.component.html',
  styleUrls: ['./outputpage.component.css']
})
export class OutputpageComponent implements OnInit {
  id: any;
  lstcomments: any={};
  constructor(private routes: ActivatedRoute, private _freeApiService: freeApiService) {
    this.routes.params.subscribe(
      (params: any) => {
        console.log(params)
        this.id = params.id
      }
    )
  }

 
ngOnInit() {
    this._freeApiService.test(this.id)
      .subscribe(
        data => {
          console.log(data)
          this.lstcomments=data;
        }
      )
   }
 
   
  }