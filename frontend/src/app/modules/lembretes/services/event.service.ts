import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EventService {

    constructor(private http: HttpClient) { }

    getEvents() {
    return this.http.get<any>('')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => { return data; });
    }
}