import { Component, Input } from '@angular/core';
import { iTask } from '../tasks';

@Component({
  selector: 'task-badge',
  templateUrl: 'task-badge.html'
})

export class TaskBadge {
  @Input() task: iTask;

  constructor() {}
}
