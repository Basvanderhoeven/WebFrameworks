import { Component, OnInit } from '@angular/core';
import { MuseaService, IMusea } from "../../services/musea.service";

@Component({
  selector: 'app-dichtste-museum',
  templateUrl: './dichtste-museum.component.html',
  styleUrls: ['./dichtste-museum.component.scss']
})
export class DichtsteMuseumComponent implements OnInit {

    data : IDichtstbijzijnde;
    
        constructor(private service : MuseaService){}
    
        ngOnInit(){
          
            this.service.getLijst().subscribe(result => this.data = this.MapResult(result));
        }
        
        private MapResult(result : IMusea) : IDichtstbijzijnde{
            return{
                distance : result.data[1].objectid,
                straat : result.data[1].straat,
                huisnr : result.data[1].huisnummer,
                postcode : result.data[1].postcode,
                district : result.data[1].district
            }
            
        }
    }
    interface IDichtstbijzijnde{
      distance : number,
      straat : string,
      huisnr : string,
      postcode: string,
      district: string
  }