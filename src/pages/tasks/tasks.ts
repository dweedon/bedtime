import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Tasks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export interface iTask {
    id: string;
    name: string;
    complete: boolean;
    image: string;
}

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html'
})

export class TasksPage {

  public tasks: iTask[] = [
    { id: '1', name: 'Bath Time', complete: false, image: '/assets/images/brush-teeth.png' },
    { id: '2', name: 'Go Potty', complete: false, image: '/assets/images/brush-teeth.png' },
    { id: '3', name: 'Jammies', complete: false, image: '/assets/images/brush-teeth.png' },
    { id: '4', name: 'Brush Teeth', complete: false, image: '/assets/images/brush-teeth.png' },
    { id: '5', name: 'Pick Books', complete: false, image: '/assets/images/brush-teeth.png' },
  ];

  public currentTask: iTask;

  constructor(public navCtrl: NavController) {
    this.currentTask = this.tasks[0];
  }

}

export { TaskBadge } from './taskBadge/taskBadge';
