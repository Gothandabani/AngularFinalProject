import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularproject';

  constructor(private log:LoginService,private router:Router){          
  }

  ngAfterViewInit(){
    if(!this.log.getStatus()){  
      console.log('login')              
      this.router.navigate(['login'])
   }
   else{
     if(this.log.usertype=="admin")
       this.router.navigate(['admin/']);
     else
       this.router.navigate(['user/']);
   }
  }
  
}
