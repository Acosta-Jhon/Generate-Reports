import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPluralComponentComponent } from './ng-plural-component.component';

describe('NgPluralComponentComponent', () => {
  let component: NgPluralComponentComponent;
  let fixture: ComponentFixture<NgPluralComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgPluralComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPluralComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
