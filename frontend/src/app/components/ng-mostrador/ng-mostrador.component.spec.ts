import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMostradorComponent } from './ng-mostrador.component';

describe('NgMostradorComponent', () => {
  let component: NgMostradorComponent;
  let fixture: ComponentFixture<NgMostradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgMostradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMostradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
