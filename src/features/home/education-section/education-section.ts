import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.html',
  styleUrl: './education-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'section-host' },
})
export class EducationSection {}