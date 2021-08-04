import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DialogUserComponent } from './dialog-user/dialog-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserlistComponent } from './userlist/userlist.component';


const routes: Routes = [
  {
    path:'user',
    component:UserlistComponent
},
{
  path:'delete/:id',
  component:DialogUserComponent
},
{
  path:'edit/:id',
  component:UpdateUserComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
