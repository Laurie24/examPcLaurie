import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  prof = 'Aurélien Délorme';
  todayDate = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
