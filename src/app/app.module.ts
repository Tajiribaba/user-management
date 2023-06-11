import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CardDesignComponent } from './card-design/card-design.component';
import { UserDesignComponent } from './user-design/user-design.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TaskListComponent,
    CardDesignComponent,
    UserDesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
