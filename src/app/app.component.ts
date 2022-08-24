import { Component, OnInit, ViewChild } from '@angular/core';
import { Routes } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { MenuComponent } from './components/menu/menu.component';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  @ViewChild(MenuComponent) menu: MenuComponent;

  menuOpen = false;
  isAdmin = false;
  username: string;
  

  constructor(
    private menuController: MenuController,
    private tokenService: TokenService
  ) {}

  ngOnInit() {
    this.isAdmin = this.tokenService.getAuthorities().length > 1;
    this.username = this.tokenService.getUsername();
  }

  toggleMenu():void {
    this.menu.testLogged();
    this.menuController.toggle('first');
  }

  changeMenu(): void{
    this.menuOpen = !this.menuOpen;
  }

}
