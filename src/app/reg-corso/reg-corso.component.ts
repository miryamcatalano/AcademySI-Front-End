import {Component, OnInit} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {CorsoRegisterRequest} from "../../model/corsoRegisterRequest";
import {UtenteService} from "../../services/utente/utente.service";
import {CorsoService} from "../../services/corso/corso.service";
import {CategoriaService} from "../../services/categoria/categoria.service";
import {CorsoDto} from "../../model/corsoDto";
import {CategoriaDto} from "../../model/categoriaDto";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-reg-corso',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './reg-corso.component.html',
  styleUrl: './reg-corso.component.css'
})
export class RegCorsoComponent implements OnInit{

  categorie : CategoriaDto[];

  corsoRegisterRequest: CorsoRegisterRequest = new CorsoRegisterRequest();

  private corsoService : CorsoService;

  private categoriaService : CategoriaService;

  constructor(corsoService : CorsoService, categoriaService : CategoriaService) {
    this.corsoService = corsoService;
    this.categoriaService = categoriaService;
  }

  ngOnInit(): void {
    this.categoriaService.getAll().subscribe((result: CategoriaDto[]) =>{
      this.categorie = result;
    });
    }

  onSubmit(form : NgForm): void {
    console.log(this.corsoRegisterRequest);
    this.corsoService.registraCorso(this.corsoRegisterRequest).subscribe(() =>{
        console.log("registrazione corso effettuata con successo");
      }
    );
    form.reset();
  }
}
