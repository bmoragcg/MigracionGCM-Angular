import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// declare var google: any;

@Component({
  selector: 'app-georeferenciacion',
  templateUrl: './georeferenciacion.component.html',
  styleUrls: ['./georeferenciacion.component.scss'],
})
export class GeoreferenciacionComponent implements OnInit {
  coordenadas: { address: string; geometry: string };

  constructor(
    public dialogRef: MatDialogRef<GeoreferenciacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.initMap();
    // console.log(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  foo(coordenadas: any): void {
    this.dialogRef.close({ coordenadas });
  }

  initMap(): any {
    let iconBase = 'src/assets/img/map_markers/';
    let legend = document.getElementById('legend');
    var legendCnt = `<div>
        <img src="${iconBase}green-icon.png"> Activos<br/>
        <img src="${iconBase}red-icon.png"> Sin Cotizacion<br/>
        <img src="${iconBase}yellow-icon.png"> Con Cotizacion<br/>
        <img src="${iconBase}orange-icon.png"> Inactivos
      </div>`;
    legend!.innerHTML = legendCnt;

    let marcadores = this.getMarkers(this.data.datos);

    console.log('estos son los marcadores');
    console.log(marcadores);

    /** Opciones del mapa */
    const mapOptions = {
      center: new google.maps.LatLng(6.4407598, -76.909243),
      zoom: 6,
      mapTypeControl: false,
      panControl: false,
      rotateControl: false,
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    const map = new google.maps.Map(
      document.getElementById('map_canvas')!,
      mapOptions
    );

    let infowindow = new google.maps.InfoWindow();

    for (const i of marcadores) {
    }

    /** Configuracion del marcador */
    const marker = new google.maps.Marker({
      draggable: true,
      position: map.getCenter(),
      map,
    });

    /** Ejecuta el evento mouseup sobre el marcador */
    google.maps.event.addListener(marker, 'mouseup', (evento: any) => {
      console.log(evento);
    });

    /** Codigo para generar el autocomplete a medida qye vaya escribiendo */
    const input = document.getElementById('keyword') as HTMLInputElement;

    const autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      console.log('Buenas tardes');
      const place = autocomplete.getPlace();

      console.log(place);

      // if (place.geometry.viewport) {
      //   map.fitBounds(place.geometry.viewport);
      // } else {
      //   map.setCenter(place.geometry.location);
      //   map.setZoom(17); // Why 17? Because it looks good.
      // }
      // /** Pone el marcador en el mapa */
      // marker.setPosition(place.geometry.location);

      // this.coordenadas = {
      //   address: place.formatted_address,
      //   geometry:
      //     place.geometry.location.lat() + ',' + place.geometry.location.lng(),
      // };
      /** Pone latitud, longitud en el campo coordenadas una vez seleccione una ubicacion */
    });
  }

  getMarkers(datos: any): any {
    let marcadores = [];
    for (let i = 0; i < datos.length; i++) {
      marcadores.push({
        ent_nit: datos[i].ent_nit,
        ent_razon_social: datos[i].ent_razon_social,
        ent_cartera: datos[i].ent_cartera,
        suc_lat: datos[i].suc_lat,
        suc_lng: datos[i].suc_lng,
        cobertura: datos[i].cobertura,
        consultoria: datos[i].consultoria,
        ent_sigla: datos[i].ent_sigla,
        ent_sitio_web: datos[i].ent_sitio_web,
        suc_direccion: datos[i].suc_direccion,
        suc_telefono: datos[i].suc_telefono,
        ent_activos: datos[i].ent_activos,
      });
    }

    return marcadores;
  }
}
