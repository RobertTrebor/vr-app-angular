import {Injectable, Input} from '@angular/core';
import {Cemetery} from "../../cemetery";
import {BehaviorSubject, Observable} from "rxjs";
import {Grave} from "./grave";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GraveService {
  private graves = new BehaviorSubject<Grave[]>([]);

  @Input()
  cemetery: Cemetery;

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
    }>(this.cemetery._links.graves)
    .pipe(map(body => body._embedded.graves))
    .subscribe(graves => {
      this.graves.next(graves);
    });
    console.log(subscription);
  }
}
