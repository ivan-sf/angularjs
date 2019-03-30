import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

  name:string="Bowie"
  lastName:string="Lucifer"
  age:number;
  adress:{
    street:string,
    city:string
  }
  hobbies:string[]

  constructor() {
    this.name="Can"
    this.age=23
    this.adress={
      street:"miraflores",
      city:"pasto"
    }
    this.hobbies=['programmer','kill','blood','you baby']
   }

  ngOnInit() {
  }

}
