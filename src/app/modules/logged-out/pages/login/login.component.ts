import { UserService } from './../../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/configs/auth/auth.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser!: User;
  constructor(private loginService: LoginService, private userService: UserService) { }

  ngOnInit(): void {
    if (this.loginService.isLoggedIn) {
      this.loginService.login();
    }
    this.loginUser = new User('', '');
  }

  onLogin() {
    this.userService.getByUsername(this.loginUser.username).subscribe(
      (data) => {
        const user = data.find(element => this.loginUser.password === element.password);
        if (user) {
          this.loginService.login();
        } else {
          alert(
            'Oppsss! Por favor, verifique seu nome de usuário ou senha e tente novamente!'
          );
        }
      }
    );
  }

}
