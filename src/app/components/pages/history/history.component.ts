import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  chapter: number = 1

  nextChapter(){
    this.chapter = this.chapter + 1
  }

}
