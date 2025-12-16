import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'section-host' },
})
export class ProjectsSection {}