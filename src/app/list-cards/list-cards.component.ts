import {Component, OnInit} from '@angular/core';
import {CardComponent} from "../card/card.component";
import {NgForOf, NgIf} from "@angular/common";
import {CorsoDto} from "../../model/corsoDto";
import {UtenteService} from "../../services/utente/utente.service";
import {CorsoService} from "../../services/corso/corso.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-list-cards',
  standalone: true,
  imports: [
    CardComponent,
    NgForOf,
    NgIf,
    FormsModule
  ],
  templateUrl: './list-cards.component.html',
  styleUrl: './list-cards.component.css'
})
export class ListCardsComponent{

  nome: string;

  corsiBe: CorsoDto[] = [ ];
  corsiFe: CorsoDto[] = [ ];
  corsiFs: CorsoDto[] = [ ];
  corsiCs: CorsoDto[] = [ ];

  corsi: CorsoDto[] = [ ];

  constructor(private corsoService : CorsoService) {

    this.corsoService.getAll().subscribe((result: CorsoDto[]) => {
      this.corsi = result;
      this.corsiBe = this.corsi.filter(p => p.idCategoria=='1');
      this.corsiFe = this.corsi.filter(p => p.idCategoria=='2')
      this.corsiFs = this.corsi.filter(p => p.idCategoria=='3');
      this.corsiCs = this.corsi.filter(p => p.idCategoria=='4');
      console.log(this.corsi);
    });
  }

  search($event: SubmitEvent) {
    this.corsoService.search(this.nome).subscribe((result: CorsoDto[]) => {
      this.corsi = result;
    });
  }
}

