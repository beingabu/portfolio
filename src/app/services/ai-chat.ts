import { Injectable } from '@angular/core';
import { SYSTEM_PROMPT } from '../config/prompt';

@Injectable({
  providedIn: 'root'
})
export class AiChatService {
  private apiUrl = 'https://epic-backend-qw72xptp1-beingmartinbmcs-projects.vercel.app/api/generic';

  async sendMessage(message: string): Promise<string> {
    try {
      // Combine system prompt with user message
      const fullPrompt = `${SYSTEM_PROMPT}\n\nUser Question: ${message}\n\nProvide a helpful, conversational response:`;

      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36'
        },
        body: JSON.stringify({ prompt: fullPrompt })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      return data.response || data.text || data.message || 'Sorry, I couldn\'t process that. Please try again!';
    } catch (error) {
      console.error('AI Chat error:', error);
      return 'Oops! Something went wrong. I\'m having trouble connecting right now. Please try again in a moment! 🤖';
    }
  }
}
