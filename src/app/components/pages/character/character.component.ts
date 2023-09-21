import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  @Output() clickEventHandle = new EventEmitter();

  handleClick(e:any){
    this.clickEventHandle.emit(e)
  }
}
