import { Component, OnInit } from '@angular/core';
//import {DetallePage} from '../detalle/detalle.page';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  detalleCar = [];
  listaProductos: Array<any> = [
    {
      id: 1,
      titulo: 'Set Sarasa Vintage Princess Disney Store',
      subtit: 'Zebra',
      precio: 5000,
      imagen: 'https://cdnx.jumpseller.com/blanca-papeleria/image/26461011/resize/260/260?1660865920',
     descripcion: 'Disney Store en colaboración con Zebra nos traen este hermoso set de Sarasa Vintage, edición princesas'
    },
    {
      id: 2,
      titulo: 'Set Pilot Juice Up Glossy Colors',
      subtit: 'Pilot',
      precio: 10000,
      imagen: 'https://cdnx.jumpseller.com/blanca-papeleria/image/26461123/resize/260/260?1660866194',
      descripcion: 'Pilot nos trae estos nuevos colores de su linea Juice Up, en tonalidades vintage. El set cuenta con 6 lápices'
    },
    {
      id: 3,
      titulo:'Sets Zebra Mildliner',
      subtit: 'Zebra',
      precio: 10000,
      imagen: 'https://cdnx.jumpseller.com/blanca-papeleria/image/14583208/resize/260/260?1656473593',
      descripcion: 'Zebra Mildliner es conocido por tener una paleta de colores muy variables (25 tonos).'
    },
    {
      id: 4,
      titulo: 'Set Zebra Deco Shine',
      subtit: 'Zebra',
      precio: 15000,
      imagen: 'https://cdnx.jumpseller.com/blanca-papeleria/image/25480582/resize/260/260?1656703064',
      descripcion: 'El Set Zebra Deco Shine cuenta con 10 lápices, de tinta gel y en colores metalizados. La tinta es ideal para escribir'
    }
  ];
  constructor() { }
  detalleAdd(item){
    this.detalleCar.push(item);
  }


  ngOnInit() {
  }

}
