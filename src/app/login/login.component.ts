import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {LoginRequest} from "../../model/loginRequest";
import {FormsModule, NgForm} from "@angular/forms";
import {UtenteService} from "../../services/utente/utente.service";
import {Router, RouterLink} from "@angular/router";
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    NavbarComponent,
    FooterComponent,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // componente figlio fa l'evento per il padre
 // @Output()
  //loginEvent = new EventEmitter<boolean>();


  loginRequest: LoginRequest = new LoginRequest();

  private utenteService : UtenteService;

  errorMessage: string = '';

  constructor(utenteService : UtenteService, public router: Router) {
    this.utenteService = utenteService;
  }

  @Output()
  loginMessage : EventEmitter<string> = new EventEmitter<string>();

  onSubmit(form : NgForm) : void {
    if(form.valid) {
      this.loginMessage.emit("Ciao " + this.loginRequest.email);
      this.utenteService.loginUtente(this.loginRequest).subscribe({
          next: (res: any) => {
            if (res != null) {
              console.log('Accesso effettuato');
              console.log(res.token);
              localStorage.setItem('token', res.token);
              this.router.navigate(['/profile']);
            }
          },
          error: (error: any) => {
            if (error.status === 400) {
              this.errorMessage = 'Credenziali errate';
            } else {
              console.error('Errore sconosciuto', error);
            }
          }
        }
      );
      form.reset();
    }
  }
}
