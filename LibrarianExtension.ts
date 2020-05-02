import { UniversityLibrarian } from './classes';

declare module './classes' {
    interface UniversityLibrarian {
        phone: string;
        hostSeminar: (string) => void;
    }
}

UniversityLibrarian.prototype.hostSeminar = (name) => {
    console.log(`Hosting seminar: ${name}`);
}