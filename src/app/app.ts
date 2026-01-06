import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IframeViewerComponent } from './components/iframe-viewer/iframe-viewer.component';

// Pages
import { AboutComponent } from './pages/about/about.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CertificatesComponent } from './pages/certificates/certificates.component';
import { ContactComponent } from './pages/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    NavbarComponent,
    AboutComponent,
    ResumeComponent,
    ProjectsComponent,
    CertificatesComponent,
    ContactComponent,
    IframeViewerComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App {
  // Navigation
  activePage = 'about';

  // Sidebar
  sidebarActive = false;

  // Navigation
  setActivePage(page: string): void {
    this.activePage = page;
    window.scrollTo(0, 0);
  }

  // Sidebar toggle
  toggleSidebar(): void {
    this.sidebarActive = !this.sidebarActive;
  }
}
