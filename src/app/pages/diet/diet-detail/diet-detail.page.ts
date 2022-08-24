import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Diet } from 'src/app/models/diet';
import { TokenService } from 'src/app/services/token.service';
import { DietService } from 'src/app/services/diet.service';

@Component({
  selector: 'app-diet-detail',
  templateUrl: './diet-detail.page.html',
  styleUrls: ['./diet-detail.page.scss'],
})
export class DietDetailPage implements OnInit {

  diet: Diet;

  constructor(
    private dietService: DietService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.cargar();
  }

  cargar(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.dietService.detalle(id).subscribe(
      data => {
        this.diet = data;
      }, err => {
        this.volver();
      }
    )
  }

  volver(): void {
    const redirectUrtl = this.tokenService.getAuthorities.length > 1 ? '/admin-diet' : '/admin-diet';
    this.router.navigate([redirectUrtl]);
  }

}
