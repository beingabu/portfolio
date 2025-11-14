import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };
  
  isSubmitting = false;
  submitSuccess = false;

  async onSubmit(): Promise<void> {
    this.isSubmitting = true;
    
    // Simulate form submission
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.formData = { name: '', email: '', message: '' };
      
      setTimeout(() => {
        this.submitSuccess = false;
      }, 3000);
    }, 1500);
  }
}
