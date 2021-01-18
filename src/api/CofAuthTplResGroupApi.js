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
    define(['ApiClient', 'model/CofAuthTplResGroup'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CofAuthTplResGroup'));
  } else {
    // Browser globals (root is window)
    if (!root.XgeneCloud) {
      root.XgeneCloud = {};
    }
    root.XgeneCloud.CofAuthTplResGroupApi = factory(root.XgeneCloud.ApiClient, root.XgeneCloud.CofAuthTplResGroup);
  }
}(this, function(ApiClient, CofAuthTplResGroup) {
  'use strict';

  /**
   * CofAuthTplResGroup service.
   * @module api/CofAuthTplResGroupApi
   * @version 1.0.0
   */

  /**
   * Constructs a new CofAuthTplResGroupApi. 
   * @alias module:api/CofAuthTplResGroupApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addcofAuthTplResGroup operation.
     * @callback module:api/CofAuthTplResGroupApi~addcofAuthTplResGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new cof_auth_tpl_res_group
     * 
     * @param {module:model/CofAuthTplResGroup} body cof_auth_tpl_res_group object that needs to add
     * @param {module:api/CofAuthTplResGroupApi~addcofAuthTplResGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addcofAuthTplResGroup = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addcofAuthTplResGroup");
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
        '/api/v1/cof_auth_tpl_res_group', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the bulkcofAuthTplResGroupInsert operation.
     * @callback module:api/CofAuthTplResGroupApi~bulkcofAuthTplResGroupInsertCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Bulk cof_auth_tpl_res_group insert
     * 
     * @param {Array.<module:model/CofAuthTplResGroup>} body cof_auth_tpl_res_group objects
     * @param {module:api/CofAuthTplResGroupApi~bulkcofAuthTplResGroupInsertCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.bulkcofAuthTplResGroupInsert = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling bulkcofAuthTplResGroupInsert");
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
        '/api/v1/cof_auth_tpl_res_group/bulk', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the checkcofAuthTplResGroupExists operation.
     * @callback module:api/CofAuthTplResGroupApi~checkcofAuthTplResGroupExistsCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check cof_auth_tpl_res_group with provided ID exists
     * Returns a single cof_auth_tpl_res_group
     * @param {Number} cofAuthTplResGroupId ID of cof_auth_tpl_res_group
     * @param {module:api/CofAuthTplResGroupApi~checkcofAuthTplResGroupExistsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.checkcofAuthTplResGroupExists = function(cofAuthTplResGroupId, callback) {
      var postBody = null;

      // verify the required parameter 'cofAuthTplResGroupId' is set
      if (cofAuthTplResGroupId === undefined || cofAuthTplResGroupId === null) {
        throw new Error("Missing the required parameter 'cofAuthTplResGroupId' when calling checkcofAuthTplResGroupExists");
      }


      var pathParams = {
        'cof_auth_tpl_res_groupId': cofAuthTplResGroupId
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
        '/api/v1/cof_auth_tpl_res_group/{cof_auth_tpl_res_groupId}/exists', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cofAuthTplResGroupAggregate operation.
     * @callback module:api/CofAuthTplResGroupApi~cofAuthTplResGroupAggregateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CofAuthTplResGroup} data The data returned by the service call.
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
     * @param {module:api/CofAuthTplResGroupApi~cofAuthTplResGroupAggregateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CofAuthTplResGroup}
     */
    this.cofAuthTplResGroupAggregate = function(columnName, fields, func, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'columnName' is set
      if (columnName === undefined || columnName === null) {
        throw new Error("Missing the required parameter 'columnName' when calling cofAuthTplResGroupAggregate");
      }

      // verify the required parameter 'fields' is set
      if (fields === undefined || fields === null) {
        throw new Error("Missing the required parameter 'fields' when calling cofAuthTplResGroupAggregate");
      }

      // verify the required parameter 'func' is set
      if (func === undefined || func === null) {
        throw new Error("Missing the required parameter 'func' when calling cofAuthTplResGroupAggregate");
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
      var returnType = CofAuthTplResGroup;

      return this.apiClient.callApi(
        '/api/v1/cof_auth_tpl_res_group/aggregate/{columnName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cofAuthTplResGroupDistinct operation.
     * @callback module:api/CofAuthTplResGroupApi~cofAuthTplResGroupDistinctCallback
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
     * @param {module:api/CofAuthTplResGroupApi~cofAuthTplResGroupDistinctCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */
    this.cofAuthTplResGroupDistinct = function(columnName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'columnName' is set
      if (columnName === undefined || columnName === null) {
        throw new Error("Missing the required parameter 'columnName' when calling cofAuthTplResGroupDistinct");
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
        '/api/v1/cof_auth_tpl_res_group/distinct/{columnName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cofAuthTplResGroupDistribution operation.
     * @callback module:api/CofAuthTplResGroupApi~cofAuthTplResGroupDistributionCallback
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
     * @param {module:api/CofAuthTplResGroupApi~cofAuthTplResGroupDistributionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */
    this.cofAuthTplResGroupDistribution = function(columnName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'columnName' is set
      if (columnName === undefined || columnName === null) {
        throw new Error("Missing the required parameter 'columnName' when calling cofAuthTplResGroupDistribution");
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
        '/api/v1/cof_auth_tpl_res_group/distribution/{columnName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cofAuthTplResGroupGroupByColumn operation.
     * @callback module:api/CofAuthTplResGroupApi~cofAuthTplResGroupGroupByColumnCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CofAuthTplResGroup} data The data returned by the service call.
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
     * @param {module:api/CofAuthTplResGroupApi~cofAuthTplResGroupGroupByColumnCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CofAuthTplResGroup}
     */
    this.cofAuthTplResGroupGroupByColumn = function(columnName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'columnName' is set
      if (columnName === undefined || columnName === null) {
        throw new Error("Missing the required parameter 'columnName' when calling cofAuthTplResGroupGroupByColumn");
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
      var returnType = CofAuthTplResGroup;

      return this.apiClient.callApi(
        '/api/v1/cof_auth_tpl_res_group/groupby/{columnName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletecofAuthTplResGroup operation.
     * @callback module:api/CofAuthTplResGroupApi~deletecofAuthTplResGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a cof_auth_tpl_res_group
     * 
     * @param {Number} cofAuthTplResGroupId ID of cof_auth_tpl_res_group to return
     * @param {module:api/CofAuthTplResGroupApi~deletecofAuthTplResGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletecofAuthTplResGroup = function(cofAuthTplResGroupId, callback) {
      var postBody = null;

      // verify the required parameter 'cofAuthTplResGroupId' is set
      if (cofAuthTplResGroupId === undefined || cofAuthTplResGroupId === null) {
        throw new Error("Missing the required parameter 'cofAuthTplResGroupId' when calling deletecofAuthTplResGroup");
      }


      var pathParams = {
        'cof_auth_tpl_res_groupId': cofAuthTplResGroupId
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
        '/api/v1/cof_auth_tpl_res_group/{cof_auth_tpl_res_groupId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletecofAuthTplResGroup_0 operation.
     * @callback module:api/CofAuthTplResGroupApi~deletecofAuthTplResGroup_0Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a cof_auth_tpl_res_group
     * 
     * @param {Array.<module:model/CofAuthTplResGroup>} body cof_auth_tpl_res_group objects contains id
     * @param {module:api/CofAuthTplResGroupApi~deletecofAuthTplResGroup_0Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletecofAuthTplResGroup_0 = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling deletecofAuthTplResGroup_0");
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
        '/api/v1/cof_auth_tpl_res_group/bulk', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findOnecofAuthTplResGroup operation.
     * @callback module:api/CofAuthTplResGroupApi~findOnecofAuthTplResGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CofAuthTplResGroup} data The data returned by the service call.
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
     * @param {module:api/CofAuthTplResGroupApi~findOnecofAuthTplResGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CofAuthTplResGroup}
     */
    this.findOnecofAuthTplResGroup = function(opts, callback) {
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
      var returnType = CofAuthTplResGroup;

      return this.apiClient.callApi(
        '/api/v1/cof_auth_tpl_res_group/findOne', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getcofAuthTplResGroup operation.
     * @callback module:api/CofAuthTplResGroupApi~getcofAuthTplResGroupCallback
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
     * @param {module:api/CofAuthTplResGroupApi~getcofAuthTplResGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getcofAuthTplResGroup = function(opts, callback) {
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
        '/api/v1/cof_auth_tpl_res_group', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getcofAuthTplResGroupById operation.
     * @callback module:api/CofAuthTplResGroupApi~getcofAuthTplResGroupByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CofAuthTplResGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find cof_auth_tpl_res_group by ID
     * Returns a single cof_auth_tpl_res_group
     * @param {Number} cofAuthTplResGroupId ID of cof_auth_tpl_res_group to return
     * @param {module:api/CofAuthTplResGroupApi~getcofAuthTplResGroupByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CofAuthTplResGroup}
     */
    this.getcofAuthTplResGroupById = function(cofAuthTplResGroupId, callback) {
      var postBody = null;

      // verify the required parameter 'cofAuthTplResGroupId' is set
      if (cofAuthTplResGroupId === undefined || cofAuthTplResGroupId === null) {
        throw new Error("Missing the required parameter 'cofAuthTplResGroupId' when calling getcofAuthTplResGroupById");
      }


      var pathParams = {
        'cof_auth_tpl_res_groupId': cofAuthTplResGroupId
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
      var returnType = CofAuthTplResGroup;

      return this.apiClient.callApi(
        '/api/v1/cof_auth_tpl_res_group/{cof_auth_tpl_res_groupId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getcofAuthTplResGroupCount operation.
     * @callback module:api/CofAuthTplResGroupApi~getcofAuthTplResGroupCountCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cof_auth_tpl_res_group count
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where Where expression
     * @param {module:api/CofAuthTplResGroupApi~getcofAuthTplResGroupCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getcofAuthTplResGroupCount = function(opts, callback) {
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
        '/api/v1/cof_auth_tpl_res_group/count', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatecofAuthTplResGroup operation.
     * @callback module:api/CofAuthTplResGroupApi~updatecofAuthTplResGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a cof_auth_tpl_res_group
     * 
     * @param {Number} cofAuthTplResGroupId ID of cof_auth_tpl_res_group to return
     * @param {module:model/CofAuthTplResGroup} body cof_auth_tpl_res_group object that needs to be added to the store
     * @param {module:api/CofAuthTplResGroupApi~updatecofAuthTplResGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updatecofAuthTplResGroup = function(cofAuthTplResGroupId, body, callback) {
      var postBody = body;

      // verify the required parameter 'cofAuthTplResGroupId' is set
      if (cofAuthTplResGroupId === undefined || cofAuthTplResGroupId === null) {
        throw new Error("Missing the required parameter 'cofAuthTplResGroupId' when calling updatecofAuthTplResGroup");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updatecofAuthTplResGroup");
      }


      var pathParams = {
        'cof_auth_tpl_res_groupId': cofAuthTplResGroupId
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
        '/api/v1/cof_auth_tpl_res_group/{cof_auth_tpl_res_groupId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatecofAuthTplResGroup_0 operation.
     * @callback module:api/CofAuthTplResGroupApi~updatecofAuthTplResGroup_0Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a cof_auth_tpl_res_group
     * 
     * @param {Array.<module:model/CofAuthTplResGroup>} body cof_auth_tpl_res_group objects with id
     * @param {module:api/CofAuthTplResGroupApi~updatecofAuthTplResGroup_0Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updatecofAuthTplResGroup_0 = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updatecofAuthTplResGroup_0");
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
        '/api/v1/cof_auth_tpl_res_group/bulk', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
