import { Component, Input, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Testimonial } from '../../models/models';

@Component({
    selector: 'app-testimonial-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './testimonial-modal.component.html',
    styleUrl: './testimonial-modal.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestimonialModalComponent {
    @Input() isActive = false;
    @Input() data: { img: string; alt: string; title: string; text: string } = {
        img: '',
        alt: '',
        title: '',
        text: ''
    };
    @Output() closeModal = new EventEmitter<void>();

    onClose(): void {
        this.closeModal.emit();
    }
}
