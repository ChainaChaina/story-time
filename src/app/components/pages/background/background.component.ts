import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent {

  @Output() clickEventHandle = new EventEmitter();

  handleClick(e:any){
    this.clickEventHandle.emit(e)
  }
}
