import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
  level: number;
  category: string;
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'Angular', icon: '🅰️', level: 95, category: 'Framework' },
    { name: 'React', icon: '⚛️', level: 90, category: 'Framework' },
    { name: 'TypeScript', icon: '📘', level: 92, category: 'Language' },
    { name: 'JavaScript', icon: '📜', level: 95, category: 'Language' },
    { name: 'HTML5', icon: '🌐', level: 98, category: 'Markup' },
    { name: 'CSS3/SCSS', icon: '🎨', level: 95, category: 'Styling' },
    { name: 'Tailwind CSS', icon: '💨', level: 88, category: 'Styling' },
    { name: 'Node.js', icon: '🟢', level: 85, category: 'Backend' },
    { name: 'Git', icon: '📦', level: 90, category: 'Tools' },
    { name: 'Responsive Design', icon: '📱', level: 95, category: 'Design' },
    { name: 'REST APIs', icon: '🔌', level: 90, category: 'Integration' },
    { name: 'UI/UX', icon: '✨', level: 87, category: 'Design' }
  ];
}
