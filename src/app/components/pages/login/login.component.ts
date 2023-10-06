import { Component, Output , EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private router: Router) {};
  // @Output() Entrada = new EventEmitter<string>();
  // nome: string = '';

  // emitirNome() {
  //   this.Entrada.emit(this.nome);
  // }
  login(): void {
    if (this.username === 'usuario' && this.password === 'senha') {
      this.router.navigate(['/']);
    } else {
      alert('Credenciais incorretas. Tente novamente.');
    }
  }
}
