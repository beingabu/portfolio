import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  techStack: string;
  liveUrl: string;
  icon: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'AI Quiz Game',
      description: 'AI-powered interactive quiz platform that generates dynamic, unpredictable questions using a custom backend AI API. Built to showcase strong frontend engineering, problem-solving, and rapid learning ability. Features smooth UI, responsive design, and real-time question generation.',
      techStack: 'Angular, Tailwind CSS, Node.js, GPT-5.1 API, GitHub Pages, Vercel',
      liveUrl: 'https://beingabu.github.io/ai-quiz-game/',
      icon: '🎮'
    },
    {
      title: 'Graph Algorithms Visualizer',
      description: 'Created a high-performance visualization tool for BFS, Dijkstra, and A* algorithms with animated exploration steps, maze generation, and an interactive grid. Showcases strong frontend engineering through a well-structured Angular application and responsive UI design with AI integration to explain result.',
      techStack: 'Angular, TypeScript, GitHub Pages, AI Integration',
      liveUrl: 'https://beingabu.github.io/graph-visualizer/',
      icon: '📊'
    }
  ];

  openProject(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
