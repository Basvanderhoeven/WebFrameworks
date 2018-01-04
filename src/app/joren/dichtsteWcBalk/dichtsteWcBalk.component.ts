import { Component } from "@angular/core";
import { WcService, IWc } from "../../services/wc.service";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";


@Component({
    selector: "app-dichtsteWcBalk",
    templateUrl: "./dichtsteWcBalk.component.html"
})

export class DichtsteWcBalkComponent implements OnInit{
    /*data: IDichtstbijzijnde = {
        distance : 200,
        location : "Borzestraat 10 2000 Antwerpen"
    }*/

    data : IDichtstbijzijnde;

    constructor(private service : WcService){}

    ngOnInit(){
        this.service.getLijst().subscribe(result => this.data = this.MapResult(result));
    }

    private MapResult(result : IWc) : IDichtstbijzijnde{
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