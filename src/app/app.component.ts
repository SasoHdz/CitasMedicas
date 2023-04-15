import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'citas-medicas';
  keyInfo= 'citas';

  listCitas: any[] = [];

  constructor(){

  }

  ngOnInit():void{
    const info = localStorage.getItem(this.keyInfo);
    if(!info){
      localStorage.setItem(this.keyInfo,JSON.stringify([]))
    }
    else {
      this.listCitas = JSON.parse(info);
    }
  }

  agregarCita(cita:any){
    this.listCitas.push(cita);
    localStorage.setItem(this.keyInfo,JSON.stringify(this.listCitas));
  }

  eliminarCitaListado(index:number){
    this.listCitas.splice(index,1);
    localStorage.setItem(this.keyInfo,JSON.stringify(this.listCitas));
  }
}
