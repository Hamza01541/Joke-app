import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private overlay: OverlayContainer) { }

  ngOnInit() {
    document.body.classList.add('dark-theme', 'mat-app-background');
  }

  /**
   * Toggles between dark and light theme.
   * @returns {void}
   */
  toggleTheme(): void {
    if (document.body.classList.contains('dark-theme')) {
      this.overlay.getContainerElement().classList.remove('dark-theme');
      this.overlay.getContainerElement().classList.add('light-theme');

      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    } else {
      this.overlay.getContainerElement().classList.remove('light-theme');
      this.overlay.getContainerElement().classList.add('dark-theme');

      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    }
  }
}
