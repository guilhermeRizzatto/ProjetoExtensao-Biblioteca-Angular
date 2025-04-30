import { DadosUsuario } from 'src/app/core/dados/dadosUsuario';
import { AuthService } from './../../core/services/auth.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [ // quando entra
        style({ opacity: 0}),
        animate('150ms ease-in', style({ opacity: 1}))
      ]),
      transition(':leave', [ // quando sai (opcional)
        animate('100ms ease-out', style({ opacity: 0}))
      ])
    ])
  ]
})
export class LoginComponent implements AfterViewInit, OnInit{

  loading = false;
  error: string = '';

  dados: DadosUsuario = {
    identificacao:'',
    senha:''
  };

  constructor(private authService: AuthService){

  }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
  }

  login(){
    console.log(this.dados)
    this.loading = true;
    this.authService.login(this.dados!).subscribe({
      complete: () => {
        this.error = '';
        this.loading = false;
      },
      error: (err) => {
        this.error = `Erro: ${err.error}`;
        this.loading = false;
      }
    });
  }



}
