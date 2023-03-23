import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { User } from './../../classe/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router, private userService : UserService ){}

  user! : User;
  erro!: string;
  storage : Storage = localStorage;

  ngOnInit(): void {
    this.user = new User();
    this.storage.removeItem('user_name')
  }
  fechar(): void{
    this.router.navigate(['/CADASTRO'])// precisa fazer a definição desta rota
  }
  validar(user: User) :void{

    this.userService.postUsuarioApi(user).subscribe(res=> {
      console.log(res)
      if(res){
        this.storage.setItem('user_name', user.username) 
        this.fechar()
      }else{
        this.erro = "Usuário ou senha inválidos";
      }
    })
  }
}
