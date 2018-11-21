import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit, AfterViewInit {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 7,
      center: {lat: 41.85, lng: -87.65}
    });
  }
}
