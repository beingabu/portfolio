import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { AboutComponent } from './components/about/about';
import { SkillsComponent } from './components/skills/skills';
import { ContactComponent } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'Frontend Developer Portfolio';
}
