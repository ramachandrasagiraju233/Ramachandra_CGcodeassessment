import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate premium for Doctor', () => {
    component.name = 'John';
    component.age = '30';
    component.dateOfBirth = '01/1994';
    component.selectedOccupation = 'Doctor';
    component.deathSumInsured = '100000';
    
    component.calculatePremium();
    
    expect(component.monthlyPremium).toBe(540);
  });

  it('should not calculate premium with empty fields', () => {
    component.name = '';
    component.selectedOccupation = 'Doctor';
    
    component.calculatePremium();
    
    expect(component.monthlyPremium).toBe(0);
  });
});