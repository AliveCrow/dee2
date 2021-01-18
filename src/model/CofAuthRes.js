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
    root.XgeneCloud.CofAuthRes = factory(root.XgeneCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CofAuthRes model module.
   * @module model/CofAuthRes
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CofAuthRes</code>.
   * @alias module:model/CofAuthRes
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CofAuthRes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CofAuthRes} obj Optional instance to populate.
   * @return {module:model/CofAuthRes} The populated <code>CofAuthRes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ID'))
        obj.ID = ApiClient.convertToType(data['ID'], 'String');
      if (data.hasOwnProperty('TYPE'))
        obj.TYPE = ApiClient.convertToType(data['TYPE'], 'String');
      if (data.hasOwnProperty('AUTH_TYPE'))
        obj.AUTH_TYPE = ApiClient.convertToType(data['AUTH_TYPE'], 'String');
      if (data.hasOwnProperty('AUTH_ID'))
        obj.AUTH_ID = ApiClient.convertToType(data['AUTH_ID'], 'String');
      if (data.hasOwnProperty('RES_TYPE'))
        obj.RES_TYPE = ApiClient.convertToType(data['RES_TYPE'], 'String');
      if (data.hasOwnProperty('RES_ID'))
        obj.RES_ID = ApiClient.convertToType(data['RES_ID'], 'String');
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
   * @member {String} TYPE
   */
  exports.prototype.TYPE = undefined;

  /**
   * @member {String} AUTH_TYPE
   */
  exports.prototype.AUTH_TYPE = undefined;

  /**
   * @member {String} AUTH_ID
   */
  exports.prototype.AUTH_ID = undefined;

  /**
   * @member {String} RES_TYPE
   */
  exports.prototype.RES_TYPE = undefined;

  /**
   * @member {String} RES_ID
   */
  exports.prototype.RES_ID = undefined;

  /**
   * @member {Number} IS_FIXED
   */
  exports.prototype.IS_FIXED = undefined;


  return exports;

}));