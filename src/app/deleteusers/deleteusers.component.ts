import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deleteusers',
  templateUrl: './deleteusers.component.html',
  styleUrls: ['./deleteusers.component.css']
})
export class DeleteusersComponent implements OnInit {
  name:string="BOWIE"
  age:number=28
  userDelete:string[] = ['Bowie','Infernal','Ultimatum']

  deleteUsers(userD){
    for(let i=0; i<this.userDelete.length; i++){
      if(userD==this.userDelete[i]){
        this.userDelete.splice(i,1)
      }
    }
  }

  addUser(newUser){
    console.log(newUser.value)
    this.userDelete.push(newUser.value)
    newUser.value=""
    newUser.focus()
    return false
  }

  constructor() { }

  ngOnInit() {
  }

}
