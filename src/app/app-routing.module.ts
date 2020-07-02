import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PcComponent} from "./components/pc/pc.component";
import {AddPcComponent} from "./components/add-pc/add-pc.component";
import {DetailPcComponent} from "./components/detail-pc/detail-pc.component";
import {EditPcComponent} from "./components/edit-pc/edit-pc.component";


const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'pc', component: PcComponent },
  { path: 'pc/add', component: AddPcComponent },
  { path: 'pc/:id', component: DetailPcComponent},
  { path: 'pc/update/:id', component: EditPcComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
