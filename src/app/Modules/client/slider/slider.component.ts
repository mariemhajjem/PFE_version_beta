import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  images = ['../../../../assets/client/images/apple1.jpg', '../../../../assets/client/images/paperwork.jpg', '../../../../assets/client/images/student.jpg'];
  constructor() { }

  ngOnInit() {

  }



}
