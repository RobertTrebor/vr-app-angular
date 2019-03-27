import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Cemetery} from './cemetery';

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
    console.log('loadCemeteries');
    const subscription = this.http.get<{
      _embedded: {
        cemeteries: Cemetery[]
      }
    }>('https://vr-spring.herokuapp.com/cemeteries')
      .pipe(map(body => body._embedded.cemeteries))
      .subscribe(cemeteries => {
        this.cemeteries.next(cemeteries);
      });
    console.log(subscription);
  }

}
