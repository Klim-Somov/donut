// source: acquiring_donut.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.DonutAcquiring.CreatePaymentRequest', null, global);
goog.exportSymbol('proto.DonutAcquiring.CreatePaymentResponse', null, global);
goog.exportSymbol('proto.DonutAcquiring.GetInfoRequest', null, global);
goog.exportSymbol('proto.DonutAcquiring.GetInfoResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DonutAcquiring.GetInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DonutAcquiring.GetInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DonutAcquiring.GetInfoRequest.displayName = 'proto.DonutAcquiring.GetInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DonutAcquiring.GetInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DonutAcquiring.GetInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DonutAcquiring.GetInfoResponse.displayName = 'proto.DonutAcquiring.GetInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DonutAcquiring.CreatePaymentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DonutAcquiring.CreatePaymentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DonutAcquiring.CreatePaymentRequest.displayName = 'proto.DonutAcquiring.CreatePaymentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DonutAcquiring.CreatePaymentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DonutAcquiring.CreatePaymentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DonutAcquiring.CreatePaymentResponse.displayName = 'proto.DonutAcquiring.CreatePaymentResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DonutAcquiring.GetInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DonutAcquiring.GetInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DonutAcquiring.GetInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DonutAcquiring.GetInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupServiceId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    workerId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    hash: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DonutAcquiring.GetInfoRequest}
 */
proto.DonutAcquiring.GetInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DonutAcquiring.GetInfoRequest;
  return proto.DonutAcquiring.GetInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DonutAcquiring.GetInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DonutAcquiring.GetInfoRequest}
 */
proto.DonutAcquiring.GetInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGroupServiceId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWorkerId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DonutAcquiring.GetInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DonutAcquiring.GetInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DonutAcquiring.GetInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DonutAcquiring.GetInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupServiceId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getWorkerId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 group_service_id = 1;
 * @return {number}
 */
proto.DonutAcquiring.GetInfoRequest.prototype.getGroupServiceId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.DonutAcquiring.GetInfoRequest} returns this
 */
proto.DonutAcquiring.GetInfoRequest.prototype.setGroupServiceId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 worker_id = 2;
 * @return {number}
 */
proto.DonutAcquiring.GetInfoRequest.prototype.getWorkerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.DonutAcquiring.GetInfoRequest} returns this
 */
proto.DonutAcquiring.GetInfoRequest.prototype.setWorkerId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string hash = 3;
 * @return {string}
 */
proto.DonutAcquiring.GetInfoRequest.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.DonutAcquiring.GetInfoRequest} returns this
 */
proto.DonutAcquiring.GetInfoRequest.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DonutAcquiring.GetInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.DonutAcquiring.GetInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DonutAcquiring.GetInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DonutAcquiring.GetInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    workerName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    serviceName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DonutAcquiring.GetInfoResponse}
 */
proto.DonutAcquiring.GetInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DonutAcquiring.GetInfoResponse;
  return proto.DonutAcquiring.GetInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DonutAcquiring.GetInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DonutAcquiring.GetInfoResponse}
 */
proto.DonutAcquiring.GetInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkerName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DonutAcquiring.GetInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DonutAcquiring.GetInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DonutAcquiring.GetInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DonutAcquiring.GetInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorkerName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string worker_name = 1;
 * @return {string}
 */
proto.DonutAcquiring.GetInfoResponse.prototype.getWorkerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.DonutAcquiring.GetInfoResponse} returns this
 */
proto.DonutAcquiring.GetInfoResponse.prototype.setWorkerName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string service_name = 2;
 * @return {string}
 */
proto.DonutAcquiring.GetInfoResponse.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.DonutAcquiring.GetInfoResponse} returns this
 */
proto.DonutAcquiring.GetInfoResponse.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DonutAcquiring.CreatePaymentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DonutAcquiring.CreatePaymentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DonutAcquiring.CreatePaymentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DonutAcquiring.CreatePaymentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupServiceId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    workerId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    amount: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    hash: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DonutAcquiring.CreatePaymentRequest}
 */
proto.DonutAcquiring.CreatePaymentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DonutAcquiring.CreatePaymentRequest;
  return proto.DonutAcquiring.CreatePaymentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DonutAcquiring.CreatePaymentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DonutAcquiring.CreatePaymentRequest}
 */
proto.DonutAcquiring.CreatePaymentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGroupServiceId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWorkerId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAmount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DonutAcquiring.CreatePaymentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DonutAcquiring.CreatePaymentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DonutAcquiring.CreatePaymentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DonutAcquiring.CreatePaymentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupServiceId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getWorkerId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int32 group_service_id = 1;
 * @return {number}
 */
proto.DonutAcquiring.CreatePaymentRequest.prototype.getGroupServiceId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.DonutAcquiring.CreatePaymentRequest} returns this
 */
proto.DonutAcquiring.CreatePaymentRequest.prototype.setGroupServiceId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 worker_id = 2;
 * @return {number}
 */
proto.DonutAcquiring.CreatePaymentRequest.prototype.getWorkerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.DonutAcquiring.CreatePaymentRequest} returns this
 */
proto.DonutAcquiring.CreatePaymentRequest.prototype.setWorkerId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional double amount = 3;
 * @return {number}
 */
proto.DonutAcquiring.CreatePaymentRequest.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.DonutAcquiring.CreatePaymentRequest} returns this
 */
proto.DonutAcquiring.CreatePaymentRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional string hash = 4;
 * @return {string}
 */
proto.DonutAcquiring.CreatePaymentRequest.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.DonutAcquiring.CreatePaymentRequest} returns this
 */
proto.DonutAcquiring.CreatePaymentRequest.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DonutAcquiring.CreatePaymentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.DonutAcquiring.CreatePaymentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DonutAcquiring.CreatePaymentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DonutAcquiring.CreatePaymentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    formUrl: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DonutAcquiring.CreatePaymentResponse}
 */
proto.DonutAcquiring.CreatePaymentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DonutAcquiring.CreatePaymentResponse;
  return proto.DonutAcquiring.CreatePaymentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DonutAcquiring.CreatePaymentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DonutAcquiring.CreatePaymentResponse}
 */
proto.DonutAcquiring.CreatePaymentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DonutAcquiring.CreatePaymentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DonutAcquiring.CreatePaymentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DonutAcquiring.CreatePaymentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DonutAcquiring.CreatePaymentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFormUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string form_url = 1;
 * @return {string}
 */
proto.DonutAcquiring.CreatePaymentResponse.prototype.getFormUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.DonutAcquiring.CreatePaymentResponse} returns this
 */
proto.DonutAcquiring.CreatePaymentResponse.prototype.setFormUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.DonutAcquiring);
