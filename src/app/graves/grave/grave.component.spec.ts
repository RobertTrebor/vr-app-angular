import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GraveComponent} from './grave.component';

describe('GraveComponent', () => {
  let component: GraveComponent;
  let fixture: ComponentFixture<GraveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
