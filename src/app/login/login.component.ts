import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // login toggle variable
  logIn:boolean=true;
  //login variables
  error?:string;
  email:string="";
  password:string="";
  status:boolean=false;
  constructor(private route:Router,private log:LoginService) { }

  ngOnInit(): void {
  }

  Login():void{
    this.error="";
    if(this.email.length==0 || this.password.length==0)
    this.error="Fill all the fields";
    else{
      this.status=true;
      this.log.login(this.email,this.password).subscribe({ 
        next:   (response:any)=>{
             sessionStorage.setItem("username",response.user.username);
             sessionStorage.setItem("usertype",response.user.type);
             sessionStorage.setItem("token",response.accessToken);
             sessionStorage.setItem("email",response.user.email);
             sessionStorage.setItem("mobno",response.user.mobno);
             sessionStorage.setItem("id",response.user.id);
             this.log.username=response.user.username;
             this.log.usertype=response.user.type;
             this.log.token=response.accessToken;
             this.status=true;
             if(response.user.type=="admin")
                 this.route.navigate(['admin/']);
             else
                 this.route.navigate(['user/']);
           },
 
           error:()=>{
             this.error="Invalid Credentials";
             this.status=false;
           }}
      )
          }
  }

  Register(){
      this.logIn=this.logIn?false:true;
  }   
  receiveFromChild(islogin:boolean){
    this.logIn=islogin;
   }
}
