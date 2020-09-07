import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, LoadingController, AlertController } from '@ionic/angular';
import { UrlService } from '../url.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  private otpcheck : FormGroup;
  data : Observable<any>;
  fullName: any;
  city: any;
  mobileNumber: any;
  otp: any;
  resendDisable=true;
  public timer = 60;

  url: string;

  constructor(
    private urlService: UrlService,
    public activatedRoute: ActivatedRoute,
    public menuCtrl: MenuController,
    public formBuilder: FormBuilder,
    public http: HttpClient,
    public loadingController: LoadingController,
    private storage: Storage,
    public router: Router,
    public alertCtrl: AlertController
    ) {
        this.url = urlService.getUrl();
        console.log(this.url);

        menuCtrl.enable(false);
        
        this.activatedRoute.queryParams.subscribe((data) => {
          // this.dataReceived = JSON.stringify(data);
          this.fullName = data.fullName;
          this.city = data.city;
          this.mobileNumber = data.mobileNumber;
          this.otp = data.otp;
          console.log("Full name = " + this.fullName + "\n City = " + this.city + "\n Mobile Number = " + this.mobileNumber + "\n Otp = " + this.otp);
        });

        console.log("Full name = " + this.fullName + "\n City = " + this.city + "\n Mobile Number = " + this.mobileNumber + "\n Otp = " + this.otp);

        this.otpcheck = this.formBuilder.group({
          otp: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{6}$")])
        });
   }

  ngOnInit() {
    setTimeout( x => {
      this.resendDisable = false;
    }, 60000) // 60 seconds
    this.startTimer();
  }

  startTimer(){
    var intervalVar = setInterval(function(){
      this.timer--;
      if( this.timer == 0 ) {
        clearInterval(intervalVar);
        this.timer = "";
      }
    }.bind(this), 1000)
  }

  resend() {
    this.resendDisable = true;
    this.timer = 120;
    setTimeout( x => {
      this.resendDisable = false;
    }, 120000) // 60 seconds
    this.startTimer();
    console.log("Coming in resend function");
    this.otp = Math.floor(100000 + Math.random() * 900000);
    console.log("New Otp : " + this.otp);

    var url = this.url + "sendotp.php?mobile=" + this.mobileNumber + "&otp=" + this.otp;

    let callback:Observable<any> = this.http.get(url);
    callback.subscribe( call => {
      if(call.status == 200){
        alert("Otp send sucessfully");
      } else {
        // submitdataloadingcontroller.dismiss();
        // alert(call.msg);
        alert("There is some error in sending OTP.");
      }
    });
  }

  submit() {
    

    console.log("Otp from User : " + this.otpcheck.value.otp);

    if ( this.otp == this.otpcheck.value.otp ) {
      console.log("Coming in Correct OTP");

      let loader = this.loadingController.create({
        message: 'Please Wait',
        translucent: true
      }).then(loaderCtrl => {
        loaderCtrl.present().then(()=>{
          console.log("Loading Starts");
        });
      });

      let postData = new FormData();
      postData.append('fullName',this.fullName);
      postData.append('city',this.city);
      postData.append('mobileNumber',this.mobileNumber);
      postData.append('otp',this.otp);

      let url = this.url + "insert_login_users.php";

      let callback:Observable<any> = this.http.post(url,postData);
      callback.subscribe( call => {
        if(call.status == 200){
          // alert(call.msg);
          console.log("Data inserted __--------------- full name" + this.fullName);
          this.storage.set('name', this.fullName);
          this.storage.set('city', this.city);
          this.storage.set('mobileNumber', this.mobileNumber);
          this.storage.set('reload', 0);

          this.storage.get('name').then(val => {
            console.log(val);
          })

          this.loadingController.dismiss();
          // location.
          
          this.storage.get('name').then(val => {
            console.log(val);
          })

          this.router.navigate(['tabs']);
          // this.navCtrl.setRoot('HomePage');
          // location.reload();
        } else {
          this.loadingController.dismiss();
          alert(call.msg);
        }
      });
    }
    else {
      this.presentAlert();
    }
}

async presentAlert() {
  const alert = await this.alertCtrl.create({
    header: 'Invalid OTP',
    // subHeader: 'Please Enter Correct OTP!',
    buttons: ['OK']
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
