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
    var cuentahabiente = getCurrentParticipant();
    if(!cuentahabiente) {
        throw new Error('');
    }
}

/**
 * Un Cuentahabiente revoca su identidad a un Cliente.
 * @param {org.aabo.revocar} revocar - revocacion de contrato a procesar
 * @transaction
 */
function revocar(revocar) {
    var cuentahabiente = getCurrentParticipant();
    if(!cuentahabiente) {
        throw new Error('');
    }
}