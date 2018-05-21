import { Component, OnInit } from '@angular/core';
import {UserService} from '../adminShared/user.service';
import { Router } from '@angular/router';
import {MyJsonService} from "../my-json.service";

@Component({
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
 })
 
export class AdminMenuComponent implements OnInit { 
  theUser: string;
  public myData: string;
  
  constructor( private userSVC: UserService,
               private router: Router,
               private myJsonService: MyJsonService){}

  ngOnInit(){
    this.theUser = this.userSVC.loggedInUser;
    this.myData = this.myJsonService.getData();
  }

  logout(){
    this.userSVC.logout();
    this.router.navigate(['']);
  }
}
