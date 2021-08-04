import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userId: any;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.userId=this.route.snapshot.params['id'];
    console.log("this.userId",this.userId);
  }

}
