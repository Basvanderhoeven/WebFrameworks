import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';


@Injectable()

export class MuseaService{
    constructor(private _http : HttpClient){

    }

    getLijst() : Observable<IMusea>{
        return this._http.get<IMusea>("http://datasets.antwerpen.be/v4/gis/museumoverzicht.json" );
    }
    getMuseum(museum : string) : Observable<IMusea>{
        return this._http.get<IMusea>("http://datasets.antwerpen.be/v4/gis/museumoverzicht.json");
    }
    getDichtste() : Observable<IMusea>{
        
        var json = this._http.get<IMusea>("http://datasets.antwerpen.be/v4/gis/museumoverzicht.json" );
        return;
    }
}
export interface IData{
    id: string;
    point_lat: string;
    point_lng: string;
    thema: string;
    type: string;
    subtype: string;
    naam: string;
    straat: string;
    huisnummer: string;
    postcode: string;
    district: string;
    lgst_niv: string;
    hgst_niv: string;
    grondopp: string;
    gemetenopp: string;
    gebo: string;
    pero: string;
    begindatum: string;
    capa_zit: number;
    capa_staan: number;
    shape: string;
    objectid: number;
}
//export interface IPaging {
//   records: number;
//    pages: number;
//    pageCurrent: number;
//    pageNext?: any;
//    pagePrev?: any;
//    pageSize: number;
//}

export interface IMusea {
    //paging: IPaging;
    data: IData[];
}