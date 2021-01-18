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
    define(['ApiClient', 'model/CofOperationLogDetail'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CofOperationLogDetail'));
  } else {
    // Browser globals (root is window)
    if (!root.XgeneCloud) {
      root.XgeneCloud = {};
    }
    root.XgeneCloud.CofOperationLogDetailApi = factory(root.XgeneCloud.ApiClient, root.XgeneCloud.CofOperationLogDetail);
  }
}(this, function(ApiClient, CofOperationLogDetail) {
  'use strict';

  /**
   * CofOperationLogDetail service.
   * @module api/CofOperationLogDetailApi
   * @version 1.0.0
   */

  /**
   * Constructs a new CofOperationLogDetailApi. 
   * @alias module:api/CofOperationLogDetailApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addcofOperationLogDetail operation.
     * @callback module:api/CofOperationLogDetailApi~addcofOperationLogDetailCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new cof_operation_log_detail
     * 
     * @param {module:model/CofOperationLogDetail} body cof_operation_log_detail object that needs to add
     * @param {module:api/CofOperationLogDetailApi~addcofOperationLogDetailCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addcofOperationLogDetail = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addcofOperationLogDetail");
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
        '/api/v1/cof_operation_log_detail', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the bulkcofOperationLogDetailInsert operation.
     * @callback module:api/CofOperationLogDetailApi~bulkcofOperationLogDetailInsertCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Bulk cof_operation_log_detail insert
     * 
     * @param {Array.<module:model/CofOperationLogDetail>} body cof_operation_log_detail objects
     * @param {module:api/CofOperationLogDetailApi~bulkcofOperationLogDetailInsertCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.bulkcofOperationLogDetailInsert = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling bulkcofOperationLogDetailInsert");
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
        '/api/v1/cof_operation_log_detail/bulk', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the checkcofOperationLogDetailExists operation.
     * @callback module:api/CofOperationLogDetailApi~checkcofOperationLogDetailExistsCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check cof_operation_log_detail with provided ID exists
     * Returns a single cof_operation_log_detail
     * @param {Number} cofOperationLogDetailId ID of cof_operation_log_detail
     * @param {module:api/CofOperationLogDetailApi~checkcofOperationLogDetailExistsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.checkcofOperationLogDetailExists = function(cofOperationLogDetailId, callback) {
      var postBody = null;

      // verify the required parameter 'cofOperationLogDetailId' is set
      if (cofOperationLogDetailId === undefined || cofOperationLogDetailId === null) {
        throw new Error("Missing the required parameter 'cofOperationLogDetailId' when calling checkcofOperationLogDetailExists");
      }


      var pathParams = {
        'cof_operation_log_detailId': cofOperationLogDetailId
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
        '/api/v1/cof_operation_log_detail/{cof_operation_log_detailId}/exists', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cofOperationLogDetailAggregate operation.
     * @callback module:api/CofOperationLogDetailApi~cofOperationLogDetailAggregateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CofOperationLogDetail} data The data returned by the service call.
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
     * @param {module:api/CofOperationLogDetailApi~cofOperationLogDetailAggregateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CofOperationLogDetail}
     */
    this.cofOperationLogDetailAggregate = function(columnName, fields, func, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'columnName' is set
      if (columnName === undefined || columnName === null) {
        throw new Error("Missing the required parameter 'columnName' when calling cofOperationLogDetailAggregate");
      }

      // verify the required parameter 'fields' is set
      if (fields === undefined || fields === null) {
        throw new Error("Missing the required parameter 'fields' when calling cofOperationLogDetailAggregate");
      }

      // verify the required parameter 'func' is set
      if (func === undefined || func === null) {
        throw new Error("Missing the required parameter 'func' when calling cofOperationLogDetailAggregate");
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
      var returnType = CofOperationLogDetail;

      return this.apiClient.callApi(
        '/api/v1/cof_operation_log_detail/aggregate/{columnName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cofOperationLogDetailDistinct operation.
     * @callback module:api/CofOperationLogDetailApi~cofOperationLogDetailDistinctCallback
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
     * @param {module:api/CofOperationLogDetailApi~cofOperationLogDetailDistinctCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */
    this.cofOperationLogDetailDistinct = function(columnName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'columnName' is set
      if (columnName === undefined || columnName === null) {
        throw new Error("Missing the required parameter 'columnName' when calling cofOperationLogDetailDistinct");
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
        '/api/v1/cof_operation_log_detail/distinct/{columnName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cofOperationLogDetailDistribution operation.
     * @callback module:api/CofOperationLogDetailApi~cofOperationLogDetailDistributionCallback
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
     * @param {module:api/CofOperationLogDetailApi~cofOperationLogDetailDistributionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */
    this.cofOperationLogDetailDistribution = function(columnName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'columnName' is set
      if (columnName === undefined || columnName === null) {
        throw new Error("Missing the required parameter 'columnName' when calling cofOperationLogDetailDistribution");
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
        '/api/v1/cof_operation_log_detail/distribution/{columnName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cofOperationLogDetailGroupByColumn operation.
     * @callback module:api/CofOperationLogDetailApi~cofOperationLogDetailGroupByColumnCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CofOperationLogDetail} data The data returned by the service call.
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
     * @param {module:api/CofOperationLogDetailApi~cofOperationLogDetailGroupByColumnCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CofOperationLogDetail}
     */
    this.cofOperationLogDetailGroupByColumn = function(columnName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'columnName' is set
      if (columnName === undefined || columnName === null) {
        throw new Error("Missing the required parameter 'columnName' when calling cofOperationLogDetailGroupByColumn");
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
      var returnType = CofOperationLogDetail;

      return this.apiClient.callApi(
        '/api/v1/cof_operation_log_detail/groupby/{columnName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletecofOperationLogDetail operation.
     * @callback module:api/CofOperationLogDetailApi~deletecofOperationLogDetailCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a cof_operation_log_detail
     * 
     * @param {Number} cofOperationLogDetailId ID of cof_operation_log_detail to return
     * @param {module:api/CofOperationLogDetailApi~deletecofOperationLogDetailCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletecofOperationLogDetail = function(cofOperationLogDetailId, callback) {
      var postBody = null;

      // verify the required parameter 'cofOperationLogDetailId' is set
      if (cofOperationLogDetailId === undefined || cofOperationLogDetailId === null) {
        throw new Error("Missing the required parameter 'cofOperationLogDetailId' when calling deletecofOperationLogDetail");
      }


      var pathParams = {
        'cof_operation_log_detailId': cofOperationLogDetailId
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
        '/api/v1/cof_operation_log_detail/{cof_operation_log_detailId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletecofOperationLogDetail_0 operation.
     * @callback module:api/CofOperationLogDetailApi~deletecofOperationLogDetail_0Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a cof_operation_log_detail
     * 
     * @param {Array.<module:model/CofOperationLogDetail>} body cof_operation_log_detail objects contains id
     * @param {module:api/CofOperationLogDetailApi~deletecofOperationLogDetail_0Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletecofOperationLogDetail_0 = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling deletecofOperationLogDetail_0");
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
        '/api/v1/cof_operation_log_detail/bulk', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findOnecofOperationLogDetail operation.
     * @callback module:api/CofOperationLogDetailApi~findOnecofOperationLogDetailCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CofOperationLogDetail} data The data returned by the service call.
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
     * @param {module:api/CofOperationLogDetailApi~findOnecofOperationLogDetailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CofOperationLogDetail}
     */
    this.findOnecofOperationLogDetail = function(opts, callback) {
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
      var returnType = CofOperationLogDetail;

      return this.apiClient.callApi(
        '/api/v1/cof_operation_log_detail/findOne', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getcofOperationLogDetail operation.
     * @callback module:api/CofOperationLogDetailApi~getcofOperationLogDetailCallback
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
     * @param {module:api/CofOperationLogDetailApi~getcofOperationLogDetailCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getcofOperationLogDetail = function(opts, callback) {
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
        '/api/v1/cof_operation_log_detail', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getcofOperationLogDetailById operation.
     * @callback module:api/CofOperationLogDetailApi~getcofOperationLogDetailByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CofOperationLogDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find cof_operation_log_detail by ID
     * Returns a single cof_operation_log_detail
     * @param {Number} cofOperationLogDetailId ID of cof_operation_log_detail to return
     * @param {module:api/CofOperationLogDetailApi~getcofOperationLogDetailByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CofOperationLogDetail}
     */
    this.getcofOperationLogDetailById = function(cofOperationLogDetailId, callback) {
      var postBody = null;

      // verify the required parameter 'cofOperationLogDetailId' is set
      if (cofOperationLogDetailId === undefined || cofOperationLogDetailId === null) {
        throw new Error("Missing the required parameter 'cofOperationLogDetailId' when calling getcofOperationLogDetailById");
      }


      var pathParams = {
        'cof_operation_log_detailId': cofOperationLogDetailId
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
      var returnType = CofOperationLogDetail;

      return this.apiClient.callApi(
        '/api/v1/cof_operation_log_detail/{cof_operation_log_detailId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getcofOperationLogDetailCount operation.
     * @callback module:api/CofOperationLogDetailApi~getcofOperationLogDetailCountCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cof_operation_log_detail count
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where Where expression
     * @param {module:api/CofOperationLogDetailApi~getcofOperationLogDetailCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getcofOperationLogDetailCount = function(opts, callback) {
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
        '/api/v1/cof_operation_log_detail/count', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatecofOperationLogDetail operation.
     * @callback module:api/CofOperationLogDetailApi~updatecofOperationLogDetailCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a cof_operation_log_detail
     * 
     * @param {Number} cofOperationLogDetailId ID of cof_operation_log_detail to return
     * @param {module:model/CofOperationLogDetail} body cof_operation_log_detail object that needs to be added to the store
     * @param {module:api/CofOperationLogDetailApi~updatecofOperationLogDetailCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updatecofOperationLogDetail = function(cofOperationLogDetailId, body, callback) {
      var postBody = body;

      // verify the required parameter 'cofOperationLogDetailId' is set
      if (cofOperationLogDetailId === undefined || cofOperationLogDetailId === null) {
        throw new Error("Missing the required parameter 'cofOperationLogDetailId' when calling updatecofOperationLogDetail");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updatecofOperationLogDetail");
      }


      var pathParams = {
        'cof_operation_log_detailId': cofOperationLogDetailId
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
        '/api/v1/cof_operation_log_detail/{cof_operation_log_detailId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatecofOperationLogDetail_0 operation.
     * @callback module:api/CofOperationLogDetailApi~updatecofOperationLogDetail_0Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a cof_operation_log_detail
     * 
     * @param {Array.<module:model/CofOperationLogDetail>} body cof_operation_log_detail objects with id
     * @param {module:api/CofOperationLogDetailApi~updatecofOperationLogDetail_0Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updatecofOperationLogDetail_0 = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updatecofOperationLogDetail_0");
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
        '/api/v1/cof_operation_log_detail/bulk', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
