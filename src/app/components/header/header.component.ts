import { Component, EventEmitter, Output } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() setStep = new EventEmitter()

  handleClick() {
    if(localStorage.getItem('user')){
      this.setStep.emit(1)
    }
  }


}
