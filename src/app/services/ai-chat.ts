import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AiChatService {
  private apiUrl = '';
  private apiKey = '';

  async sendMessage(message: string): Promise<string> {
    if (!this.apiUrl || !this.apiKey) {
      return this.getPlaceholderResponse(message);
    }

    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({ message })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      return data.response || 'No response received';
    } catch (error) {
      console.error('AI Chat error:', error);
      throw error;
    }
  }

  private getPlaceholderResponse(message: string): Promise<string> {
    const responses = {
      experience: 'I have 5+ years of experience in frontend development, specializing in Angular, React, and modern web technologies.',
      skills: 'My core skills include Angular, React, TypeScript, JavaScript, HTML5, CSS3/SCSS, and responsive design. I also work with Node.js and various frontend tools.',
      projects: 'I have completed 50+ projects ranging from e-commerce platforms to SaaS applications, always focusing on performance and user experience.',
      default: 'Thanks for your question! I\'m a frontend developer passionate about creating amazing web experiences. Feel free to ask about my experience, skills, or projects!'
    };

    const lowerMessage = message.toLowerCase();
    let response = responses['default'];

    if (lowerMessage.includes('experience') || lowerMessage.includes('work')) {
      response = responses['experience'];
    } else if (lowerMessage.includes('skill') || lowerMessage.includes('technology')) {
      response = responses['skills'];
    } else if (lowerMessage.includes('project') || lowerMessage.includes('portfolio')) {
      response = responses['projects'];
    }

    return new Promise(resolve => {
      setTimeout(() => resolve(response), 1000);
    });
  }

  configureApi(apiUrl: string, apiKey: string): void {
    this.apiUrl = apiUrl;
    this.apiKey = apiKey;
  }
}
