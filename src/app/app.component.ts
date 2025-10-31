import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Occupation {
  name: string;
  rating: string;
  factor: number;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = '';
  age = '';
  dateOfBirth = '';
  selectedOccupation = '';
  deathSumInsured = '';
  monthlyPremium = 0;

  private readonly occupationMap = new Map([
    ['Cleaner', { name: 'Cleaner', rating: 'Light Manual', factor: 11.50 }],
    ['Doctor', { name: 'Doctor', rating: 'Professional', factor: 1.5 }],
    ['Author', { name: 'Author', rating: 'White Collar', factor: 2.25 }],
    ['Farmer', { name: 'Farmer', rating: 'Heavy Manual', factor: 31.75 }],
    ['Mechanic', { name: 'Mechanic', rating: 'Heavy Manual', factor: 31.75 }],
    ['Florist', { name: 'Florist', rating: 'Light Manual', factor: 11.50 }],
    ['Other', { name: 'Other', rating: 'Heavy Manual', factor: 31.75 }]
  ]);

  get occupations(): Occupation[] {
    return Array.from(this.occupationMap.values());
  }

  calculatePremium(): void {
    if (!this.isFormValid()) {
      this.monthlyPremium = 0;
      return;
    }

    const occupation = this.occupationMap.get(this.selectedOccupation);
    if (!occupation) return;

    const age = Number(this.age);
    const sumInsured = Number(this.deathSumInsured);

    this.monthlyPremium = (sumInsured * occupation.factor * age) / 1000 * 12;
  }

  isFormValid(): boolean {
    return this.isValidName() && 
           this.isValidAge() && 
           this.isValidDateOfBirth() && 
           this.isValidOccupation() && 
           this.isValidSumInsured();
  }

  private isValidName(): boolean {
    return this.name.trim().length > 0;
  }

  private isValidAge(): boolean {
    const age = Number(this.age);
    return !isNaN(age) && age >= 18 && age <= 100;
  }

  private isValidDateOfBirth(): boolean {
    const regex = /^(0[1-9]|1[0-2])\/\d{4}$/;
    return regex.test(this.dateOfBirth.trim());
  }

  private isValidOccupation(): boolean {
    return this.occupationMap.has(this.selectedOccupation);
  }

  private isValidSumInsured(): boolean {
    const sum = Number(this.deathSumInsured);
    return !isNaN(sum) && sum > 0 && sum <= 10000000;
  }
}
