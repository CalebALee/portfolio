import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutChromeService } from '../chrome/layout-chrome.service';
import { SiteHeader } from '../chrome/site-header/site-header';
import { SiteFooter } from '../chrome/site-footer/site-footer';

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, SiteHeader, SiteFooter],
  templateUrl: './app-shell.html',
  styleUrl: './app-shell.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppShell {
  private readonly chrome = inject(LayoutChromeService);
  readonly chromeVisible = computed(() => this.chrome.visible());
}
