import { Component, OnInit } from '@angular/core';
import { MuseaService, IMusea } from '../../services/musea.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-museum',
  templateUrl: './museum.component.html'
})
export class MuseumComponent implements OnInit {
    data : IMuseum[];
    museumLijst : IMuseum[] = [];
    museumIDs : number[] = [];
    museumFound : IMuseum;
    constructor(private service : MuseaService){}

    private _search : string;

    ngOnInit() {
      this.service.getLijst().subscribe(result => this.data = this.MapResult(result));
        //setInterval(this.SearchMuseum, 2000);
      console.log(this.data);
    }
    SearchMuseum = (search : string) => {
      var temp = this.FilterName(search);
      this.museumFound = temp;
    }
    private MapResult(result : IMusea) : IMuseum[]{
      for(var i=0; i < result.data.length; i++){
        var museum : IMuseum = 
        {
            id : result.data[i].id,
            naam : result.data[i].naam,
            thema : result.data[i].thema,
            type : result.data[i].type,
            straat : result.data[i].straat,
            huisnr : result.data[i].huisnummer,
            district : result.data[i].district,
            lat : +result.data[i].point_lat,
            lng : +result.data[i].point_lng
        }
        this.museumIDs.push(i);
        this.museumLijst.push(museum);
      }
      return this.museumLijst;
    }
    private FilterName(search : string) : IMuseum{
      return this.museumLijst.find(x => x.naam == search);
    }
}
interface IMuseum{
    id : string,
    naam : string,
    thema : string,
    type : string,
    straat: string,
    huisnr: string,
    district: string,
    lat: number,
    lng: number
}
