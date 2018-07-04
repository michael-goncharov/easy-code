import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PanelComponent } from './components/panel/panel.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './/app-routing.module';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BooksService } from "./services/books.service";
import { IdService } from "./services/id.service";
import { FormsModule } from "@angular/forms";
import { FlashMessagesModule} from "angular2-flash-messages";

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    AddBookComponent,
    AboutComponent,
    NotFoundComponent,
    EditBookComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [BooksService, IdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
