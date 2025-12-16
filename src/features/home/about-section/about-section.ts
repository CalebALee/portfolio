import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionCard } from '../../../app/shared/ui/section-card/section-card';

@Component({
  selector: 'app-about-section',
  imports: [SectionCard],
  templateUrl: './about-section.html',
  styleUrl: './about-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'section-host' },
})
export class AboutSection {}