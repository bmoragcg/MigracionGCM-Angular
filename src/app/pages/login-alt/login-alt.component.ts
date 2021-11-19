import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, Validator, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-alt',
  templateUrl: './login-alt.component.html',
  styleUrls: ['./login-alt.component.css'],
})
export class LoginAltComponent implements OnInit {
  formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.formLogin = this.initForm();
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  login(): void {
    // this.authSrvc.login(this.formLogin.value).subscribe(val => {
    // localStorage.setItem('token', val.token);
    // localStorage.setItem('nombres', val.nombres);
    // this.router.navigate([`/nav/${val.destino}`]);
    // });
  }
}
