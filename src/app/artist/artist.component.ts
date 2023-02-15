import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  data: any;
  artist: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let artistId: number = parseInt(params.get('id')!);
      this.callApiTest(artistId);
    });
  }

  callApiTest(artistId: number){
    this.http.get(`http://localhost:8080/api/v1/artists/${artistId}`).subscribe(data => {
      this.data = data;
      console.log(this.data);
      this.artist = this.data.artist;
    });
  }
}
