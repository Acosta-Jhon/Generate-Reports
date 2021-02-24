import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateAdressesComponent } from './create-addresses.component';



describe('CreateAddressesComponent', () => {
  let component: CreateAdressesComponent;
  let fixture: ComponentFixture<CreateAdressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAdressesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
