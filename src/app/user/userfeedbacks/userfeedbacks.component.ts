import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FeedbackElement, PeriodicElement } from 'src/app/models/models';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-userfeedbacks',
  templateUrl: './userfeedbacks.component.html',
  styleUrls: ['./userfeedbacks.component.css']
})

export class UserfeedbacksComponent implements OnInit {
  displayedColumns: string[] = ['uid', 'username', 'prevemp','designation','reasonfchange', 'date', 'mobno'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  feedbacks: FeedbackElement[] = [];
  constructor(private adsrvc: AdminService) { }

  ngOnInit(): void {
    this.adsrvc.GetSpecificUserFeedBack().subscribe({
      next: (data: FeedbackElement[]) => {
        this.feedbacks = data;
        this.dataSource = new MatTableDataSource<FeedbackElement>(this.feedbacks);
        this.dataSource.paginator = this.paginator;
      },
      error: () => this.feedbacks = []
    })
  }
  dataSource: any;
}

