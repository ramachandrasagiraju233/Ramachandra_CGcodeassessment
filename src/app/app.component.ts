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

  occupations: Occupation[] = [
    { name: 'Cleaner', rating: 'Light Manual', factor: 11.50 },
    { name: 'Doctor', rating: 'Professional', factor: 1.5 },
    { name: 'Author', rating: 'White Collar', factor: 2.25 },
    { name: 'Farmer', rating: 'Heavy Manual', factor: 31.75 },
    { name: 'Mechanic', rating: 'Heavy Manual', factor: 31.75 },
    { name: 'Florist', rating: 'Light Manual', factor: 11.50 },
    { name: 'Other', rating: 'Heavy Manual', factor: 31.75 }
  ];

  calculatePremium() {
    try {
      if (this.name && this.age && this.dateOfBirth && this.selectedOccupation && this.deathSumInsured) {
        const occupation = this.occupations.find(o => o.name === this.selectedOccupation);
        if (!occupation) {
          throw new Error('Invalid occupation selected');
        }
        
        const age = parseInt(this.age);
        const sumInsured = parseFloat(this.deathSumInsured);
        
        if (isNaN(age) || age <= 0 || age > 120) {
          throw new Error('Invalid age');
        }
        
        if (isNaN(sumInsured) || sumInsured <= 0) {
          throw new Error('Invalid sum insured amount');
        }
        
        this.monthlyPremium = (sumInsured * occupation.factor * age) / 1000 * 12;
        
        if (isNaN(this.monthlyPremium) || this.monthlyPremium < 0) {
          throw new Error('Premium calculation error');
        }
      } else {
        this.monthlyPremium = 0;
      }
    } catch (error) {
      console.error('Premium calculation error:', error);
      this.monthlyPremium = 0;
      alert('Error calculating premium: ' + (error as Error).message);
    }
  }

  isFormValid(): boolean {
    try {
      return !!(this.name?.trim() && 
               this.age?.trim() && 
               this.dateOfBirth?.trim() && 
               this.selectedOccupation && 
               this.deathSumInsured?.trim());
    } catch (error) {
      console.error('Form validation error:', error);
      return false;
    }
  }
}
