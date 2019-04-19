import { Component, OnInit } from '@angular/core';
import { DynamicScriptLoaderService } from '../service/dynamic-script-loader.service';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) { }

  ngOnInit() {
    this.loadScripts();
  }
  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('scroll').then(data => {
      // Script Loaded Successfully
    }).catch(error => console.log(error));
  }

}
