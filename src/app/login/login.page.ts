import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';
import { MenuController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  url: string;
  public login: FormGroup;
  otp: number;

  constructor(
    private urlService: UrlService,
    public menuCtrl: MenuController,
    public formBuilder: FormBuilder,
    public http: HttpClient,
    public loadingController: LoadingController,
    public router: Router
  ) { 
    this.url = urlService.getUrl();
    console.log(this.url);
    
    menuCtrl.enable(false);
  }

  ngOnInit() {
    this.login = this.formBuilder.group({
      fullName: new FormControl('', [Validators.required]),
      city: new FormControl('', Validators.required),
      mobileNumber: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
    });
  }

  submit(){
    console.log();
    let loader = this.loadingController.create({
      message: 'Please Wait',
      translucent: true
    }).then(loaderCtrl => {
      loaderCtrl.present().then(()=>{
        console.log("Loading Starts");
      });
    });

    this.otp = Math.floor(100000 + Math.random() * 900000);

    var url = this.url + "sendotp.php?mobile=" + this.login.value.mobileNumber + "&otp=" + this.otp;

    let callback:Observable<any> = this.http.get(url);
    callback.subscribe( call => {
      if(call.status == 200){
        this.router.navigate(['otp'], {queryParams:{
          fullName: this.login.value.fullName,
          city:this.login.value.city,
          mobileNumber:this.login.value.mobileNumber,
          otp:this.otp
        }
        })
        this.loadingController.dismiss();
      } else {
        this.loadingController.dismiss();
        alert("There is some error in sending OTP.");
      }
    });
    console.log("COming iNside Lading Cotroller");

  }

}
