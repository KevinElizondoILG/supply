export const environment = {
  production: true,
  SERVER: 'http://api.ilgsupplychain.com:5055/',
  // SERVER: 'http://localhost:5055/',
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
  ROUTESSTORE: 'order/routes?Store='

};
