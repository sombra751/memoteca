import { PensamentosService } from './../pensamentos.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  maisPensamentos: boolean = true;
  filtro: string = ""
  favoritos: boolean = false

  constructor(private service: PensamentosService) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }

  carregarMais() {
    this.service.listar(++this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listaPensamentos => {
        this.listaPensamentos.push(...listaPensamentos);
        if (!listaPensamentos.length) {
          this.maisPensamentos = false
        }
      })
  }
  
  pesquisar() {
    this.maisPensamentos = true
    this.paginaAtual = 1
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listaPensamentos => {
        this.listaPensamentos = listaPensamentos
      })
  }

  listarFavoritos() {
    this.favoritos = false
    this.maisPensamentos = true
    this.paginaAtual = 1
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
    .subscribe(listarFavoritos => {
      this.listaPensamentos = listarFavoritos
    })
  }
}
