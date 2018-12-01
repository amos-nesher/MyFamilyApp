import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { FamilyMember, FamilyMemebersService } from '../services/family-memebers.service';
import { Unsubscribable } from 'rxjs';

declare var google: any;

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('map') mapElement: ElementRef;
  public familyMembers: Array<FamilyMember> = [];
  private unsubscribe: Unsubscribable;
  map: any;
  markers: Array<any> = [];

  constructor(familyMemeberService: FamilyMemebersService) { 
    this.unsubscribe = familyMemeberService.getFamilyMemebersSubject().subscribe((familyMemebers) => {
      this.familyMembers = familyMemebers;

      if (this.map) {
        this.updateMarkers();
      }
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnDestroy() {
    this.unsubscribe.unsubscribe();
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 14,
      center: {lat: 31.89, lng: 34.81},
      mapTypeControl: false,
      streetViewControl: false,
    });

    if (this.familyMembers) {
      this.updateMarkers();
    }
  }

  showMemeber(member: FamilyMember) {
    console.log("showMemeber: " + member.name);
    this.map.setCenter(member.location);
  }

  updateMarkers() {
    this.clearMarkers();
    this.familyMembers.forEach(member => {
      const marker = new google.maps.Marker({position: member.location, map: this.map});
      this.markers.push();
    });
  }

  clearMarkers() {
    this.markers.forEach((marker:any) => {
      marker.setMap(null);
    });
    this.markers = [];
  }

  
}
