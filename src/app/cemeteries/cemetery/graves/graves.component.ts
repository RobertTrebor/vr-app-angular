import {Component, Input, OnInit} from '@angular/core';
import {map} from "rxjs/operators";
import {GraveService} from "../grave.service";
import {Observable} from "rxjs";
import {Grave} from "../grave";

@Component({
  selector: 'app-graves',
  templateUrl: './graves.component.html',
  styleUrls: ['./graves.component.css']
})
export class GravesComponent implements OnInit {

  constructor(graveService: GraveService) {
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
    console.log(this.graves$);
  }

  ngOnInit() {
  }

  @Input()
  graves$: Observable<Grave[]>;

}
