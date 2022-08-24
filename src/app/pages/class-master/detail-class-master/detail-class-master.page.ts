import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassMaster } from 'src/app/models/classMaster';
import { TokenService } from 'src/app/services/token.service';
import { ClassMasterService } from 'src/app/services/classMasterService';

@Component({
  selector: 'app-detail-class-master',
  templateUrl: './detail-class-master.page.html',
  styleUrls: ['./detail-class-master.page.scss'],
})
export class ClassMasterDetailPage implements OnInit {

  classMaster: ClassMaster;

  constructor(
    private classMasterService: ClassMasterService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
   
    this.cargar();
  }

  cargar(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.classMasterService.detalle(id).subscribe(
      data => {
        this.classMaster = data;
      }, err => {
        this.volver();
      }
    )
  }

  volver(): void {
    this.router.navigate(['/admin-class-master']);
  }

}
