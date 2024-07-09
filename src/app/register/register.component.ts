import {Component, Input, input, OnInit} from '@angular/core';
import {timeout} from "rxjs";
import {LoginRequest} from "../../model/loginRequest";
import {RegisterRequest} from "../../model/registerRequest";
import {FormsModule} from "@angular/forms";

// @ts-ignore
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  title: String = "Registrazione";

  isDisabled : boolean = true;

  registerRequest: RegisterRequest = new RegisterRequest();


  submit(){
    console.log(this.registerRequest);
  }

  ngOnInit() : void {
      //this.isHidden = false;
  }

  confirmPassword($event: Event) {
    const inputElement: HTMLInputElement = <HTMLInputElement> $event.target;
    this.isDisabled = !((inputElement.value) == this.registerRequest.password)
  }
}
