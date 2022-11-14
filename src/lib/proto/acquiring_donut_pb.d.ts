import * as jspb from 'google-protobuf'



export class GetInfoRequest extends jspb.Message {
  getGroupServiceId(): number;
  setGroupServiceId(value: number): GetInfoRequest;

  getWorkerId(): number;
  setWorkerId(value: number): GetInfoRequest;

  getHash(): string;
  setHash(value: string): GetInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInfoRequest): GetInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInfoRequest;
  static deserializeBinaryFromReader(message: GetInfoRequest, reader: jspb.BinaryReader): GetInfoRequest;
}

export namespace GetInfoRequest {
  export type AsObject = {
    groupServiceId: number,
    workerId: number,
    hash: string,
  }
}

export class GetInfoResponse extends jspb.Message {
  getWorkerName(): string;
  setWorkerName(value: string): GetInfoResponse;

  getServiceName(): string;
  setServiceName(value: string): GetInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetInfoResponse): GetInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInfoResponse;
  static deserializeBinaryFromReader(message: GetInfoResponse, reader: jspb.BinaryReader): GetInfoResponse;
}

export namespace GetInfoResponse {
  export type AsObject = {
    workerName: string,
    serviceName: string,
  }
}

export class CreatePaymentRequest extends jspb.Message {
  getGroupServiceId(): number;
  setGroupServiceId(value: number): CreatePaymentRequest;

  getWorkerId(): number;
  setWorkerId(value: number): CreatePaymentRequest;

  getAmount(): number;
  setAmount(value: number): CreatePaymentRequest;

  getHash(): string;
  setHash(value: string): CreatePaymentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePaymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePaymentRequest): CreatePaymentRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePaymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePaymentRequest;
  static deserializeBinaryFromReader(message: CreatePaymentRequest, reader: jspb.BinaryReader): CreatePaymentRequest;
}

export namespace CreatePaymentRequest {
  export type AsObject = {
    groupServiceId: number,
    workerId: number,
    amount: number,
    hash: string,
  }
}

export class CreatePaymentResponse extends jspb.Message {
  getFormUrl(): string;
  setFormUrl(value: string): CreatePaymentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePaymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePaymentResponse): CreatePaymentResponse.AsObject;
  static serializeBinaryToWriter(message: CreatePaymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePaymentResponse;
  static deserializeBinaryFromReader(message: CreatePaymentResponse, reader: jspb.BinaryReader): CreatePaymentResponse;
}

export namespace CreatePaymentResponse {
  export type AsObject = {
    formUrl: string,
  }
}

