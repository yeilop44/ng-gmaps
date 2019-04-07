import { Component, OnInit, ViewChild } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-afiliados',
  templateUrl: './afiliados.component.html',
  styleUrls: ['./afiliados.component.css']
})
export class AfiliadosComponent implements OnInit {
  @ViewChild('map') mapElement: any;
  @ViewChild('search') public searchElement: any;
  map: google.maps.Map;

  mapPro: google.maps.Map;
  marker: any;

  lat = 6.231928;
  lng = -75.60116719999996;
  places: any;
  bounds: any;
  searchBox: any;



  constructor() { }

  ngOnInit() {

    let mapProp = {
      center: new google.maps.LatLng(4.2223, -74.3333),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(this.mapElement.nativeElement, mapProp);

      var marker = new google.maps.Marker({
        position: {lat: 4.2223, lng: -74.3333},
        map: map,
        draggable: true
      });


    var searchBox = new google.maps.places.SearchBox(this.searchElement.nativeElement);

    google.maps.event.addListener(searchBox, 'places_changed', () => {
     var places = searchBox.getPlaces();
     var bounds = new google.maps.LatLngBounds();
     var i, place;
     console.log(places[0].formatted_address);
     console.log(bounds);

    for ( i = 0 ;  place = places[i]; i++) {
       bounds.extend(place.geometry.location);
       marker.setPosition(place.geometry.location);
     }
     map.fitBounds(bounds);
     map.setZoom(14);  

   });
  }

}
