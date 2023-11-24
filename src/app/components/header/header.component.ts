import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() setStep = new EventEmitter()
  @Output() backStep = new EventEmitter()
  @Input() step
  username

  handleClick() {
    if(localStorage.getItem('user')){
      this.setStep.emit(1)
    }
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.username = JSON.parse(localStorage.getItem('user')).userName
  }

  handleBack(){
    this.backStep.emit()
  }

  handleSetStep(e){
    this.setStep.emit(e)
  }


}
