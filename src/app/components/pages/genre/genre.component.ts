import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent {

  @Output() clickEventHandle = new EventEmitter();

  handleClick(e:any){
    this.clickEventHandle.emit(e)
  }
}
