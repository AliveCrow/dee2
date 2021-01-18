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
    define(['ApiClient', 'model/UserAuth'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserAuth'));
  } else {
    // Browser globals (root is window)
    if (!root.XgeneCloud) {
      root.XgeneCloud = {};
    }
    root.XgeneCloud.User = factory(root.XgeneCloud.ApiClient, root.XgeneCloud.UserAuth);
  }
}(this, function(ApiClient, UserAuth) {
  'use strict';

  /**
   * The User model module.
   * @module model/User
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @class
   * @extends module:model/UserAuth
   */
  var exports = function() {
    UserAuth.call(this);
  };

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      UserAuth.constructFromObject(data, obj);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('firstname'))
        obj.firstname = ApiClient.convertToType(data['firstname'], 'String');
      if (data.hasOwnProperty('lastname'))
        obj.lastname = ApiClient.convertToType(data['lastname'], 'String');
      if (data.hasOwnProperty('roles'))
        obj.roles = ApiClient.convertToType(data['roles'], Object);
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'String');
      if (data.hasOwnProperty('updated_at'))
        obj.updatedAt = ApiClient.convertToType(data['updated_at'], 'String');
      if (data.hasOwnProperty('email_verified'))
        obj.emailVerified = ApiClient.convertToType(data['email_verified'], 'Boolean');
    }
    return obj;
  }

  exports.prototype = Object.create(UserAuth.prototype);
  exports.prototype.constructor = exports;
  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} firstname
   */
  exports.prototype.firstname = undefined;

  /**
   * @member {String} lastname
   */
  exports.prototype.lastname = undefined;

  /**
   * @member {Object} roles
   */
  exports.prototype.roles = undefined;

  /**
   * @member {String} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * @member {String} updatedAt
   */
  exports.prototype.updatedAt = undefined;

  /**
   * @member {Boolean} emailVerified
   */
  exports.prototype.emailVerified = undefined;


  return exports;

}));
