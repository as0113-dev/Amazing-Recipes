import { environment } from "src/environments/environment";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IResponse1, IResponse2 } from "../models/recipe-item.interface";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private http: HttpClient) { }

    baseUrl = environment.BASEURL;
    httpOptions = {
        headers: new HttpHeaders({
            'X-RapidAPI-Key': environment.API_KEY,
            'X-RapidAPI-Host': environment.HOST
        })
    }

    getRecipesList(item: string): Observable<IResponse1 | IResponse2>{
        return this.http.get<IResponse1 | IResponse2>(
            this.baseUrl +
            `recipes/list?from=0&size=15&q=${item}`,
            this.httpOptions);
    }
}