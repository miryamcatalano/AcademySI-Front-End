import {Component, Input, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {CorsoDto} from "../../model/corsoDto";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent{

  showDescrizioneCompleta = false;

  @Input()
  data : CorsoDto = new CorsoDto(' ', ' ', ' ', 0, ' ');


  submit() {
    /*this.utenteService.addCorso(this.id).subscribe((result: CorsoDto[]) => {
      this.corsi = result;
    });*/
  }
}
