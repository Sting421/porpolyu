import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IframeViewerService } from '../../services/iframe-viewer.service';
import { Project } from '../../models/models';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectsComponent {
    @Input() isActive = false;

    activeFilter = 'all';
    selectActive = false;
    expandedProjects = new Set<string>();

    categories = ['All', 'Game development', 'Mobile Application', 'Web application'];

    constructor(private iframeViewerService: IframeViewerService) { }

    projects: Project[] = [
        {
            title: 'PressRoomPH',
            category: 'web development',
            image: 'images/projects/pressroomph.png',
            link: 'https://pressroomph.com',
            description: 'A premier journalism platform organized by the Philippines\' top prescon writers, dedicated to empowering youth voices through impactful storytelling.'
        },
        {
            title: 'Austin McClain',
            category: 'web development',
            image: 'images/projects/austin.png',
            link: 'https://austinmcclain.com',
            description: 'A professional real estate portfolio designed for Austin McClain, an agent from Reafco in Ohio, showcasing property listings and client success stories, with a built-in calculator and rolodex.'
        },
        {
            title: 'OJTech',
            category: 'web development',
            image: 'images/projects/ojtech.png',
            link: 'https://ojtech.online',
            description: `OJTech is an AI-powered platform designed to streamline internship placements. It leverages Google's Gemini API for intelligent skill-based job matching and features integrated AI capabilities for real-time automated CV generation, helping students secure high-quality career opportunities efficiently.`
        },
        {
            title: 'PHPropertyDeals',
            category: 'web development',
            image: 'images/projects/phpropertydeals.png',
            link: 'https://phpropertydeals.com',
            description: 'A dedicated platform for a Philippine-based real estate agent, featuring AI integration for automated listing descriptions and smart nearby landmark detection.'
        },
        {
            title: 'Maviaesthetic',
            category: 'web development',
            image: 'images/projects/mavi.png',
            link: 'https://maviaesthetic.netlify.app/',
            description: 'A professional website designed for a medical aesthetic clinic based in Cebu City, featuring a showcase of treatments and clinic information.'
        },
        {
            title: 'roto',
            category: 'web development',
            image: 'images/projects/roto.png',
            link: 'https://www.rotosystems.net',
            description: 'A professional business website for Roto Systems, featuring a modern design with company information, services showcase, and contact functionality.'
        },
        {
            title: 'Apothem Construction Company',
            category: 'web development',
            image: 'images/projects/apothem.png',
            link: 'https://apothemcc.netlify.app',
            description: 'A construction company website featuring project galleries, service listings, and company information with a professional and trustworthy design aesthetic.'
        },
        {
            title: 'Mitsurealm',
            category: 'game development',
            image: 'images/projects/1.png',
            link: 'https://github.com/Sting421/Mitsu-Realm',
            description: 'An immersive 2D RPG game built with engaging gameplay mechanics, featuring character progression, combat systems, and an original storyline set in a fantasy realm.'
        },
        {
            title: 'Condoctor',
            category: 'mobile application',
            image: 'images/projects/c2.jpg',
            link: 'https://github.com/Sting421/ConDoctor',
            description: 'A mobile healthcare application that connects patients with doctors, enabling appointment scheduling, medical consultations, and health record management.'
        },
        {
            title: 'Hkotisk',
            category: 'web application',
            image: 'images/projects/h3.png',
            link: 'https://github.com/Sting421/HKOTISK_Frontend',
            description: 'A web-based kiosk ordering system designed for restaurants and food establishments, featuring an intuitive menu interface and order management capabilities.'
        },
        {
            title: 'PROJEXCELLENCE',
            category: 'web application',
            image: 'images/projects/p4.png',
            link: 'https://github.com/Sting421/PROJEXCELLENCE',
            description: 'A project management web application that helps teams collaborate effectively with features like task tracking, milestone management, and team communication tools.'
        }
    ];

    setFilter(filter: string): void {
        this.activeFilter = filter.toLowerCase();
        this.selectActive = false;
    }

    toggleSelect(): void {
        this.selectActive = !this.selectActive;
    }

    isProjectVisible(project: Project): boolean {
        if (this.activeFilter === 'all') return true;
        return project.category.toLowerCase() === this.activeFilter;
    }

    toggleReadMore(event: Event, projectTitle: string): void {
        event.preventDefault();
        event.stopPropagation();
        if (this.expandedProjects.has(projectTitle)) {
            this.expandedProjects.delete(projectTitle);
        } else {
            this.expandedProjects.add(projectTitle);
        }
    }

    isExpanded(projectTitle: string): boolean {
        return this.expandedProjects.has(projectTitle);
    }

    openInIframe(event: Event, url: string): void {
        event.preventDefault();
        event.stopPropagation();
        this.iframeViewerService.openUrl(url);
    }
}
