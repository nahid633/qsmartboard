import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';

@Injectable()
export class DataServiceService {

  constructor(private http: Http) { }
  getVideos() {
    return this.http.get('assets/video')
      .map(res => res.toString());
  }

}
