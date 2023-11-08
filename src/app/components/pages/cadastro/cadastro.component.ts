import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StoryTimeService } from '../../services/story-time.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit{
  myForm: FormGroup;

//     onSubmit(){
//       console.log(this.myForm)
//       this.myForm.reset();
//   }
//     ngOnInit(){
//       this.myForm= new FormGroup({
//               nome: new FormControl(null, Validators.required),
//               email: new FormControl(null,[
//               Validators.required,
//               Validators.pattern("[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+")
//           ]),
//           password: new FormControl(null, Validators.required)
//     });
//   }
// };

  constructor(private storyTimeService: StoryTimeService) {}

  onSubmit(){
    if (this.myForm.valid) {
      const createCadastro = {
        username: this.myForm.controls['userName'].value,
        email: this.myForm.controls['email'].value,
        password: this.myForm.controls['password'].value
      };

      this.storyTimeService.createCadastro('createCadastro').subscribe(
        dadosSucesso => {
          console.log('Dados de sucesso:', dadosSucesso);
          this.myForm.reset();
        },
        dadosErro => console.error('Erro:', dadosErro)
      );
    }
  }

  ngOnInit(){
      this.myForm = new FormGroup({
          username: new FormControl(null, Validators.required),
          email: new FormControl(null, [
              Validators.required,
              Validators.pattern("[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+")

          ]),
          password: new FormControl(null, Validators.required),
          termoTS: new FormControl(null, Validators.required)
      });
  }
}