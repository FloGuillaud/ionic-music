import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Platform} from "ionic-angular";

import { MediaPlugin } from 'ionic-native';

/*
  Generated class for the MyMusic page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-music',
  templateUrl: 'my-music.html',
  providers: []
})
export class MyMusicPage {
  songs: { [asset: string]: MediaPlugin; } = { };
  iconRecordBtn: String = "microphone";
  time: number = 0;
  record: { [time: number]: String; } = { };

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform) {
    this.platform.ready().then(() => {
      this.songs['gb'] = new MediaPlugin("/assets/music/gb.wav");
      this.songs['a'] = new MediaPlugin("/assets/music/a.wav");
      this.songs['bb'] = new MediaPlugin("/assets/music/bb.wav");
      this.songs['b'] = new MediaPlugin("/assets/music/b.wav");
      this.songs['c'] = new MediaPlugin("/assets/music/c.wav");
      this.songs['cb'] = new MediaPlugin("/assets/music/cb.wav");
      this.songs['d'] = new MediaPlugin("/assets/music/d.wav");
      this.songs['eb'] = new MediaPlugin("/assets/music/eb.wav");
      this.songs['e'] = new MediaPlugin("/assets/music/e.wav");
      this.songs['f'] = new MediaPlugin("/assets/music/f.wav");
      this.songs['fb'] = new MediaPlugin("/assets/music/fb.wav");
      this.songs['g'] = new MediaPlugin("/assets/music/g.wav");
    }).catch(err=> {
      console.log(err);
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyMusicPage');
  }

  recordBtn() {
    if (this.iconRecordBtn == "microphone") {
      this.iconRecordBtn = "pause";
      setInterval(() => {
        this.time = this.time + 1;
      }, 10);
    }
    else {
      this.iconRecordBtn = "microphone";
      this.time = 0;
      console.log(this.record);
      this.record = {};
    }
  }

  playNote(n) {
    //this.songs[n].play();
    if (this.iconRecordBtn == "pause") {
      this.record[this.time] = n;
    }
  }
}
