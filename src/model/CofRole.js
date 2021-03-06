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
    root.XgeneCloud.CofRole = factory(root.XgeneCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CofRole model module.
   * @module model/CofRole
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CofRole</code>.
   * @alias module:model/CofRole
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CofRole</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CofRole} obj Optional instance to populate.
   * @return {module:model/CofRole} The populated <code>CofRole</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ID'))
        obj.ID = ApiClient.convertToType(data['ID'], 'String');
      if (data.hasOwnProperty('NAME'))
        obj.NAME = ApiClient.convertToType(data['NAME'], 'String');
      if (data.hasOwnProperty('CODE'))
        obj.CODE = ApiClient.convertToType(data['CODE'], 'String');
      if (data.hasOwnProperty('DESCRIPTION'))
        obj.DESCRIPTION = ApiClient.convertToType(data['DESCRIPTION'], 'String');
      if (data.hasOwnProperty('TENANT_ID'))
        obj.TENANT_ID = ApiClient.convertToType(data['TENANT_ID'], 'String');
      if (data.hasOwnProperty('CREATE_TIME'))
        obj.CREATE_TIME = ApiClient.convertToType(data['CREATE_TIME'], 'String');
      if (data.hasOwnProperty('UPDATE_TIME'))
        obj.UPDATE_TIME = ApiClient.convertToType(data['UPDATE_TIME'], 'String');
      if (data.hasOwnProperty('ROLE_TPL_ID'))
        obj.ROLE_TPL_ID = ApiClient.convertToType(data['ROLE_TPL_ID'], 'String');
      if (data.hasOwnProperty('AUTH_TPL_ID'))
        obj.AUTH_TPL_ID = ApiClient.convertToType(data['AUTH_TPL_ID'], 'String');
      if (data.hasOwnProperty('OWNER_TYPE'))
        obj.OWNER_TYPE = ApiClient.convertToType(data['OWNER_TYPE'], 'String');
      if (data.hasOwnProperty('OWNER_ID'))
        obj.OWNER_ID = ApiClient.convertToType(data['OWNER_ID'], 'String');
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
   * @member {String} NAME
   */
  exports.prototype.NAME = undefined;

  /**
   * @member {String} CODE
   */
  exports.prototype.CODE = undefined;

  /**
   * @member {String} DESCRIPTION
   */
  exports.prototype.DESCRIPTION = undefined;

  /**
   * @member {String} TENANT_ID
   */
  exports.prototype.TENANT_ID = undefined;

  /**
   * @member {String} CREATE_TIME
   */
  exports.prototype.CREATE_TIME = undefined;

  /**
   * @member {String} UPDATE_TIME
   */
  exports.prototype.UPDATE_TIME = undefined;

  /**
   * @member {String} ROLE_TPL_ID
   */
  exports.prototype.ROLE_TPL_ID = undefined;

  /**
   * @member {String} AUTH_TPL_ID
   */
  exports.prototype.AUTH_TPL_ID = undefined;

  /**
   * @member {String} OWNER_TYPE
   */
  exports.prototype.OWNER_TYPE = undefined;

  /**
   * @member {String} OWNER_ID
   */
  exports.prototype.OWNER_ID = undefined;

  /**
   * @member {Number} IS_FIXED
   */
  exports.prototype.IS_FIXED = undefined;


  return exports;

}));
