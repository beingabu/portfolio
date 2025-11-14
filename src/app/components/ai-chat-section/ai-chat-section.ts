import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AiChatService } from '../../services/ai-chat';
import { marked } from 'marked';

interface Message {
  role: 'user' | 'ai';
  content: string;
  htmlContent?: SafeHtml;
}

@Component({
  selector: 'app-ai-chat-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ai-chat-section.html',
  styleUrl: './ai-chat-section.scss'
})
export class AIChatSectionComponent {
  private initialMessage = "👋 Hey there! I'm Abhishek's AI assistant — but not just that.\nI can tell you about his projects, skills, experience, and the cool things he's building.\nAnd if you want help with something completely different — coding questions, tech explanations, ideas, troubleshooting, or general knowledge — I've got you covered too.\nAsk me anything!";
  
  messages = signal<Message[]>([
    {
      role: 'ai',
      content: this.initialMessage,
      htmlContent: undefined
    }
  ]);
  
  userInput = '';
  isTyping = signal(false);

  constructor(private aiChatService: AiChatService, private sanitizer: DomSanitizer) {
    // Configure marked options
    marked.setOptions({
      breaks: true,
      gfm: true
    });
    
    // Initialize the first message's HTML after construction
    this.messages.update(msgs => {
      if (msgs.length > 0 && !msgs[0].htmlContent) {
        msgs[0].htmlContent = this.parseMarkdown(msgs[0].content);
      }
      return msgs;
    });
  }

  parseMarkdown(text: string): SafeHtml {
    const html = marked.parse(text) as string;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  async sendMessage() {
    if (!this.userInput.trim() || this.isTyping()) return;

    const userMessage = this.userInput.trim();
    this.messages.update(msgs => [...msgs, { 
      role: 'user', 
      content: userMessage,
      htmlContent: this.parseMarkdown(userMessage)
    }]);
    this.userInput = '';
    this.isTyping.set(true);

    try {
      const response = await this.aiChatService.sendMessage(userMessage);
      this.messages.update(msgs => [...msgs, { 
        role: 'ai', 
        content: response,
        htmlContent: this.parseMarkdown(response)
      }]);
    } catch (error) {
      const errorMsg = 'Oops! Something went wrong. Please try again.';
      this.messages.update(msgs => [...msgs, { 
        role: 'ai', 
        content: errorMsg,
        htmlContent: this.parseMarkdown(errorMsg)
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
