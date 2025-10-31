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

  describe('Premium Calculation', () => {
    it('should calculate premium for Doctor', () => {
      setValidForm('Doctor', '30', '100000');
      component.calculatePremium();
      expect(component.monthlyPremium).toBe(54000);
    });

    it('should calculate premium for Heavy Manual occupation', () => {
      setValidForm('Farmer', '25', '50000');
      component.calculatePremium();
      expect(component.monthlyPremium).toBe(476250);
    });

    it('should not calculate premium with empty fields', () => {
      component.calculatePremium();
      expect(component.monthlyPremium).toBe(0);
    });
  });

  describe('Validation', () => {
    it('should reject invalid age (too young)', () => {
      setValidForm('Doctor', '17');
      expect(component.isFormValid()).toBeFalse();
    });

    it('should reject invalid age (too old)', () => {
      setValidForm('Doctor', '101');
      expect(component.isFormValid()).toBeFalse();
    });

    it('should reject invalid date format', () => {
      component.name = 'John';
      component.age = '30';
      component.dateOfBirth = '1/1994';
      component.selectedOccupation = 'Doctor';
      component.deathSumInsured = '100000';
      expect(component.isFormValid()).toBeFalse();
    });

    it('should accept valid date format', () => {
      setValidForm('Doctor', '30', '100000', '01/1994');
      expect(component.isFormValid()).toBeTrue();
    });

    it('should reject excessive sum insured', () => {
      setValidForm('Doctor', '30', '20000000');
      expect(component.isFormValid()).toBeFalse();
    });
  });

  function setValidForm(occupation: string, age: string, sumInsured: string = '100000', dob: string = '01/1994') {
    component.name = 'John Doe';
    component.age = age;
    component.dateOfBirth = dob;
    component.selectedOccupation = occupation;
    component.deathSumInsured = sumInsured;
  }
});