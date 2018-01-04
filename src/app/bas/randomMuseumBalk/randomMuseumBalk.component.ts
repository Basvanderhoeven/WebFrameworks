import { Component } from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { MuseaService, IMusea } from "../../services/musea.service";
import * as _ from "lodash";

@Component({
    selector : "app-randomMuseumBalk",
    templateUrl : "./randomMuseumBalk.component.html"
})

export class RandomMuseumBalkComponent implements OnInit{
    data : IMuseum
    
    constructor(private service : MuseaService){}

    ngOnInit(){
        console.log("vraagt gegevens")
        this.service.getLijst().subscribe(result => this.data = this.MapResult(result));
    }

    private MapResult(result : IMusea) : IMuseum{
        console.log("geeft gegevens")
        var rand = _.random(0, result.data.length - 1);
          var museum : IMuseum = 
          {
              id : result.data[rand].id,
              naam : result.data[rand].naam,
              thema : result.data[rand].thema,
              type : result.data[rand].type,
              straat : result.data[rand].straat,
              huisnr : result.data[rand].huisnummer,
              district : result.data[rand].district
          }
        return museum;
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