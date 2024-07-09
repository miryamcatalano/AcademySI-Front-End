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

  @Input()
  data : CorsoDto = new CorsoDto(' ', ' ', ' ', 0, ' ');


}
