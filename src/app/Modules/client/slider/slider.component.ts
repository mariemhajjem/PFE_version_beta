import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  images = ['../../../../assets/client/images/computer.jpg', '../../../../assets/client/images/women.jpg', '../../../../assets/client/images/student.jpg'];
  constructor() { }

  ngOnInit() {

  }



}
