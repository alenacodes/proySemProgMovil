import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  listaConfGest: Array<any> = [
  {
    id: 1,
    nombre: 'Ubicación',
    icono: 'pin',
  },
  {
    id: 2,
    nombre: 'Notificaciones',
    icono: '',
  },
  ];
  listaConfLegal: Array<any> = [
  {
    id: 1,
    nombre: 'Condiciones de servicio',
    icono: 'document',
  },
  {
    id: 2,
    nombre: 'Política de privacidad',
    icono: 'document',
  },
  {
    id: 3,
    nombre: 'Agradecimientos',
    icono: 'document',
  },
  ];

  constructor() { }

  ngOnInit() {
  }

}
