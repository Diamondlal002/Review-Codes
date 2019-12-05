import { Component, OnInit } from '@angular/core';
import { freeApiService } from '../services/freeapi.service';
import { Comments } from '../classes/comments';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  constructor(private _freeApiservice: freeApiService) {
  }
  private _lstcomments: Comments[];
  public get lstcomments(): Comments[] {
    return this._lstcomments;
  }
  public set lstcomments(value: Comments[]) {
    this._lstcomments = value;
  }
  person = {};
  ngOnInit() {
    this._freeApiservice.getcomments()
      .subscribe(data => {
        this.lstcomments = data;
      });
  }
  get(id: any) {
    this._freeApiservice.test(id).subscribe((res: any) => {
      console.log(res);
    });
  }
}
