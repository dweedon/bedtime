import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TasksPage } from '../tasks/tasks';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  start() {
    console.log('asdf')
    this.navCtrl.push(TasksPage);
  }

}
