import { Component, OnInit } from '@angular/core';
import { NewsRoomApiService } from '../service/news-room-api.service';


@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  techNewsData: any = [];
  constructor(private service: NewsRoomApiService) { }

  ngOnInit(): void {
    this.fetchTechNews()
  }

  fetchTechNews() {
    this.service.techNews().subscribe((data) => {
      this.techNewsData = data.articles;
      console.log(data);

    });
  }

}
