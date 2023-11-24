import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  @Input() support: boolean
  @Output() clickEventHandle = new EventEmitter();
  @Output() enviarNome = new EventEmitter<string>();

  nome: string = '';
  supports 

  handleClick(e: any) {
  this.supports = e
  this.finish()
  }

  finish() {
    this.clickEventHandle.emit(this.supports)
  }
}