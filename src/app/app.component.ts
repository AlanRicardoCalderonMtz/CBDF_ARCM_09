import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio 09 - Interpolación';
  nombre: string = 'Alan Ricardo Calderón Martínez';
  edad: number = 21;
  semestre: string = "Septimo semestre";
  calificaciones: number[] = [9, 10, 10, 9, 8, 10, 9, 10]; 
  
  calcular_promedio(){
    let suma = 0;
    for(let i=0; i<this.calificaciones.length; i++){
      suma += this.calificaciones[i];
    }
    return suma/this.calificaciones.length;
  }
  
  estadoAlumno(){
    if(this.calcular_promedio() >= 6){
      return "Aprobado";
    }else{
      return "No aprobado";
    }
  }

}
