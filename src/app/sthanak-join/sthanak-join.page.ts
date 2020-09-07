import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UrlService } from '../url.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoadingController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sthanak-join',
  templateUrl: './sthanak-join.page.html',
  styleUrls: ['./sthanak-join.page.scss'],
})
export class SthanakJoinPage implements OnInit {

  private join : FormGroup;
  sid: any;
  fullName: any;
  city: any;
  mobileNumber: any;
  url: string;
  
  constructor(
    private urlService: UrlService,
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public loadingController: LoadingController,
    public router: Router,
    public http: HttpClient,
    public alertCtrl: AlertController
    ) { 
        this.url = urlService.getUrl();
        console.log(this.url);

        // this.sid = navParams.get('sid');
        console.log(this.sid);
        this.activatedRoute.queryParams.subscribe((data) => {
          // this.dataReceived = JSON.stringify(data);
          this.sid = data.sid;
          console.log("SID --- " + this.sid);
        });

      this.join = this.formBuilder.group({
        name: new FormControl('', [Validators.required,Validators.maxLength(100)]),
        mobile_1: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
        mobile_2: new FormControl('', [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
        whatsapp_no: new FormControl('', [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
        residence_no: new FormControl('', [Validators.maxLength(15)]),
        office_no: new FormControl('', [Validators.maxLength(15)]),
        email_id: new FormControl('', [Validators.maxLength(100),Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
        residence_address: new FormControl('', [Validators.maxLength(300)]),
        office_address: new FormControl('', [Validators.maxLength(300)]),
        gotra: new FormControl('', [Validators.maxLength(100)]),
        belong_to: new FormControl('', [Validators.maxLength(100)]),
        no_family_member: new FormControl('', [Validators.maxLength(200)])
      });

    }

  ngOnInit() {

  }

  join_sthanak() {
    let loader = this.loadingController.create({
      message: 'Please Wait',
      translucent: true
    }).then(loaderCtrl => {
      loaderCtrl.present().then(()=>{
        console.log("Loading Starts");
      });
    });

    console.log("Coming inside submit function");
    console.log("sid" + this.sid);
    console.log("name" + this.join.value.name);
    console.log("mobile_1" + this.join.value.mobile_1);
    console.log("mobile_2" + this.join.value.mobile_2);
    console.log("whatsapp_no" + this.join.value.whatsapp_no);
    console.log("residence_no" + this.join.value.residence_no);
    console.log("office_no" + this.join.value.office_no);
    console.log("email_id" + this.join.value.email_id);
    console.log("residence_address" + this.join.value.residence_address);
    console.log("office_address" + this.join.value.office_address);
    console.log("gotra" + this.join.value.gotra);
    console.log("belong_to" + this.join.value.belong_to);
    console.log("no_family_member" + this.join.value.no_family_member);


    let postData = new FormData();
    postData.append('sid',this.sid);
    postData.append('name',this.join.value.name);
    postData.append('mobile_1',this.join.value.mobile_1);
    postData.append('mobile_2',this.join.value.mobile_2);
    postData.append('whatsapp_no',this.join.value.whatsapp_no);
    postData.append('residence_no',this.join.value.residence_no);
    postData.append('office_no',this.join.value.office_no);
    postData.append('email_id',this.join.value.email_id);
    postData.append('residence_address',this.join.value.residence_address);
    postData.append('office_address',this.join.value.office_address);
    postData.append('gotra',this.join.value.gotra);
    postData.append('belong_to',this.join.value.belong_to);
    postData.append('no_family_member',this.join.value.no_family_member);

    let url = this.url + "join_sthanak.php";

      let callback:Observable<any> = this.http.post(url,postData);
      callback.subscribe( call => {
        if(call.status == 200){
          // alert(call.msg);
          console.log("Data inserted");
          this.loadingController.dismiss();
          this.presentAlert();
          this.router.navigate(['tabs']);
          // this.navCtrl.setRoot('HomePage');
        } else {
          this.loadingController.dismiss();
          alert(call.msg);
        }
      });
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Join Request received.',
      subHeader: '- Jain Sthanak App Team',
      buttons: ['Okay']
      // header: 'Alert',
      // subHeader: 'Subtitle',
      // message: 'This is an alert message.',
      // buttons: ['OK'],
    });
  
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

}
