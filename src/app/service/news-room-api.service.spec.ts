import { TestBed } from '@angular/core/testing';

import { NewsRoomApiService } from './news-room-api.service';

describe('NewsRoomApiService', () => {
  let service: NewsRoomApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsRoomApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
