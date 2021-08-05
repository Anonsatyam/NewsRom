import { Component, OnInit } from '@angular/core';
import { NewsRoomApiService } from '../service/news-room-api.service';

@Component({
  selector: 'app-top-headings',
  templateUrl: './top-headings.component.html',
  styleUrls: ['./top-headings.component.css']
})
export class TopHeadingsComponent implements OnInit {

  topHeadings: any = [];
  constructor(private service: NewsRoomApiService) { }

  ngOnInit(): void {
    this.fetchTopHeadings()
  }

  fetchTopHeadings() {
    this.service.topHeadings().subscribe((data) => {
      this.topHeadings = data.articles;
    });
  }

}
