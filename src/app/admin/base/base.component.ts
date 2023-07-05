import { Component, OnInit } from '@angular/core';
import { MenuItems } from 'src/app/models/models';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor(private log:LoginService) { }

  ngOnInit(): void {
  }
  menuItems:MenuItems[]=[
    {path:'/admin/yourfeedback',menu:'Your FeedBack'},
    {path:'/admin/givefeedback',menu:'Post FeedBack'},
    {path:'/admin/allfeedbacks',menu:'All FeedBacks'}
  ]
  logout(){
    this.log.logout();
    window.location.reload();
}
}
