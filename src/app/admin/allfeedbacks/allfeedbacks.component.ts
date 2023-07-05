import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


import { FeedbackElement, PeriodicElement } from 'src/app/models/models';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-allfeedbacks',
  templateUrl: './allfeedbacks.component.html',
  styleUrls: ['./allfeedbacks.component.css']
})
export class AllfeedbacksComponent implements OnInit {
displayedColumns: string[] = ['uid', 'username', 'prevemp', 'designation', 'reasonfchange','date', 'mobno'];
@ViewChild(MatPaginator) paginator!: MatPaginator;
  feedbacks: FeedbackElement[] = [];
  id=sessionStorage.getItem("id");
  constructor(private adsrvc: AdminService) { }

  ngOnInit(): void {
    this.adsrvc.getAllFeedBacks().subscribe({
      next: (data: FeedbackElement[]) => {
        //this.feedbacks = data;
        for(var i=0;i<data.length;i++){
          if(data[i].uid!=this.id){
              this.feedbacks.push(data[i])
          }
          else{
            continue
          }
      }
      console.log(this.feedbacks)
        this.dataSource = new MatTableDataSource<FeedbackElement>(this.feedbacks);
        this.dataSource.paginator = this.paginator;
      },
      error: () => this.feedbacks = []
    })
  }
  dataSource: any;
}

