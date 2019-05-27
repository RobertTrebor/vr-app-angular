import {Component, Input, OnInit} from '@angular/core';
import {GraveService} from '../grave.service';
import {Observable} from 'rxjs';
import {Grave} from '../grave';
import {Cemetery} from '../../../cemetery';

@Component({
  selector: 'app-graves',
  templateUrl: './graves.component.html',
  styleUrls: ['./graves.component.css']
})
export class GravesComponent implements OnInit {

  @Input()
  selectedCemetery: Cemetery;
  @Input()
  graves$: Observable<Grave[]>;

  constructor(graveService: GraveService) {
    console.log('GravesComponentConstructor: ' + this.selectedCemetery);
    this.graves$ = graveService.graves$.pipe();
    console.log('constructor-this.graves: ' + this.graves$);
  }

  ngOnInit() {
    if (this.selectedCemetery == null) {
      return;
    }
    console.log('GravesComponent-onInit: ' + this.selectedCemetery.id);
  }

}
