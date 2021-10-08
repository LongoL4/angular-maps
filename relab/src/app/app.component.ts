import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  center : any;
  center2 : any;
  center3 : any;
  position : any;
  position2 : any;
  position3 : any;
  label :string;
  circleOptions: any;
  markerOptions: google.maps.MarkerOptions;
  markerOptions2: google.maps.MarkerOptions;
  markerOptions3: google.maps.MarkerOptions;
  vertices: google.maps.LatLngLiteral[]
  vertices2: google.maps.LatLngLiteral[];

  constructor()
  {
    let iconData : google.maps.Icon = {
      url:'./assets/img/cat_acrobat.ico',
      scaledSize : new google.maps.Size(60,60)
    }
    
    let iconData2 : google.maps.Icon = {
      url:'./assets/img/luigi.png',
      scaledSize : new google.maps.Size(60,60)
    }

    let iconData3 : google.maps.Icon = {
      url:'./assets/img/Mushroom.png',
      scaledSize : new google.maps.Size(60,60)
    }

    this.markerOptions = {icon:iconData}
    this.markerOptions2 = {icon:iconData2}
    this.markerOptions3 = {icon:iconData3}


    this.circleOptions = {fillColor : 'red'}
    this.center={lat: 45.506738, lng: 9.190766};
    this.center2={lat: 45.507238, lng: 9.191566}
    this.center3={lat: 45.505738, lng: 9.191766};
    this.position = this.center;
    this.position2 = this.center2;
    this.position3 = this.center3;
    this.label = "ciao";

    this.vertices = [
      {  lat: this.center.lat + 0.001, lng: this.center.lng - 0.002 },
      {  lat: this.center.lat, lng: this.center.lng },
      {  lat: this.center.lat - 0.001, lng: this.center.lng - 0.002}
    ];

    this.vertices2 = [
      {  lat: this.center.lat + 0.001, lng: this.center.lng  },
      {  lat: this.center.lat + 0.001, lng: this.center.lng + 0.001 },
      {  lat: this.center.lat - 0.001, lng: this.center.lng + 0.001},
      {  lat: this.center.lat - 0.001, lng: this.center.lng  }
    ];

  }
  yellow(){
    this.circleOptions = {fillColor : 'yellow'}
  }
  red(){
    this.circleOptions = {fillColor : 'red'}
  }
  green(){
    this.circleOptions = {fillColor : 'green'}
  }
}
