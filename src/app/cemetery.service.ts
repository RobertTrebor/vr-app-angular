import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cemetery } from './cemetery';

@Injectable({
  providedIn: 'root'
})
export class CemeteryService {
  private cemeteries = new BehaviorSubject<Cemetery[]>([]);

  constructor(private http: HttpClient) {
    this.cemeteries$ = this.cemeteries.asObservable();
    this.loadCemeteries();
  }

  cemeteries$: Observable<Cemetery[]>;

  private loadCemeteries() {
    this.http.get<{
      data: {
        cemeteries: Cemetery[]
      }
    }>('https://-------')
    .pipe(map(body => body.data.cemeteries))
    .subscribe(cemeteries => {
      this.cemeteries.next(cemeteries);
    });
  }

}
