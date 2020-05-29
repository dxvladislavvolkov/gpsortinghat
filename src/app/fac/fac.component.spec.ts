import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacComponent } from './fac.component';

describe('FacComponent', () => {
  let component: FacComponent;
  let fixture: ComponentFixture<FacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
