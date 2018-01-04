import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";


@Injectable()

export class VeloPuntenService{
    constructor(private _http : HttpClient){

    }

    getLijst() : Observable<IVeloPunten>{
        return this._http.get<IVeloPunten>("http://datasets.antwerpen.be/v4/gis/velostation.json" );
    }
} 
export interface IPaging {
    records: number;
    pages: number;
    pageCurrent: number;
    pageNext?: any;
    pagePrev?: any;
    pageSize: number;
}

export interface IDatum {
    id: number;
    objectid: number;
    point_lat: string;
    point_lng: string;
    shape?: any;
    objecttype: string;
    type_velo: string;
    ligging: string;
    straatnaam: string;
    huisnummer: string;
    aanvulling: string;
    district: string;
    postcode: string;
    objectcode: string;
    gebruik: string;
}

export interface IVeloPunten {
    paging: IPaging;
    data: IDatum[];
}
