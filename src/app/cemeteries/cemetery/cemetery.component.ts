import {Component, Input, OnInit} from '@angular/core';
import {Cemetery} from "../../cemetery";

@Component({
  selector: 'app-cemetery',
  templateUrl: './cemetery.component.html',
  styleUrls: ['./cemetery.component.css']
})
export class CemeteryComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

@Input()
  cemetery: Cemetery;

}
