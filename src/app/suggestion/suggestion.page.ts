import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../url.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.page.html',
  styleUrls: ['./suggestion.page.scss'],
})
export class SuggestionPage implements OnInit {
  private suggestion : FormGroup;
  fullName: any;
  city: any;
  mobileNumber: any;
  url: string;
  constructor(
    private formBuilder: FormBuilder, 
    public loadingController:LoadingController, 
    public http: HttpClient,
    private storage: Storage,
    private urlService: UrlService,
    public router: Router,
    public alertCtrl: AlertController
  ) {
    this.url = urlService.getUrl();
    console.log(this.url);

    this.suggestion = this.formBuilder.group({
      suggestion: new FormControl('', [Validators.required, Validators.maxLength(500), Validators.minLength(5)])
    });

    this.storage.get('name').then(val=>{
      this.fullName = val;
    });
    this.storage.get('city').then(val=>{
      this.city = val;
    });
    this.storage.get('mobileNumber').then(val=>{
      this.mobileNumber = val;
    });
   }

  ngOnInit() { }

  submit(){
    let loader = this.loadingController.create({
      message: 'Please Wait',
      translucent: true
    }).then(loaderCtrl => {
      loaderCtrl.present().then(()=>{
        console.log("Loading Starts");
      });
    });

    console.log("Coming inside submit function");
    console.log(this.suggestion.value.suggestion);
    console.log("Full Name" + this.fullName);
    console.log("City" + this.city);
    console.log("Mobile Number" + this.mobileNumber);


    let postData = new FormData();
      postData.append('fullName',this.fullName);
      postData.append('city',this.city);
      postData.append('mobileNumber',this.mobileNumber);
      postData.append('suggestion',this.suggestion.value.suggestion);

      let url = this.url + "suggestions.php";

      let callback:Observable<any> = this.http.post(url,postData);
      callback.subscribe( call => {
        if(call.status == 200){
          // alert(call.msg);
          console.log("Data inserted");

          this.loadingController.dismiss();
          this.presentAlert();
          this.router.navigate(['tabs']);
        } else {
          this.loadingController.dismiss();
          alert(call.msg);
        }
      });
    }

    async presentAlert() {
      const alert = await this.alertCtrl.create({
        header: 'Thanks for your feedback',
        subHeader: 'We will work on it!',
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
