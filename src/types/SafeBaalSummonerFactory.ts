/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { SafeBaalSummoner } from "./SafeBaalSummoner";

export class SafeBaalSummonerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _baalSingleton: string,
    _gnosisSingleton: string,
    _gnosisFallbackLibrary: string,
    _gnosisMultisendLibrary: string,
    overrides?: Overrides
  ): Promise<SafeBaalSummoner> {
    return super.deploy(
      _baalSingleton,
      _gnosisSingleton,
      _gnosisFallbackLibrary,
      _gnosisMultisendLibrary,
      overrides || {}
    ) as Promise<SafeBaalSummoner>;
  }
  getDeployTransaction(
    _baalSingleton: string,
    _gnosisSingleton: string,
    _gnosisFallbackLibrary: string,
    _gnosisMultisendLibrary: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _baalSingleton,
      _gnosisSingleton,
      _gnosisFallbackLibrary,
      _gnosisMultisendLibrary,
      overrides || {}
    );
  }
  attach(address: string): SafeBaalSummoner {
    return super.attach(address) as SafeBaalSummoner;
  }
  connect(signer: Signer): SafeBaalSummonerFactory {
    return super.connect(signer) as SafeBaalSummonerFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SafeBaalSummoner {
    return new Contract(address, _abi, signerOrProvider) as SafeBaalSummoner;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_baalSingleton",
        type: "address",
      },
      {
        internalType: "address",
        name: "_gnosisSingleton",
        type: "address",
      },
      {
        internalType: "address",
        name: "_gnosisFallbackLibrary",
        type: "address",
      },
      {
        internalType: "address",
        name: "_gnosisMultisendLibrary",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "proxy",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "masterCopy",
        type: "address",
      },
    ],
    name: "ModuleProxyCreation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "baal",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "avatar",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "details",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "baalType",
        type: "string",
      },
    ],
    name: "SummonedBaal",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_avatar",
        type: "address",
      },
      {
        internalType: "string",
        name: "_details",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "baalInitializer",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_saltNonce",
        type: "uint256",
      },
    ],
    name: "SummonBaal",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_details",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_saltNonce",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "bytes[]",
        name: "_baalInitializationActions",
        type: "bytes[]",
      },
    ],
    name: "SummonBaalAndSafe",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "baalCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "baalList",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baalSingleton",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baalType",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "baals",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "masterCopy",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "initializer",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "saltNonce",
        type: "uint256",
      },
    ],
    name: "deployModule",
    outputs: [
      {
        internalType: "address",
        name: "proxy",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gnosisFallbackLibrary",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gnosisMultisendLibrary",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gnosisSingleton",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b50604051620012843803806200128483398101604081905262000034916200008a565b60609390931b6001600160601b031916608052600080546001600160a01b03199081166001600160a01b03948516179091556001805482169284169290921790915560028054909116919092161790556200010b565b60008060008060808587031215620000a157600080fd5b8451620000ae81620000f2565b6020860151909450620000c181620000f2565b6040860151909350620000d481620000f2565b6060860151909250620000e781620000f2565b939692955090935050565b6001600160a01b03811681146200010857600080fd5b50565b60805160601c61114c6200013860003960008181610162015281816102a00152610548015261114c6000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c8063881e4ea411610071578063881e4ea41461014a578063a2215f1f1461015d578063b35d627d14610184578063ecb5b9111461019b578063f0fa28b9146101ae578063f1ab873c146101c157600080fd5b8063095e50a7146100ae57806321d56a43146100de5780632e1cdfde146100f157806343870155146101115780636be21c5814610124575b600080fd5b6100c16100bc366004610d8d565b6101d4565b6040516001600160a01b0390911681526020015b60405180910390f35b6000546100c1906001600160a01b031681565b6101046100ff366004610b5c565b6101fe565b6040516100d59190610f44565b6100c161011f366004610c51565b610298565b6101046040518060400160405280600781526020016604261616c2056360cc1b81525081565b6002546100c1906001600160a01b031681565b6100c17f000000000000000000000000000000000000000000000000000000000000000081565b61018d60045481565b6040519081526020016100d5565b6100c16101a9366004610bd5565b610501565b6001546100c1906001600160a01b031681565b6100c16101cf366004610b7e565b610670565b600381815481106101e457600080fd5b6000918252602090912001546001600160a01b0316905081565b6005602052600090815260409020805461021790611086565b80601f016020809104026020016040519081016040528092919081815260200182805461024390611086565b80156102905780601f1061026557610100808354040283529160200191610290565b820191906000526020600020905b81548152906001019060200180831161027357829003601f168201915b505050505081565b6000806102ed7f0000000000000000000000000000000000000000000000000000000000000000876040516020016102d291815260200190565b604051602081830303815290604052805190602001206107a1565b600080546040516bffffffffffffffffffffffff19606085901b166020820152603481018a9052929350909161032f916001600160a01b0316906054016102d2565b9050600061034087878486896108e0565b6040805160018082528183019092529192506000919060208083019080368337019050509050838160008151811061037a5761037a6110ea565b6001600160a01b0392831660209182029290920101526002546001805460405163b63e800d60e01b81528785169463b63e800d946103ce9488949093918316928a9291169060009081908190600401610e88565b600060405180830381600087803b1580156103e857600080fd5b505af11580156103fc573d6000803e3d6000fd5b505050506001600160a01b03841660009081526005602090815260409091208b51610429928d0190610a37565b506003805460018101825560009182527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0180546001600160a01b0319166001600160a01b0387161790556004805491610482836110c1565b9190505550826001600160a01b0316846001600160a01b03167fb0416caef5af21bbbcd0183d99f7f07d3920caef2e6aa29d1e5992a601c83da58c6040518060400160405280600781526020016604261616c2056360cc1b8152506040516104eb929190610f57565b60405180910390a3509198975050505050505050565b600080836040516024016105159190610f44565b60408051601f198184030181529190526020810180516001600160e01b031663a4f9edbf60e01b1790529050600061056e7f00000000000000000000000000000000000000000000000000000000000000008386610670565b6001600160a01b0381166000908152600560209081526040909120885192935061059c929091890190610a37565b506003805460018101825560009182527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0180546001600160a01b0319166001600160a01b03841617905560048054916105f5836110c1565b9190505550866001600160a01b0316816001600160a01b03167fb0416caef5af21bbbcd0183d99f7f07d3920caef2e6aa29d1e5992a601c83da5886040518060400160405280600781526020016604261616c2056360cc1b81525060405161065e929190610f57565b60405180910390a39695505050505050565b6000610699848480519060200120846040516020016102d2929190918252602082015260400190565b90506000816001600160a01b0316846040516106b59190610dd2565b6000604051808303816000865af19150503d80600081146106f2576040519150601f19603f3d011682016040523d82523d6000602084013e6106f7565b606091505b50509050806107595760405162461bcd60e51b815260206004820152602360248201527f6465706c6f794d6f64756c653a20696e697469616c697a6174696f6e206661696044820152621b195960ea1b60648201526084015b60405180910390fd5b846001600160a01b0316826001600160a01b03167f2150ada912bf189ed721c44211199e270903fc88008c2a1e1e889ef30fe67c5f60405160405180910390a3509392505050565b60006001600160a01b0383166108055760405162461bcd60e51b8152602060048201526024808201527f63726561746550726f78793a20616464726573732063616e206e6f74206265206044820152637a65726f60e01b6064820152608401610750565b60405172602d8060093d393df3363d3d373d3d3d363d7360681b60208201526bffffffffffffffffffffffff19606085901b1660338201526e5af43d82803e903d91602b57fd5bf360881b60478201526000906056016040516020818303038152906040529050828151602083016000f591506001600160a01b0382166108d95760405162461bcd60e51b815260206004820152602260248201527f63726561746550726f78793a206164647265737320616c72656164792074616b60448201526132b760f11b6064820152608401610750565b5092915050565b60025460405160609160009161090c918991899189916001600160a01b03909116908890602001610f85565b60405160208183030381529060405290506000816040516024016109309190610f44565b60408051601f198184030181529181526020820180516001600160e01b031663a4f9edbf60e01b179052516001600160a01b038716602482015290915060009060440160405160208183030381529060405263610b592560e01b6001600160e01b0319166020820180516001600160e01b038381831617835250505050905060008088600084518560008c60008a518b6040516020016109d99a99989796959493929190610dee565b60405160208183030381529060405290506000816040516024016109fd9190610f44565b60408051601f198184030181529190526020810180516001600160e01b03166346c07f8560e11b1790529550505050505095945050505050565b828054610a4390611086565b90600052602060002090601f016020900481019282610a655760008555610aab565b82601f10610a7e57805160ff1916838001178555610aab565b82800160010185558215610aab579182015b82811115610aab578251825591602001919060010190610a90565b50610ab7929150610abb565b5090565b5b80821115610ab75760008155600101610abc565b80356001600160a01b0381168114610ae757600080fd5b919050565b600082601f830112610afd57600080fd5b813567ffffffffffffffff811115610b1757610b17611100565b610b2a601f8201601f1916602001611025565b818152846020838601011115610b3f57600080fd5b816020850160208301376000918101602001919091529392505050565b600060208284031215610b6e57600080fd5b610b7782610ad0565b9392505050565b600080600060608486031215610b9357600080fd5b610b9c84610ad0565b9250602084013567ffffffffffffffff811115610bb857600080fd5b610bc486828701610aec565b925050604084013590509250925092565b60008060008060808587031215610beb57600080fd5b610bf485610ad0565b9350602085013567ffffffffffffffff80821115610c1157600080fd5b610c1d88838901610aec565b94506040870135915080821115610c3357600080fd5b50610c4087828801610aec565b949793965093946060013593505050565b600080600080600060a08688031215610c6957600080fd5b853567ffffffffffffffff80821115610c8157600080fd5b610c8d89838a01610aec565b965060209150818801359550604088013581811115610cab57600080fd5b610cb78a828b01610aec565b955050606088013581811115610ccc57600080fd5b610cd88a828b01610aec565b945050608088013581811115610ced57600080fd5b8801601f81018a13610cfe57600080fd5b803582811115610d1057610d10611100565b8060051b610d1f858201611025565b8281528581019084870183860188018f1015610d3a57600080fd5b600093505b84841015610d78578681351115610d5557600080fd5b610d648f898335890101610aec565b835260019390930192918701918701610d3f565b50809750505050505050509295509295909350565b600060208284031215610d9f57600080fd5b5035919050565b60008151808452610dbe816020860160208601611056565b601f01601f19169290920160200192915050565b60008251610de4818460208701611056565b9190910192915050565b600060ff60f81b808d60f81b1683526bffffffffffffffffffffffff19808d60601b1660018501528b60158501528a60358501528951610e35816055870160208e01611056565b8085019050828a60f81b166055820152818960601b16605682015287606a82015286608a82015285519250610e718360aa830160208901611056565b90910160aa019d9c50505050505050505050505050565b6101008082528951908201819052600090610120830190602090818d01845b82811015610ecc5781516001600160a01b031685529383019390830190600101610ea7565b50505083018a90526001600160a01b03891660408401528281036060840152610ef58189610da6565b915050610f0d60808301876001600160a01b03169052565b6001600160a01b03851660a08301528360c0830152610f3760e08301846001600160a01b03169052565b9998505050505050505050565b602081526000610b776020830184610da6565b604081526000610f6a6040830185610da6565b8281036020840152610f7c8185610da6565b95945050505050565b60a081526000610f9860a0830188610da6565b602083820381850152610fab8289610da6565b6001600160a01b038881166040870152871660608601528481036080860152855180825290925081830190600581901b8401830183880160005b8381101561101357601f19878403018552611001838351610da6565b94860194925090850190600101610fe5565b50909c9b505050505050505050505050565b604051601f8201601f1916810167ffffffffffffffff8111828210171561104e5761104e611100565b604052919050565b60005b83811015611071578181015183820152602001611059565b83811115611080576000848401525b50505050565b600181811c9082168061109a57607f821691505b602082108114156110bb57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156110e357634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212207f3461568c28175be046589cab19ce8d2c854b63788b78df69efabe8593097a464736f6c63430008070033";