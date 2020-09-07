import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  url: string;

  constructor(
    private urlService: UrlService
  ) {
    this.url = urlService.getUrl();
      console.log(this.url);
   }

  ngOnInit() {
  }

}
