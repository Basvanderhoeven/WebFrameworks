import { Component } from "@angular/core";
import { WcService, IWc } from "../../services/wc.service";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";


@Component({
    selector:"app-straatWcBalk",
    templateUrl:"./straatWcBalk.component.html"
})

export class StraatWcBalkComponent implements OnInit{
    data : IStraat[];
    wcFound : IStraat[] = [];
    wcLijst : IStraat[] = [];
    wcIDs : number[] = [];
    constructor(private service : WcService){}
    
    ngOnInit(){
        this.service.getLijst().subscribe(result => this.data = this.MapResult(result));
        
    }
    
    private MapResult(result : IWc) : IStraat[]{
        for(var i=0; i < result.data.length; i++){
            var wc : IStraat = 
            {
                id : result.data[i].id,
                straat : result.data[i].straat,
                huisnr : result.data[i].huisnummer,
                postcode : result.data[i].postcode,
                district : result.data[i].district
            }
            this.wcIDs.push(i);
            this.wcLijst.push(wc);
        }
        return this.wcLijst;   
    }
    SearchWc = (search : string) => {
        this.wcIDs.length = 0;
        this.wcFound.length = 0;
        for(var i=0; i < this.data.length; i++){
            if(this.data[i].straat == search){
                this.wcIDs.push(i);
            }
        }
        for(var j=0; j < this.wcIDs.length; j++){
            this.wcFound.push(this.data[this.wcIDs[j]]);
        }
        console.log(this.wcLijst);
        console.log(this.wcIDs);
        return this.wcFound;
        
    }
    private FilterStraat(search : string) : IStraat {

        return this.wcLijst.find(x => x.straat == search);
    }
}
    
interface IStraat{
    id : string,
    straat : string,
    huisnr : string,
    postcode: string,
    district: string
}
