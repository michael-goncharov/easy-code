import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthService } from "./services/auth.service";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";
import { environment} from "../environments/environment";
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
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    AddBookComponent,
    AboutComponent,
    NotFoundComponent,
    EditBookComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [BooksService, IdService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
