import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { PcComponent } from './components/pc/pc.component';
import { HomeComponent } from './components/home/home.component';
import { DetailPcComponent } from './components/detail-pc/detail-pc.component';
import { EditPcComponent } from './components/edit-pc/edit-pc.component';
import { AddPcComponent } from './components/add-pc/add-pc.component';
import {ToastrModule} from "ngx-toastr";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { InitialePipe } from './pipes/initiale.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PcComponent,
    HomeComponent,
    DetailPcComponent,
    EditPcComponent,
    AddPcComponent,
    InitialePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
