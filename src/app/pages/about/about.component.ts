import { Component, Input, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service, Testimonial } from '../../models/models';
import { TestimonialModalComponent } from '../../components/testimonial-modal/testimonial-modal.component';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule, TestimonialModalComponent],
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutComponent {
    @Input() isActive = false;

    services: Service[] = [
        {
            icon: 'images/icon-design.svg',
            title: 'Web design',
            description: 'The most modern and high-quality design made at a professional level.'
        },
        {
            icon: 'images/icon-dev.svg',
            title: 'Web development',
            description: 'High-quality development of sites at the professional level.'
        },
        {
            icon: 'images/icon-app.svg',
            title: 'Mobile apps',
            description: 'Professional development of applications for iOS and Android.'
        },
        {
            icon: 'images/icon-photo.svg',
            title: 'Photography',
            description: 'I make high-quality photos of any category at a professional level.'
        }
    ];

    testimonials: Testimonial[] = [
        {
            img: 'images/testimonials/austing.jpeg',
            alt: 'Austin McClain',
            name: 'Austin McClain',
            text: '"Roto delivered a smart, maintainable solution with top-notch quality and care. Their small team operates with the precision and professionalism of a large firm."'
        }
    ];

    // Modal state
    modalActive = false;
    modalData = {
        img: '',
        alt: '',
        title: '',
        text: ''
    };

    openModal(testimonial: Testimonial): void {
        this.modalData = {
            img: testimonial.img,
            alt: testimonial.alt,
            title: testimonial.name,
            text: testimonial.text
        };
        this.modalActive = true;
    }

    closeModal(): void {
        this.modalActive = false;
    }
}
