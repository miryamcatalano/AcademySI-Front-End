import { Component } from '@angular/core';
import {ListCardsComponent} from "../list-cards/list-cards.component";
import {BannerComponent} from "../banner/banner.component";
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ListCardsComponent,
    BannerComponent,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
