export interface Jobs {
  data: Array<Data>;
  links: Links;
  total_count: Total_Count;
}
export interface DATA {
  SUCURSALES?: SUCURSALES;
}
export interface SUCURSALES {
  NOMBRE?: string;
  CODIGO: string;
  DIRECCION: string;
  CONTACTO: string;
  TELEFONO: string;
  CARGO: string;
  EMAIL: string;
  EMAILDESTINATARIOS: string;
  TIENDA?: string;
}

export interface Total_Count {
  total_count: number;
}
export interface Links {
  first: string;
  last: string;
  next: string;
  prev: string;
}
export interface jobToSend {
  do_number: string;
  type?: string;
  date: string;
  address_lat?: string; // Address lat.
  address_lng?: string; // Address lng.
  address?: string; // required Address.
  company_name?: string; // Address company.
  address_1?: string; // Address 1.
  address_2?: string; // Address 2.
  // address_3?: string; // Address 3.
  postal_code?: string; // Postal code.
  payment_amount?: string;
  city?: string; // City.
  state?: string; // State.
  country?: string; // Country.
  notify_email?: string; // Notify email.
  instructions?: string; // Instructions.
  deliver_to_collect_from?: string; // Contact name.
  last_name?: string; // Contact last name.
  phone_number?: string; // Contact phone.
  sender_phone_number?: string; // Sender phone.
  customer?: string; // Customer.
  account_no?: string; // Account no.
  job_owner?: string; // Owner name.
  group_name?: string; // Group name.

}
export interface Data {
  // Detrack Job Type.Must be Delivery / Collection.
  primary_job_status?: string; // Primary job status.
  open_to_marketplace?: string; // Open to marketplace.
  marketplace_offer?: string; // Marketplace offer.
  do_number?: string; // required D.O No.
  date: string; // required Date.
  start_date?: Date; // Start date.
  status?: string; // Job Status.
  job_release_time?: string; // Job release time.
  job_time?: string; // Job time.
  time_window?: string; // Time window.
  job_received_date?: Date; // Job received date.
  tracking_number?: string; // Tracking number.
  order_number?: string; // Order number.
  job_type?: string; // Job type.
  job_sequence?: string; // Job order.
  job_fee?: string; // Job fee.
  address_lat?: string; // Address lat.
  address_lng?: string; // Address lng.
  address?: string; // required Address.
  company_name?: string; // Address company.
  address_1?: string; // Address 1.
  address_2?: string; // Address 2.
  address_3?: string; // Address 3.
  postal_code?: string; // Postal code.
  city?: string; // City.
  state?: string; // State.
  country?: string; // Country.
  billing_address?: string; // Billing address.
  deliver_to_collect_from?: string; // Contact name.
  last_name?: string; // Contact last name.
  phone_number?: string; // Contact phone.
  sender_phone_number?: string; // Sender phone.
  fax_number?: string; // Fax.
  instructions?: string; // Instructions.
  assign_to?: string; // Assign to.
  notify_email?: string; // Notify email.
  webhook_url?: string; // Webhook url.
  zone?: string; // Zone.
  customer?: string; // Customer.
  account_no?: string; // Account no.
  job_owner?: string; // Owner name.
  invoice_number?: string; // Invoice number.
  invoice_amount?: string; // Invoice amount.
  payment_mode?: string; // Payment mode.
  payment_amount?: number; // Payment amount.
  group_id?: string; // Id of group that the job belongs to.
  group_name?: string; // Group name.
  vendor_name?: string; // Vendor name.
  source?: string; // Source.
  weight?: number; // Weight.
  parcel_width?: number; // Parcel width.
  parcel_length?: number; // Parcel length.
  parcel_height?: number; // Parcel height.
  cubic_meter?: number; // Cubic meter.
  boxes?: number; // Boxes.
  cartons?: number; // Cartons.
  pieces?: number; // Pieces.
  envelopes?: number; // Envelopes.
  pallets?: number; // Pallets.
  bins?: number; // Bins.t
  rays?: number; // Trays.
  bundles?: number; // Bundles.
  rolls?: number; // Rolls.
  number_of_shipping_labels?: number; // Labels.
  attachment_url?: string; // Attachment 1.
  carrier?: string; // Carrier.
  auto_reschedule?: string; // Reschedule.
  eta_time?: string; // Eta time.
  depot?: string; // Depot.
  depot_contact?: string; // Depot contact.
  department?: string; // Department.
  sales_person?: string; // Sales person.
  identification_number?: string; // Identification number.
  bank_prefix?: string; // Bank prefix.
  run_number?: string; // Run number.
  pick_up_from?: string; // Pick up from.
  pick_up_time?: string; // Pick up time.
  pick_up_lat?: string; // Pick up lat.
  pick_up_lng?: string; // Pick up lng.
  pick_up_address?: string; // Pick up address.
  pick_up_address_1?: string; // Pick up address 1.
  pick_up_address_2?: string; // Pick up address 2.
  pick_up_address_3?: string; // Pick up address 3.
  pick_up_city?: string; // Pick up city.
  pick_up_state?: string; // Pick up state.
  pick_up_country?: string; // Pick up country.
  pick_up_postal_code?: string; // Pick up postal code.
  pick_up_zone?: string; // Pick up zone.
  job_price?: number; // Job price.
  insurance_price?: number; // Insurance price.
  insurance_coverage?: string; // Insured.
  total_price?: number; // Total price.
  payer_type?: string; // Payer type.
  remarks?: string; // Remarks.
  service_type?: string; // Service type.
  warehouse_address?: string; // Warehouse address.
  destination_time_window?: string; // Destination timeslot.
  door?: string; // Door.
  time_zone?: string; // Time zone.
  vehicle_type?: string; // Vehicle type.
  items: []; // Array of items.
  pod_time?: string; // POD time for manual update in format HH: MM:13: 30;                                                         //.
  milestones: []; // Array of milestones.
}

export interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  date?: Date;
}
export interface LatLng {
  lat: number;
  lng: number
}

export interface jobResponse {
  account_number: string;
  actual_crates: string;
  actual_pallets: string;
  actual_utilization: string;
  actual_weight: string;
  address: string;
  address_1: string;
  address_2: string;
  address_3: string;
  address_lat: string;
  address_lng: string;
  address_tracked_at: string;
  arrived_address: string;
  arrived_at: string;
  arrived_lat: string;
  arrived_lng: string;
  assign_to: string;
  attachment_url: string;
  attempt: string;
  auto_reschedule: string;
  available_statuses: any;
  bank_prefix: string;
  billing_address: string;
  bins: string;
  boxes: string;
  bundles: string;
  called_at: string;
  carrier: string;
  cartons: string;
  city: string;
  company_name: string;
  contactless_signature_link: string;
  country: string;
  created_at: string;
  cubic_meter: string;
  cubic_meters: string;
  customer: string;
  customer_feedback: string;
  date: string;
  deliver_to_collect_from: string;
  department: string;
  depot: string;
  depot_contact: string;
  destination_time_window: string;
  detrack_number: string;
  do_number: string;
  door: string;
  driver_mobile_number: string;
  driver_rating: string;
  envelopes: string;
  eta_time: string;
  fax_number: string;
  goods_service_rating: string;
  group_id: string;
  group_name: string;
  head_to_delivery_at: string;
  head_to_pick_up_at: string;
  hold_time: string;
  id: string;
  identification_number: string;
  instructions: string;
  insurance_coverage: false
  insurance_price: string;
  invoice_amount: string;
  invoice_number: string;
  items: []
  items_count: string;
  job_age: string;
  job_fee: string;
  job_order: string;
  job_owner: string;
  job_price: string;
  job_received_date: string;
  job_release_time: string;
  job_sequence: string;
  job_time: string;
  job_type: string;
  last_name: string;
  live_eta: string;
  marketplace_offer: string;
  milestones: [];
  note: string;
  notify_email: string;
  number_of_shipping_labels: string;
  on_demand: false
  open_to_marketplace: string;
  order_number: string;
  pallets: string;
  parcel_height: string;
  parcel_length: string;
  parcel_width: string;
  payer_type: string;
  payment_amount: string;
  payment_collected: string;
  payment_mode: string;
  phone_number: string;
  photo_1_at: string;
  photo_1_file_url: string;
  photo_2_at: string;
  photo_2_file_url: string;
  photo_3_at: string;
  photo_3_file_url: string;
  photo_4_at: string;
  photo_4_file_url: string;
  photo_5_at: string;
  photo_5_file_url: string;
  photo_6_at: string;
  photo_6_file_url: string;
  photo_7_at: string;
  photo_7_file_url: string;
  photo_8_at: string;
  photo_8_file_url: string;
  photo_9_at: string;
  photo_9_file_url: string;
  photo_10_at: string;
  photo_10_file_url: string;
  pieces: string;
  pod_address: string;
  pod_at: string;
  pod_lat: string;
  pod_lng: string;
  pod_time: string;
  postal_code: string;
  primary_job_status: string;
  priority: string;
  reason: string;
  reattempted: string;
  received_by_sent_by: string;
  recipient_sender_device_pod_at: string;
  recipient_sender_device_signature_file_url: string;
  recipient_sender_device_signed_by: string;
  remarks: string;
  rolls: string;
  run_number: string;
  sales_person: string;
  sender_phone_number: string;
  serial_number: string;
  service_time: string;
  service_type: string;
  signature_file_url: string;
  signed_at: string;
  source: string;
  start_date: string;
  state: string;
  status: string;
  temperature: string;
  texted_at: string;
  time_window: string;
  time_zone: string;
  total_price: string;
  tracking_link: string;
  tracking_number: string;
  tracking_status: string;
  trays: string;
  type: string;
  vehicle_type: string;
  warehouse_address: string;
  webhook_url: string;
  weight: string;
  zone: string;
}
export interface dataB2B {
  fechaTarea: string;
  origen: string;
  destinatario: string;
  direccion: string;
  contacto: string;
  telefono: string;
  bultos: number;
  valor: string;
  peso: number;
  comentarios: string;
}

export interface dataT2T {
  fechaTarea: string;
  origen: string;
  destino: string;
  bultos: number;
  valor: string;
  peso: number;
  comentarios: string;
}

export interface dataJobs {
  fechaTarea: string;
  nombre: string;
  direccion: string;
  email: string;
  contacto: string;
  telefono: string;
  bultos: number;
  valor: string;
  peso: number;
  comentarios: string;
}

