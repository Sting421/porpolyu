import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IframeViewerService } from '../../services/iframe-viewer.service';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-iframe-viewer',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './iframe-viewer.component.html',
    styleUrl: './iframe-viewer.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IframeViewerComponent {
    showViewer = false;
    currentUrl: SafeResourceUrl = '';
    currentRawUrl = '';

    constructor(private iframeViewerService: IframeViewerService) {
        this.iframeViewerService.showViewer$.subscribe(show => {
            this.showViewer = show;
        });

        this.iframeViewerService.currentUrl$.subscribe(url => {
            this.currentUrl = url;
        });

        this.iframeViewerService.currentRawUrl$.subscribe(url => {
            this.currentRawUrl = url;
        });
    }

    closeViewer(): void {
        this.iframeViewerService.closeViewer();
    }

    openInBrowser(): void {
        this.iframeViewerService.openInBrowser();
    }

    isPdfFile(): boolean {
        return this.currentRawUrl.toLowerCase().endsWith('.pdf');
    }

    downloadFile(): void {
        if (this.currentRawUrl) {
            const link = document.createElement('a');
            link.href = this.currentRawUrl;
            const fileName = this.currentRawUrl.split('/').pop() || 'download.pdf';
            link.download = fileName;
            link.click();
        }
    }
}
