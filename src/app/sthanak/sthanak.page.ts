import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sthanak',
  templateUrl: './sthanak.page.html',
  styleUrls: ['./sthanak.page.scss'],
})
export class SthanakPage implements OnInit {

  url: string;
  data : Observable<any>;
  result:any=[];
  public mobileNumber = "";
  public noOfRowsIsZero: any;
  public noOfRowsIsNonZero: any;
  data2: Observable<any>;
  result2: any=[];

  slideOpts = {
    speed: 500,
    zoom: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  };

  constructor(
    private urlService: UrlService,
    public storage: Storage,
    public http: HttpClient,
    public router: Router
  ) {
    this.url = urlService.getUrl();
    console.log(this.url);
   }

  ngOnInit() {
    
    this.storage.get('mobileNumber').then(val => {
      var url = this.url + "list_sthanak.php?mobile1=" + val;
      this.data = this.http.get(url);
      this.data.subscribe(data=>{
        this.result = data.records;
        if ( this.result.length == '' ) {
          this.noOfRowsIsZero = true;
        }
        if ( this.result.length != '' ) {
          this.noOfRowsIsNonZero = true;
        }
      });  
    });

    this.storage.get('mobileNumber').then(val => {
      var url2 = this.url + "defaultSthanakImage.php?mobile1=" + val;
      this.data2 = this.http.get(url2);
      this.data2.subscribe(data=>{
        this.result2 = data.records;
      });
    });
  }

  sthanakDetail(sid){
    this.router.navigate(['sthanak-detail'], {queryParams:{
      sid:sid
    }
    })
    // console.log(sid);
    // console.log(sid);
    // var url = this.url.getUrl() + "list_sthanak_members.php?sid=" + sid;
    //   this.data = this.http.get(url);
    //   this.data.subscribe(data=>{
    //     this.result = data.records;
    //   }); 
    // console.log("Coming Inside Sthanak Detail page");
    // this.navCtrl.push('SthanakDirectoryDetailPage', {sid:sid});
  }

}
