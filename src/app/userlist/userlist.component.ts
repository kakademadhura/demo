import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { user } from './user';
import {MatDialog} from '@angular/material/dialog';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';
import { Router } from '@angular/router';
import { Input } from '@angular/core';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  
  displayedColumns = ['id','fullName','email','gender','address','actions'];
  userId;
  dataSource=new MatTableDataSource;
    userData: user[]=[
    {id:1,fullName:"abcd",email:"abcd@gmail.com",gender:"male",address:"Pune"},
    {id:2,fullName:"Rakesh roshan",email:"rakesh@gmail.com",gender:"male",address:"Mumbai"},
    {id:3,fullName:"Nitin shinde",email:"Nitin@gmail.com",gender:"male",address:"Pune"},
    {id:4,fullName:"Kavita Rathod",email:"Kavita@gmail.com",gender:"female",address:"Pune"},
    {id:5,fullName:"Rakesh roshan",email:"rakesh@gmail.com",gender:"male",address:"Nasik"},
    {id:6,fullName:"Shweta Phutane",email:"Shweta@gmail.com",gender:"female",address:"Pune"},
  ];
  
  constructor(public dialog: MatDialog,private router: Router) {
    this.dataSource = new MatTableDataSource<user>(this.userData);
   }

  ngOnInit(): void {
    
  }
  openDialog(id) {
    console.log("id*",id);
    this.dialog.open(DialogUserComponent,id);
    //this.router.navigateByUrl('delete',id);
  }

  editRow(id){
    this.router.navigate(['edit/',id]);
  }
}
