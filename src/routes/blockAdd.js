
async function  AddBlockchain(key,type,xdata,hash,tag) {
    const Tx = require('ethereumjs-tx')
    const Web3 = require('web3')

    const web3 = new Web3('https://rinkeby.infura.io/v3/75b21001bafe4f1bad5da6513a7db17d')

    //console.log(web3)

    const account1 ='0x378Ff03879a40e9eb2B1Cf4E9C08145e77DcED2E'
    //const account2 = '0x24C08c49A4280C5E60123713e7890CA600689421'


    const privkey1 = '6C329D7C8BB0554FA7EBC1CB88D253EB9B8E1AF2F32BCEC5D024744E35AFA58B'
    const priv1 = Buffer.from(privkey1,'hex');



    const docContractABI = [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_key",
                    "type": "string"
                },
                {
                    "name": "_xtype",
                    "type": "string"
                },
                {
                    "name": "_data",
                    "type": "string"
                },
                {
                    "name": "_hash",
                    "type": "string"
                },
                {
                    "name": "_tags",
                    "type": "string"
                }
            ],
            "name": "NewContent",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "elementCount",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_key",
                    "type": "string"
                }
            ],
            "name": "GetContent",
            "outputs": [
                {
                    "name": "_xtype",
                    "type": "string"
                },
                {
                    "name": "_data",
                    "type": "string"
                },
                {
                    "name": "_hash",
                    "type": "string"
                },
                {
                    "name": "_tags",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ]

    const contractAdress = '0xaea9f647a08b6c0017f0cf978be227ba3da4dc10'

    var docContract = new web3.eth.Contract(docContractABI, contractAdress)

console.log (key,"--", type,"--",xdata,"--",hash,"--",tag)

    //const data = docContract.methods.NewDocTest(125).encodeABI()
    const data = docContract.methods.NewContent(
        key,
        type,
        xdata,
        hash,
        tag
        ).encodeABI()

    web3.eth.getTransactionCount(account1, (err, txCount) => {
        
        console.log ('Error: ',err,'   Cant de Transact: ',txCount);

        // Build the transaction
        const txObject = {
            nonce: web3.utils.toHex(txCount) ,
            gasLimit:web3.utils.toHex(1000000) ,
            gasPrice:web3.utils.toHex(web3.utils.toWei('10','gwei')) ,
            to:contractAdress,
            data:data 
        }
        //console.log (txObject)

        // sign the transaction
        const tx = new Tx(txObject)
        tx.sign(priv1)

        const serializedTransaction = tx.serialize()
        const raw = '0x' + serializedTransaction.toString('hex')

        console.log('raw', raw)

        // Bradcast transaction
        web3.eth.sendSignedTransaction (raw, (err,txHash) => {
            console.log('Error:',err,'txHash',txHash)
        })
    })
    return 1

}

module.exports = AddBlockchain

