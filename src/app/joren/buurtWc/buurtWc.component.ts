import { Component } from "@angular/core";
import { WcService, IWc } from "../../services/wc.service";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import * as geolib from 'geolib';
import * as sortBy from 'sort-by';

@Component({
    selector: "app-buurtWc",
    templateUrl: "./buurtWc.component.html"
})

export class buurtWcComponent implements OnInit{
    data : IBuurtWc;
    wcLijst : IBuurtWc[] = [];
    wcLijstSorted : IBuurtWc[] = [];
    wcLocaties : ILocatie[] = [];
    dichtsteWc : IBuurtWc;
    lat : number;
    lng : number;
    wcLijstDistances : number[] = [];
    wcLijstDistancesSorted : number[] = [];
    numericArray: number[] = [2, 3, 4, 1, 5, 8, 11];
    public distance : number;
    public myService: WcService;
    
    constructor(private service : WcService){
        this.myService = service;
    }
    
    ngOnInit(){
        //this.GetMyPosition();
        setInterval(this.GetMyPosition(), 1000);
        this.service.getLijst().subscribe(result => this.data = this.MapResult(result));
        this.wcLijstSorted = this.wcLijst.sort(sortBy('wcLijst.distance'));
        //this.wcLijstDistancesSorted = this.wcLijstDistances.sort((n1.distance, n1.distance): number =>{});
        console.log("wclijst",this.wcLijst);
        console.log("wclijstsorted", this.wcLijstSorted);
        console.log("numeric array", this.numericArray);
        console.log("wclijstdistancessorted", this.wcLijstDistancesSorted);
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
    private MapResult(result : IWc) : IBuurtWc{
        for(var i=0; i < result.data.length; i++){
            var wc : IBuurtWc = 
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
            this.wcLijstDistances.push(wc.distance);
            this.wcLocaties.push(locatie);
            this.wcLijst.push(wc);
        }
        //console.log(wc);
        
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
interface IBuurtWc{
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