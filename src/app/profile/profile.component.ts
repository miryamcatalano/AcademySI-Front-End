import { Component } from '@angular/core';
import {ListCardsComponent} from "../list-cards/list-cards.component";
import {BannerComponent} from "../banner/banner.component";
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {RegCorsoComponent} from "../reg-corso/reg-corso.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ListCardsComponent,
    BannerComponent,
    NavbarComponent,
    FooterComponent,
    NgIf,
    RegCorsoComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  logout: boolean = true;

  constructor(private router: Router) {
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
    this.logout = false;
  }

}
