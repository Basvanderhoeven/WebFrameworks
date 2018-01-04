import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";


@Injectable()

export class ConcertgebouwenService{
    constructor(private _http : HttpClient){

    }

    getLijst() : Observable<IConcertgebouwen>{
        return this._http.get<IConcertgebouwen>("http://datasets.antwerpen.be/v4/gis/concertzaaldetail.json" );
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
    objectid: number;
    geometry: string;
    shape?: any;
    id: string;
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
    gemetenopp?: number;
    gebo: string;
    pero: string;
    begindatum: string;
    capa_zit: number;
    capa_staan: number;
    shape_length: string;
    shape_area: string;
}

export interface IConcertgebouwen {
    paging: IPaging;
    data: IDatum[];
}