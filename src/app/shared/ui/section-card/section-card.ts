import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-section-card',
  templateUrl: './section-card.html',
  styleUrl: './section-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'section-card-host' },
})
export class SectionCard {
  readonly sectionId = input.required<string>();
  readonly title = input.required<string>();
  readonly fullHeight = input(true);

  readonly titleId = computed(() => `${this.sectionId()}-title`);
}
