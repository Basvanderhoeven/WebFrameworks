import { Component } from "@angular/core";
import { WcService, IWc } from "../../services/wc.service";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";


@Component({
    selector:"app-straatWcBalk",
    templateUrl:"./straatWcBalk.component.html"
})

export class StraatWcBalkComponent implements OnInit{
    data : IStraat;
    
    constructor(private service : WcService){}
    
    ngOnInit(){
        this.service.getLijst().subscribe(result => this.data = this.MapResult(result));
    }
    
    private MapResult(result : IWc) : IStraat{
        return{
            id : result.data[0].id,
            straat : result.data[0].straat,
            huisnr : result.data[0].huisnummer,
            postcode : result.data[0].postcode,
            district : result.data[0].district
        }
            
    }
}
    
interface IStraat{
    id : string,
    straat : string,
    huisnr : string,
    postcode: string,
    district: string
}
