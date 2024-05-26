import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RouteRead} from "../../dto/route-read";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(private httpClient: HttpClient) { }

  getUpComingByTerminalCity(city: string): Observable<RouteRead[]> {
    return this.httpClient.get<RouteRead[]>(environment.apiBaseUrl + "/routes/get-upcoming?city=" + city);
  }
}
