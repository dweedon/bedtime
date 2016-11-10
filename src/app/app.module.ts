import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TasksPage, TaskBadge } from '../pages/tasks/tasks';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TasksPage,
    TaskBadge,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TasksPage
  ],
  providers: []
})
export class AppModule {}
