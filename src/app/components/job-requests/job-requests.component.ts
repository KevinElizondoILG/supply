import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { DetrackService } from 'src/app/services/detrack.service';
import { Links, Total_Count } from 'src/app/models/jobs';

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
  addressState = []
  allDistrics: any
  allCities: any
  zipCode: any
  from: any
  clientData: any;
  sederData: any;
  track: any;
  user: any;
  job_price = 2900;
  marker: any
  data: any
  distancetrip: number

  requestForm = this.formBuilder.group({
    name: ['',
      [
        Validators.required,
        Validators.pattern("^[a-zñáéíóúüA-ZÑÁÉÍÓÚÜ ]*")
      ]
    ],
    firtsLastName: ['', [
      Validators.required,
      Validators.pattern("^[a-zñáéíóúüA-ZÑÁÉÍÓÚÜ ]*")
    ]],
    destinataryState: ['', [
      Validators.required
    ]],
    destinataryDistric: ['', [
      Validators.required
    ]],
    destinataryCity: ['', [
      Validators.required
    ]],
    destinataryAddress: ['', [
      Validators.required
    ]],
    destinataryPhone: ['', [
      Validators.required,
      Validators.pattern("^[0-9-]*")
    ]],
    destinataryEmail: ['', [
      Validators.required,
      Validators.email,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
    ]],
    destinataryNote: ['', []],

  })
  get name() {
    return this.requestForm.get('name');
  }
  get firtsLastName() {
    return this.requestForm.get('firtsLastName');
  }
  get destinataryPhone() {
    return this.requestForm.get('destinataryPhone');
  }
  get destinataryEmail() {
    return this.requestForm.get('destinataryEmail');
  }
  get destinataryState() {
    return this.requestForm.get('destinataryState');
  }
  get destinataryDistric() {
    return this.requestForm.get('destinataryDistric');
  }
  get destinataryCity() {
    return this.requestForm.get('destinataryCity');
  }
  get destinataryAddress() {
    return this.requestForm.get('destinataryAddress');
  }
  get destinataryNote() {
    return this.requestForm.get('destinataryNote');
  }


  public errorMessages = {
    name: [
      { type: 'required', message: 'El Nombre es un campo requerido.' },
      { type: 'pattern', message: 'Ingrese un nombre valido' }
    ],
    firtsLastName: [
      { type: 'required', message: 'El apellido es un campo requerido.' },
      { type: 'pattern', message: 'Ingrese un apellido valido' }
    ],
    destinataryEmail: [
      { type: 'required', message: 'El correo es un campo requerido.' }
    ],
    destinataryState: [
      { type: 'required', message: 'La Provincia es un campo requerido.' }
    ],
    destinataryDistric: [
      { type: 'required', message: 'La Provincia es un campo requerido.' }
    ],
    destinataryCity: [
      { type: 'required', message: 'La Provincia es un campo requerido.' }
    ],
    destinataryPhone: [
      { type: 'required', message: 'La Provincia es un campo requerido.' },
      { type: 'pattern', message: 'Ingrese un número de telefonico valido' }
    ],
    destinataryAddress: [
      { type: 'required', message: 'La dirección es un campo requerido.' }
    ]
  }

  constructor(private detrack: DetrackService,
    private formBuilder: FormBuilder,) { }

  ngOnInit() {
  }
  async saveRequest() {
    this.detrack.couterJobs().then(res => {
      this.track = res
      console.log(this.track)

      this.createJobDelivery(this.track)
      this.createJobCollection(this.track)
      this.presentAlert('Tareas Creadas', 'Tareas de Recolecta y Entrega', 'Su numero de tracking es: ' +
        this.track + ' para más información verifique la opción de tareas en tránsito.', '/active')
    })
  }
  async createJobDelivery(trackNo) {

    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    await this.places.getFullAdress(this.requestForm.value.destinataryDistric, this.requestForm.value.destinataryCity).then((res: any) => {
      var userId = JSON.parse(localStorage.getItem('user'));
      this.dataService.getUserProfile(userId.uid).then(user => {
        this.dataService.getCompany(user.data().oid).then(oid => {
          this.clientData = Object.assign({}, user.data(), oid.data(), { DO: trackNo })
          this.jobDelivery = {
            'data': [{
              do_number: trackNo,
              tracking_number: trackNo,
              order_number: trackNo,
              type: 'Delivery',
              open_to_marketplace: true,
              weight: '',
              pieces: '',
              job_price: this.job_price,
              date: year + '-' + month + '-' + day,
              company_name: this.clientData.companyName,
              sender_phone_number: this.clientData.celPhone,
              group_name: this.clientData.companyName,
              account_number: this.clientData.oid,
              account_no: this.clientData.oid,
              customer: this.requestForm.value.name,
              instructions: this.requestForm.value.destinataryNote,
              deliver_to_collect_from: this.requestForm.value.name,
              notify_email: this.clientData.companyEmail + ';' + this.requestForm.value.destinataryEmail,
              phone_number: this.requestForm.value.destinataryPhone,
              last_name: this.requestForm.value.firtsLastName,
              country: 'Costa Rica',
              state: res.state,
              city: res.district,
              address_1: this.requestForm.value.destinataryAddress,
              address_2: res.name,
              address_lat: this.lat,
              address_lng: this.lng
            } as jobToSend]
          }
          this.detrack.createJobs(this.jobDelivery).then((res) => {
            this.dataService.saveJob(res)
            // console.log(res)
          }).catch(err => {
            console.error(err)
          })
        })
      })
    })
  }
  async createJobCollection(trackNo) {
    // console.log(this.requestForm.value)
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    await this.places.getFullAdress(this.requestForm.value.destinataryDistric, this.requestForm.value.destinataryCity).then((res: any) => {
      var userId = JSON.parse(localStorage.getItem('user'));
      this.dataService.getUserProfile(userId.uid).then(user => {
        this.dataService.getCompany(user.data().oid).then(oid => {
          this.clientData = Object.assign({}, user.data(), oid.data(), { DO: trackNo })
          this.jobCollection = {
            'data': [{
              do_number: trackNo,
              tracking_number: trackNo,
              order_number: trackNo,
              type: 'Collection',
              open_to_marketplace: true,
              weight: '',
              pieces: '',
              job_price: this.job_price,
              date: year + '-' + month + '-' + day,
              company_name: this.clientData.companyName,
              sender_phone_number: this.clientData.celPhone,
              group_name: this.clientData.companyName,
              account_number: this.clientData.oid,
              account_no: this.clientData.oid,
              customer: this.clientData.companyName,
              instructions: this.requestForm.value.destinataryNote,
              deliver_to_collect_from: this.clientData.name + ' ' + this.clientData.firtsLastName,
              notify_email: this.clientData.companyEmail + ';' + this.requestForm.value.destinataryEmail,
              phone_number: this.clientData.companyPhone,
              last_name: this.clientData.firtsLastName,
              country: 'Costa Rica',
              state: this.clientData.companyState,
              city: this.clientData.companyDistrict,
              address_1: this.clientData.companyAddress,
              address_2: this.clientData.companyName,
              address_lat: this.clientData.address_lat,
              address_lng: this.clientData.address_lng
            } as jobToSend]
          }
          this.detrack.createJobs(this.jobCollection).then((res) => {
            this.dataService.saveJob(res)
            // console.log(res)
          }).catch(err => {
            console.error(err)
          })
        })
      })
    })
  }

  u() {
    this.detrack.couterJobs().then(res => this.track = res)
    console.log(this.track)
  }

}
