import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-peliculas',
  templateUrl: './listar-peliculas.component.html',
  styleUrls: ['./listar-peliculas.component.css']
})
export class ListarPeliculasComponent implements OnInit {

  datosApi !: any;

  nombre !: any;

  listaPelisPropias : Array<any> = [{
    "Nombre":"",
    "Fecha":"",
    "imagen":"",
    "Favorita":false,
    "Borrada":false,
  }];

  listaPelis : Array<any> = [{
    "Nombre":"Duro de matar 1",
    "Fecha":"20/04/1989",
    "imagen":"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6080B130EB83C0C5BC9D527CF13B7085F36303FD6A89A8558AEC245786C696EB/scale?width=1200&aspectRatio=1.78&format=jpeg",
    "Favorita":false,
    "Borrada":false,
  },
  {
    "Nombre":"El maestro borracho",
    "Fecha":"05/10/1978",
    "imagen":"https://m.media-amazon.com/images/I/81XilKTWLhL._SL1500_.jpg",
    "Favorita":false,
    "Borrada":false,
  },
  {
    "Nombre":"Guerra mundial Z",
    "Fecha":"21/06/2013",
    "imagen":"https://i.blogs.es/c70857/guerra-z-cartel/1366_2000.jpg",
    "Favorita":false,
    "Borrada":false,
  },
  {
    "Nombre":"El amanecer de los muertos",
    "Fecha":"15/10/2004",
    "imagen":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Dawn_Of_The_Dead_logo.png/1200px-Dawn_Of_The_Dead_logo.png",
    "Favorita":false,
    "Borrada":false,
  },
  {
    "Nombre":"Matrix",
    "Fecha":"09/06/1999",
    "imagen":"https://upload.wikimedia.org/wikipedia/commons/9/9b/The.Matrix.glmatrix.2.png",
    "Favorita":false,
    "Borrada":false,
  },
  {
    "Nombre":"Hombres de negro",
    "Fecha":"11/06/1997",
    "imagen":"https://cafeanimelair2.files.wordpress.com/2020/11/mib-1.jpg?w=421&h=600",
    "Favorita":false,
    "Borrada":false,
  },
  {
    "Nombre":"2012",
    "Fecha":"13/11/2009",
    "imagen":"https://es.web.img3.acsta.net/medias/nmedia/18/68/15/10/20238856.jpg",
    "Favorita":false,
    "Borrada":false,
  },
  {
    "Nombre":"Viernes 13",
    "Fecha":"23/10/1980",
    "imagen":"https://s3-eu-west-1.amazonaws.com/abandomedia/db/foto/db_11444_48.jpg",
    "Favorita":false,
    "Borrada":false,
  },
  {
    "Nombre":"Rescantando al soldado Ryan",
    "Fecha":"12/03/1999",
    "imagen":"https://www.ecured.cu/images/thumb/0/01/Salvar_al_soldado_Ryan.jpg/1200px-Salvar_al_soldado_Ryan.jpg",
    "Favorita":false,
    "Borrada":false,
  },

];


  constructor() { }

  ngOnInit(): void {
  }

  marcarFavorito(index:any){

    for (let index = 0; index < this.listaPelis.length; index++) {
      var elemento = this.listaPelis[index];
      console.log(elemento);
      this.listaPelis[index].this.listaPelis.Favorita = true;
    }
  }

  guardarLocalStorage(){
    var listaPelis = localStorage.setItem("listaPelis", JSON.stringify(listaPelis));
  }

  informativo(){
    Swal.fire(
      'Marcar Favorito',
      'Pronto este botón realizará la acción de marcar como favorito',
      'info'
    )
  }

}
