import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'citas-medicas';
  keyInfo = 'citas';

  listCitas: any[] = [];
  citas: any[] = [];

  constructor() {}

  ngOnInit(): void {
    const info = localStorage.getItem(this.keyInfo);
    if (!info) {
      localStorage.setItem(this.keyInfo, JSON.stringify([]));
    } else {
      this.listCitas = JSON.parse(info);
      this.citas = [...this.listCitas];
    }
  }

  agregarCita(cita: any) {
    this.listCitas.push(cita);
    localStorage.setItem(this.keyInfo, JSON.stringify(this.listCitas));
    this.citas = [...this.listCitas];

    console.log(this.citas);
  }

  eliminarCitaListado(index: number) {
    this.listCitas.splice(index, 1);
    localStorage.setItem(this.keyInfo, JSON.stringify(this.listCitas));
    this.citas = [...this.listCitas];
  }

  orderCitas() {
    this.citas = this.listCitas.slice().sort(function(a,b){
      return Date.parse(a.fecha) - Date.parse(b.fecha);
    });

    console.log(this.citas);
  }

  notOrder(){
    this.citas = [...this.listCitas];
    console.log(this.citas);

  }
}
