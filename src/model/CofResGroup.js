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
    root.XgeneCloud.CofResGroup = factory(root.XgeneCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CofResGroup model module.
   * @module model/CofResGroup
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CofResGroup</code>.
   * @alias module:model/CofResGroup
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CofResGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CofResGroup} obj Optional instance to populate.
   * @return {module:model/CofResGroup} The populated <code>CofResGroup</code> instance.
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
      if (data.hasOwnProperty('CREATE_TIME'))
        obj.CREATE_TIME = ApiClient.convertToType(data['CREATE_TIME'], 'String');
      if (data.hasOwnProperty('UPDATE_TIME'))
        obj.UPDATE_TIME = ApiClient.convertToType(data['UPDATE_TIME'], 'String');
      if (data.hasOwnProperty('TENANT_ID'))
        obj.TENANT_ID = ApiClient.convertToType(data['TENANT_ID'], 'String');
      if (data.hasOwnProperty('PARENT_ID'))
        obj.PARENT_ID = ApiClient.convertToType(data['PARENT_ID'], 'String');
      if (data.hasOwnProperty('TYPE'))
        obj.TYPE = ApiClient.convertToType(data['TYPE'], 'String');
      if (data.hasOwnProperty('RES_TYPE'))
        obj.RES_TYPE = ApiClient.convertToType(data['RES_TYPE'], 'String');
      if (data.hasOwnProperty('SORT_NO'))
        obj.SORT_NO = ApiClient.convertToType(data['SORT_NO'], 'Number');
      if (data.hasOwnProperty('IS_LEAF'))
        obj.IS_LEAF = ApiClient.convertToType(data['IS_LEAF'], 'Number');
      if (data.hasOwnProperty('TREE_LEVEL'))
        obj.TREE_LEVEL = ApiClient.convertToType(data['TREE_LEVEL'], 'Number');
      if (data.hasOwnProperty('SEQ'))
        obj.SEQ = ApiClient.convertToType(data['SEQ'], 'String');
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
   * @member {String} CREATE_TIME
   */
  exports.prototype.CREATE_TIME = undefined;

  /**
   * @member {String} UPDATE_TIME
   */
  exports.prototype.UPDATE_TIME = undefined;

  /**
   * @member {String} TENANT_ID
   */
  exports.prototype.TENANT_ID = undefined;

  /**
   * @member {String} PARENT_ID
   */
  exports.prototype.PARENT_ID = undefined;

  /**
   * @member {String} TYPE
   */
  exports.prototype.TYPE = undefined;

  /**
   * @member {String} RES_TYPE
   */
  exports.prototype.RES_TYPE = undefined;

  /**
   * @member {Number} SORT_NO
   */
  exports.prototype.SORT_NO = undefined;

  /**
   * @member {Number} IS_LEAF
   */
  exports.prototype.IS_LEAF = undefined;

  /**
   * @member {Number} TREE_LEVEL
   */
  exports.prototype.TREE_LEVEL = undefined;

  /**
   * @member {String} SEQ
   */
  exports.prototype.SEQ = undefined;

  /**
   * @member {Number} IS_FIXED
   */
  exports.prototype.IS_FIXED = undefined;


  return exports;

}));
