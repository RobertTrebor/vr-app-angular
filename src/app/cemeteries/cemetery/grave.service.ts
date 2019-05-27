import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Grave} from "./grave";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GraveService {
  private graves = new BehaviorSubject<Grave[]>([]);

  constructor(private http: HttpClient) {
    this.graves$ = this.graves.asObservable();
    this.loadGraves();
  }

  graves$: Observable<Grave[]>;

  private loadGraves(){
    console.log('loadGraves');
    const subscription = this.http.get<{
      _embedded: {
        graves: Grave[]
      }
    }>('https://vr-spring.herokuapp.com/cemeteries/1/graves')
    .pipe(map(body => body._embedded.graves))
    .subscribe(graves => {
      this.graves.next(graves);
    });
    console.log(subscription);
  }
}
