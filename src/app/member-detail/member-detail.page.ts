import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.page.html',
  styleUrls: ['./member-detail.page.scss'],
})
export class MemberDetailPage implements OnInit {
  url: string;
  data: any;
  result: any;
  constructor(
    private urlService: UrlService,
    public http: HttpClient,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) { 
    this.url = urlService.getUrl();
    console.log(this.url);

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((data) => {
      var url = this.url + "list_sthanak_members_details.php?id=" + data.member_id;
      this.data = this.http.get(url);
      this.data.subscribe(data=>{
        this.result = data.records;
        console.log(this.result);
      });
    });
  }

  // openEmail(link){
  //   this.iab.create('mailto:' + link, '_system');
  // }

  // openWhatsApp(link){
  //   this.iab.create('https://wa.me/91' + link, '_system');
  // }

}
