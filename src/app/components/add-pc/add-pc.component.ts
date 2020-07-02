import { Component, OnInit } from '@angular/core';
import {Pc} from "../../models/pc";
import {PcService} from "../../services/pc.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-pc',
  templateUrl: './add-pc.component.html',
  styleUrls: ['./add-pc.component.css']
})
export class AddPcComponent implements OnInit {
  isLoading: boolean;
  pc = new Pc();
  marquePc: string[];
  typePc: string[];
  categoriePc: string[];
  pcForm: Pc;
  constructor(private  pcService: PcService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.marquePc= this.pcService.marquePc;
    this.typePc= this.pcService.typePc;
    this.categoriePc = this.pcService.categoriePc;
    this.pcForm = new Pc();
  }
  addPc(): void{
    this.isLoading = true;
    this.pcService.addPc(this.pc).subscribe(then => {
      this.isLoading = false;
      this.router.navigate(['/pc']);
      this.toastr.success('Le PC a bien été ajouté!', 'Succès!');
    });
  }

}
