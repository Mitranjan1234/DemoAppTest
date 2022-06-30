import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(username:string,password:string,checkbox:string){
   alert("You enter username: "+username+" passd: "+password+" "+checkbox)
  }

}
