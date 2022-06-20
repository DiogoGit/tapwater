import { LoginService } from 'src/app/configs/auth/auth.service';
import { UserService } from './../../../../services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.css']
})
export class RegisterAccountComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  userRepassword: string = '';
  user!: User;

  constructor(private userService: UserService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.user = new User('', '');
  }

  onSubmit() {
    this.userService.save(this.user);
    this.loginService.login();
    this.form.reset();
    this.user = new User('', '');
  }

}
