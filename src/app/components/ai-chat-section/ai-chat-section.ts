import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AiChatService } from '../../services/ai-chat';

interface Message {
  role: 'user' | 'ai';
  content: string;
}

@Component({
  selector: 'app-ai-chat-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ai-chat-section.html',
  styleUrl: './ai-chat-section.scss'
})
export class AIChatSectionComponent {
  messages = signal<Message[]>([
    {
      role: 'ai',
      content: "👋 Hey there! I'm Abhishek's AI assistant — but not just that.\nI can tell you about his projects, skills, experience, and the cool things he's building.\nAnd if you want help with something completely different — coding questions, tech explanations, ideas, troubleshooting, or general knowledge — I've got you covered too.\nAsk me anything!"
    }
  ]);
  
  userInput = '';
  isTyping = signal(false);

  constructor(private aiChatService: AiChatService) {}

  async sendMessage() {
    if (!this.userInput.trim() || this.isTyping()) return;

    const userMessage = this.userInput.trim();
    this.messages.update(msgs => [...msgs, { role: 'user', content: userMessage }]);
    this.userInput = '';
    this.isTyping.set(true);

    try {
      const response = await this.aiChatService.sendMessage(userMessage);
      this.messages.update(msgs => [...msgs, { role: 'ai', content: response }]);
    } catch (error) {
      this.messages.update(msgs => [...msgs, { 
        role: 'ai', 
        content: 'Oops! Something went wrong. Please try again.' 
      }]);
    } finally {
      this.isTyping.set(false);
    }
  }

  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }
}
