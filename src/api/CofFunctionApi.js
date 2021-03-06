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
    define(['ApiClient', 'model/CofFunction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CofFunction'));
  } else {
    // Browser globals (root is window)
    if (!root.XgeneCloud) {
      root.XgeneCloud = {};
    }
    root.XgeneCloud.CofFunctionApi = factory(root.XgeneCloud.ApiClient, root.XgeneCloud.CofFunction);
  }
}(this, function(ApiClient, CofFunction) {
  'use strict';

  /**
   * CofFunction service.
   * @module api/CofFunctionApi
   * @version 1.0.0
   */

  /**
   * Constructs a new CofFunctionApi. 
   * @alias module:api/CofFunctionApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addcofFunction operation.
     * @callback module:api/CofFunctionApi~addcofFunctionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new cof_function
     * 
     * @param {module:model/CofFunction} body cof_function object that needs to add
     * @param {module:api/CofFunctionApi~addcofFunctionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addcofFunction = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addcofFunction");
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
        '/api/v1/cof_function', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the bulkcofFunctionInsert operation.
     * @callback module:api/CofFunctionApi~bulkcofFunctionInsertCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Bulk cof_function insert
     * 
     * @param {Array.<module:model/CofFunction>} body cof_function objects
     * @param {module:api/CofFunctionApi~bulkcofFunctionInsertCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.bulkcofFunctionInsert = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling bulkcofFunctionInsert");
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
        '/api/v1/cof_function/bulk', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the checkcofFunctionExists operation.
     * @callback module:api/CofFunctionApi~checkcofFunctionExistsCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check cof_function with provided ID exists
     * Returns a single cof_function
     * @param {Number} cofFunctionId ID of cof_function
     * @param {module:api/CofFunctionApi~checkcofFunctionExistsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.checkcofFunctionExists = function(cofFunctionId, callback) {
      var postBody = null;

      // verify the required parameter 'cofFunctionId' is set
      if (cofFunctionId === undefined || cofFunctionId === null) {
        throw new Error("Missing the required parameter 'cofFunctionId' when calling checkcofFunctionExists");
      }


      var pathParams = {
        'cof_functionId': cofFunctionId
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
        '/api/v1/cof_function/{cof_functionId}/exists', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cofFunctionAggregate operation.
     * @callback module:api/CofFunctionApi~cofFunctionAggregateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CofFunction} data The data returned by the service call.
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
     * @param {module:api/CofFunctionApi~cofFunctionAggregateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CofFunction}
     */
    this.cofFunctionAggregate = function(columnName, fields, func, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'columnName' is set
      if (columnName === undefined || columnName === null) {
        throw new Error("Missing the required parameter 'columnName' when calling cofFunctionAggregate");
      }

      // verify the required parameter 'fields' is set
      if (fields === undefined || fields === null) {
        throw new Error("Missing the required parameter 'fields' when calling cofFunctionAggregate");
      }

      // verify the required parameter 'func' is set
      if (func === undefined || func === null) {
        throw new Error("Missing the required parameter 'func' when calling cofFunctionAggregate");
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
      var returnType = CofFunction;

      return this.apiClient.callApi(
        '/api/v1/cof_function/aggregate/{columnName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cofFunctionDistinct operation.
     * @callback module:api/CofFunctionApi~cofFunctionDistinctCallback
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
     * @param {module:api/CofFunctionApi~cofFunctionDistinctCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */
    this.cofFunctionDistinct = function(columnName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'columnName' is set
      if (columnName === undefined || columnName === null) {
        throw new Error("Missing the required parameter 'columnName' when calling cofFunctionDistinct");
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
        '/api/v1/cof_function/distinct/{columnName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cofFunctionDistribution operation.
     * @callback module:api/CofFunctionApi~cofFunctionDistributionCallback
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
     * @param {module:api/CofFunctionApi~cofFunctionDistributionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */
    this.cofFunctionDistribution = function(columnName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'columnName' is set
      if (columnName === undefined || columnName === null) {
        throw new Error("Missing the required parameter 'columnName' when calling cofFunctionDistribution");
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
        '/api/v1/cof_function/distribution/{columnName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cofFunctionGroupByColumn operation.
     * @callback module:api/CofFunctionApi~cofFunctionGroupByColumnCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CofFunction} data The data returned by the service call.
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
     * @param {module:api/CofFunctionApi~cofFunctionGroupByColumnCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CofFunction}
     */
    this.cofFunctionGroupByColumn = function(columnName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'columnName' is set
      if (columnName === undefined || columnName === null) {
        throw new Error("Missing the required parameter 'columnName' when calling cofFunctionGroupByColumn");
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
      var returnType = CofFunction;

      return this.apiClient.callApi(
        '/api/v1/cof_function/groupby/{columnName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletecofFunction operation.
     * @callback module:api/CofFunctionApi~deletecofFunctionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a cof_function
     * 
     * @param {Number} cofFunctionId ID of cof_function to return
     * @param {module:api/CofFunctionApi~deletecofFunctionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletecofFunction = function(cofFunctionId, callback) {
      var postBody = null;

      // verify the required parameter 'cofFunctionId' is set
      if (cofFunctionId === undefined || cofFunctionId === null) {
        throw new Error("Missing the required parameter 'cofFunctionId' when calling deletecofFunction");
      }


      var pathParams = {
        'cof_functionId': cofFunctionId
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
        '/api/v1/cof_function/{cof_functionId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletecofFunction_0 operation.
     * @callback module:api/CofFunctionApi~deletecofFunction_0Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a cof_function
     * 
     * @param {Array.<module:model/CofFunction>} body cof_function objects contains id
     * @param {module:api/CofFunctionApi~deletecofFunction_0Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletecofFunction_0 = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling deletecofFunction_0");
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
        '/api/v1/cof_function/bulk', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findOnecofFunction operation.
     * @callback module:api/CofFunctionApi~findOnecofFunctionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CofFunction} data The data returned by the service call.
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
     * @param {module:api/CofFunctionApi~findOnecofFunctionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CofFunction}
     */
    this.findOnecofFunction = function(opts, callback) {
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
      var returnType = CofFunction;

      return this.apiClient.callApi(
        '/api/v1/cof_function/findOne', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getcofFunction operation.
     * @callback module:api/CofFunctionApi~getcofFunctionCallback
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
     * @param {module:api/CofFunctionApi~getcofFunctionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getcofFunction = function(opts, callback) {
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
        '/api/v1/cof_function', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getcofFunctionById operation.
     * @callback module:api/CofFunctionApi~getcofFunctionByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CofFunction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find cof_function by ID
     * Returns a single cof_function
     * @param {Number} cofFunctionId ID of cof_function to return
     * @param {module:api/CofFunctionApi~getcofFunctionByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CofFunction}
     */
    this.getcofFunctionById = function(cofFunctionId, callback) {
      var postBody = null;

      // verify the required parameter 'cofFunctionId' is set
      if (cofFunctionId === undefined || cofFunctionId === null) {
        throw new Error("Missing the required parameter 'cofFunctionId' when calling getcofFunctionById");
      }


      var pathParams = {
        'cof_functionId': cofFunctionId
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
      var returnType = CofFunction;

      return this.apiClient.callApi(
        '/api/v1/cof_function/{cof_functionId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getcofFunctionCount operation.
     * @callback module:api/CofFunctionApi~getcofFunctionCountCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cof_function count
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where Where expression
     * @param {module:api/CofFunctionApi~getcofFunctionCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getcofFunctionCount = function(opts, callback) {
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
        '/api/v1/cof_function/count', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatecofFunction operation.
     * @callback module:api/CofFunctionApi~updatecofFunctionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a cof_function
     * 
     * @param {Number} cofFunctionId ID of cof_function to return
     * @param {module:model/CofFunction} body cof_function object that needs to be added to the store
     * @param {module:api/CofFunctionApi~updatecofFunctionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updatecofFunction = function(cofFunctionId, body, callback) {
      var postBody = body;

      // verify the required parameter 'cofFunctionId' is set
      if (cofFunctionId === undefined || cofFunctionId === null) {
        throw new Error("Missing the required parameter 'cofFunctionId' when calling updatecofFunction");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updatecofFunction");
      }


      var pathParams = {
        'cof_functionId': cofFunctionId
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
        '/api/v1/cof_function/{cof_functionId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatecofFunction_0 operation.
     * @callback module:api/CofFunctionApi~updatecofFunction_0Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a cof_function
     * 
     * @param {Array.<module:model/CofFunction>} body cof_function objects with id
     * @param {module:api/CofFunctionApi~updatecofFunction_0Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updatecofFunction_0 = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updatecofFunction_0");
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
        '/api/v1/cof_function/bulk', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
