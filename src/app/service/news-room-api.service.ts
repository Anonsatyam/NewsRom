import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsRoomApiService {

  constructor(private http: HttpClient) { }

  //Api URL
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=2dca3d5d094c4e73bb595283f295de89"
  techUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=2dca3d5d094c4e73bb595283f295de89"

  topHeadings(): Observable<any> {
    return this.http.get(this.newsApiUrl);
  }

  techNews(): Observable<any> {
    return this.http.get(this.techUrl);

  }
}
