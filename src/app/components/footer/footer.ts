import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  openAnalytics(): void {
    window.open('https://info.flagcounter.com/6xdf', '_blank', 'noopener,noreferrer');
  }
}
