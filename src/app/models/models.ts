// Project interface
export interface Project {
    title: string;
    category: string;
    image: string;
    link: string;
    description?: string;
}

// Certificate interface
export interface Certificate {
    title: string;
    category: string;
    image: string;
    link: string;
    description: string;
}

// Award interface
export interface Award {
    title: string;
    category: string;
    image: string;
    link: string;
    description: string;
}

// Testimonial interface
export interface Testimonial {
    img: string;
    alt: string;
    name: string;
    text: string;
}

// Service interface
export interface Service {
    icon: string;
    title: string;
    description: string;
}

// Contact form interface
export interface ContactForm {
    fullname: string;
    email: string;
    message: string;
}
