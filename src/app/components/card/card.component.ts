import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() title:string = ''
  @Input() img_src:string = ''
  @Output() clickEventHandle = new EventEmitter<string>();
  constructor(){
    
  }

  handleClick(){
    this.clickEventHandle.emit(this.title)
  }

}
