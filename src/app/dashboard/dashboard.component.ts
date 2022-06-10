import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private User : UserService) { }
  data: any;
  ngOnInit(): void {
    this.User.getAllUser().subscribe((result)=>{
      console.warn("results",result)
      this.data=result
    })
  }

}
