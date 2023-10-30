import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  @Input() support:boolean = false
  @Output() clickEventHandle = new EventEmitter();
  @Output() enviarNome = new EventEmitter<string>();

  nome: string = '';
  supports: any =[]

  handleClick(e:any, id:number){
    if(this.support){
      //arrumar
      if (this.supports.includes({id: id, role: e})){
        console.log(this.supports)
        this.supports = this.supports.filter((i:any)=> i = id)
        console.log(this.supports)
      }else{
        this.supports.push({id: id, role: e})
      }
    }else{
      this.clickEventHandle.emit(e)
    }
  }

  finish() {
    this.clickEventHandle.emit(this.supports)
  }
}
