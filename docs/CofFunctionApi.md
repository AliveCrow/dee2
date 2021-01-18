# XgeneCloud.CofFunctionApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addcofFunction**](CofFunctionApi.md#addcofFunction) | **POST** /api/v1/cof_function | Add a new cof_function
[**bulkcofFunctionInsert**](CofFunctionApi.md#bulkcofFunctionInsert) | **POST** /api/v1/cof_function/bulk | Bulk cof_function insert
[**checkcofFunctionExists**](CofFunctionApi.md#checkcofFunctionExists) | **GET** /api/v1/cof_function/{cof_functionId}/exists | Check cof_function with provided ID exists
[**cofFunctionAggregate**](CofFunctionApi.md#cofFunctionAggregate) | **GET** /api/v1/cof_function/aggregate/{columnName} | Get first one from filtered data
[**cofFunctionDistinct**](CofFunctionApi.md#cofFunctionDistinct) | **GET** /api/v1/cof_function/distinct/{columnName} | Get first one from filtered data
[**cofFunctionDistribution**](CofFunctionApi.md#cofFunctionDistribution) | **GET** /api/v1/cof_function/distribution/{columnName} | 
[**cofFunctionGroupByColumn**](CofFunctionApi.md#cofFunctionGroupByColumn) | **GET** /api/v1/cof_function/groupby/{columnName} | Group by column
[**deletecofFunction**](CofFunctionApi.md#deletecofFunction) | **DELETE** /api/v1/cof_function/{cof_functionId} | Deletes a cof_function
[**deletecofFunction_0**](CofFunctionApi.md#deletecofFunction_0) | **DELETE** /api/v1/cof_function/bulk | Deletes a cof_function
[**findOnecofFunction**](CofFunctionApi.md#findOnecofFunction) | **GET** /api/v1/cof_function/findOne | Get first one from filtered data
[**getcofFunction**](CofFunctionApi.md#getcofFunction) | **GET** /api/v1/cof_function | Get list
[**getcofFunctionById**](CofFunctionApi.md#getcofFunctionById) | **GET** /api/v1/cof_function/{cof_functionId} | Find cof_function by ID
[**getcofFunctionCount**](CofFunctionApi.md#getcofFunctionCount) | **GET** /api/v1/cof_function/count | Get cof_function count
[**updatecofFunction**](CofFunctionApi.md#updatecofFunction) | **PUT** /api/v1/cof_function/{cof_functionId} | Updates a cof_function
[**updatecofFunction_0**](CofFunctionApi.md#updatecofFunction_0) | **PUT** /api/v1/cof_function/bulk | Updates a cof_function


<a name="addcofFunction"></a>
# **addcofFunction**
> addcofFunction(body)

Add a new cof_function



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofFunctionApi();

var body = new XgeneCloud.CofFunction(); // CofFunction | cof_function object that needs to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addcofFunction(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CofFunction**](CofFunction.md)| cof_function object that needs to add | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkcofFunctionInsert"></a>
# **bulkcofFunctionInsert**
> bulkcofFunctionInsert(body)

Bulk cof_function insert



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofFunctionApi();

var body = [new XgeneCloud.CofFunction()]; // [CofFunction] | cof_function objects


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkcofFunctionInsert(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofFunction]**](CofFunction.md)| cof_function objects | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="checkcofFunctionExists"></a>
# **checkcofFunctionExists**
> 'Boolean' checkcofFunctionExists(cofFunctionId)

Check cof_function with provided ID exists

Returns a single cof_function

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofFunctionApi();

var cofFunctionId = 789; // Number | ID of cof_function


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkcofFunctionExists(cofFunctionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofFunctionId** | **Number**| ID of cof_function | 

### Return type

**'Boolean'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cofFunctionAggregate"></a>
# **cofFunctionAggregate**
> CofFunction cofFunctionAggregate(columnName, fields, func, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofFunctionApi();

var columnName = null; // Object | Column name

var fields = null; // Object | Column name

var func = null; // Object | Comma seperated aggregate functions

var opts = { 
  'having': null, // Object | Having expression
  'fields2': null, // Object | Comma seperated fields from the model
  'limit': 789, // Number | Page size limit
  'offset': 789, // Number | Pagination offset
  'sort': "sort_example" // String | Comma seperated sort fields
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cofFunctionAggregate(columnName, fields, func, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **columnName** | [**Object**](.md)| Column name | 
 **fields** | [**Object**](.md)| Column name | 
 **func** | [**Object**](.md)| Comma seperated aggregate functions | 
 **having** | [**Object**](.md)| Having expression | [optional] 
 **fields2** | [**Object**](.md)| Comma seperated fields from the model | [optional] 
 **limit** | **Number**| Page size limit | [optional] 
 **offset** | **Number**| Pagination offset | [optional] 
 **sort** | **String**| Comma seperated sort fields | [optional] 

### Return type

[**CofFunction**](CofFunction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cofFunctionDistinct"></a>
# **cofFunctionDistinct**
> [Object] cofFunctionDistinct(columnName, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofFunctionApi();

var columnName = null; // Object | Column name

var opts = { 
  'where': null, // Object | Where expression
  'limit': 789, // Number | Page size limit
  'offset': 789, // Number | Pagination offset
  'sort': "sort_example" // String | Comma seperated sort fieldst
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cofFunctionDistinct(columnName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **columnName** | [**Object**](.md)| Column name | 
 **where** | [**Object**](.md)| Where expression | [optional] 
 **limit** | **Number**| Page size limit | [optional] 
 **offset** | **Number**| Pagination offset | [optional] 
 **sort** | **String**| Comma seperated sort fieldst | [optional] 

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cofFunctionDistribution"></a>
# **cofFunctionDistribution**
> [Object] cofFunctionDistribution(columnName, opts)





### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofFunctionApi();

var columnName = null; // Object | Column name

var opts = { 
  'min': 789, // Number | min value
  'max': 789, // Number | max value
  'step': 789, // Number | step value
  'steps': 789, // Number | steps value
  'func': "func_example" // String | comma separated aggregation functions
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cofFunctionDistribution(columnName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **columnName** | [**Object**](.md)| Column name | 
 **min** | **Number**| min value | [optional] 
 **max** | **Number**| max value | [optional] 
 **step** | **Number**| step value | [optional] 
 **steps** | **Number**| steps value | [optional] 
 **func** | **String**| comma separated aggregation functions | [optional] 

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cofFunctionGroupByColumn"></a>
# **cofFunctionGroupByColumn**
> CofFunction cofFunctionGroupByColumn(columnName, opts)

Group by column



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofFunctionApi();

var columnName = null; // Object | Column name

var opts = { 
  'where': null, // Object | Where expression
  'limit': 789, // Number | Page size limit
  'offset': 789, // Number | Pagination offset
  'sort': "sort_example" // String | Comma seperated sort fieldst
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cofFunctionGroupByColumn(columnName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **columnName** | [**Object**](.md)| Column name | 
 **where** | [**Object**](.md)| Where expression | [optional] 
 **limit** | **Number**| Page size limit | [optional] 
 **offset** | **Number**| Pagination offset | [optional] 
 **sort** | **String**| Comma seperated sort fieldst | [optional] 

### Return type

[**CofFunction**](CofFunction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletecofFunction"></a>
# **deletecofFunction**
> deletecofFunction(cofFunctionId)

Deletes a cof_function



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofFunctionApi();

var cofFunctionId = 789; // Number | ID of cof_function to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofFunction(cofFunctionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofFunctionId** | **Number**| ID of cof_function to return | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletecofFunction_0"></a>
# **deletecofFunction_0**
> deletecofFunction_0(body)

Deletes a cof_function



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofFunctionApi();

var body = [new XgeneCloud.CofFunction()]; // [CofFunction] | cof_function objects contains id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofFunction_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofFunction]**](CofFunction.md)| cof_function objects contains id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findOnecofFunction"></a>
# **findOnecofFunction**
> CofFunction findOnecofFunction(opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofFunctionApi();

var opts = { 
  'fields': null, // Object | Comma seperated fields from the model
  'where': null, // Object | Where expression
  'limit': 789, // Number | Page size limit
  'offset': 789, // Number | Pagination offset
  'sort': "sort_example" // String | Comma seperated sort fieldst
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findOnecofFunction(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**Object**](.md)| Comma seperated fields from the model | [optional] 
 **where** | [**Object**](.md)| Where expression | [optional] 
 **limit** | **Number**| Page size limit | [optional] 
 **offset** | **Number**| Pagination offset | [optional] 
 **sort** | **String**| Comma seperated sort fieldst | [optional] 

### Return type

[**CofFunction**](CofFunction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getcofFunction"></a>
# **getcofFunction**
> getcofFunction(opts)

Get list



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofFunctionApi();

var opts = { 
  'fields': null, // Object | Comma seperated fields from the model
  'where': null, // Object | Where expression
  'limit': 789, // Number | Page size limit
  'offset': 789, // Number | Pagination offset
  'sort': "sort_example" // String | Comma seperated sort fields
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getcofFunction(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**Object**](.md)| Comma seperated fields from the model | [optional] 
 **where** | [**Object**](.md)| Where expression | [optional] 
 **limit** | **Number**| Page size limit | [optional] 
 **offset** | **Number**| Pagination offset | [optional] 
 **sort** | **String**| Comma seperated sort fields | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getcofFunctionById"></a>
# **getcofFunctionById**
> CofFunction getcofFunctionById(cofFunctionId)

Find cof_function by ID

Returns a single cof_function

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofFunctionApi();

var cofFunctionId = 789; // Number | ID of cof_function to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getcofFunctionById(cofFunctionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofFunctionId** | **Number**| ID of cof_function to return | 

### Return type

[**CofFunction**](CofFunction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getcofFunctionCount"></a>
# **getcofFunctionCount**
> Object getcofFunctionCount(opts)

Get cof_function count

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofFunctionApi();

var opts = { 
  'where': null // Object | Where expression
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getcofFunctionCount(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | [**Object**](.md)| Where expression | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatecofFunction"></a>
# **updatecofFunction**
> updatecofFunction(cofFunctionId, body)

Updates a cof_function



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofFunctionApi();

var cofFunctionId = 789; // Number | ID of cof_function to return

var body = new XgeneCloud.CofFunction(); // CofFunction | cof_function object that needs to be added to the store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofFunction(cofFunctionId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofFunctionId** | **Number**| ID of cof_function to return | 
 **body** | [**CofFunction**](CofFunction.md)| cof_function object that needs to be added to the store | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatecofFunction_0"></a>
# **updatecofFunction_0**
> updatecofFunction_0(body)

Updates a cof_function



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofFunctionApi();

var body = [new XgeneCloud.CofFunction()]; // [CofFunction] | cof_function objects with id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofFunction_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofFunction]**](CofFunction.md)| cof_function objects with id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

