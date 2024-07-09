import {Component, Input} from '@angular/core';
import {CorsoService} from "../../services/corso/corso.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @Input()
  inputName: string = ' ';

}
