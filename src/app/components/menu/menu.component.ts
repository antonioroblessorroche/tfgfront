import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  isLogged: boolean;
  isAdmin: boolean;
  username: string;

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit() {
    this.testLogged();
  }

  logOut() {
    this.tokenService.logOut();
    this.isLogged = false;
    this.isAdmin = false;
    this.router.navigate(['/login']);
  }

  testLogged(): void {
    this.isLogged = this.tokenService.getToken() != null;
    this.isAdmin = this.tokenService.getAuthorities().length > 1;
    this.username = this.tokenService.getUsername();
  }

}
