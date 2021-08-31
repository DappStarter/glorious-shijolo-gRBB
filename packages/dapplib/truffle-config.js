require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remind home harvest fat swallow thank'; 
let testAccounts = [
"0x0e6f8efc3027e314141cab1214f247cd97c2079d8090f1ebf8e8130848c12320",
"0x6ae1d4a684088d8c9ab3eb6148cfa394c440184af4aff9bcf6c2539827223c5d",
"0x031c37cb5d1b14bce578a42e4f4e75eac840b0fb4d907847720b39fbb23224c5",
"0x1850fe29beaa49c386e666701e7d5e1674e8fbbed254e50f774ed245070e42c9",
"0xcb8d7f81cc322d43fe91c4781d67e211a06cfa6627954d38fc753d775d3b1281",
"0xd9b16f5a56b154d9abd7faa4b43e9726ffee478144372cef711e8128759b5f9e",
"0x70f3fe0811f43f7b489b1704045968b097650424b5e283f320d35432b977e867",
"0x12e7e53ffd66bc86691d55f6670bec801d89863631f8da56ddb2a6327cdddd45",
"0x90735d7513e96bfec3845475a958fd011d6aa2d225beaf074ea147305efd9655",
"0x8a5cc26cf9728c37e7306ed0081221fd298dee86b5a01e0c1f9d023625de4427"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

