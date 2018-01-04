import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";


@Injectable()

export class WcService{
    constructor(private _http : HttpClient){

    }

    getLijst() : Observable<IWc>{
        return this._http.get<IWc>("http://datasets.antwerpen.be/v4/gis/openbaartoilet.json" );
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
    point_lat: string;
    point_lng: string;
    id: string;
    obdd: string;
    categorie: string;
    publiceren: string;
    prioritair: string;
    omschrijving: string;
    extra_info_publiek: string;
    vrijstaand: string;
    type: string;
    stadseigendom: string;
    betalend: string;
    straat: string;
    huisnummer: string;
    postcode: string;
    district: string;
    beheerder: string;
    contactpersoon: string;
    contactgegevens: string;
    vermelding: string;
    doelgroep: string;
    integraal_toegankelijk: string;
    gescreend: string;
    luiertafel: string;
    mabu: string;
    maeu: string;
    dibu: string;
    dieu: string;
    wobu: string;
    woeu: string;
    dobu: string;
    doeu: string;
    vrbu: string;
    vreu: string;
    zabu: string;
    zaeu: string;
    zobu: string;
    zoeu: string;
    openingsuren_opm: string;
    opm_intern: string;
    lat: string;
    long: string;
    x_coord: string;
    y_coord: string;
    shape?: any;
}

export interface IWc {
    paging: IPaging;
    data: IDatum[];
}