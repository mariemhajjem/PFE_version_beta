import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  images = ['../../../../assets/client/images/Capture1.JPG', '../../../../assets/client/images/Capture.JPG', '../../../../assets/client/images/Capture3.JPG','../../../../assets/client/images/Capture4.JPG'];
  constructor() { }

  ngOnInit() {

  }



}
