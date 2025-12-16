import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionCard } from '../../../app/shared/ui/section-card/section-card';
@Component({
  selector: 'app-projects-section',
  imports: [SectionCard],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'section-host' },
})
export class ProjectsSection {}