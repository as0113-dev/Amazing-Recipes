import { environment } from "src/environments/environment";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

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

    getRecipesList() {
        this.http.get(this.baseUrl + 'recipes/list?from=0&size=10&tags=under_30_minutes', this.httpOptions).subscribe({
            next: (resp) => {
                console.log(resp);

            },
            error: (err) => {
                console.log(err);
            }
        });
    }
}