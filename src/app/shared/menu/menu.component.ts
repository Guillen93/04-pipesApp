import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;
  ngOnInit(): void {
    this.items = [ 
      {
        label:'Pipes de Angular', 
        icon:'pi pi-desktop',
        items:[
          {label: 'Textos y Fechas', icon:'pi pi-align -left', routerLink:['']},
          {label: 'Números', icon:'pi pi-dollar', routerLink:['numeros']},
          {label: 'No comunes', icon:'pi pi-globe', routerLink:['no-comunes']},
          {label: 'primeNG', icon:'pi pi-plus',routerLink:['no-comunes']}
        ]
      },
      {
        label: 'Pipes personalizados',
        icon:'pi pi-cog',
        items:[
          {label: 'ordenar', icon:'pi pi-user-edit', routerLink:['ordenar']}
          
        ]
        
      } 
    ];


  }

}
