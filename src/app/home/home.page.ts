import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MenuController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  result:any=[];
  result_cities:any=[];
  result_states:any=[];
  data : Observable<any>;
  public cityName="";
  public stateName="";
  url: String;

  slideOpts = {
    // speed: 500,
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
    public http: HttpClient,
    public router: Router,
    public menuCtrl: MenuController,
    private platform: Platform,
    private storage: Storage
     ) { 
      this.url = urlService.getUrl();
      console.log(this.url);

      menuCtrl.enable(true);

      this.platform.backButton.subscribe(() => {
        navigator['app'].exitApp();
      })
   }

  ngOnInit() {
    console.log("CALLED>>>>>>>>>>>>>>>>>>>>>>>>");
    this.storage.get('reload').then(val => {
        console.log(val);
        if ( val != '2' ) {
          console.log(val);
          this.storage.set('reload', '2');
          console.log(val);
          // window.location.reload();
        }
      });  

    var url3= this.url + "list_states.php";
    this.data = this.http.get(url3);
    this.data.subscribe(data=>{
      // console.log(data.records);
      this.result_states = data.records;
      console.log(this.result_states);
    });
  }

  getCities(){
    console.log("Coming in getCities");
    var url2 = this.url + "list_cities.php?statid=" + this.stateName;
    this.data = this.http.get(url2);
    this.data.subscribe(data=>{
      // console.log(data.records);
      this.result_cities = data.records;
      console.log(this.result_cities);
    });
  }

  check(){
    console.log("This is check function");
    var url = this.url + "sthanak.php";
    this.data = this.http.get(url);
    this.data.subscribe(data=>{
      // console.log(data.records);
      this.result = data.records;
      console.log(this.result);
    });
  }

  onSubmit(){
    console.log(this.cityName);
    var url = this.url + "sthanak.php?cityId=" + this.cityName;
    this.data = this.http.get(url);
    this.data.subscribe(data=>{
      // console.log(data.records);
      this.result = data.records;
      console.log(this.result);
    });
  }

  join(sid:string){
    console.log(sid);
    console.log("Coming inside join button");

    this.router.navigate(['sthanak-join'], {queryParams:{
      sid:sid
      }
    })

    // this.navCtrl.push('JoinSthanakPage',{sid:sid});
  }
  
  // To get Member Details
  memberDetail(member_id){
    this.router.navigate(['member-detail'], {queryParams:{
      member_id:member_id
      }
    })
    // console.log(member_id);
    // const modal = this.modalCtrl.create('SthanakMemberDetailPage', {member_id:member_id});
    // modal.present();
    console.log("Coming insside memberdetail function");
    // this.navCtrl.push(SthanakMemberDetailPage);
  }


}
