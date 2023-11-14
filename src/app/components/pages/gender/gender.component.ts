import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent {

  @Output() clickEventHandle = new EventEmitter();
  name: string = ''

  handleClick(e:any){
    this.clickEventHandle.emit({
      event: e,
      name: this
    })
  }

}
