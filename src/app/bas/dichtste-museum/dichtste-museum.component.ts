import { Component, OnInit } from '@angular/core';
import { MuseaService, IMusea } from "../../services/musea.service";
import * as geolib from 'geolib';

@Component({
  selector: 'app-dichtste-museum',
  templateUrl: './dichtste-museum.component.html',
  styleUrls: ['./dichtste-museum.component.scss']
})
export class DichtsteMuseumComponent implements OnInit {

    data : IDichtsteMuseum;
    museumLijst : IDichtsteMuseum[] = [];
    museumLocaties : ILocatie[] = [];
    dichtsteMuseum : IDichtsteMuseum;
    lat : number;
    lng : number;

        constructor(private service : MuseaService){
        }
    
        ngOnInit(){
            this.service.getLijst().subscribe(result => this.data = this.MapResult(result));
            console.log(this.dichtsteMuseum);
            this.GetMyPosition();
            //this.GetDistance();
            
        }
        GetMyPosition = () => {
            //this.myLocation.latitude = position.coords.latitude;
            //this.myLocation.longitude = position.coords.longitude;
            //console.log(this.myLocation);
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(
                    position => {
                        this.lat = position.coords.latitude;
                        this.lng = position.coords.longitude;
                        //this.myPosition.latitude = position.coords.latitude;
                        //this.myPosition.longitude = position.coords.longitude;
                    });
                }
            
        }
        GetDistance = (_lat, _lng) => {
            console.log(this.lat, this.lng);
            var distance = geolib.getDistance(
                { 
                    latitude : this.lat, 
                    longitude : this.lng
                }, 
                {
                    latitude : _lat, 
                    longitude : _lng
                }
            );
            return distance;
            
        }
        private MapResult(result : IMusea) : IDichtsteMuseum{
            for(var i=0; i < result.data.length; i++){
                var museum : IDichtsteMuseum = 
                {
                    distance : this.GetDistance(+result.data[i].point_lat, +result.data[i].point_lng),
                    naam : result.data[i].naam,
                    straat : result.data[i].straat,
                    huisnr : result.data[i].huisnummer,
                    postcode : result.data[0].postcode,
                    district : result.data[i].district,
                    coordinates : {
                        latitude : +result.data[i].point_lat,
                        longitude : +result.data[i].point_lng
                    }
                }
                var locatie : ILocatie = {
                    naam: result.data[i].naam,
                    coordinates: museum.coordinates
                }
                this.museumLocaties.push(locatie);
                this.museumLijst.push(museum);
            }
            function arrayMin(arr) { return Math.min.apply(Math, arr); };
            var distances = this.museumLijst.map(o => { return o.distance});
            var min = arrayMin(distances);
            var museum = this.museumLijst.find(x => x.distance == min);
            this.dichtsteMuseum = museum;
            console.log(museum);
            return this.dichtsteMuseum;
        }
    }
    interface ILocatie{
        naam : string,
        coordinates : IPosition
    }
    interface IPosition{
        latitude: number,
        longitude: number
    }
    interface IDichtsteMuseum{
    distance : number,
    naam : string,
    straat : string,
    huisnr : string,
    postcode: string,
    district: string,
    coordinates:{
        latitude: number,
        longitude: number
    }
}