/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IProxyCreationCallbackInterface extends ethers.utils.Interface {
  functions: {
    "proxyCreated(address,address,bytes,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "proxyCreated",
    values: [string, string, BytesLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "proxyCreated",
    data: BytesLike
  ): Result;

  events: {};
}

export class IProxyCreationCallback extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IProxyCreationCallbackInterface;

  functions: {
    proxyCreated(
      proxy: string,
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "proxyCreated(address,address,bytes,uint256)"(
      proxy: string,
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  proxyCreated(
    proxy: string,
    _singleton: string,
    initializer: BytesLike,
    saltNonce: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "proxyCreated(address,address,bytes,uint256)"(
    proxy: string,
    _singleton: string,
    initializer: BytesLike,
    saltNonce: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    proxyCreated(
      proxy: string,
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "proxyCreated(address,address,bytes,uint256)"(
      proxy: string,
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    proxyCreated(
      proxy: string,
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "proxyCreated(address,address,bytes,uint256)"(
      proxy: string,
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    proxyCreated(
      proxy: string,
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "proxyCreated(address,address,bytes,uint256)"(
      proxy: string,
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
