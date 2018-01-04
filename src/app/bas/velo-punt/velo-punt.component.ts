import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VeloPuntenService, IVeloPunten } from '../../services/velopunten.service';

@Component({
  selector: 'app-velo-punt',
  templateUrl: './velo-punt.component.html'
})
export class VeloPuntComponent implements OnInit {
    data : IVeloPunten;
    
    constructor(private service : VeloPuntenService){}

    private _search : string;
    ngOnInit() {
      this.service.getLijst().subscribe(result => this.data = result);
      //this.service.getLijst().subscribe(result => this.data = this.MapResult(result));
    }
    searchMuseum = () =>{
      console.log(this._search);
    }
    @Output() searchChange = new EventEmitter();
    @Input()
    get search(){
      return this._search;
    }
    set search(value : string){
      this._search = value;
      this.searchChange.emit(this.search);
    }
    
}
interface IVeloPunt{
    id : number,
    straatnaam : string,
    huisnummer : string,
    postcode : string,
    district: string
}
