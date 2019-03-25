import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CemeteriesComponent } from './cemeteries.component';

describe('CemeteriesComponent', () => {
  let component: CemeteriesComponent;
  let fixture: ComponentFixture<CemeteriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CemeteriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CemeteriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
