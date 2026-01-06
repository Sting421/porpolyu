import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EmailjsService {
    constructor() {
        // Initialize EmailJS with public key
        emailjs.init(environment.emailjs.publicKey);
    }

    async sendEmail(formData: { fullname: string; email: string; message: string }): Promise<void> {
        try {
            const templateParams = {
                full_name: formData.fullname,
                email: formData.email,
                message: formData.message
            };

            // Send email with public key parameter
            const response = await emailjs.send(
                environment.emailjs.serviceId,
                environment.emailjs.templateId,
                templateParams,
                environment.emailjs.publicKey  // Add public key as 4th parameter
            );

            console.log('Email sent successfully:', response);
        } catch (error) {
            console.error('EmailJS Error:', error);
            throw error;
        }
    }
}
