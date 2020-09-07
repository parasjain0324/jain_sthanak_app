import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private url = 'https://jainmandirbaragaon.com/sthanakapp_try1_php/';

  constructor() { 
    console.log('URL Service Called');
   }

   getUrl(){
     return(this.url);
   }
}
