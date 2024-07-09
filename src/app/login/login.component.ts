import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LoginRequest} from "../../model/loginRequest";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // componente figlio fa l'evento per il padre
 // @Output()
  //loginEvent = new EventEmitter<boolean>();


  loginRequest: LoginRequest = new LoginRequest();

  @Output()
  loginMessage : EventEmitter<string> = new EventEmitter<string>();

  submit(){
    console.log(this.loginRequest);
    this.loginMessage.emit("Ciao " + this.loginRequest.username);
    //this.loginEvent.emit(true);
  }
}
