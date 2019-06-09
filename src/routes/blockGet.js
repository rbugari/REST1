async function  GetBlockchain(key) {
    const Tx = require('ethereumjs-tx')
    const Web3 = require('web3')
    const config =require('../config.json')

    const web3 = new Web3(config.web3_path)

    //console.log(config)

    const account1 =config.eth_account
    //const account2 = '0x24C08c49A4280C5E60123713e7890CA600689421'


    const privkey1 = config.eth_privkey
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
            "inputs": [
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "contents",
            "outputs": [
                {
                    "name": "key",
                    "type": "string"
                },
                {
                    "name": "xtype",
                    "type": "string"
                },
                {
                    "name": "data",
                    "type": "string"
                },
                {
                    "name": "hash",
                    "type": "string"
                },
                {
                    "name": "tags",
                    "type": "string"
                },
                {
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "name": "used",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
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
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "entityStructs",
            "outputs": [
                {
                    "name": "entityData",
                    "type": "string"
                },
                {
                    "name": "isEntity",
                    "type": "bool"
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
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_key",
                    "type": "string"
                }
            ],
            "name": "ifExist",
            "outputs": [
                {
                    "name": "_used",
                    "type": "bool"
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
                    "name": "entityAddress",
                    "type": "address"
                }
            ],
            "name": "isEntity",
            "outputs": [
                {
                    "name": "isIndeed",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ]

 
    //const contractAdress = config.eth_contact
    const contractAdress = '0xab0f3d261b200a4a4583f960485ac79b50e8f2b7'
    var docContract = new web3.eth.Contract(docContractABI, contractAdress)

    
    docContract.methods.GetContent(key).call()
    .then(function (res)
    {
        const Content = 
        {
            "key":key,
            "xtype" : res._xtype,
            "data" : res._data,
            "hash":res._hash,
            "tags":res.tags
            }
        console.log (Content)
        return Content
    })

}
module.exports = GetBlockchain



