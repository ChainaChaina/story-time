import { Component, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent {

  @Output() clickEventHandle = new EventEmitter();
  name: string = ''
  gender = null

  constructor(
    private toastService: ToastrService
  ){}

  selectGender(gender){
    this.gender = gender
  }

  handleClick(e:any){
    if(this.gender){
      this.clickEventHandle.emit({
        gender: this.gender,
        name: this.name
      })
    }else{
      this.toastService.error('Você precisa escolher um gênero')
    }
  }

}