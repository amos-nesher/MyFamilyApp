import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { chatMock } from "./chat.mock";
import { FamilyMemebersService } from "./family-memebers.service";

export interface ChatMessage {
    time: number; //milisconds represent the Date
    text: string;
    senderId: string; 
}

export type Chat = Array<ChatMessage>;

@Injectable({
    providedIn: 'root'
})
export class ChatService {
    private chatSubject = new BehaviorSubject<Chat>([]);

  constructor(private familyMemebersService: FamilyMemebersService) { 
    this.chatSubject.next(chatMock);
  }

  public getChatSubject() {
    return this.chatSubject;
  }

  public sendMessage(text: string) {
      const chatMessage: ChatMessage = {
        time: Date.now(),
        text: text,
        senderId: this.familyMemebersService.getUser().id
      };

      chatMock.push(chatMessage);
      this.chatSubject.next(chatMock);
  }
}
