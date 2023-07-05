import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedbackElement } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  httpOptions:any;
  username:String='';
  usertype:String='';
  token:any='';
  email:any='';
  mobno:any='';
  id:any=0;
  constructor(private http:HttpClient) { 
    let username=sessionStorage.getItem("username");
       let usertype=sessionStorage.getItem("usertype");
       let token=sessionStorage.getItem("token");
       let email=sessionStorage.getItem("email");
       let mobno=sessionStorage.getItem("mobno");
       let id=sessionStorage.getItem("id");
       if(username&&usertype){
         this.username=username;
         this.usertype=usertype;
         this.token=token;
         this.email=email;
         this.mobno=mobno;
         this.id=id;
       }
  }

  submitFeedback(obj:any):Observable<object>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        })
    }
    let objs={uid:this.id,username:this.username,mobno:this.mobno,feedback:obj.feedback,date:obj.sdate}
    return this.http.post("http://localhost:4500/feedbacks",objs,this.httpOptions);
  } 

  GetSpecificUserFeedBack():Observable<FeedbackElement[]>{      
    console.log(this.id)
    return this.http.get<FeedbackElement[]>("http://localhost:4500/feedbacks?uid="+this.id);
  }
  getAllFeedBacks():Observable<FeedbackElement[]>{   
    return this.http.get<FeedbackElement[]>("http://localhost:4500/feedbacks");
  }
}
