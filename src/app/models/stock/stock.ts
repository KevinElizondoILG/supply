export class Stock {
  public SUCURSAL: string;
  public NOMBRE_CATEGORIA: string;
  public PRIORIDAD: string;
  public CANTIDAD: number;

}

export class TigoStock {
  public ID: string;
  public IDARTICULOCLIENTE: string;
  public IDSUCURSAL: string;
  public DESCRIPCIONLARGA: string;
  public DUA: string;
  public CANTIDADUNIDADES: number;
}

export class FEFOStock {
  public CLIENTE: string;
  public SUCURSAL: string;
  public RECEPCION: string;
  public WMS_CODE: string;
  public CLIENTE_CODE: string;
  public NOMBRELARGO: string;
  public SITUACION: string;
  public LOTE: string;
  public CONTENEDOR: string;
  public DUA: string;
  public REF1: string;
  public REF2: string;
  public EN_UNIDADES: number;
  public EN_CAJAS: number;
  public FECHACADUCIDAD: string;
  public DIAS_VIDA_UTIL: string;
  public U_M: string;
  public PESOxTARIMA: string;
  public FECHAVALIDACION: string;
  public CATEGORIA: string;
  public SUBCATEGORIA: string;

}


export class StockReportGeneral {
  public IDARTICULO: string;
  public IDARTICULOCLIENTE: string;
  public DESCRIPCIONLARGA: string;
  public DUA: string;
  public CANTIDADUNIDADES: number;
}
