import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellnurComponent } from './cellnur.component';

describe('CellnurComponent', () => {
  let component: CellnurComponent;
  let fixture: ComponentFixture<CellnurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellnurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellnurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
