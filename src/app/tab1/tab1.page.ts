import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h50m',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat',
      favorito: false
    },
    {
      nome: 'Vingadores: Ultimato (2019)',
      lancamento: '25/04/2019 (BR)',
      duracao: '3h01m',
      classificacao: 6,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/avengers',
      favorito: false
    },
    {
      nome: 'Star wars III - A vingança dos Sith',
      lancamento: '19/05/2005',
      duracao: '2h26m',
      classificacao: 7,
      cartaz: 'https://upload.wikimedia.org/wikipedia/pt/5/58/Star_Wars_Epis%C3%B3dio_III_A_Vingan%C3%A7a_dos_Sith.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/Star wars',
      favorito: false
    },
    {
      nome: 'Akira',
      lancamento: '09/08/1991',
      duracao: '2h4m',
      classificacao: 8,
      cartaz: 'data:image/jpeg;base64,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',
      generos: ['ficção cientifica'],
      pagina: '/Akira',
      favorito: false
    },
    {
      nome: 'Blade Runner',
      lancamento: '26/12/1982',
      duracao: '1h57m',
      classificacao: 8,
      cartaz: 'https://upload.wikimedia.org/wikipedia/pt/b/bb/BladeRunner-P%C3%B4ster.jpg',
      generos: [' Ficção científica', 'Ação'],
      pagina: '/Akira',
      favorito: false
    },
  ];

}
