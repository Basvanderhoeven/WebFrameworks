import { Component, OnInit } from '@angular/core';
import { MuseaService, IMusea } from '../../services/musea.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-museum',
  templateUrl: './museum.component.html'
})
export class MuseumComponent implements OnInit {
    data : IMusea;
    
    constructor(private service : MuseaService){}

    private _search : string;

    ngOnInit() {
        this.service.getLijst().subscribe(result => this.data = result);
        //setInterval(this.SearchMuseum, 2000);
    }
    get search(){
      return this._search;
    }
    set search(value){
      this._search = value;
    }
    searchMuseum = () => {
      console.log(this.search);
      this.service.getLijst().
        map(musea => {
          let fl = musea.data.filter(museum => museum.naam === this.search);
          return (fl.length > 0) ? fl[0] : null;
        }).subscribe(result => this.data = result[0]);
    }
    private MapResult(result : IMusea) : IMuseum{
      return{
          id : result.data[0].id,
          naam : result.data[0].naam,
          thema : result.data[0].thema,
          type : result.data[0].type,
          straat : result.data[0].straat,
          huisnr : result.data[0].huisnummer,
          district : result.data[0].district
      }
          
  }
  
}
interface IMuseum{
    id : string,
    naam : string,
    thema : string,
    type : string,
    straat: string,
    huisnr: string,
    district: string
}
