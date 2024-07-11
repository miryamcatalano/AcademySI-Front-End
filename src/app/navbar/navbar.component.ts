import {Component, Input, OnInit} from '@angular/core';
import {CorsoService} from "../../services/corso/corso.service";
import {Router, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent{

  constructor(private router: Router) {
  }

  @Input()
  inputName: string = ' ';

  onClick() {
    if(localStorage.getItem('token')){
      this.router.navigate(['/profile']);
    }
    else{
      this.router.navigate(['/login']);
    }
  }


}
