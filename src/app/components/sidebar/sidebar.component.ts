import { Component, Input, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SidebarComponent {
    @Input() isActive = false;
    @Output() toggleSidebar = new EventEmitter<void>();

    onToggle(): void {
        this.toggleSidebar.emit();
    }
}
