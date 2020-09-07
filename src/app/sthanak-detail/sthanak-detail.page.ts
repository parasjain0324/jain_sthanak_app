import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sthanak-detail',
  templateUrl: './sthanak-detail.page.html',
  styleUrls: ['./sthanak-detail.page.scss'],
})
export class SthanakDetailPage implements OnInit {
  url: string;
  data : Observable<any>;
  result:any=[];
  sid: any;
  constructor(
    private urlService: UrlService,
    public http: HttpClient,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) {
      this.url = urlService.getUrl();
      console.log(this.url);

      this.activatedRoute.queryParams.subscribe((data) => {
        this.sid = data.sid;
        console.log("Sid: " + this.sid);
      });
      console.log("Sid: " + this.sid);

   }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((data) => {
      var url = this.url + "list_sthanak_members.php?sid=" + data.sid;
      this.data = this.http.get(url);
      this.data.subscribe(data=>{
        this.result = data.records;
        console.log(this.result);
      });
    });
  }

  memberDetail(member_id){
    this.router.navigate(['member-detail'], {queryParams:{
      member_id:member_id
      }
    })
  }

}
