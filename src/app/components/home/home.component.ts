import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  TituloMapas: string = '';
  lat: number = 43.478658;
  lng: number = -3.788884;

  constructor() { }

  ngOnInit() {
  }

}
