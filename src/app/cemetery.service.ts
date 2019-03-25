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
    }>('https://api.imgflip.com/get_memes')
    .pipe(map(body => body.data.cemeteries))
    .subscribe(cemeteries => {
      this.cemeteries.next(cemeteries);
    });
  }

  /*generateCemetery(name: string): Observable<string> {
    return this.http.post<{
      data: {
        url: string
      }
    }>('https://api.imgflip.com/caption_image', {
      //template_id: memeId,
      username: 'mgbots',
      password: 'nihackathonbots',
      //text0: caption,
      text1: ''
    })
    .pipe(map(body => body.data.url));
  }*/

}
