import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PcService} from "../../services/pc.service";
import {ToastrService} from "ngx-toastr";
import {Pc} from "../../models/pc";

@Component({
  selector: 'app-detail-pc',
  templateUrl: './detail-pc.component.html',
  styleUrls: ['./detail-pc.component.css']
})
export class DetailPcComponent implements OnInit {
  isLoading: boolean;
  id: number;
  pc: Pc;
  pcs: Pc[];
  constructor(private route: ActivatedRoute, private pcService: PcService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.pcService.getOnePcById(+this.route.snapshot.paramMap.get('id')).subscribe((data: Pc) => {
      this.pc = data;
      this.isLoading = false;
    });
  }

}
