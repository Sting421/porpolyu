import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IframeViewerService } from '../../services/iframe-viewer.service';

@Component({
    selector: 'app-resume',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './resume.component.html',
    styleUrl: './resume.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ResumeComponent {
    @Input() isActive = false;

    cvPath = '/Aldrin_John_Vitorillo_CV.pdf';

    constructor(private iframeViewerService: IframeViewerService) { }

    viewCV(): void {
        this.iframeViewerService.openUrl(this.cvPath);
    }

    education = [
        { title: 'Cebu Institute of Technology - University', description: 'B.S. in Information Technology', period: '2022 — Present', url: 'https://cit.edu' },
        { title: 'Holy Name University', description: 'Senior High School', period: '', url: 'https://hnu.edu.ph' },
        { title: 'Holy Name University', description: 'High School', period: '', url: 'https://hnu.edu.ph' },
        { title: 'Holy Name University', description: 'Elementary', period: '', url: 'https://hnu.edu.ph' }
    ];

    experience = [
        {
            title: 'Full Stack Developer',
            period: '2018 — Present',
            description: 'Developed responsive and interactive web applications using modern front-end technologies. Collaborated with cross-functional teams to deliver high-quality user interfaces and optimize web performance.'
        },
        {
            title: 'Video Editor',
            period: '2015 — Present',
            description: 'Created engaging visual content across various platforms, utilizing advanced editing techniques and storytelling skills. Produced high-quality videos for marketing, social media, and promotional campaigns.'
        },
        {
            title: 'Photo Editor',
            period: '2013 — Present',
            description: 'Expertly enhanced and retouched photographs for various media platforms, utilizing advanced editing techniques and creative vision. Delivered high-quality visual content that meets client specifications and aesthetic standards.'
        }
    ];

    techStack = [
        { icon: 'devicon-html5-plain colored', style: 'font-size: 190%;color: #17CFCF;' },
        { icon: 'devicon-css3-plain colored', style: 'font-size: 190%;color: #17CFCF;' },
        { icon: 'devicon-javascript-plain colored', style: 'font-size: 190%;color: #17CFCF;' },
        { icon: 'devicon-java-plain colored', style: 'font-size: 200%; color: #17CFCF;' },
        { icon: 'devicon-spring-plain colored', style: 'font-size: 190%; color: #17CFCF;' },
        { icon: 'devicon-c-plain colored', style: 'font-size: 190%; color: #17CFCF;' },
        { icon: 'devicon-react-plain colored', style: 'font-size: 190%; color: #17CFCF;' },
        { icon: 'devicon-django-plain', style: 'font-size: 190%; color: #17CFCF;' },
        { icon: 'devicon-python-plain colored', style: 'font-size: 190%; color: #17CFCF;' },
        { icon: 'devicon-kotlin-plain colored', style: 'font-size: 190%; color: #17CFCF;' },
        { icon: 'devicon-bootstrap-plain colored', style: 'font-size: 190%; color: #17CFCF;' },
        { icon: 'devicon-github-plain', style: 'font-size: 190%; color: #17CFCF;' },
        { icon: 'devicon-materialui-plain colored', style: 'font-size: 190%; color: #17CFCF;' },
        { icon: 'devicon-angular-plain colored', style: 'font-size: 190%; color: #17CFCF;' },
        { icon: 'devicon-vitejs-plain colored', style: 'font-size: 190%; color: #17CFCF;' },
        { icon: 'devicon-nextjs-plain colored', style: 'font-size: 190%; color: #17CFCF;' },
        { icon: 'devicon-tailwindcss-plain colored', style: 'font-size: 190%; color: #17CFCF;' },
        { icon: 'devicon-supabase-plain colored', style: 'font-size: 190%; color: #17CFCF;' }
    ];

    graphicsSoftware = [
        { icon: 'devicon-canva-plain', style: 'font-size: 190%; color: #17CFCF;' },
        { icon: 'devicon-photoshop-plain', style: 'font-size: 190%; color: #17CFCF;' },
        { icon: 'devicon-illustrator-plain colored', style: 'font-size: 190%; color: #17CFCF;' },
        { icon: 'devicon-aftereffects-plain', style: 'font-size: 190%; color: #17CFCF;' },
        { icon: 'devicon-premierepro-plain', style: 'font-size: 190%; color: #17CFCF;' },
        { icon: 'devicon-figma-plain', style: 'font-size: 190%; color: #17CFCF;' }
    ];
}
