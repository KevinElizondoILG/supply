import { DatafireService } from './../../services/datafire.service';
import { ApistockService } from 'src/app/services/apistock.service';
import { DATA, dataB2B, dataJobs, dataT2T, SUCURSALES } from './../../models/jobs';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { DetrackService } from 'src/app/services/detrack.service';
import { Links, jobToSend, Total_Count } from 'src/app/models/jobs';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';



@Component({
  selector: 'app-job-requests',
  templateUrl: './job-requests.component.html',
  styleUrls: ['./job-requests.component.css']
})
export class JobRequestsComponent implements OnInit {

  jobs: any
  jobCollection: any
  jobDelivery: any
  links: Links
  totalJobs: Total_Count
  lat: any = ''
  lng: any = ''
  from: any
  sederData: any;
  track: any;
  user: any;
  payment_amount: any;
  marker: any;
  data: any;
  distancetrip: number;
  userSucursal: any;
  dataTienda: [SUCURSALES];
  fechaMin: string;
  fechaInitial: string;
  tipoTrabajo: string;
  b2b: boolean;
  b2c: boolean;
  t2t: boolean;
  dataB2B: dataB2B;
  dataT2T: dataT2T;
  dataOrigen: dataJobs;
  dataDestino: dataJobs;
  test: any;

  requestT2TForm = this.formBuilder.group({
    origen: ['', [
    ]],
    destino: ['', [
    ]],
    fechaTarea: ['', [
      Validators.required
    ]],
    bultos: ['', [
      Validators.required
    ]],
    valor: ['', [
      Validators.required
    ]],
    peso: ['', [
      Validators.required
    ]],
    comentarios: ['', []],
  });


  requestB2BForm = this.formBuilder.group({
    fechaTarea: ['', [
      Validators.required
    ]],
    origen: ['', [
    ]],
    destinatario: ['', [
      Validators.required
    ]],
    direccion: ['', [
      Validators.required
    ]],
    contacto: ['', [
      Validators.required
    ]],
    telefono: ['', [
      Validators.required
    ]],
    bultos: ['', [
      Validators.required
    ]],
    valor: ['', [
      Validators.required
    ]],
    peso: ['', [
      Validators.required
    ]],
    comentarios: ['', []],
  });
  get fechaTarea() {
    switch (this.tipoTrabajo) {
      case 't2t':
        return this.requestT2TForm.get('fechaTarea');
        break;
      case 'b2b':
        return this.requestB2BForm.get('fechaTarea')
        break;
      case 'b2c':
        break;
      default:
        break;
    }
  }
  get origen() {
    switch (this.tipoTrabajo) {
      case 't2t':
        return this.requestT2TForm.get('origen');
        break;
      case 'b2b':
        return this.requestB2BForm.get('origen')
        break;
      case 'b2c':
        break;
      default:
        break;
    }
  }
  get destino() {
    return this.requestT2TForm.get('destino');
  }
  get destinatario() {
    return this.requestB2BForm.get('destinatario');
  }
  get contacto() {
    switch (this.tipoTrabajo) {
      case 't2t':
        break;
      case 'b2b':
        return this.requestB2BForm.get('contacto')
        break;
      case 'b2c':
        break;
      default:
        break;
    }
  }
  get telefono() {
    switch (this.tipoTrabajo) {
      case 't2t':
        return this.requestT2TForm.get('destino');
        break;
      case 'b2b':
        return this.requestB2BForm.get('telefono');
        break;
      case 'b2c':
        break;
      default:
        break;
    }
  }
  get bultos() {
    switch (this.tipoTrabajo) {
      case 't2t':
        return this.requestT2TForm.get('bultos');
        break;
      case 'b2b':
        return this.requestB2BForm.get('bultos');
        break;
      case 'b2c':
        break;
      default:
        break;
    }

  }
  get valor() {
    switch (this.tipoTrabajo) {
      case 't2t':
        return this.requestT2TForm.get('valor');
        break;
      case 'b2b':
        return this.requestB2BForm.get('valor');
        break;
      case 'b2c':
        break;
      default:
        break;
    }
  }
  get peso() {
    switch (this.tipoTrabajo) {
      case 't2t':
        return this.requestT2TForm.get('peso');
        break;
      case 'b2b':
        return this.requestB2BForm.get('peso');
        break;
      case 'b2c':
        break;
      default:
        break;
    }
  }
  get comentarios() {
    switch (this.tipoTrabajo) {
      case 't2t':
        return this.requestT2TForm.get('comentarios');
        break;
      case 'b2b':
        return this.requestB2BForm.get('comentarios');
        break;
      case 'b2c':
        break;
      default:
        break;
    }
  }
  get direccion() {
    switch (this.tipoTrabajo) {
      case 't2t':
        return null
        break;
      case 'b2b':
        return this.requestB2BForm.get('direccion');
        break;
      case 'b2c':
        break;
      default:
        break;
    }
  }



  public errorMessages = {
    origen: [
      { type: 'required', message: 'La tienda de Origen es un campo requerido.' }
    ],
    destino: [
      { type: 'required', message: 'La tienda de Destino es un campo requerido.' }
    ],
    destinatario: [
      { type: 'required', message: 'El destinatario es un campo requerido.' }
    ],
    contacto: [
      { type: 'required', message: 'El campo de telefono es un campo requerido.' }
    ],
    telefono: [
      { type: 'required', message: 'El campo de telefono es un campo requerido.' }
    ],
    fechaTarea: [
      { type: 'required', message: 'La Fecha es un campo requerido.' }
    ],
    bultos: [
      { type: 'required', message: 'La cantidad de Bultos es un campo requerido.' }
    ],
    valor: [
      { type: 'required', message: 'El valor de la mercaderia es un campo requerido.' }
    ],
    peso: [
      { type: 'required', message: 'El peso total de la mercaderia es un campo requerido.' }
    ],
    direccion: [
      { type: 'required', message: 'La direccion de entrega de la mercaderia es un campo requerido.' }
    ],
    comentarios: []

  }

  constructor(private detrack: DetrackService, private _api: ApistockService, private dataService: DatafireService, public dialog: MatDialog, private router: Router,
    private formBuilder: FormBuilder) {
    this.fechaMin = this.getDate(0)
    this.fechaInitial = this.getDate(1)
    this._api.getAllTiendas().subscribe((res: [SUCURSALES]) => {
      this.dataTienda = res
    });


  }


  ngOnInit() {
    this._api.getTiendaData(localStorage.getItem('currentUser')).subscribe((res: [SUCURSALES]) => {
      this.userSucursal = res[0].TIENDA;
    });

  }
  toBack() {
    this.tipoTrabajo = null
  }
  click(tipo) {
    switch (tipo) {
      case 't2t':
        this.tipoTrabajo = 't2t'
        this.t2t = true
        this.b2b = false
        this.b2c = false
        break;
      case 'b2b':
        this.tipoTrabajo = 'b2b'
        this.t2t = false
        this.b2b = true
        this.b2c = false
        break;
      case 'b2c':
        this.tipoTrabajo = 'b2c'
        this.t2t = false
        this.b2b = false
        this.b2c = true
        break;
      default:
        break;
    }
  }

  getDate(arg) {
    if (arg == 1) {
      let date = new Date()
      let day = date.getDate()
      let month = date.getMonth() + 1
      let year = date.getFullYear()
      const getDate = year + "-" + month + "-" + day
      return getDate;
    } else {
      let date = new Date()
      let day = date.getDate()
      let month = date.getMonth() + 1
      let year = date.getFullYear()
      const getDate = year + "-" + month + "-" + day
      return getDate;
    }
  }
  async getTiendaByName(name) {

    var data = await this.dataTienda.filter(x => name.indexOf(x.NOMBRE) > -1).filter((elem1, pos, arr) => arr.findIndex((elem2) => elem2.NOMBRE === elem1.NOMBRE) === pos);

    return data[0];

  }

  async saveRequest() {
    this.dataB2B = this.requestB2BForm.value;
    this.dataT2T = this.requestT2TForm.value;


    if (this.dataB2B.origen == '') {
      var origen = await this.getTiendaByName(this.dataT2T.origen);
      var destino = await this.getTiendaByName(this.dataT2T.destino);
      this.dataOrigen = {
        fechaTarea: this.dataT2T.fechaTarea,
        nombre: this.dataT2T.origen,
        direccion: origen.DIRECCION,
        email: origen.EMAILDESTINATARIOS,
        contacto: origen.CONTACTO,
        telefono: origen.TELEFONO,
        bultos: this.dataT2T.bultos,
        valor: this.dataT2T.valor,
        peso: this.dataT2T.peso,
        comentarios: this.dataT2T.comentarios
      }
      this.dataDestino = {
        fechaTarea: this.dataT2T.fechaTarea,
        nombre: this.dataT2T.destino,
        direccion: destino.DIRECCION,
        email: destino.EMAILDESTINATARIOS,
        contacto: destino.CONTACTO,
        telefono: destino.TELEFONO,
        bultos: this.dataT2T.bultos,
        valor: this.dataT2T.valor,
        peso: this.dataT2T.peso,
        comentarios: this.dataT2T.comentarios
      }

    } else {
      var origen = await this.getTiendaByName(this.dataB2B.origen);
      this.dataOrigen = {
        fechaTarea: this.dataB2B.fechaTarea,
        nombre: this.dataB2B.origen,
        email: origen.EMAILDESTINATARIOS,
        direccion: origen.DIRECCION,
        contacto: origen.CONTACTO,
        telefono: origen.TELEFONO,
        bultos: this.dataB2B.bultos,
        valor: this.dataB2B.valor,
        peso: this.dataB2B.peso,
        comentarios: this.dataB2B.comentarios
      }
      this.dataDestino = {
        fechaTarea: this.dataB2B.fechaTarea,
        nombre: this.dataB2B.destinatario,
        email: origen.EMAILDESTINATARIOS,
        direccion: this.dataB2B.direccion,
        contacto: this.dataB2B.contacto,
        telefono: this.dataB2B.telefono,
        bultos: this.dataB2B.bultos,
        valor: this.dataB2B.valor,
        peso: this.dataB2B.peso,
        comentarios: this.dataB2B.comentarios
      }

    }

    await this.detrack.couterJobs().then(res => {
      this.track = res
      // console.log(this.track)
      this.createJobCollection(this.track, this.dataOrigen, this.dataDestino)
      this.createJobDelivery(this.track, this.dataOrigen, this.dataDestino)
      var objJobs =
      {
        json: {
          collection: this.dataOrigen,
          delivery: this.dataOrigen,
          jobNo: this.track
        }
      };

      this._api.presentAlert('Tarea Creada', 'Tareas de Recolecta y Entrega', 'Su numero de tracking es: ' +
        this.track + ' para más información verifique la opción de tareas en tránsito.', objJobs, '/job-requests')
    })
  }
  async createJobCollection(trackNo, origen: dataJobs, destino: dataJobs) {
    // console.log(this.requestT2TForm.value)
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    this.jobCollection = {
      'data': [{
        do_number: trackNo,
        tracking_number: trackNo,
        order_number: trackNo,
        type: 'Collection',
        open_to_marketplace: true,
        weight: origen.peso,
        pieces: origen.bultos,
        payment_amount: origen.valor,
        date: year + '-' + month + '-' + day,
        company_name: origen.nombre,
        sender_phone_number: origen.telefono,
        group_name: origen.nombre,
        account_number: '',
        account_no: origen.nombre,
        customer: origen.contacto,
        instructions: origen.comentarios,
        deliver_to_collect_from: origen.nombre + ' ' + destino.nombre,
        notify_email: origen.email + ';' + destino.email,
        phone_number: origen.telefono,
        country: 'Panamá',
        state: '',
        city: '',
        address_1: origen.direccion,
        address_2: '',
        address_lat: '',
        address_lng: ''
      } as jobToSend]
    }
    // // console.log(this.jobCollection)
    await this.dataService.saveJob(this.jobCollection)
    await this.detrack.createJobs(this.jobCollection).then((res) => {
      this.dataService.saveJob(res)
      // console.log(res)
    }).catch(err => {
      console.error(err)
    })

  }
  async createJobDelivery(trackNo, origen: dataJobs, destino: dataJobs) {

    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let res = {}
    this.jobDelivery = {
      'data': [{
        do_number: trackNo,
        tracking_number: trackNo,
        order_number: trackNo,
        type: 'Delivery',
        open_to_marketplace: true,
        weight: destino.peso,
        pieces: destino.bultos,
        payment_amount: destino.valor,
        date: year + '-' + month + '-' + day,
        company_name: destino.nombre,
        sender_phone_number: destino.telefono,
        group_name: destino.nombre,
        account_number: '',
        account_no: destino.nombre,
        customer: destino.contacto,
        instructions: destino.comentarios,
        deliver_to_collect_from: origen.nombre + ' ' + destino.nombre,
        notify_email: origen.email + ';' + destino.email,
        phone_number: destino.telefono,
        country: 'Panamá',
        state: '',
        city: '',
        address_1: destino.direccion,
        address_2: '',
        address_lat: '',
        address_lng: ''
      } as jobToSend]
    }
    await this.dataService.saveJob(this.jobDelivery)
    // console.log(this.jobDelivery)
    await this.detrack.createJobs(this.jobDelivery).then((res) => {
      this.dataService.saveJob(res)
      // console.log(res)
    }).catch(err => {
      console.error(err)
    })

  }


  u() {
    this.detrack.couterJobs().then(res => this.track = res)
    // console.log(this.track)
  }

  getTienda(email) {
    this._api.getTiendaData(email).subscribe((res: [SUCURSALES]) => {
    })

  }
}
