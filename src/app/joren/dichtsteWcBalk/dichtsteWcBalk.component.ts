import { Component } from "@angular/core";
import { WcService, IWc } from "../../services/wc.service";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import * as geolib from 'geolib';



@Component({
    selector: "app-dichtsteWcBalk",
    templateUrl: "./dichtsteWcBalk.component.html"
})
export class DichtsteWcBalkComponent implements OnInit {

    data : IDichtsteWc;
    wcLijst : IDichtsteWc[] = [];
    wcLocaties : ILocatie[] = [];
    dichtsteWc : IDichtsteWc;
    lat : number;
    lng : number;

        constructor(private service : WcService){
        }
    
        ngOnInit(){
            //this.GetMyPosition();
            setInterval(this.GetMyPosition(), 1000);
            this.service.getLijst().subscribe(result => this.data = this.MapResult(result));
            
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
            //console.log(this.lat, this.lng);
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
        private MapResult(result : IWc) : IDichtsteWc{
            for(var i=0; i < result.data.length; i++){
                var wc : IDichtsteWc = 
                {
                    distance : this.GetDistance(+result.data[i].point_lat, +result.data[i].point_lng),
                    straat : result.data[i].straat,
                    huisnr : result.data[i].huisnummer,
                    postcode : result.data[i].postcode,
                    district : result.data[i].district,
                    coordinates : {
                        latitude : +result.data[i].point_lat,
                        longitude : +result.data[i].point_lng
                    }
                }
                var locatie : ILocatie = {
                    coordinates: wc.coordinates
                }
                this.wcLocaties.push(locatie);
                this.wcLijst.push(wc);
            }
            function arrayMin(arr) { return Math.min.apply(Math, arr); };
            var distances = this.wcLijst.map(o => { return o.distance});
            var min = arrayMin(distances);
            var wc = this.wcLijst.find(x => x.distance == min);
            this.dichtsteWc = wc;
            //console.log(wc);
            console.log(wc);
            return wc;
        }
    }
    interface ILocatie{
        coordinates : IPosition
    }
    interface IPosition{
        latitude: number,
        longitude: number
    }
    interface IDichtsteWc{
    distance : number,
    straat : string,
    huisnr : string,
    postcode: string,
    district: string,
    coordinates:{
        latitude: number,
        longitude: number
    }
} 