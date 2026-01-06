import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class IframeViewerService {
    private showViewerSubject = new BehaviorSubject<boolean>(false);
    private currentUrlSubject = new BehaviorSubject<SafeResourceUrl>('');
    private currentRawUrlSubject = new BehaviorSubject<string>('');

    showViewer$ = this.showViewerSubject.asObservable();
    currentUrl$ = this.currentUrlSubject.asObservable();
    currentRawUrl$ = this.currentRawUrlSubject.asObservable();

    constructor(private sanitizer: DomSanitizer) { }

    openUrl(url: string): void {
        this.currentRawUrlSubject.next(url);
        this.currentUrlSubject.next(this.sanitizer.bypassSecurityTrustResourceUrl(url));
        this.showViewerSubject.next(true);
    }

    closeViewer(): void {
        this.showViewerSubject.next(false);
        this.currentUrlSubject.next('');
        this.currentRawUrlSubject.next('');
    }

    openInBrowser(): void {
        const url = this.currentRawUrlSubject.value;
        if (url) {
            window.open(url, '_blank');
            this.closeViewer();
        }
    }
}
