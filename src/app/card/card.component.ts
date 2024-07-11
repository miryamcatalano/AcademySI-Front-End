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
export class CardComponent implements OnInit {

  showDescrizioneCompleta = false;

  @Input()
  data : CorsoDto = new CorsoDto(' ', ' ', ' ', 0, ' ');

  ifLogin: boolean = false;

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.ifLogin = true;
    }

  }




}
