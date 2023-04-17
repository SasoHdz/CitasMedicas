import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.scss']
})
export class ListCitasComponent {

  @Input() listadoCitas: any;
  @Output() deleteCita = new EventEmitter<number>();
  @Output() ordenar = new EventEmitter();
  @Output() unOrder = new EventEmitter();

  constructor(){

  }

  ngOnInit():void {

  }

  eliminarCita(index:number){
    this.deleteCita.emit(index);
  }

  onSort(){
    this.ordenar.emit();
  }

  unSort(){
    this.unOrder.emit();
  }
}
