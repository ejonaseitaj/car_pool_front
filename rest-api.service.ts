import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {Observable} from 'rxjs';
import {Driver} from '../models/driver';


const baseUrl = `${environment.driverApi}`

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) {
  }


  getAll(): Observable<Driver[]> {
    return this.http.get<Driver[]>(baseUrl)
  }
  delete(id:number){
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
