import { Component, OnInit } from '@angular/core';
import { ConcertgebouwenService, IConcertgebouwen } from '../../services/concertgebouwen.service';

@Component({
  selector: 'app-concertgebouw',
  templateUrl: './concertgebouw.component.html'
})
export class ConcertgebouwComponent implements OnInit {
    data : IConcertgebouw[];
    concertgebouwIDs : number[] = [];
    concertgebouwLijst : IConcertgebouw[] = [];
    concertgebouwFound : IConcertgebouw;
    
    constructor(private service : ConcertgebouwenService){}

    private _search : string;
    ngOnInit() {
      this.service.getLijst().subscribe(result => this.data = this.MapResult(result));
      //this.service.getLijst().subscribe(result => this.data = this.MapResult(result));
    }

    private MapResult(result : IConcertgebouwen) : IConcertgebouw[]{
      for(var i=0; i < result.data.length; i++){
        var concertgeb : IConcertgebouw = {
          id : result.data[i].id,
          naam : result.data[i].naam,
          thema : result.data[i].thema,
          type : result.data[i].type,
          straat : result.data[i].straat,
          huisnr : result.data[i].huisnummer,
          district : result.data[i].district
        }
        this.concertgebouwIDs.push(i);
        this.concertgebouwLijst.push(concertgeb);
      }
      return this.concertgebouwLijst;
  }

  SearchConcertgebouw = (search : string) => {
    var temp = this.FilterName(search);
    this.concertgebouwFound = temp;
  }

  private FilterName(search : string) : IConcertgebouw{
    return this.concertgebouwLijst.find(x => x.naam == search);
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
