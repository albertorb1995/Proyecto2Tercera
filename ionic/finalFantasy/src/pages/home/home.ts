import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { CreatorPage } from '../creator/creator';
import { FinalFantasyServiceProvider } from '../../providers/final-fantasy-service/final-fantasy-service';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuarios: Array <any>;
  id: number;
  nombre: string;
  clase: string;

  constructor(public navCtrl: NavController, public ffService: FinalFantasyServiceProvider, public httpClient: HttpClient) {

    this.getPersonajes();
  }

  getPersonajes() {

    this.usuarios = [];
    this.ffService.getUsuarios().subscribe((data: Array<Usuario>) => {
      this.usuarios = data;


      // for (var i = 0; i < data.length; i++) {
      //   var item = document.createElement("ion-item");
      //   var note1 = document.createElement("ion-note");
      //   var note2 = document.createElement("ion-note");
      //   note1.appendChild(document.createTextNode("Name: " + data[i].nombre));
      //   note2.appendChild(document.createTextNode("Clase: " + data[i].clase));

      //   item.appendChild(note1);
      //   item.appendChild(note2);

      //   // this.nombre = data[i].nombre;
      //   // this.clase = data[i].clase;


      //   // if(i == 3){
      //   //  this.nombre = data[i].nombre;
      //   //  this.clase = data[i].clase;

      //   // }
      // }

    });
  }

  deleteUsuarios(usuario){
    this.ffService.deleteUsuarios(usuario.id).subscribe((response:Array<Usuario>) => {
       for (let i=0; i< this.usuarios.length; i++) {
         if (this.usuarios[i] === usuario) {
           this.usuarios.splice(i, 1)
        }
      }
     })

  }

  refresh(){
    this.getPersonajes();
  }

  irAOtraPagina() {

    this.navCtrl.push(CreatorPage);
  }

}

class Usuario {
  id: number;
  nombre: string;
  clase: string;
}