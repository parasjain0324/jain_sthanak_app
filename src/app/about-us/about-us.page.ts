import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {
  url: any;
  data: any;
  result: any;

  constructor(
    private urlService: UrlService,
    public http: HttpClient
  ) { 
      this.url = urlService.getUrl();
      console.log(this.url);
  }

  ngOnInit() {
  //   var url3= this.url + "about-us.php";
  //   this.data = this.http.get(url3);
  //   this.data.subscribe(data=>{
  //     // console.log(data.records);
  //     this.result = data.records;
  //     console.log(this.result);
  //   });
  }

}
