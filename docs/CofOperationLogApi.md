# XgeneCloud.CofOperationLogApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addcofOperationLog**](CofOperationLogApi.md#addcofOperationLog) | **POST** /api/v1/cof_operation_log | Add a new cof_operation_log
[**bulkcofOperationLogInsert**](CofOperationLogApi.md#bulkcofOperationLogInsert) | **POST** /api/v1/cof_operation_log/bulk | Bulk cof_operation_log insert
[**checkcofOperationLogExists**](CofOperationLogApi.md#checkcofOperationLogExists) | **GET** /api/v1/cof_operation_log/{cof_operation_logId}/exists | Check cof_operation_log with provided ID exists
[**cofOperationLogAggregate**](CofOperationLogApi.md#cofOperationLogAggregate) | **GET** /api/v1/cof_operation_log/aggregate/{columnName} | Get first one from filtered data
[**cofOperationLogDistinct**](CofOperationLogApi.md#cofOperationLogDistinct) | **GET** /api/v1/cof_operation_log/distinct/{columnName} | Get first one from filtered data
[**cofOperationLogDistribution**](CofOperationLogApi.md#cofOperationLogDistribution) | **GET** /api/v1/cof_operation_log/distribution/{columnName} | 
[**cofOperationLogGroupByColumn**](CofOperationLogApi.md#cofOperationLogGroupByColumn) | **GET** /api/v1/cof_operation_log/groupby/{columnName} | Group by column
[**deletecofOperationLog**](CofOperationLogApi.md#deletecofOperationLog) | **DELETE** /api/v1/cof_operation_log/{cof_operation_logId} | Deletes a cof_operation_log
[**deletecofOperationLog_0**](CofOperationLogApi.md#deletecofOperationLog_0) | **DELETE** /api/v1/cof_operation_log/bulk | Deletes a cof_operation_log
[**findOnecofOperationLog**](CofOperationLogApi.md#findOnecofOperationLog) | **GET** /api/v1/cof_operation_log/findOne | Get first one from filtered data
[**getcofOperationLog**](CofOperationLogApi.md#getcofOperationLog) | **GET** /api/v1/cof_operation_log | Get list
[**getcofOperationLogById**](CofOperationLogApi.md#getcofOperationLogById) | **GET** /api/v1/cof_operation_log/{cof_operation_logId} | Find cof_operation_log by ID
[**getcofOperationLogCount**](CofOperationLogApi.md#getcofOperationLogCount) | **GET** /api/v1/cof_operation_log/count | Get cof_operation_log count
[**updatecofOperationLog**](CofOperationLogApi.md#updatecofOperationLog) | **PUT** /api/v1/cof_operation_log/{cof_operation_logId} | Updates a cof_operation_log
[**updatecofOperationLog_0**](CofOperationLogApi.md#updatecofOperationLog_0) | **PUT** /api/v1/cof_operation_log/bulk | Updates a cof_operation_log


<a name="addcofOperationLog"></a>
# **addcofOperationLog**
> addcofOperationLog(body)

Add a new cof_operation_log



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOperationLogApi();

var body = new XgeneCloud.CofOperationLog(); // CofOperationLog | cof_operation_log object that needs to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addcofOperationLog(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CofOperationLog**](CofOperationLog.md)| cof_operation_log object that needs to add | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkcofOperationLogInsert"></a>
# **bulkcofOperationLogInsert**
> bulkcofOperationLogInsert(body)

Bulk cof_operation_log insert



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOperationLogApi();

var body = [new XgeneCloud.CofOperationLog()]; // [CofOperationLog] | cof_operation_log objects


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkcofOperationLogInsert(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofOperationLog]**](CofOperationLog.md)| cof_operation_log objects | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="checkcofOperationLogExists"></a>
# **checkcofOperationLogExists**
> 'Boolean' checkcofOperationLogExists(cofOperationLogId)

Check cof_operation_log with provided ID exists

Returns a single cof_operation_log

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOperationLogApi();

var cofOperationLogId = 789; // Number | ID of cof_operation_log


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkcofOperationLogExists(cofOperationLogId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofOperationLogId** | **Number**| ID of cof_operation_log | 

### Return type

**'Boolean'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cofOperationLogAggregate"></a>
# **cofOperationLogAggregate**
> CofOperationLog cofOperationLogAggregate(columnName, fields, func, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOperationLogApi();

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
apiInstance.cofOperationLogAggregate(columnName, fields, func, opts, callback);
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

[**CofOperationLog**](CofOperationLog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cofOperationLogDistinct"></a>
# **cofOperationLogDistinct**
> [Object] cofOperationLogDistinct(columnName, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOperationLogApi();

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
apiInstance.cofOperationLogDistinct(columnName, opts, callback);
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

<a name="cofOperationLogDistribution"></a>
# **cofOperationLogDistribution**
> [Object] cofOperationLogDistribution(columnName, opts)





### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOperationLogApi();

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
apiInstance.cofOperationLogDistribution(columnName, opts, callback);
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

<a name="cofOperationLogGroupByColumn"></a>
# **cofOperationLogGroupByColumn**
> CofOperationLog cofOperationLogGroupByColumn(columnName, opts)

Group by column



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOperationLogApi();

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
apiInstance.cofOperationLogGroupByColumn(columnName, opts, callback);
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

[**CofOperationLog**](CofOperationLog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletecofOperationLog"></a>
# **deletecofOperationLog**
> deletecofOperationLog(cofOperationLogId)

Deletes a cof_operation_log



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOperationLogApi();

var cofOperationLogId = 789; // Number | ID of cof_operation_log to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofOperationLog(cofOperationLogId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofOperationLogId** | **Number**| ID of cof_operation_log to return | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletecofOperationLog_0"></a>
# **deletecofOperationLog_0**
> deletecofOperationLog_0(body)

Deletes a cof_operation_log



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOperationLogApi();

var body = [new XgeneCloud.CofOperationLog()]; // [CofOperationLog] | cof_operation_log objects contains id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofOperationLog_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofOperationLog]**](CofOperationLog.md)| cof_operation_log objects contains id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findOnecofOperationLog"></a>
# **findOnecofOperationLog**
> CofOperationLog findOnecofOperationLog(opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOperationLogApi();

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
apiInstance.findOnecofOperationLog(opts, callback);
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

[**CofOperationLog**](CofOperationLog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getcofOperationLog"></a>
# **getcofOperationLog**
> getcofOperationLog(opts)

Get list



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOperationLogApi();

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
apiInstance.getcofOperationLog(opts, callback);
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

<a name="getcofOperationLogById"></a>
# **getcofOperationLogById**
> CofOperationLog getcofOperationLogById(cofOperationLogId)

Find cof_operation_log by ID

Returns a single cof_operation_log

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOperationLogApi();

var cofOperationLogId = 789; // Number | ID of cof_operation_log to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getcofOperationLogById(cofOperationLogId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofOperationLogId** | **Number**| ID of cof_operation_log to return | 

### Return type

[**CofOperationLog**](CofOperationLog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getcofOperationLogCount"></a>
# **getcofOperationLogCount**
> Object getcofOperationLogCount(opts)

Get cof_operation_log count

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOperationLogApi();

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
apiInstance.getcofOperationLogCount(opts, callback);
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

<a name="updatecofOperationLog"></a>
# **updatecofOperationLog**
> updatecofOperationLog(cofOperationLogId, body)

Updates a cof_operation_log



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOperationLogApi();

var cofOperationLogId = 789; // Number | ID of cof_operation_log to return

var body = new XgeneCloud.CofOperationLog(); // CofOperationLog | cof_operation_log object that needs to be added to the store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofOperationLog(cofOperationLogId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofOperationLogId** | **Number**| ID of cof_operation_log to return | 
 **body** | [**CofOperationLog**](CofOperationLog.md)| cof_operation_log object that needs to be added to the store | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatecofOperationLog_0"></a>
# **updatecofOperationLog_0**
> updatecofOperationLog_0(body)

Updates a cof_operation_log



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOperationLogApi();

var body = [new XgeneCloud.CofOperationLog()]; // [CofOperationLog] | cof_operation_log objects with id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofOperationLog_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofOperationLog]**](CofOperationLog.md)| cof_operation_log objects with id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

