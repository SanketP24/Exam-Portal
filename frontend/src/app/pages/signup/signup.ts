import { Component, OnInit } from '@angular/core';
import { User } from '../../services/user';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup implements OnInit {

  constructor( private userservice: User){}
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
  if(this.user.username==''|| this.user.username==null){
    alert("Enter the username please ")
    return;
  }
  this.userservice.addUser(this.user).subscribe(
  (data)=>{
    console.log(data);
    alert('Success')

  },
  (error)=>{
    console.error(error);
    
  }
  )
  
}

}
