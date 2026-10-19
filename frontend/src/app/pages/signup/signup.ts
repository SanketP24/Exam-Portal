import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup implements OnInit {

  constructor(){}
  public user ={
    username: '',
    passsword: '',
    firstName: '',
    lastName: '',
    email : '',
    phone: '',
  };
  ngOnInit(): void {}



formSubmit(){
  if(this.user.username==''|| this.user.username){
    alert("Enter the username please ")
    return;
  }
}

}
