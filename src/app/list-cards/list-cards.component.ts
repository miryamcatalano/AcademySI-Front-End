import {Component, OnInit} from '@angular/core';
import {CardComponent} from "../card/card.component";
import {NgForOf, NgIf} from "@angular/common";
import {CorsoDto} from "../../model/corsoDto";
import {UtenteService} from "../../services/utente/utente.service";
import {CorsoService} from "../../services/corso/corso.service";

@Component({
  selector: 'app-list-cards',
  standalone: true,
  imports: [
    CardComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './list-cards.component.html',
  styleUrl: './list-cards.component.css'
})
export class ListCardsComponent{

  corsiBe: CorsoDto[] = [ ];
  corsiFe: CorsoDto[] = [ ];
  corsiFs: CorsoDto[] = [ ];
  corsiCs: CorsoDto[] = [ ];

  corsi: CorsoDto[] = [ ];

  constructor(private corsoService : CorsoService) {

    this.corsoService.getAll().subscribe((result: CorsoDto[]) => {
      this.corsi = result;
      this.corsiBe = this.corsi.filter(p => p.categoria==='BackEnd');
      this.corsiFe = this.corsi.filter(p => p.categoria==='FrontEnd')
      this.corsiFs = this.corsi.filter(p => p.categoria==='FullStack');
      this.corsiCs = this.corsi.filter(p => p.categoria==='CyberSecurity');
    });
  }
}
