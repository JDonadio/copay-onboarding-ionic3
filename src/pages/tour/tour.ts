import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides, Navbar } from 'ionic-angular';

/**
 * Generated class for the TourPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tour',
  templateUrl: 'tour.html',
})
export class TourPage {
  @ViewChild(Slides) slides: Slides;
  @ViewChild(Navbar) navBar: Navbar;

  public currentIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ngOnInit() {
    this.currentIndex = this.slides.getActiveIndex() || 0;
    this.navBar.backButtonClick = (e: UIEvent) => {
      this.slidePrev();
    }
  }

  skip() {
    this.navCtrl.push('EmailPage');
  }

  slidePrev() {
    if (this.currentIndex == 0) this.navCtrl.pop();
    else {
      this.slides.slidePrev();
      this.currentIndex = this.slides.getActiveIndex();
    }
  }

  slideNext() {
    this.slides.slideNext();
    this.currentIndex = this.slides.getActiveIndex();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TourPage');
  }

  createDefaultWallet() {
    let loading = this.loadingCtrl.create({
      content: 'Creating Personal Wallet...'
    });
    loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.navCtrl.push('EmailPage');
    }, 1500);
  }

}
