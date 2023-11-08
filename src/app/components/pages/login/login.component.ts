import { Component, Output , EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StoryTimeService } from '../../services/story-time.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userName: string = '';
  password: string = '';


  constructor(
    private router: Router,
    private toastr: ToastrService,
    // private storyTimeService: StoryTimeService
    ) {};

    @Output() login = new EventEmitter()


  authenticate(): void {
    if (this.userName
       === 'usuario' && this.password === 'senha') {
      let user = {
        userName: this.userName,
        password: this.password
      }
      localStorage.setItem('user',JSON.stringify(user))
      this.login.emit()
      this.toastr.success('Logado')
    } else {
      this.toastr.error('Tente novamente')
    }
    // this.storyTimeService.getUsername(this.username)

  }
}
