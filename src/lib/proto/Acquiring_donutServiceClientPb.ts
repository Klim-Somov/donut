/**
 * @fileoverview gRPC-Web generated client stub for DonutAcquiring
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.21.7
// source: acquiring_donut.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as acquiring_donut_pb from './acquiring_donut_pb';


export class AcquiringClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorGetInfo = new grpcWeb.MethodDescriptor(
    '/DonutAcquiring.Acquiring/GetInfo',
    grpcWeb.MethodType.UNARY,
    acquiring_donut_pb.GetInfoRequest,
    acquiring_donut_pb.GetInfoResponse,
    (request: acquiring_donut_pb.GetInfoRequest) => {
      return request.serializeBinary();
    },
    acquiring_donut_pb.GetInfoResponse.deserializeBinary
  );

  getInfo(
    request: acquiring_donut_pb.GetInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<acquiring_donut_pb.GetInfoResponse>;

  getInfo(
    request: acquiring_donut_pb.GetInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: acquiring_donut_pb.GetInfoResponse) => void): grpcWeb.ClientReadableStream<acquiring_donut_pb.GetInfoResponse>;

  getInfo(
    request: acquiring_donut_pb.GetInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: acquiring_donut_pb.GetInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/DonutAcquiring.Acquiring/GetInfo',
        request,
        metadata || {},
        this.methodDescriptorGetInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/DonutAcquiring.Acquiring/GetInfo',
    request,
    metadata || {},
    this.methodDescriptorGetInfo);
  }

  methodDescriptorCreatePayment = new grpcWeb.MethodDescriptor(
    '/DonutAcquiring.Acquiring/CreatePayment',
    grpcWeb.MethodType.UNARY,
    acquiring_donut_pb.CreatePaymentRequest,
    acquiring_donut_pb.CreatePaymentResponse,
    (request: acquiring_donut_pb.CreatePaymentRequest) => {
      return request.serializeBinary();
    },
    acquiring_donut_pb.CreatePaymentResponse.deserializeBinary
  );

  createPayment(
    request: acquiring_donut_pb.CreatePaymentRequest,
    metadata: grpcWeb.Metadata | null): Promise<acquiring_donut_pb.CreatePaymentResponse>;

  createPayment(
    request: acquiring_donut_pb.CreatePaymentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: acquiring_donut_pb.CreatePaymentResponse) => void): grpcWeb.ClientReadableStream<acquiring_donut_pb.CreatePaymentResponse>;

  createPayment(
    request: acquiring_donut_pb.CreatePaymentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: acquiring_donut_pb.CreatePaymentResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/DonutAcquiring.Acquiring/CreatePayment',
        request,
        metadata || {},
        this.methodDescriptorCreatePayment,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/DonutAcquiring.Acquiring/CreatePayment',
    request,
    metadata || {},
    this.methodDescriptorCreatePayment);
  }

}

