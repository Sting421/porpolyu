import { Component, Input, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavbarComponent {
    @Input() activePage = 'about';
    @Output() pageChange = new EventEmitter<string>();

    navItems = ['About', 'Resume', 'Projects', 'Achievements', 'Contact'];

    onPageChange(page: string): void {
        this.pageChange.emit(page.toLowerCase());
    }
}
