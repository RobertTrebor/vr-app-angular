import {Injectable, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Cemetery} from './cemetery';
import {Grave} from './grave';

@Injectable({
  providedIn: 'root'
})
export class CemeteryService {
  private cemeteries = new BehaviorSubject<Cemetery[]>([]);
  private graves = new BehaviorSubject<Grave[]>([]);

  constructor(private http: HttpClient) {
    this.cemeteries$ = this.cemeteries.asObservable();
    this.loadCemeteries();
    this.graves$ = this.graves.asObservable();
    this.loadGraves();
  }

  @Input() private selectedCemetery: Cemetery;

  cemeteries$: Observable<Cemetery[]>;
  graves$: Observable<Grave[]>;

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

  private loadGraves() {
    console.log('loadGraves from cemetery: ');
    const subscription = this.http.get<{
      _embedded: {
        graves: Grave[]
      }
    }>('https://vr-spring.herokuapp.com/graves')
      .pipe(map(body => body._embedded.graves))
      .subscribe(graves => {
        this.graves.next(graves);
      });
    console.log(subscription);
  }

}
