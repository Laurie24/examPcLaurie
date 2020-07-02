import { Component, OnInit } from '@angular/core';
import {Pc} from "../../models/pc";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {PcService} from "../../services/pc.service";

@Component({
  selector: 'app-edit-pc',
  templateUrl: './edit-pc.component.html',
  styleUrls: ['./edit-pc.component.css']
})
export class EditPcComponent implements OnInit {
  pc: Pc;
  isLoading: boolean;
  marquePc: string[];
  typePc: string[];
  categoriePc: string[];

  constructor(private router: Router, private toastr: ToastrService, private activatedRoute: ActivatedRoute, private pcService: PcService) { }

  ngOnInit(): void {
    this.isLoading = true;
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.pcService.getOnePcById(id).subscribe((data: Pc) => {
      this.pc = data;
      this.isLoading = false;
      this.marquePc= this.pcService.marquePc;
      this.typePc= this.pcService.typePc;
      this.categoriePc= this.pcService.categoriePc;
    });
  }
  editPc(){
    this.pcService.edit(this.pc).subscribe(then => {
      this.router.navigate(['/pc']);
    });
    this.toastr.success('Le PC a bien été édité!', 'Succès!');
  }

}
