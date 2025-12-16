import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionCard } from '../../../app/shared/ui/section-card/section-card';
@Component({
  selector: 'app-contact-section',
  imports: [SectionCard],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'section-host' },
})
export class ContactSection {}