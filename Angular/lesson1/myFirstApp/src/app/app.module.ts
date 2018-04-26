import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
// import { MyFirstComponent } from './components/myfirstcomponent/myfirstcomponent.component'
import { MySecondComponent } from './components/mysecondcomponent/mysecondcomponent.component'


@NgModule({
  declarations: [
    AppComponent,
//    MyFirstComponent,
    MySecondComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
