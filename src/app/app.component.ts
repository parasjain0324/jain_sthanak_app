import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UrlService } from './url.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  // public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/tabs',
      icon: 'home'
    },
    {
      title: 'Suggestions',
      url: '/suggestion',
      icon: 'mail'
    },
    {
      title: 'About Us',
      url: '/about-us',
      icon: 'business'
    },
    {
      title: 'Contact Us',
      url: '/contact-us',
      icon: 'call'
    },
    {
      title: 'Advertise with us',
      url: '/advertise',
      icon: 'bar-chart'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  url: string;
  name: string;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private urlService: UrlService,
    private router: Router,
    private storage: Storage
  ) {
    this.initializeApp();
    this.url = urlService.getUrl();
    console.log(this.url);

    
  }

  initializeApp() {
    this.platform.ready().then(() => {
    
      this.storage.get('mobileNumber').then(val => {
        // console.log("EYRUKEHRU&*(#&*(&(*(&#*($&*(#&$*(@&#$S" + val);
        if(val != null) {
          this.router.navigate(['tabs']);
        }

      })

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  

  ngOnInit() {
    
    this.storage.get('name').then(val => {
      // console.log("______________---------------------" + val);
      this.name = val;
    });
    console.log(this.name);

    // const path = window.location.pathname.split('folder/')[1];
    // if (path !== undefined) {
      // this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    // }
  }
}
