/*
 * XgeneCloud
 * Create APIs at the speed of your thoughts
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.XgeneCloud) {
      root.XgeneCloud = {};
    }
    root.XgeneCloud.CofPartyAuth = factory(root.XgeneCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CofPartyAuth model module.
   * @module model/CofPartyAuth
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CofPartyAuth</code>.
   * @alias module:model/CofPartyAuth
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CofPartyAuth</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CofPartyAuth} obj Optional instance to populate.
   * @return {module:model/CofPartyAuth} The populated <code>CofPartyAuth</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ID'))
        obj.ID = ApiClient.convertToType(data['ID'], 'String');
      if (data.hasOwnProperty('PARTY_TYPE'))
        obj.PARTY_TYPE = ApiClient.convertToType(data['PARTY_TYPE'], 'String');
      if (data.hasOwnProperty('PARTY_ID'))
        obj.PARTY_ID = ApiClient.convertToType(data['PARTY_ID'], 'String');
      if (data.hasOwnProperty('AUTH_TYPE'))
        obj.AUTH_TYPE = ApiClient.convertToType(data['AUTH_TYPE'], 'String');
      if (data.hasOwnProperty('AUTH_ID'))
        obj.AUTH_ID = ApiClient.convertToType(data['AUTH_ID'], 'String');
      if (data.hasOwnProperty('AUTH_OWNER_TYPE'))
        obj.AUTH_OWNER_TYPE = ApiClient.convertToType(data['AUTH_OWNER_TYPE'], 'String');
      if (data.hasOwnProperty('AUTH_OWNER_ID'))
        obj.AUTH_OWNER_ID = ApiClient.convertToType(data['AUTH_OWNER_ID'], 'String');
      if (data.hasOwnProperty('IS_FIXED'))
        obj.IS_FIXED = ApiClient.convertToType(data['IS_FIXED'], 'Number');
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype.ID = undefined;

  /**
   * @member {String} PARTY_TYPE
   */
  exports.prototype.PARTY_TYPE = undefined;

  /**
   * @member {String} PARTY_ID
   */
  exports.prototype.PARTY_ID = undefined;

  /**
   * @member {String} AUTH_TYPE
   */
  exports.prototype.AUTH_TYPE = undefined;

  /**
   * @member {String} AUTH_ID
   */
  exports.prototype.AUTH_ID = undefined;

  /**
   * @member {String} AUTH_OWNER_TYPE
   */
  exports.prototype.AUTH_OWNER_TYPE = undefined;

  /**
   * @member {String} AUTH_OWNER_ID
   */
  exports.prototype.AUTH_OWNER_ID = undefined;

  /**
   * @member {Number} IS_FIXED
   */
  exports.prototype.IS_FIXED = undefined;


  return exports;

}));
