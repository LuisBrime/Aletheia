import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.aabo{
   export class Cuentahabiente extends Participant {
      codigoBanorte: string;
      nombre: string;
      curp: string;
      email: string;
      domicilio: Domicilio;
      fechaNacimiento: Date;
      telefono: string;
   }
   export class Cliente extends Participant {
      clienteKey: string;
      nombreDeCliente: string;
      domicilioDeCliente: Domicilio;
   }
   export class Administrador extends Cliente {
      adminKey: string;
   }
   export class BloqueInfo {
      nombre: string;
      data: string;
   }
   export class Domicilio {
      calle: string;
      numeroExterior: string;
      numeroInterior: string;
      cp: string;
      pais: string;
   }
   export class contrato extends Asset {
      contratoKey: string;
      chID: string;
      endDate: Date;
      data: string[];
      autorizados: string[];
      bloques: bloque[];
   }
   export class bloque extends Asset {
      bloqueKey: string;
      nombre: string;
      chID: string;
      cID: string;
      visibleCh: boolean;
      editableCh: boolean;
      info: BloqueInfo[];
   }
   export abstract class contratoIdentidad extends Transaction {
      cID: string;
      nInfo: string[];
      c: contrato;
   }
   export class autorizar extends contratoIdentidad {
   }
   export class revocar extends contratoIdentidad {
   }
   export class cambiarFecha extends Transaction {
      nuevaFecha: Date;
      c: contrato;
   }
   export class agregarInfo extends Transaction {
      nuevaInfo: string[];
      c: contrato;
   }
   export class agregarBloque extends Transaction {
      b: bloque;
      c: contrato;
      info: BloqueInfo[];
   }
   export class EventoContrato extends Event {
      contratoIdentidad: contratoIdentidad;
   }
   export class EventoFecha extends Event {
      cambiarFecha: cambiarFecha;
   }
   export class EventoInfo extends Event {
      agregarInfo: agregarInfo;
   }
   export class EventoBloque extends Event {
      agregarBloque: agregarBloque;
   }
// }
