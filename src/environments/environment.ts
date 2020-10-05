// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyBkV2_qBmLuLhO3MiFckSdNUf_RgmrSrpA",
    authDomain: "npp-ilg.firebaseapp.com",
    databaseURL: "https://npp-ilg.firebaseio.com",
    projectId: "npp-ilg",
    storageBucket: "npp-ilg.appspot.com",
    messagingSenderId: "2625445812",
    appId: "1:2625445812:web:bf2d39267a9aa47f"
  },
  SERVER: 'http://api.ilgsupplychain.com:5055/',
  //SERVER: 'http://localhost:5055/',
  API_URL: 'api/',
  // API DATABASE //
  CRC: 'crc/',
  PTY: 'pty/',
  NPP: 'NPP/',
  PP: 'pp/',
  TEST: '',
  // TOKEN //
  TOKEN: 'wAdYgqmpvKu4_H_QKsGJsyvwWrgbPnEvIJZ5rt_I8dLNid9xGlcjKGPAuahQUnDNP-jZPw/',
  // API PTY  //
  INVENTARIOCONSORCIO: 'inventarioFIFO?IDCONSORCIO=',
  INVENTARIOALL: 'ALLinventarios',
  ALLTIENDAS: 'tiendaspty',
  TIENDAS: 'tiendasusers?email=',
  // API CRC //
  TIGOINVETARIO: 'Tigo',
  INVENTARIOCONSORCIO_FEFO: 'inventarioFEFO?IDCONSORCIO=',


  //PAYLESS APIS//
  ORDERADD: 'order/add',
  ORDERBYSTORE: 'order/getByStore?IDStore=',
  ORDERBYID: 'order/getByOrder?IDOrder=',
  ORDERALL: 'order/getAllOrders',
  ORDERDELELTE: 'order/deleteByOrder?delete=',
  ORDERAPPROVE: 'order/approveByOrder',
  ORDEREDIT: 'order/editByOrder',
  ORDEREDITSTORE: 'order/editStore',
  INVENTARIOMASTERBOX: 'masterbox',
  INVETARIOMASTERBOXSUCURSAL: 'masterbox?IDSucursal=',
  ROUTESSTORE: 'order/routes?Store=',
  APIKEY: '5e9fc246fd12455757cd02aa43f1676c7e64d05959262e39'


};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
