import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CemeteryService} from '../cemetery.service';
import {Cemetery} from '../cemetery';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-cemeteries',
  templateUrl: './cemeteries.component.html',
  styleUrls: ['./cemeteries.component.css']
})
export class CemeteriesComponent implements OnInit {

  constructor(private cemeteryService: CemeteryService) {
    console.log('cemeteries.components');
    this.cemeteries$ = cemeteryService.cemeteries$.pipe(
      map(cemeteries => {
        const sorted = Array.from(cemeteries);
        sorted.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          } else if (a.name < b.name) {
            return -1;
          }
          return 0;
        });
        return sorted;
      })
    );
    console.log(this.cemeteries$);
  }

  @Input()
  cemetery: Cemetery;

  @Input()
  cemeteries$: Observable<Cemetery[]>;

  ngOnInit() {
  }

}
