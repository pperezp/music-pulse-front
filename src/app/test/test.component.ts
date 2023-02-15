import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  constructor(private http: HttpClient) {
    this.getData();
  }

  getData() {
    this.http.get('https://pokeapi.co/api/v2/pokemon/ditto').subscribe(data => {
      console.log(data);
    });
  }
}
