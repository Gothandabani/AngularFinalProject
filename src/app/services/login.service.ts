import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpOptions:any;
  username:String='';
  usertype:String='';
  token:any='';
  email:any='';
  mobno:any='';
  status:boolean=false;
   constructor(private http:HttpClient) {
       let username=sessionStorage.getItem("username");
       let usertype=sessionStorage.getItem("usertype");
       let token=sessionStorage.getItem("token");
       let email=sessionStorage.getItem("email");
       let mobno=sessionStorage.getItem("mobno");
       if(username&&usertype){
         this.status=true;
         this.username=username;
         this.usertype=usertype;
         this.token=token;
         this.email=email;
         this.mobno=mobno;
       }
    }
    getStatus():boolean{
      return this.status;
    }

    login(email:any,password:any):Observable<object>{ 
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'    
        })
      }
      return this.http.post("http://localhost:4500/login",{email:email,password:password},this.httpOptions);
    }

    register(obj:any):Observable<object>{
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
          })
      }
      return this.http.post("http://localhost:4500/register",obj,this.httpOptions);
    }

    checkuser(username:any,email:any):Observable<object>{      
      return this.http.get("http://localhost:4500/users?username="+username+"&email="+email,this.httpOptions);
    }
    logout():void{
      this.token="";
      this.username="";
      this.usertype="";
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("username");
      sessionStorage.removeItem("usertype");
      sessionStorage.removeItem("email");
      sessionStorage.removeItem("id");
      sessionStorage.removeItem("mobno");
   }
}
