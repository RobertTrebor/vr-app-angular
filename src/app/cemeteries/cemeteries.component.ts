import {Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { CemeteryService } from '../cemetery.service';
import { Cemetery } from "../cemetery";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cemeteries',
  templateUrl: './cemeteries.component.html',
  styleUrls: ['./cemeteries.component.css']
})
export class CemeteriesComponent implements OnInit {

  @Input()
  cemetery: Cemetery;

  constructor(cemeteryService: CemeteryService) {
    this.cemeteries$ = cemeteryService.cemeteries$.pipe(
      map(cemeteries => cemeteries)
    )
  }

  ngOnInit() {
  }

  cemeteries$: Observable<Cemetery[]>;

}
