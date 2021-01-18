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
    define(['ApiClient', 'model/CofWorkgroup'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CofWorkgroup'));
  } else {
    // Browser globals (root is window)
    if (!root.XgeneCloud) {
      root.XgeneCloud = {};
    }
    root.XgeneCloud.CofWorkgroupApi = factory(root.XgeneCloud.ApiClient, root.XgeneCloud.CofWorkgroup);
  }
}(this, function(ApiClient, CofWorkgroup) {
  'use strict';

  /**
   * CofWorkgroup service.
   * @module api/CofWorkgroupApi
   * @version 1.0.0
   */

  /**
   * Constructs a new CofWorkgroupApi. 
   * @alias module:api/CofWorkgroupApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addcofWorkgroup operation.
     * @callback module:api/CofWorkgroupApi~addcofWorkgroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new cof_workgroup
     * 
     * @param {module:model/CofWorkgroup} body cof_workgroup object that needs to add
     * @param {module:api/CofWorkgroupApi~addcofWorkgroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addcofWorkgroup = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addcofWorkgroup");
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
        '/api/v1/cof_workgroup', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the bulkcofWorkgroupInsert operation.
     * @callback module:api/CofWorkgroupApi~bulkcofWorkgroupInsertCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Bulk cof_workgroup insert
     * 
     * @param {Array.<module:model/CofWorkgroup>} body cof_workgroup objects
     * @param {module:api/CofWorkgroupApi~bulkcofWorkgroupInsertCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.bulkcofWorkgroupInsert = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling bulkcofWorkgroupInsert");
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
        '/api/v1/cof_workgroup/bulk', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the checkcofWorkgroupExists operation.
     * @callback module:api/CofWorkgroupApi~checkcofWorkgroupExistsCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check cof_workgroup with provided ID exists
     * Returns a single cof_workgroup
     * @param {Number} cofWorkgroupId ID of cof_workgroup
     * @param {module:api/CofWorkgroupApi~checkcofWorkgroupExistsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.checkcofWorkgroupExists = function(cofWorkgroupId, callback) {
      var postBody = null;

      // verify the required parameter 'cofWorkgroupId' is set
      if (cofWorkgroupId === undefined || cofWorkgroupId === null) {
        throw new Error("Missing the required parameter 'cofWorkgroupId' when calling checkcofWorkgroupExists");
      }


      var pathParams = {
        'cof_workgroupId': cofWorkgroupId
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
        '/api/v1/cof_workgroup/{cof_workgroupId}/exists', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cofWorkgroupAggregate operation.
     * @callback module:api/CofWorkgroupApi~cofWorkgroupAggregateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CofWorkgroup} data The data returned by the service call.
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
     * @param {module:api/CofWorkgroupApi~cofWorkgroupAggregateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CofWorkgroup}
     */
    this.cofWorkgroupAggregate = function(columnName, fields, func, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'columnName' is set
      if (columnName === undefined || columnName === null) {
        throw new Error("Missing the required parameter 'columnName' when calling cofWorkgroupAggregate");
      }

      // verify the required parameter 'fields' is set
      if (fields === undefined || fields === null) {
        throw new Error("Missing the required parameter 'fields' when calling cofWorkgroupAggregate");
      }

      // verify the required parameter 'func' is set
      if (func === undefined || func === null) {
        throw new Error("Missing the required parameter 'func' when calling cofWorkgroupAggregate");
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
      var returnType = CofWorkgroup;

      return this.apiClient.callApi(
        '/api/v1/cof_workgroup/aggregate/{columnName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cofWorkgroupDistinct operation.
     * @callback module:api/CofWorkgroupApi~cofWorkgroupDistinctCallback
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
     * @param {module:api/CofWorkgroupApi~cofWorkgroupDistinctCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */
    this.cofWorkgroupDistinct = function(columnName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'columnName' is set
      if (columnName === undefined || columnName === null) {
        throw new Error("Missing the required parameter 'columnName' when calling cofWorkgroupDistinct");
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
        '/api/v1/cof_workgroup/distinct/{columnName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cofWorkgroupDistribution operation.
     * @callback module:api/CofWorkgroupApi~cofWorkgroupDistributionCallback
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
     * @param {module:api/CofWorkgroupApi~cofWorkgroupDistributionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */
    this.cofWorkgroupDistribution = function(columnName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'columnName' is set
      if (columnName === undefined || columnName === null) {
        throw new Error("Missing the required parameter 'columnName' when calling cofWorkgroupDistribution");
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
        '/api/v1/cof_workgroup/distribution/{columnName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cofWorkgroupGroupByColumn operation.
     * @callback module:api/CofWorkgroupApi~cofWorkgroupGroupByColumnCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CofWorkgroup} data The data returned by the service call.
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
     * @param {module:api/CofWorkgroupApi~cofWorkgroupGroupByColumnCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CofWorkgroup}
     */
    this.cofWorkgroupGroupByColumn = function(columnName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'columnName' is set
      if (columnName === undefined || columnName === null) {
        throw new Error("Missing the required parameter 'columnName' when calling cofWorkgroupGroupByColumn");
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
      var returnType = CofWorkgroup;

      return this.apiClient.callApi(
        '/api/v1/cof_workgroup/groupby/{columnName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletecofWorkgroup operation.
     * @callback module:api/CofWorkgroupApi~deletecofWorkgroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a cof_workgroup
     * 
     * @param {Number} cofWorkgroupId ID of cof_workgroup to return
     * @param {module:api/CofWorkgroupApi~deletecofWorkgroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletecofWorkgroup = function(cofWorkgroupId, callback) {
      var postBody = null;

      // verify the required parameter 'cofWorkgroupId' is set
      if (cofWorkgroupId === undefined || cofWorkgroupId === null) {
        throw new Error("Missing the required parameter 'cofWorkgroupId' when calling deletecofWorkgroup");
      }


      var pathParams = {
        'cof_workgroupId': cofWorkgroupId
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
        '/api/v1/cof_workgroup/{cof_workgroupId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletecofWorkgroup_0 operation.
     * @callback module:api/CofWorkgroupApi~deletecofWorkgroup_0Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a cof_workgroup
     * 
     * @param {Array.<module:model/CofWorkgroup>} body cof_workgroup objects contains id
     * @param {module:api/CofWorkgroupApi~deletecofWorkgroup_0Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletecofWorkgroup_0 = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling deletecofWorkgroup_0");
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
        '/api/v1/cof_workgroup/bulk', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findOnecofWorkgroup operation.
     * @callback module:api/CofWorkgroupApi~findOnecofWorkgroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CofWorkgroup} data The data returned by the service call.
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
     * @param {module:api/CofWorkgroupApi~findOnecofWorkgroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CofWorkgroup}
     */
    this.findOnecofWorkgroup = function(opts, callback) {
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
      var returnType = CofWorkgroup;

      return this.apiClient.callApi(
        '/api/v1/cof_workgroup/findOne', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getcofWorkgroup operation.
     * @callback module:api/CofWorkgroupApi~getcofWorkgroupCallback
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
     * @param {module:api/CofWorkgroupApi~getcofWorkgroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getcofWorkgroup = function(opts, callback) {
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
        '/api/v1/cof_workgroup', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getcofWorkgroupById operation.
     * @callback module:api/CofWorkgroupApi~getcofWorkgroupByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CofWorkgroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find cof_workgroup by ID
     * Returns a single cof_workgroup
     * @param {Number} cofWorkgroupId ID of cof_workgroup to return
     * @param {module:api/CofWorkgroupApi~getcofWorkgroupByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CofWorkgroup}
     */
    this.getcofWorkgroupById = function(cofWorkgroupId, callback) {
      var postBody = null;

      // verify the required parameter 'cofWorkgroupId' is set
      if (cofWorkgroupId === undefined || cofWorkgroupId === null) {
        throw new Error("Missing the required parameter 'cofWorkgroupId' when calling getcofWorkgroupById");
      }


      var pathParams = {
        'cof_workgroupId': cofWorkgroupId
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
      var returnType = CofWorkgroup;

      return this.apiClient.callApi(
        '/api/v1/cof_workgroup/{cof_workgroupId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getcofWorkgroupCount operation.
     * @callback module:api/CofWorkgroupApi~getcofWorkgroupCountCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cof_workgroup count
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where Where expression
     * @param {module:api/CofWorkgroupApi~getcofWorkgroupCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getcofWorkgroupCount = function(opts, callback) {
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
        '/api/v1/cof_workgroup/count', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatecofWorkgroup operation.
     * @callback module:api/CofWorkgroupApi~updatecofWorkgroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a cof_workgroup
     * 
     * @param {Number} cofWorkgroupId ID of cof_workgroup to return
     * @param {module:model/CofWorkgroup} body cof_workgroup object that needs to be added to the store
     * @param {module:api/CofWorkgroupApi~updatecofWorkgroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updatecofWorkgroup = function(cofWorkgroupId, body, callback) {
      var postBody = body;

      // verify the required parameter 'cofWorkgroupId' is set
      if (cofWorkgroupId === undefined || cofWorkgroupId === null) {
        throw new Error("Missing the required parameter 'cofWorkgroupId' when calling updatecofWorkgroup");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updatecofWorkgroup");
      }


      var pathParams = {
        'cof_workgroupId': cofWorkgroupId
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
        '/api/v1/cof_workgroup/{cof_workgroupId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatecofWorkgroup_0 operation.
     * @callback module:api/CofWorkgroupApi~updatecofWorkgroup_0Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a cof_workgroup
     * 
     * @param {Array.<module:model/CofWorkgroup>} body cof_workgroup objects with id
     * @param {module:api/CofWorkgroupApi~updatecofWorkgroup_0Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updatecofWorkgroup_0 = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updatecofWorkgroup_0");
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
        '/api/v1/cof_workgroup/bulk', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));