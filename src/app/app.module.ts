import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberoneComponent } from './numberone/numberone.component';
import { UserComponent } from './user/user.component';
import { UserslistComponent } from './userslist/userslist.component';
import { DeleteusersComponent } from './deleteusers/deleteusers.component';

import { DataService } from './data.service';
import { AboutComponent } from './about/about.component'

const routes:Route[] = [
  {path: '', component:NumberoneComponent},
  {path: 'about', component:AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NumberoneComponent,
    UserComponent,
    UserslistComponent,
    DeleteusersComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
