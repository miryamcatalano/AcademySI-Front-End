export class CorsoDto {
  nome: string;
  descrizione_breve: string;
  descrizione_completa: string;
  durata: number;
  categoria: string;

  constructor(nome: string, descrizione_breve: string, descrizione_completa: string, durata: number, categoria:string) {
    this.nome = nome;
    this.descrizione_breve = descrizione_breve;
    this.descrizione_completa = descrizione_completa;
    this.durata = durata;
    this.categoria = categoria;
  }
}
