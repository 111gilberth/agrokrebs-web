import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrokrebsComponent } from './agrokrebs.component';

describe('AgrokrebsComponent', () => {
  let component: AgrokrebsComponent;
  let fixture: ComponentFixture<AgrokrebsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgrokrebsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgrokrebsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
