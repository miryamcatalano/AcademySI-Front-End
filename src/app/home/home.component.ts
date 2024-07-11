import { Component } from '@angular/core';
import {ListCardsComponent} from "../list-cards/list-cards.component";
import {MainComponent} from "../main/main.component";
import {BannerComponent} from "../banner/banner.component";
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ListCardsComponent,
    MainComponent,
    BannerComponent,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
