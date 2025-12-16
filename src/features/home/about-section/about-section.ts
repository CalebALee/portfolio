import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.html',
  styleUrl: './about-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'section-host' },
})
export class AboutSection {}