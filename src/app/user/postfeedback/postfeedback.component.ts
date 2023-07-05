import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-postfeedback',
  templateUrl: './postfeedback.component.html',
  styleUrls: ['./postfeedback.component.css']
})
export class PostfeedbackComponent implements OnInit {
  
  ureasonfchange:string=""
  uname:string=""
  upreviousemp:string=""
  uid:number=0
  rerror:string=""
  ujdate: any;
  
  udesignation: any;
  constructor(private adsrvc:AdminService) { }
  ngOnInit(): void {
    
  }
  postFeedback():void{
    this.rerror="";
    if(this.ujdate.length==0 && this.upreviousemp.length==0 && this.udesignation.length==0 && this.ureasonfchange.length==0 )
    this.rerror="Fill all the fields";
    else if(this.ujdate.length==0)
    this.rerror="please select the joining date"
    else if(this.upreviousemp.length==0)
    this.rerror="please enter the name of previous employer"
    else if(this.udesignation.length==0)
    this.rerror="please enter the designation"
   
    else if(this.ureasonfchange.length==0)
    this.rerror="please enter the reason for change"

     else{
      let obj={sdate:this.ujdate,designation:this.udesignation,prevemp:this.upreviousemp}
        this.adsrvc.submitFeedback(obj).subscribe({
          next:(result:any)=>{
                alert("Feedback submitted successfully")
          },
          error:()=>{
            alert("Unable to submit Feedback...")
          }
        })
     }
  }
}
