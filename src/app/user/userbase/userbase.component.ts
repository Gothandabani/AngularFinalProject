import { Component, OnInit } from '@angular/core';
import { MenuItems } from 'src/app/models/models';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-userbase',
  templateUrl: './userbase.component.html',
  styleUrls: ['./userbase.component.css']
})
export class UserbaseComponent implements OnInit {

  constructor(private log:LoginService) { }

  ngOnInit(): void {
  }
  menuItems:MenuItems[]=[
    {path:'/user/yourfeedback',menu:'Your FeedBack'},
    {path:'/user/givefeedback',menu:'Post FeedBack'}
  ]
  logout(){
    this.log.logout();
    window.location.reload();
}
}
