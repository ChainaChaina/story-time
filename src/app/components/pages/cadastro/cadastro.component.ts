import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{Router} from'@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit{
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  cadastrar(form: NgForm){
      console.log('form');
  }
}
