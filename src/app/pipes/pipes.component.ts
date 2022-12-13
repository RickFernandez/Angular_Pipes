import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  livro: any = {
    titulo: 'Leaning JavaScript Data Structures and Algoritms 2nd ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glgjpRP',
  };

  livros: string[] = ['Java', 'Angular 2'];

  filtro!: string;

  constructor() { }

  ngOnInit(): void {
  }

  addCurso(novoCurso: string) {
    this.livros.push(novoCurso);
  }

  obterCursos() {
    if (this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.livros;
    }

    return this.livros.filter((v) => {
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    })
  }

  valorAsync = new Promise( (resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000);
  });

  // valorAsync2 = Observable.interval(2000).map(valor => 'Valor assíncrono');

}
