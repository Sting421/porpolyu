import { Component, Input, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Certificate, Award } from '../../models/models';

@Component({
    selector: 'app-certificates',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './certificates.component.html',
    styleUrl: './certificates.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CertificatesComponent implements OnInit {
    @Input() isActive = false;

    activeTab: 'awards' | 'certificates' = 'awards';

    activeFilter = 'all';
    selectActive = false;

    categories: string[] = [];

    awards: Award[] = [
        {
            title: 'GCash ImaGnation 2025 Hackathon',
            category: 'Hackathon',
            image: 'images/awards/Imagination.jpg',
            link: 'https://www.facebook.com/photo?fbid=1332271745364385&set=a.653311203260446',
            description: '196 Teams. 980 Students. 1 Champion.\n\nMy team, CAT5, secured the top spot at the GCash ImaGnation 2025 Hackathon. Competing against the best talent from top Philippine colleges, we didn\'t just pitch a concept—we built a solution that stood out among nearly a thousand participants.'
        }
    ];

    certificates: Certificate[] = [
        {
            title: 'AWS Academy Graduate - Cloud Architecting - Training Badge',
            category: 'AWS Architecture',
            image: 'images/certs/aws-cloud-architecting.png',
            link: 'https://www.credly.com/badges/9a01d263-6b11-4126-9434-63aeb8c5c043/public_url',
            description: 'AWS Cloud Architecting'
        },
        {
            title: 'AWS Academy Graduate - Cloud Foundations - Training Badge',
            category: 'AWS Architecture',
            image: 'images/certs/aws-cloud-foundations.png',
            link: 'https://www.credly.com/badges/faafd60f-98b2-4f27-aa17-87aa3c2cee5b/public_url',
            description: 'AWS Cloud Foundations'
        },
        {
            title: 'Gemini for Developers',
            category: 'web development',
            image: 'images/certs/Gemini AI.png',
            link: 'https://drive.google.com/file/d/1pDsHf_o9i3dY4pqM8WCm-cwFj-MIEnxz/view?usp=sharing',
            description: 'AI Integration'
        },
        {
            title: 'Codechum',
            category: 'object oriented programming',
            image: 'images/certs/codechumcert.png',
            link: 'https://citu.codechum.com/certificates/921',
            description: 'Object Oriented Programming'
        },
        {
            title: 'Udemy',
            category: 'web development',
            image: 'images/certs/webdevBootcampUdemy.jpg',
            link: 'https://www.udemy.com/certificate/UC-8243dd44-109d-4499-b3d5-09362934b363/',
            description: 'The Complete Full-Stack Web Development Bootcamp'
        },
        {
            title: 'Sololearn',
            category: 'web development',
            image: 'images/certs/javascriptSoloLearn.jpg',
            link: 'https://www.sololearn.com/en/certificates/CC-17IGATBO',
            description: 'Introduction to Javascript'
        },
        {
            title: 'Sololearn',
            category: 'web development',
            image: 'images/certs/HTMLSOLOLEARN.jpg',
            link: 'https://www.sololearn.com/en/certificates/CC-158VGK4R',
            description: 'Introduction to HTML'
        }
    ];

    ngOnInit() {
        this.generateCategories();
    }

    generateCategories() {
        const uniqueCategories = new Set<string>();
        // Normalize categories: lowercase only for uniqueness check
        // But we want to keep a nice display format. 
        // Strategy: Use the first occurrence's casing for display, but track lowercase for uniqueness.

        const displayCategories = new Map<string, string>();

        this.certificates.forEach(cert => {
            const lowerKey = cert.category.toLowerCase();
            if (!displayCategories.has(lowerKey)) {
                displayCategories.set(lowerKey, cert.category); // Store the first casing we see
            }
        });

        this.categories = ['All', ...Array.from(displayCategories.values())];
    }

    setFilter(filter: string): void {
        this.activeFilter = filter.toLowerCase();
        this.selectActive = false;
    }

    toggleSelect(): void {
        this.selectActive = !this.selectActive;
    }

    isCertificateVisible(cert: Certificate): boolean {
        if (this.activeFilter === 'all') return true;
        return cert.category.toLowerCase() === this.activeFilter;
    }

    setActiveTab(tab: 'certificates' | 'awards'): void {
        this.activeTab = tab;
    }
}
