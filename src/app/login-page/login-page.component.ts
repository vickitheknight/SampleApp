import { Component, OnInit } from '@angular/core';
import {RepositaryService} from './../repositary.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
user_name:any;
password:any;
  constructor(private eservice:RepositaryService) { }
  isLogin:any="Login";
  post:any;
  ngOnInit(): void {
    this.post=[{"E-Mail":"vicki@gmail.com","Password":"abc"},]
  }
  login(){
    if(this.isLogin!="Login"){
    this.post={
      "email":this.user_name,
      "password":this.password,
    }
    this.eservice.postData(this.post).subscribe(data=>{
      let results:any
      results=data;
      console.log("sucess",results.message)
      if(results.resCode==200){
        alert("signup successfull");
      }

    })
  }else{

    this.post={
      "email":this.user_name,
      "password":this.password,
    }
    this.eservice.postData1("login",this.post).subscribe(data=>{
      let results:any
      results=data;
      console.log("sucess",results.message)
      if(results.resCode==200){
        alert("login successfull");
      }else{
        alert("login failed");
      }

    })
    // let data={message:"yes"}
    // console.log("sucess login", data.message)
    // alert("login");
  }
  }
  isLoginChange(x){
    console.log(x,"r1")
    this.isLogin=x=="l"?"Sign Up":"Login";
    console.log(this.isLogin,x,"r")
// if(x="Login"){
//   this.isLogin="Sign Up"
//   console.log(this.isLogin,x,"r")
// }else{
//   this.isLogin="Login";
//   console.log(this.isLogin,x,"2")
// }
  }

}
