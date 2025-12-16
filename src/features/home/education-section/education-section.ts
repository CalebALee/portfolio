import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionCard } from '../../../app/shared/ui/section-card/section-card';
@Component({
  selector: 'app-education-section',
  imports: [SectionCard],
  templateUrl: './education-section.html',
  styleUrl: './education-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'section-host' },
})
export class EducationSection {}