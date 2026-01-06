import { Component, Input, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactForm } from '../../models/models';
import { EmailjsService } from '../../services/emailjs.service';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactComponent {
    @Input() isActive = false;

    contactForm: ContactForm = {
        fullname: '',
        email: '',
        message: ''
    };

    isSubmitting = false;
    submitSuccess = false;
    submitError = '';

    constructor(
        private emailjsService: EmailjsService,
        private cdr: ChangeDetectorRef
    ) { }

    isFormValid(): boolean {
        return this.contactForm.fullname.trim() !== '' &&
            this.contactForm.email.trim() !== '' &&
            this.contactForm.message.trim() !== '' &&
            this.isValidEmail(this.contactForm.email);
    }

    isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    async onFormSubmit(event: Event): Promise<void> {
        event.preventDefault();
        if (this.isFormValid() && !this.isSubmitting) {
            this.isSubmitting = true;
            this.submitSuccess = false;
            this.submitError = '';
            this.cdr.detectChanges(); // Ensure UI updates to show "Sending..."

            try {
                await this.emailjsService.sendEmail(this.contactForm);
                this.submitSuccess = true;
                this.resetForm();

                // Hide success message after 5 seconds
                setTimeout(() => {
                    this.submitSuccess = false;
                    this.cdr.detectChanges();
                }, 5000);
            } catch (error) {
                this.submitError = 'Failed to send message. Please try again later.';

                // Hide error message after 5 seconds
                setTimeout(() => {
                    this.submitError = '';
                    this.cdr.detectChanges();
                }, 5000);
            } finally {
                this.isSubmitting = false;
                this.cdr.detectChanges(); // Ensure UI updates to show "Send Message"
            }
        }
    }

    resetForm(): void {
        this.contactForm = {
            fullname: '',
            email: '',
            message: ''
        };
    }
}
