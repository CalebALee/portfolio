import { Routes } from '@angular/router';
import { HomePage } from './home.page';
import { AboutSection } from './about-section/about-section';
import { EducationSection } from './education-section/education-section';
import { ProjectsSection } from './projects-section/projects-section';
import { ContactSection } from './contact-section/contact-section';

export const HOME_ROUTES: Routes = [
  { path: '', component: HomePage, title: 'Home' },
  { path: 'about', component: AboutSection, title: 'About' },
  { path: 'education', component: EducationSection, title: 'Education' },
  { path: 'projects', component: ProjectsSection, title: 'Projects' },
  { path: 'contact', component: ContactSection, title: 'Contact' },
];
