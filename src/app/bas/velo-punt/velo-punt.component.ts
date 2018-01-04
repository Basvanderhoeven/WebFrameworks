import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VeloPuntenService, IVeloPunten } from '../../services/velopunten.service';

@Component({
  selector: 'app-velo-punt',
  templateUrl: './velo-punt.component.html'
})
export class VeloPuntComponent implements OnInit {
    data : IVeloPunt[];
    velopuntFound : IVeloPunt;
    velopuntenLijst : IVeloPunt[] = [];
    velopuntenIDs : number[] = [];
    
    constructor(private service : VeloPuntenService){}
    ngOnInit() {
      this.service.getLijst().subscribe(result => this.data = this.MapResult(result));
      console.log(this.velopuntenLijst);
        //setInterval(this.SearchMuseum, 2000);
    }
    SearchVeloPunt = (search : string) => {
      var temp = this.FilterName(search);
      this.velopuntFound = temp;
      
    }
    private MapResult(result : IVeloPunten) : IVeloPunt[]{
      for(var i=0; i < result.data.length; i++){
        var velopunt : IVeloPunt = 
        {
            id : result.data[i].id,
            straatnaam : result.data[i].straatnaam,
            huisnummer : result.data[i].huisnummer,
            postcode : result.data[i].postcode,
            district : result.data[i].district
        }
        this.velopuntenIDs.push(i);
        this.velopuntenLijst.push(velopunt);
      }
      return this.velopuntenLijst;
    }
    private FilterName(search : string) : IVeloPunt{
      return this.velopuntenLijst.find(x => x.straatnaam == search);
    }
    
}
interface IVeloPunt{
    id : number,
    straatnaam : string,
    huisnummer : string,
    postcode : string,
    district: string
}
