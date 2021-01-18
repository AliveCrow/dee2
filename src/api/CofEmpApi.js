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
    define(['ApiClient', 'model/CofEmp'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CofEmp'));
  } else {
    // Browser globals (root is window)
    if (!root.XgeneCloud) {
      root.XgeneCloud = {};
    }
    root.XgeneCloud.CofEmpApi = factory(root.XgeneCloud.ApiClient, root.XgeneCloud.CofEmp);
  }
}(this, function(ApiClient, CofEmp) {
  'use strict';

  /**
   * CofEmp service.
   * @module api/CofEmpApi
   * @version 1.0.0
   */

  /**
   * Constructs a new CofEmpApi. 
   * @alias module:api/CofEmpApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addcofEmp operation.
     * @callback module:api/CofEmpApi~addcofEmpCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new cof_emp
     * 
     * @param {module:model/CofEmp} body cof_emp object that needs to add
     * @param {module:api/CofEmpApi~addcofEmpCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addcofEmp = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addcofEmp");
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
        '/api/v1/cof_emp', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the bulkcofEmpInsert operation.
     * @callback module:api/CofEmpApi~bulkcofEmpInsertCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Bulk cof_emp insert
     * 
     * @param {Array.<module:model/CofEmp>} body cof_emp objects
     * @param {module:api/CofEmpApi~bulkcofEmpInsertCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.bulkcofEmpInsert = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling bulkcofEmpInsert");
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
        '/api/v1/cof_emp/bulk', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the checkcofEmpExists operation.
     * @callback module:api/CofEmpApi~checkcofEmpExistsCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check cof_emp with provided ID exists
     * Returns a single cof_emp
     * @param {Number} cofEmpId ID of cof_emp
     * @param {module:api/CofEmpApi~checkcofEmpExistsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.checkcofEmpExists = function(cofEmpId, callback) {
      var postBody = null;

      // verify the required parameter 'cofEmpId' is set
      if (cofEmpId === undefined || cofEmpId === null) {
        throw new Error("Missing the required parameter 'cofEmpId' when calling checkcofEmpExists");
      }


      var pathParams = {
        'cof_empId': cofEmpId
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
        '/api/v1/cof_emp/{cof_empId}/exists', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cofEmpAggregate operation.
     * @callback module:api/CofEmpApi~cofEmpAggregateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CofEmp} data The data returned by the service call.
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
     * @param {module:api/CofEmpApi~cofEmpAggregateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CofEmp}
     */
    this.cofEmpAggregate = function(columnName, fields, func, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'columnName' is set
      if (columnName === undefined || columnName === null) {
        throw new Error("Missing the required parameter 'columnName' when calling cofEmpAggregate");
      }

      // verify the required parameter 'fields' is set
      if (fields === undefined || fields === null) {
        throw new Error("Missing the required parameter 'fields' when calling cofEmpAggregate");
      }

      // verify the required parameter 'func' is set
      if (func === undefined || func === null) {
        throw new Error("Missing the required parameter 'func' when calling cofEmpAggregate");
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
      var returnType = CofEmp;

      return this.apiClient.callApi(
        '/api/v1/cof_emp/aggregate/{columnName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cofEmpDistinct operation.
     * @callback module:api/CofEmpApi~cofEmpDistinctCallback
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
     * @param {module:api/CofEmpApi~cofEmpDistinctCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */
    this.cofEmpDistinct = function(columnName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'columnName' is set
      if (columnName === undefined || columnName === null) {
        throw new Error("Missing the required parameter 'columnName' when calling cofEmpDistinct");
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
        '/api/v1/cof_emp/distinct/{columnName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cofEmpDistribution operation.
     * @callback module:api/CofEmpApi~cofEmpDistributionCallback
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
     * @param {module:api/CofEmpApi~cofEmpDistributionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */
    this.cofEmpDistribution = function(columnName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'columnName' is set
      if (columnName === undefined || columnName === null) {
        throw new Error("Missing the required parameter 'columnName' when calling cofEmpDistribution");
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
        '/api/v1/cof_emp/distribution/{columnName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cofEmpGroupByColumn operation.
     * @callback module:api/CofEmpApi~cofEmpGroupByColumnCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CofEmp} data The data returned by the service call.
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
     * @param {module:api/CofEmpApi~cofEmpGroupByColumnCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CofEmp}
     */
    this.cofEmpGroupByColumn = function(columnName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'columnName' is set
      if (columnName === undefined || columnName === null) {
        throw new Error("Missing the required parameter 'columnName' when calling cofEmpGroupByColumn");
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
      var returnType = CofEmp;

      return this.apiClient.callApi(
        '/api/v1/cof_emp/groupby/{columnName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletecofEmp operation.
     * @callback module:api/CofEmpApi~deletecofEmpCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a cof_emp
     * 
     * @param {Number} cofEmpId ID of cof_emp to return
     * @param {module:api/CofEmpApi~deletecofEmpCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletecofEmp = function(cofEmpId, callback) {
      var postBody = null;

      // verify the required parameter 'cofEmpId' is set
      if (cofEmpId === undefined || cofEmpId === null) {
        throw new Error("Missing the required parameter 'cofEmpId' when calling deletecofEmp");
      }


      var pathParams = {
        'cof_empId': cofEmpId
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
        '/api/v1/cof_emp/{cof_empId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletecofEmp_0 operation.
     * @callback module:api/CofEmpApi~deletecofEmp_0Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a cof_emp
     * 
     * @param {Array.<module:model/CofEmp>} body cof_emp objects contains id
     * @param {module:api/CofEmpApi~deletecofEmp_0Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletecofEmp_0 = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling deletecofEmp_0");
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
        '/api/v1/cof_emp/bulk', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findOnecofEmp operation.
     * @callback module:api/CofEmpApi~findOnecofEmpCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CofEmp} data The data returned by the service call.
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
     * @param {module:api/CofEmpApi~findOnecofEmpCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CofEmp}
     */
    this.findOnecofEmp = function(opts, callback) {
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
      var returnType = CofEmp;

      return this.apiClient.callApi(
        '/api/v1/cof_emp/findOne', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getcofEmp operation.
     * @callback module:api/CofEmpApi~getcofEmpCallback
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
     * @param {module:api/CofEmpApi~getcofEmpCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getcofEmp = function(opts, callback) {
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
        '/api/v1/cof_emp', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getcofEmpById operation.
     * @callback module:api/CofEmpApi~getcofEmpByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CofEmp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find cof_emp by ID
     * Returns a single cof_emp
     * @param {Number} cofEmpId ID of cof_emp to return
     * @param {module:api/CofEmpApi~getcofEmpByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CofEmp}
     */
    this.getcofEmpById = function(cofEmpId, callback) {
      var postBody = null;

      // verify the required parameter 'cofEmpId' is set
      if (cofEmpId === undefined || cofEmpId === null) {
        throw new Error("Missing the required parameter 'cofEmpId' when calling getcofEmpById");
      }


      var pathParams = {
        'cof_empId': cofEmpId
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
      var returnType = CofEmp;

      return this.apiClient.callApi(
        '/api/v1/cof_emp/{cof_empId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getcofEmpCount operation.
     * @callback module:api/CofEmpApi~getcofEmpCountCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cof_emp count
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where Where expression
     * @param {module:api/CofEmpApi~getcofEmpCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getcofEmpCount = function(opts, callback) {
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
        '/api/v1/cof_emp/count', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatecofEmp operation.
     * @callback module:api/CofEmpApi~updatecofEmpCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a cof_emp
     * 
     * @param {Number} cofEmpId ID of cof_emp to return
     * @param {module:model/CofEmp} body cof_emp object that needs to be added to the store
     * @param {module:api/CofEmpApi~updatecofEmpCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updatecofEmp = function(cofEmpId, body, callback) {
      var postBody = body;

      // verify the required parameter 'cofEmpId' is set
      if (cofEmpId === undefined || cofEmpId === null) {
        throw new Error("Missing the required parameter 'cofEmpId' when calling updatecofEmp");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updatecofEmp");
      }


      var pathParams = {
        'cof_empId': cofEmpId
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
        '/api/v1/cof_emp/{cof_empId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatecofEmp_0 operation.
     * @callback module:api/CofEmpApi~updatecofEmp_0Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a cof_emp
     * 
     * @param {Array.<module:model/CofEmp>} body cof_emp objects with id
     * @param {module:api/CofEmpApi~updatecofEmp_0Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updatecofEmp_0 = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updatecofEmp_0");
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
        '/api/v1/cof_emp/bulk', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
