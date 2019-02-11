import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ChatService, Chat, ChatMessage } from '../services/chat.service';
import { FamilyMemebersService } from '../services/family-memebers.service';
import { Unsubscribable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('chatContainer') private myScrollContainer: ElementRef;

  public chat: Chat = [];
  private unsubscribe: Unsubscribable;

  constructor(
    private chatService: ChatService,
    private familyMemeberService: FamilyMemebersService) { 
      this.unsubscribe = chatService.getChatSubject().subscribe((chat) => {
        this.chat = chat;
        
        // when new chat message arrive - always scroll to the end of the page.
        setTimeout(_ => {
          this.scrollToBottom();
        });
      });
    }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.scrollToBottom();
    }, 500);
  }

  ngOnDestroy() {
    this.unsubscribe.unsubscribe();
  }

  public getSenderName(message: ChatMessage): string {
    return this.familyMemeberService.getFamilyMember(message.senderId).name;
  }

  public isUser(message: ChatMessage): boolean {
    return this.familyMemeberService.isUser(message.senderId);
  }

  public doSend(text: string) {
    this.chatService.sendMessage(text);
  }

  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }                 
}
}
