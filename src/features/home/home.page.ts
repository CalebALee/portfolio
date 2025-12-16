import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, ViewChild, afterNextRender, inject } from '@angular/core';
import { LayoutChromeService } from '../../layouts/chrome/layout-chrome.service';
import { AboutSection } from './about-section/about-section';
import { EducationSection } from './education-section/education-section';
import { ProjectsSection } from './projects-section/projects-section';
import { ContactSection } from './contact-section/contact-section';
@Component({
  selector: 'app-home-page',
  imports: [AboutSection, EducationSection, ProjectsSection, ContactSection],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  @ViewChild('hero', { static: true })
  private readonly hero!: ElementRef<HTMLElement>;

  private readonly chrome = inject(LayoutChromeService);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const heroEl = this.hero.nativeElement;

      const observer = new IntersectionObserver(
        ([entry]) => this.chrome.setVisible(!entry.isIntersecting),
        { threshold: 0.6 }
      );

      observer.observe(heroEl);
      this.destroyRef.onDestroy(() => {
        observer.disconnect();
        this.chrome.show();
      });
    });
  }
}
