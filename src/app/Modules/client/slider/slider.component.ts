import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`)
  constructor() { }

  ngOnInit() {

  }



}
