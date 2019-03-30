import {Component, Input, OnInit} from '@angular/core';
import {Grave} from '../grave';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Cemetery} from '../cemetery';
import {GraveService} from '../grave.service';

@Component({
  selector: 'app-graves',
  templateUrl: './graves.component.html',
  styleUrls: ['./graves.component.css']
})
export class GravesComponent implements OnInit {

  @Input()
  selectedCemetery: Cemetery;
  @Input()
  cemetery: Cemetery;
  @Input()
  graves$: Observable<Grave[]>;

  constructor(private graveService: GraveService) {
    console.log('constructur GravesComponent');
    this.graves$ = graveService.graves$.pipe(
      map(graves => {
        const sorted = Array.from(graves);
        sorted.sort((a, b) => {
          if (a.firstName > b.firstName) {
            return 1;
          } else if (a.firstName < b.firstName) {
            return -1;
          }
          return 0;
        });
        return sorted;
      })
    );
  }

  ngOnInit() {
  }

}
