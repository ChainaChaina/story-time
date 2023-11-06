import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit{
    myForm: FormGroup;

    onSubmit(){
      console.log(this.myForm)
      this.myForm.reset();
  }
    ngOnInit(){
      this.myForm= new FormGroup({
              nome: new FormControl(null, Validators.required),
              email: new FormControl(null,[
              Validators.required,
              Validators.pattern("[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+")
          ]),
          password: new FormControl(null, Validators.required)
    });
  }
};

    