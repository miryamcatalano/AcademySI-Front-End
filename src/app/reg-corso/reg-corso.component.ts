import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CorsoRegisterRequest} from "../../model/corsoRegisterRequest";

@Component({
  selector: 'app-reg-corso',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './reg-corso.component.html',
  styleUrl: './reg-corso.component.css'
})
export class RegCorsoComponent {
  corsoRegisterRequest: CorsoRegisterRequest = new CorsoRegisterRequest();
}
