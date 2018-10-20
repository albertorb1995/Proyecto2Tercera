import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FinalFantasyServiceProvider } from '../../providers/final-fantasy-service/final-fantasy-service';
import { NgForm } from '@angular/forms';

/**
 * Generated class for the CreatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-creator',
  templateUrl: 'creator.html',
})



export class CreatorPage {
  id: any;
  usuario: any={};
  error: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ffService: FinalFantasyServiceProvider, public toastCtrl: ToastController) {
  }

  

  push(form: NgForm) {
    let update: boolean = form['href'];
    this.ffService.push(form).subscribe(result => {
      let toast = this.toastCtrl.create({
        message: 'Character ' + ((update) ? 'updated' : 'added') + '.',
        duration: 3000
      });
      toast.present();
    }, error => this.error = error)
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatorPage');
  }

}
