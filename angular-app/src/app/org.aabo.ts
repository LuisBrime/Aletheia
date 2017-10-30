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
      autorizados: string[];
   }
   export class Cliente extends Participant {
      clienteKey: string;
      nombreDeCliente: string;
      domicilioDeCliente: Domicilio;
   }
   export class Administrador extends Cliente {
      adminKey: string;
   }
   export class Domicilio {
      calle: string;
      numeroExterior: string;
      numeroInterior: string;
      cp: string;
      pais: string;
   }
   export abstract class contratoIdentidad extends Transaction {
      cID: string;
   }
   export class autorizar extends contratoIdentidad {
   }
   export class revocar extends contratoIdentidad {
   }
   export class EventoContrato extends Event {
      contratoIdentidad: contratoIdentidad;
   }
// }
