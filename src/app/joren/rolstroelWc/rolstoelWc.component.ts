import { Component } from "@angular/core";
import { WcService, IWc } from "../../services/wc.service";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";


@Component({
    selector: "app-rolstoelWc",
    templateUrl: "./rolstoelWc.component.html"
})

export class RolstoelWcComponent implements OnInit{
    data : IWc;
    
    constructor(private service : WcService){}
    
    ngOnInit(){
        this.service.getLijst().subscribe(result => this.data = result);
    }
}