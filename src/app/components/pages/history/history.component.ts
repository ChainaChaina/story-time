import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  loading = true;

  ngOnInit(): void {
    // Simule um carregamento demorado (substitua isso com sua lógica real de carregamento)
    setTimeout(() => {
      this.loading = false; // Quando o carregamento estiver completo
    }, 3000); // Simula um carregamento de 3 segundos
  }

  chapter: number = 1

  nextChapter(){
    this.chapter = this.chapter + 1
  }

}
