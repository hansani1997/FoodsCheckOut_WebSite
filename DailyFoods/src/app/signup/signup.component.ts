import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  fname="";
  lname="";
  email="";
  password="";
  phone="";
  address="";
  error : {name:string,msg:string}={name:'',msg:''};//for firebase errror handle
  constructor(private DataService:DataService) { }

  ngOnInit(): void {
  }
  // signup(){
    
  //     this.DataService.registerwithemail(this.email,this.password).then((gg)=>{
  //       alert("submit");
  //       //this.router.navigate(['/detail'])

  //     }).catch(_error=>{
  //         this.error=_error;
  //         this.router.navigate(['/register'])
  //     })
    
  // }
  // validateForm(email,password){
  //   if (email.length===0){
  //     this.errormsg="Plz Enter Your Email";
  //     return false;
  //   }

  //   if (password.length===0){
  //     this.errormsg="Plz Enter Your Password";
  //     return false;
  //   }
  //   if (password.length<6){
  //     this.errormsg="Plz Enter Your Password more than 6 characters";
  //     return false;
  //   }
  //   this.errormsg=" ";
  //   return true;
  // }
}
