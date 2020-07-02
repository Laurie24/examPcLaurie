import { Component, OnInit } from '@angular/core';
import {Pc} from "../../models/pc";
import {PcService} from "../../services/pc.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.css']
})
export class PcComponent implements OnInit {
  pc: Pc[];
  isLoading: boolean;
  constructor(private pcService: PcService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.pcService.getAllPc().subscribe((data: Pc[]) => {
      this.pc = data;
      this.isLoading = false;
    });
  }
  deletePc(pc: Pc){
    this.isLoading = true;
    this.pcService.deletePc(pc.id).subscribe(data => {
      this.pcService.getAllPc().subscribe(newDataPc => {
        this.pc = newDataPc;
        this.isLoading = false;
        this.toastr.success('Le PC a bien été supprimé!', 'Succès!');
      });
    });
  }

}
