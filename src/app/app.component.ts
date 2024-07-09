import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";
import {CardComponent} from "./card/card.component";
import {ListCardsComponent} from "./list-cards/list-cards.component";
import {RegCorsoComponent} from "./reg-corso/reg-corso.component";
import {MainComponent} from "./main/main.component";
import {BannerComponent} from "./banner/banner.component";
import {NgIf} from "@angular/common";
import {interval} from "rxjs";
import {UtenteService} from "../services/utente/utente.service";
import {CorsoService} from "../services/corso/corso.service";
import {CorsoDto} from "../model/corsoDto";
import {UtenteDto} from "../model/utenteDto";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegisterComponent, LoginComponent, NavbarComponent, FooterComponent, CardComponent, ListCardsComponent, RegCorsoComponent, MainComponent, BannerComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{


  constructor(private utenteService : UtenteService, private corsoService : CorsoService) {

    this.corsoService.getAll().subscribe((result : CorsoDto[]) =>{
      console.log(result);
    });

    this.utenteService.getAll().subscribe((result : UtenteDto[]) =>{
      console.log(result);
    })
  }


  title = 'gestionale_corsi';

  isLogged : boolean = false;
  message : string = ' ';

  onLogin($event: string) {
    this.message = $event;
    this.isLogged = true;
  }
}
