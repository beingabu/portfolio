import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AiChatService } from '../../services/ai-chat';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule, FormsModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  isChatOpen = false;
  userMessage = '';
  messages: Message[] = [
    {
      text: '👋 Hey there! I\'m your AI buddy. Ask me about me, the universe, or why programmers prefer dark mode (spoiler: the light attracts bugs 🐛)!',
      isUser: false,
      timestamp: new Date()
    }
  ];
  isTyping = false;

  constructor(private aiChatService: AiChatService) {}

  toggleChat(): void {
    this.isChatOpen = !this.isChatOpen;
  }

  async sendMessage(): Promise<void> {
    if (!this.userMessage.trim()) return;

    const userMsg: Message = {
      text: this.userMessage,
      isUser: true,
      timestamp: new Date()
    };
    this.messages.push(userMsg);
    
    const question = this.userMessage;
    this.userMessage = '';
    this.isTyping = true;

    try {
      const response = await this.aiChatService.sendMessage(question);
      this.messages.push({
        text: response,
        isUser: false,
        timestamp: new Date()
      });
    } catch (error) {
      this.messages.push({
        text: 'Sorry, I encountered an error. Please try again later.',
        isUser: false,
        timestamp: new Date()
      });
    } finally {
      this.isTyping = false;
    }
  }
}
