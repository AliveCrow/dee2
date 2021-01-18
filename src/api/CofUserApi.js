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
    define(['ApiClient', 'model/CofUser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CofUser'));
  } else {
    // Browser globals (root is window)
    if (!root.XgeneCloud) {
      root.XgeneCloud = {};
    }
    root.XgeneCloud.CofUserApi = factory(root.XgeneCloud.ApiClient, root.XgeneCloud.CofUser);
  }
}(this, function(ApiClient, CofUser) {
  'use strict';

  /**
   * CofUser service.
   * @module api/CofUserApi
   * @version 1.0.0
   */

  /**
   * Constructs a new CofUserApi. 
   * @alias module:api/CofUserApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addcofUser operation.
     * @callback module:api/CofUserApi~addcofUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new cof_user
     * 
     * @param {module:model/CofUser} body cof_user object that needs to add
     * @param {module:api/CofUserApi~addcofUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addcofUser = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addcofUser");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/cof_user', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the bulkcofUserInsert operation.
     * @callback module:api/CofUserApi~bulkcofUserInsertCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Bulk cof_user insert
     * 
     * @param {Array.<module:model/CofUser>} body cof_user objects
     * @param {module:api/CofUserApi~bulkcofUserInsertCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.bulkcofUserInsert = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling bulkcofUserInsert");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/cof_user/bulk', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the checkcofUserExists operation.
     * @callback module:api/CofUserApi~checkcofUserExistsCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check cof_user with provided ID exists
     * Returns a single cof_user
     * @param {Number} cofUserId ID of cof_user
     * @param {module:api/CofUserApi~checkcofUserExistsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.checkcofUserExists = function(cofUserId, callback) {
      var postBody = null;

      // verify the required parameter 'cofUserId' is set
      if (cofUserId === undefined || cofUserId === null) {
        throw new Error("Missing the required parameter 'cofUserId' when calling checkcofUserExists");
      }


      var pathParams = {
        'cof_userId': cofUserId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = 'Boolean';

      return this.apiClient.callApi(
        '/api/v1/cof_user/{cof_userId}/exists', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cofUserAggregate operation.
     * @callback module:api/CofUserApi~cofUserAggregateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CofUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get first one from filtered data
     * 
     * @param {Object} columnName Column name
     * @param {Object} fields Column name
     * @param {Object} func Comma seperated aggregate functions
     * @param {Object} opts Optional parameters
     * @param {Object} opts.having Having expression
     * @param {Object} opts.fields2 Comma seperated fields from the model
     * @param {Number} opts.limit Page size limit
     * @param {Number} opts.offset Pagination offset
     * @param {String} opts.sort Comma seperated sort fields
     * @param {module:api/CofUserApi~cofUserAggregateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CofUser}
     */
    this.cofUserAggregate = function(columnName, fields, func, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'columnName' is set
      if (columnName === undefined || columnName === null) {
        throw new Error("Missing the required parameter 'columnName' when calling cofUserAggregate");
      }

      // verify the required parameter 'fields' is set
      if (fields === undefined || fields === null) {
        throw new Error("Missing the required parameter 'fields' when calling cofUserAggregate");
      }

      // verify the required parameter 'func' is set
      if (func === undefined || func === null) {
        throw new Error("Missing the required parameter 'func' when calling cofUserAggregate");
      }


      var pathParams = {
        'columnName': columnName,
        'fields': fields,
        'func': func
      };
      var queryParams = {
        'having': opts['having'],
        'fields': opts['fields2'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sort': opts['sort'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CofUser;

      return this.apiClient.callApi(
        '/api/v1/cof_user/aggregate/{columnName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cofUserDistinct operation.
     * @callback module:api/CofUserApi~cofUserDistinctCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get first one from filtered data
     * 
     * @param {Object} columnName Column name
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where Where expression
     * @param {Number} opts.limit Page size limit
     * @param {Number} opts.offset Pagination offset
     * @param {String} opts.sort Comma seperated sort fieldst
     * @param {module:api/CofUserApi~cofUserDistinctCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */
    this.cofUserDistinct = function(columnName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'columnName' is set
      if (columnName === undefined || columnName === null) {
        throw new Error("Missing the required parameter 'columnName' when calling cofUserDistinct");
      }


      var pathParams = {
        'columnName': columnName
      };
      var queryParams = {
        'where': opts['where'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sort': opts['sort'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Object];

      return this.apiClient.callApi(
        '/api/v1/cof_user/distinct/{columnName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cofUserDistribution operation.
     * @callback module:api/CofUserApi~cofUserDistributionCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * 
     * @param {Object} columnName Column name
     * @param {Object} opts Optional parameters
     * @param {Number} opts.min min value
     * @param {Number} opts.max max value
     * @param {Number} opts.step step value
     * @param {Number} opts.steps steps value
     * @param {String} opts.func comma separated aggregation functions
     * @param {module:api/CofUserApi~cofUserDistributionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */
    this.cofUserDistribution = function(columnName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'columnName' is set
      if (columnName === undefined || columnName === null) {
        throw new Error("Missing the required parameter 'columnName' when calling cofUserDistribution");
      }


      var pathParams = {
        'columnName': columnName
      };
      var queryParams = {
        'min': opts['min'],
        'max': opts['max'],
        'step': opts['step'],
        'steps': opts['steps'],
        'func': opts['func'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Object];

      return this.apiClient.callApi(
        '/api/v1/cof_user/distribution/{columnName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cofUserGroupByColumn operation.
     * @callback module:api/CofUserApi~cofUserGroupByColumnCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CofUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Group by column
     * 
     * @param {Object} columnName Column name
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where Where expression
     * @param {Number} opts.limit Page size limit
     * @param {Number} opts.offset Pagination offset
     * @param {String} opts.sort Comma seperated sort fieldst
     * @param {module:api/CofUserApi~cofUserGroupByColumnCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CofUser}
     */
    this.cofUserGroupByColumn = function(columnName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'columnName' is set
      if (columnName === undefined || columnName === null) {
        throw new Error("Missing the required parameter 'columnName' when calling cofUserGroupByColumn");
      }


      var pathParams = {
        'columnName': columnName
      };
      var queryParams = {
        'where': opts['where'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sort': opts['sort'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CofUser;

      return this.apiClient.callApi(
        '/api/v1/cof_user/groupby/{columnName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletecofUser operation.
     * @callback module:api/CofUserApi~deletecofUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a cof_user
     * 
     * @param {Number} cofUserId ID of cof_user to return
     * @param {module:api/CofUserApi~deletecofUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletecofUser = function(cofUserId, callback) {
      var postBody = null;

      // verify the required parameter 'cofUserId' is set
      if (cofUserId === undefined || cofUserId === null) {
        throw new Error("Missing the required parameter 'cofUserId' when calling deletecofUser");
      }


      var pathParams = {
        'cof_userId': cofUserId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/cof_user/{cof_userId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletecofUser_0 operation.
     * @callback module:api/CofUserApi~deletecofUser_0Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a cof_user
     * 
     * @param {Array.<module:model/CofUser>} body cof_user objects contains id
     * @param {module:api/CofUserApi~deletecofUser_0Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletecofUser_0 = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling deletecofUser_0");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/cof_user/bulk', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findOnecofUser operation.
     * @callback module:api/CofUserApi~findOnecofUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CofUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get first one from filtered data
     * 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.fields Comma seperated fields from the model
     * @param {Object} opts.where Where expression
     * @param {Number} opts.limit Page size limit
     * @param {Number} opts.offset Pagination offset
     * @param {String} opts.sort Comma seperated sort fieldst
     * @param {module:api/CofUserApi~findOnecofUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CofUser}
     */
    this.findOnecofUser = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'fields': opts['fields'],
        'where': opts['where'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sort': opts['sort'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CofUser;

      return this.apiClient.callApi(
        '/api/v1/cof_user/findOne', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getcofUser operation.
     * @callback module:api/CofUserApi~getcofUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get list
     * 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.fields Comma seperated fields from the model
     * @param {Object} opts.where Where expression
     * @param {Number} opts.limit Page size limit
     * @param {Number} opts.offset Pagination offset
     * @param {String} opts.sort Comma seperated sort fields
     * @param {module:api/CofUserApi~getcofUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getcofUser = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'fields': opts['fields'],
        'where': opts['where'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sort': opts['sort'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/cof_user', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getcofUserById operation.
     * @callback module:api/CofUserApi~getcofUserByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CofUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find cof_user by ID
     * Returns a single cof_user
     * @param {Number} cofUserId ID of cof_user to return
     * @param {module:api/CofUserApi~getcofUserByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CofUser}
     */
    this.getcofUserById = function(cofUserId, callback) {
      var postBody = null;

      // verify the required parameter 'cofUserId' is set
      if (cofUserId === undefined || cofUserId === null) {
        throw new Error("Missing the required parameter 'cofUserId' when calling getcofUserById");
      }


      var pathParams = {
        'cof_userId': cofUserId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = CofUser;

      return this.apiClient.callApi(
        '/api/v1/cof_user/{cof_userId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getcofUserCount operation.
     * @callback module:api/CofUserApi~getcofUserCountCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cof_user count
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where Where expression
     * @param {module:api/CofUserApi~getcofUserCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getcofUserCount = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'where': opts['where'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/v1/cof_user/count', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatecofUser operation.
     * @callback module:api/CofUserApi~updatecofUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a cof_user
     * 
     * @param {Number} cofUserId ID of cof_user to return
     * @param {module:model/CofUser} body cof_user object that needs to be added to the store
     * @param {module:api/CofUserApi~updatecofUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updatecofUser = function(cofUserId, body, callback) {
      var postBody = body;

      // verify the required parameter 'cofUserId' is set
      if (cofUserId === undefined || cofUserId === null) {
        throw new Error("Missing the required parameter 'cofUserId' when calling updatecofUser");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updatecofUser");
      }


      var pathParams = {
        'cof_userId': cofUserId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/cof_user/{cof_userId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatecofUser_0 operation.
     * @callback module:api/CofUserApi~updatecofUser_0Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a cof_user
     * 
     * @param {Array.<module:model/CofUser>} body cof_user objects with id
     * @param {module:api/CofUserApi~updatecofUser_0Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updatecofUser_0 = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updatecofUser_0");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/cof_user/bulk', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
