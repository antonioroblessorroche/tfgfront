import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingSession } from 'src/app/models/trainingSession';
import { TokenService } from 'src/app/services/token.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.page.html',
  styleUrls: ['./session-detail.page.scss'],
})
export class SessionDetailPage implements OnInit {

  session: TrainingSession;

  constructor(
    private sessionService: SessionService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.cargar();
  }

  cargar(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.sessionService.detalle(id).subscribe(
      data => {
        this.session = data;
      }, err => {
        this.volver();
      }
    )
  }

  volver(): void {
    const redirectUrtl = this.tokenService.getAuthorities.length > 1 ? '/admin-session' : '/admin-session';
    this.router.navigate([redirectUrtl]);
  }

}
