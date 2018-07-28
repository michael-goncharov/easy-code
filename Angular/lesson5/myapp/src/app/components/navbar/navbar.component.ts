import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin: boolean= false
  constructor(
    private authServise: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authServise.checkAuth().subscribe(auth => {
      if (auth) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    })
  }

  logout() {
    this.authServise.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
  }

}
