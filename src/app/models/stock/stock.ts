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

export class StockReportGeneral {
  public IDARTICULO: string;
  public IDARTICULOCLIENTE: string;
  public DESCRIPCIONLARGA: string;
  public DUA: string;
  public CANTIDADUNIDADES: number;
}
