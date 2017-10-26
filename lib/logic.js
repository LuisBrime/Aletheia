'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {org.aabo.aletheia.ChangeAssetValue} changeAssetValue
 * @transaction
 */
function onChangeAssetValue(changeAssetValue) {
    var assetRegistry;
    var id = changeAssetValue.relatedAsset.assetId;
    return getAssetRegistry('org.aabo.aletheia.SampleAsset')
        .then(function(ar) {
            assetRegistry = ar;
            return assetRegistry.get(id);
        })
        .then(function(asset) {
            asset.value = changeAssetValue.newValue;
            return assetRegistry.update(asset);
        });
}

/**
 * Un Cuentahabiente autoriza su identidad a un Cliente.
 * @param {org.aabo.aletheia.autorizar} autorizar - autorizacion de contrato a ser procesada
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
 * @param {org.aabo.aletheia.revocar} revocar - revocacion de contrato a procesar
 * @transaction
 */
function revocar(revocar) {

    var cuentahabiente = getCurrentParticipant();
    if(!cuentahabiente) {
        throw new Error('');
    }

}