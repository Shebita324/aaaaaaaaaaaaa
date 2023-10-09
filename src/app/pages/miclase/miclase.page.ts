import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';




@Component({
  selector: 'app-miclase',
  templateUrl: './miclase.page.html',
  styleUrls: ['./miclase.page.scss'],
})


export class MiclasePage implements OnInit {
  public bloqueInicio!: number;
  public bloqueTermino!: number;
  public dia!: string;
  public horaFin!: string;
  public horaInicio!: string;
  public idAsignatura!: string;
  public nombreAsignatura!: string;
  public nombreProfesor!: string;
  public seccion!: string;
  public sede!: string;
  
  public usuario!:Usuario;
  
  

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.bloqueInicio = params['bloqueInicio'];
      this.bloqueTermino = params['bloqueTermino'];
      this.dia = params['dia'];
      this.horaFin = params['horaFin'];
      this.horaInicio = params['horaInicio'];
      this.idAsignatura = params['idAsignatura'];
      this.nombreAsignatura = params['nombreAsignatura'];
      this.nombreProfesor = params['nombreProfesor'];
      this.seccion = params['seccion'];
      this.sede = params['sede'];
      this.usuario.nombre= params ['nombre'];
      
      
    });
  }

  redi_inicio() {
    this.navCtrl.navigateForward('/inicio');
  }

  redi_clase() {
    this.navCtrl.navigateForward('/miclase');
  }
  
}
