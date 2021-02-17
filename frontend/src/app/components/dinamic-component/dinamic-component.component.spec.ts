import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamicComponentComponent } from './dinamic-component.component';

describe('DinamicComponentComponent', () => {
  let component: DinamicComponentComponent;
  let fixture: ComponentFixture<DinamicComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinamicComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinamicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
