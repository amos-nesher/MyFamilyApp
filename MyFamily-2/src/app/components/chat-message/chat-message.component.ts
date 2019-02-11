import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from '../../services/chat.service';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {
  @Input() message: ChatMessage;
  @Input() senderName: string;
  @Input() isUser: boolean;
  
  constructor() { }

  ngOnInit() {
  }
}
