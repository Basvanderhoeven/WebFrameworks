import { Component } from "@angular/core";
import { WcService, IWc } from "../../services/wc.service";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";


@Component({
    selector: "app-rolstoelWc",
    templateUrl: "./rolstoelWc.component.html"
})

export class RolstoelWcComponent implements OnInit{
    data : IWcRolstoel[];
    wcLijst : IWcRolstoel[] = [];
    wcIDs : number[] = [];
    
    constructor(private service : WcService){}
    
    ngOnInit(){
        this.service.getLijst().subscribe(result => this.data = this.MapResult(result));
    }

    private MapResult(result : IWc) : IWcRolstoel[]{
        for(var i=0; i < result.data.length; i++){
            if(result.data[i].integraal_toegankelijk == "ja"){
                var wc : IWcRolstoel = 
                {
                    straat : result.data[i].straat,
                    huisnummer : result.data[i].huisnummer,
                    postcode : result.data[i].postcode,
                    district : result.data[i].district,
                    betalend : result.data[i].betalend,
                    doelgroep : result.data[i].doelgroep,
                    rolstoel : result.data[i].integraal_toegankelijk
                }
                this.wcIDs.push(i);
                this.wcLijst.push(wc);
            }
        } 
        console.log(this.wcLijst);
        console.log(this.wcIDs); 
        return this.wcLijst; 
    }
}

interface IWcRolstoel{
    straat : string,
    huisnummer : string,
    postcode: string,
    district: string,
    betalend: string,
    doelgroep: string,
    rolstoel: string
}