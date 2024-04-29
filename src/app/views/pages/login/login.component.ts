import { Component, NgModule, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import * as bcrypt from 'bcryptjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, NgStyle,
       ReactiveFormsModule
    ]
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  

  login(): void {
    if (this.loginForm.invalid) {
      return;
    }
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    // Encriptar la contraseña antes de guardarla localmente
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Aquí puedes guardar el username y hashedPassword en el almacenamiento local
    // Por ejemplo: localStorage.setItem('username', username);
    //             localStorage.setItem('password', hashedPassword);

    // Verificar si las credenciales coinciden con el usuario predeterminado
    if (username === 'pepito' && bcrypt.compareSync(password, hashedPassword)) {
      // Iniciar sesión y redirigir al dashboard
      this.router.navigate(['/dashboard']);
    } else {
      // Credenciales inválidas, manejar el error o mostrar un mensaje al usuario
      alert('Credenciales incorrectas');
    }
  } 

}
