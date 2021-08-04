import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.css']
})
export class DialogUserComponent implements OnInit {
  userId:any;
  
  constructor(private userService:UserService,private route:ActivatedRoute) { }

  ngOnInit(): void {
  this.userId=this.route.snapshot.params['id'];
  console.log("this.userId",this.userId);
  this.getUserById();
  }
  
  getUserById(){
    this.userService.getUserById(this.userId).subscribe(data=>{
    const body =data;
    console.log("body",body);
    });
  }

  delete(){
    this.userService.delete('deleteUser'+this.userId).subscribe(data=>{

    });
  }
}
