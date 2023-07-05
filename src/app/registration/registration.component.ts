import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // registration toggle variable
  login:boolean=false;
  //registration variables
  rusername:string="";
  rpassword:string="";
  rcpassword:string="";
  remail:string="";
  rmobno:string="";
  rerror?:string;
  rstatus:boolean=false;
  constructor(private route:Router,private log:LoginService) { }

  ngOnInit(): void {
  }
  @Output('LoginClick') sendData:EventEmitter<boolean>=new EventEmitter<boolean>();
  refreshRegister(){
    this.login=true;
    this.sendData.emit(this.login);
  }

  Registration():void{
     this.rerror="";
     let emailregex:RegExp=/^[a-z][a-z0-9_\.]+@[a-z]{2,5}\.[a-z]{3,5}$/


     if(this.rusername.length==0 || this.rpassword.length==0 || this.rcpassword.length==0 || this.rmobno.length==0)
     this.rerror="Fill all the fields";

     else if(this.rusername.length<4)
     this.rerror="Username should be atleast 4 charectars long"

     else if(this.rpassword.length<6)
     this.rerror="password should be atleast 6 charectars long"

     else if(this.rpassword!=this.rcpassword)
     this.rerror="Username and password should match"
     
     else if(!emailregex.test(this.remail))
     this.rerror="not in email format"

     else if(this.rmobno.length<10 && this.rmobno.length>14)
     this.rerror="Mobile Number must needs to be minimum 10 digits and maximum 13 digits"
     
     else{
       this.log.checkuser(this.rusername,this.remail).subscribe({
        next:(result:any)=>{
          console.log(result)
          if(result!=undefined &&(result[0]!=null||result[0]!=undefined)){
          alert("User already exists")
          }
          else{
            this.rstatus=true;
                  let obj={username:this.rusername,password:this.rpassword,type:"user",email: this.remail,mobno:this.rmobno}
                  this.log.register(obj).subscribe({
                    next: (result:any)=>{
                      if(result!=undefined){
                        alert("User successfully registered")
                        this.rstatus=false;
                        this.route.navigate(['/']);
                      }
                      else{
                      alert("User registration failed...");
                      }
                  },
                  error: ()=>{
                    alert("There is problem in creating user, Please try again or later")
                    this.rstatus=false;
                }
                })
          }
        },
        error: ()=>{
          alert("There is problem in checking user duplicates, Please try again or later")
          this.rstatus=false;
      }
      })
     }  
          
  }
}
