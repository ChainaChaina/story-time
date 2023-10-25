import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  loading = true;
  @Input() name!: string;
  chapter: number = 1

  ngOnInit(): void {
    // Simule um carregamento demorado (substitua isso com sua lógica real de carregamento)
    setTimeout(() => {
      this.loading = false; // Quando o carregamento estiver completo
    }, 3000); // Simula um carregamento de 3 segundos
  }

  nextChapter(){
    this.chapter = this.chapter + 1
  }

}
