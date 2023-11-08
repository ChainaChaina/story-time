import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { StoryTimeService } from '../../services/story-time.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  myForm: FormGroup;

  storyTimeService: StoryTimeService;

  constructor() {}

    onSubmit(){
      console.log(this.myForm)
      this.myForm.reset();

      this.storyTimeService.createCadastro('userName', 'email', 'password').subscribe(
        dadosSucesso => {
          console.log(dadosSucesso);
          this.myForm.reset();
        },
        dadosErro => {
          console.log(dadosErro);
        }
      );
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
