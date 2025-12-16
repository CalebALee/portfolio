import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'section-host' },
})
export class ContactSection {}