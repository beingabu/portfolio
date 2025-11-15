import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  submitError = false;
  errorMessage = '';

  private formspreeUrl = 'https://formspree.io/f/mvgdakgp';
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);

  onSubmit(): void {
    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;
    this.errorMessage = '';

    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });

    this.http.post(this.formspreeUrl, this.formData, { headers }).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.formData = { name: '', email: '', message: '' };
        this.cdr.markForCheck();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.submitSuccess = false;
          this.cdr.markForCheck();
        }, 5000);
      },
      error: (error: any) => {
        this.isSubmitting = false;
        this.submitError = true;
        
        if (error.error && error.error.errors) {
          this.errorMessage = error.error.errors.map((err: any) => err.message).join(', ');
        } else {
          this.errorMessage = 'Oops! There was a problem submitting your form';
        }
        
        this.cdr.markForCheck();
        
        // Hide error message after 5 seconds
        setTimeout(() => {
          this.submitError = false;
          this.cdr.markForCheck();
        }, 5000);
      }
    });
  }
}
