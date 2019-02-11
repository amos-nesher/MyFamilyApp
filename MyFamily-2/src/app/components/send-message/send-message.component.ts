import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {
  @Output() send: EventEmitter<string> = new EventEmitter<string>();
  message: FormControl = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  doSend() {
    this.send.emit(this.message.value);
    this.message.setValue('');
  }
}
