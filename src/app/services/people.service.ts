import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(private _http: HttpClient) {}

  public getPersonNameAndPic(): Observable<any> {
    const attr = ['name', 'picture'];
    const url = 'https://randomuser.me/api/';
    return this._http.get(url, {
      params: {
        inc: attr.join(','),
      },
    });
  }
}
