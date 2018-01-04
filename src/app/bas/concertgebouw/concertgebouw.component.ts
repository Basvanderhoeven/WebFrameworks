import { Component, OnInit } from '@angular/core';
import { ConcertgebouwenService, IConcertgebouwen } from '../../services/concertgebouwen.service';

@Component({
  selector: 'app-concertgebouw',
  templateUrl: './concertgebouw.component.html'
})
export class ConcertgebouwComponent implements OnInit {
    data : IConcertgebouwen;
    
    constructor(private service : ConcertgebouwenService){}

    private _search : string;
    ngOnInit() {
      this.service.getLijst().subscribe(result => this.data = result);
      //this.service.getLijst().subscribe(result => this.data = this.MapResult(result));
    }
    get concertgebouwSearch(){
      return this._search;
    }
    set concertgebouwSearch(value : string){
      this._search = value;
    }
    private MapResult(result : IConcertgebouwen) : IConcertgebouw{
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
interface IConcertgebouw{
    id : string,
    naam : string,
    thema : string,
    type : string,
    straat: string,
    huisnr: string,
    district: string
}
