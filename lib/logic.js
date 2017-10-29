'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Un Cuentahabiente autoriza su identidad a un Cliente.
 * @param {org.aabo.autorizar} autorizar - autorizacion de contrato a ser procesada
 * @transaction
 */
function autorizar(autorizar) {
    var ch = getCurrentParticipant();
    if(!ch) {
        throw new Error('El participante no existe.');
    }

    var index = -1;

    if(!ch.autorizados) {
        ch.autorizados = [];
    }
    else {
        index = ch.autorizados.indexOf(autorizar.cID);
    }

    if(index < 0) {
        ch.autorizados.push(autorizar.cID);

        return getParticipantRegistry('org.aabo.Cuentahabiente')
        .then(function (cuentahabienteRegistry) {
            var ev = getFactory().newEvent('org.aabo', 'EventoContrato');
            ev.contratoIdentidad = autorizar;
            emit(ev);

            return cuentahabienteRegistry.update(ch);
        });
    }
}

/**
 * Un Cuentahabiente revoca su identidad a un Cliente.
 * @param {org.aabo.revocar} revocar - revocacion de contrato a procesar
 * @transaction
 */
function revocar(revocar) {
    var ch = getCurrentParticipant();
    if(!ch) {
        throw new Error('El participante no existe.');
    }

    var index = ch.autorizados ? ch.autorizados.indexOf(revocar.cID) : -1;

    if(index > -1) {
        ch.autorizados.splice(index, 1);

        return getParticipantRegistry('org.aabo.Cuentahabiente')
        .then(function (cuentahabienteRegistry) { 
            var ev = getFactory().newEvent('org.aabo', 'EventoContrato');
            ev.contratoIdentidad = revocar;
            emit(ev);

            return cuentahabienteRegistry.update(ch);
        });
    }
}