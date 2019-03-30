import {Component, Input, OnInit} from '@angular/core';
import {Grave} from '../../grave';

@Component({
  selector: 'app-grave',
  templateUrl: './grave.component.html',
  styleUrls: ['./grave.component.css']
})
export class GraveComponent implements OnInit {

  constructor() { }

  @Input()
  grave: Grave;

  ngOnInit() {
  }

}
