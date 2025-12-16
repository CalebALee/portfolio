import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  ViewChild,
  afterNextRender,
  inject,
} from '@angular/core';
import { LayoutChromeService } from '../../layouts/chrome/layout-chrome.service';

@Component({
  selector: 'app-home-page',
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
        this.chrome.show(); // when leaving Home later, default to visible chrome
      });
    });
  }
}
