import {Component, ElementRef, Input, input, OnInit, ViewChild} from '@angular/core';
import {timeout} from "rxjs";
import {LoginRequest} from "../../model/loginRequest";
import {RegisterRequest} from "../../model/registerRequest";
import {FormsModule, NgForm} from "@angular/forms";
import {CorsoService} from "../../services/corso/corso.service";
import {CorsoDto} from "../../model/corsoDto";
import {UtenteService} from "../../services/utente/utente.service";
import {NgIf} from "@angular/common";
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";
import {Router, RouterLink} from "@angular/router";

// @ts-ignore
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NavbarComponent,
    FooterComponent,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  title: String = "Registrazione";

  isNotDisabled : boolean = false;

  registerRequest: RegisterRequest = new RegisterRequest();

  private utenteService : UtenteService;

  constructor(utenteService : UtenteService, public router: Router) {
    this.utenteService = utenteService;
  }

  ngOnInit() : void {
      //this.isHidden = false;
  }

  confirmPassword($event: Event) {
    const inputElement: HTMLInputElement = <HTMLInputElement> $event.target;
    this.isNotDisabled = ((inputElement.value) == this.registerRequest.password)
  }

  onSubmit(form : NgForm): void {
    if(form.valid){
      this.utenteService.registraUtente(this.registerRequest).subscribe(() =>{
        console.log("registrazione effettuata con successo");
        form.reset();
        this.router.navigate(['/profile']);
        }
      );
    }
  }

  /*@ViewChild('f', { static: true }) signupForm!: NgForm;

  onSubmitWithViewChild() {
    console.log(this.signupForm.value.email);

    console.log(this.registerRequest);
    this.utenteService.registraUtente(this.registerRequest).subscribe(() =>{
        console.log("registrazione effettuata con successo");
      }
    );
  }*/
}
