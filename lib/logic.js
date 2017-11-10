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

    // Obtener el contrato de la transacción
    var co = autorizar.c;
    if(!co) {
        throw new Error('El contrato no existe.');
    }

    var index = -1;

    // Si no hay un arreglo para clientes autorizados, crear uno
    if(!co.autorizados) {
        co.autorizados = [];
    }
    // Si ya hay arreglo, buscar si el cliente que se quiere autorizar ya existe
    else {
        index = co.autorizados.indexOf(autorizar.cID);
    }

    // Si el cliente aún no está autorizado
    if(index < 0) {
        // Settear los datos de contrato a nada
        co.data = [];

        // Obtener el cuentahabiente actual y la info que se quiere obtener
        var ch = getCurrentParticipant();
        var nI = autorizar.nInfo;

        // Pasar el cuentahabiente a JSON
        var se = getSerializer().toJSON(ch);

        // Obtener datos de se y pasarlos al contrato
        for(var i = 0; i < nI.length; i++) {
            // Buscar dentro del Cuentahabiente si existe la información que se quiere obtener
            if(se[nI[i]]) {
                // Meterla al contrato
                co.data.push("hola");
            }
        }

        // Autorizar al cliente para ver el contrato
        co.autorizados.push(autorizar.cID);

        return getAssetRegistry('org.aabo.contrato')
        .then(function (contratoRegistry) {
            var ev = getFactory().newEvent('org.aabo', 'EventoContrato');
            ev.contratoIdentidad = autorizar;
            emit(ev);

            return contratoRegistry.update(co);
        });
    }
}

/**
 * Un Cuentahabiente revoca su identidad a un Cliente.
 * @param {org.aabo.revocar} revocar - revocacion de contrato a procesar
 * @transaction
 */
function revocar(revocar) {
    var co = revocar.c;
    if(!co) {
        throw new Error('El contrato no existe.');
    }

    var index = co.autorizados ? co.autorizados.indexOf(revocar.cID) : -1;

    if(index > -1) {
        co.autorizados.splice(index, 1);

        return getAssetRegistry('org.aabo.contrato')
        .then(function (contratoRegistry) { 
            var ev = getFactory().newEvent('org.aabo', 'EventoContrato');
            ev.contratoIdentidad = revocar;
            emit(ev);

            return contratoRegistry.update(co);
        });
    }
}