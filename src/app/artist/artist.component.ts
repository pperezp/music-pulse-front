import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {ApiConfig} from "../api-config";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  data: any;
  artist: any;
  apiConfig: ApiConfig;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.apiConfig = new ApiConfig();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let artistId: number = parseInt(params.get('id')!);
      this.callApiTest(artistId);
    });
  }

  callApiTest(artistId: number): void{
    this.http.get(`http://${this.apiConfig.ip}:${this.apiConfig.port}/api/v1/artists/${artistId}`).subscribe(data => {
      this.data = data;
      console.log(this.data);
      this.artist = this.data.artist;
    });
  }
}
