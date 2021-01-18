# XgeneCloud.CofOperationLogDetailApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addcofOperationLogDetail**](CofOperationLogDetailApi.md#addcofOperationLogDetail) | **POST** /api/v1/cof_operation_log_detail | Add a new cof_operation_log_detail
[**bulkcofOperationLogDetailInsert**](CofOperationLogDetailApi.md#bulkcofOperationLogDetailInsert) | **POST** /api/v1/cof_operation_log_detail/bulk | Bulk cof_operation_log_detail insert
[**checkcofOperationLogDetailExists**](CofOperationLogDetailApi.md#checkcofOperationLogDetailExists) | **GET** /api/v1/cof_operation_log_detail/{cof_operation_log_detailId}/exists | Check cof_operation_log_detail with provided ID exists
[**cofOperationLogDetailAggregate**](CofOperationLogDetailApi.md#cofOperationLogDetailAggregate) | **GET** /api/v1/cof_operation_log_detail/aggregate/{columnName} | Get first one from filtered data
[**cofOperationLogDetailDistinct**](CofOperationLogDetailApi.md#cofOperationLogDetailDistinct) | **GET** /api/v1/cof_operation_log_detail/distinct/{columnName} | Get first one from filtered data
[**cofOperationLogDetailDistribution**](CofOperationLogDetailApi.md#cofOperationLogDetailDistribution) | **GET** /api/v1/cof_operation_log_detail/distribution/{columnName} | 
[**cofOperationLogDetailGroupByColumn**](CofOperationLogDetailApi.md#cofOperationLogDetailGroupByColumn) | **GET** /api/v1/cof_operation_log_detail/groupby/{columnName} | Group by column
[**deletecofOperationLogDetail**](CofOperationLogDetailApi.md#deletecofOperationLogDetail) | **DELETE** /api/v1/cof_operation_log_detail/{cof_operation_log_detailId} | Deletes a cof_operation_log_detail
[**deletecofOperationLogDetail_0**](CofOperationLogDetailApi.md#deletecofOperationLogDetail_0) | **DELETE** /api/v1/cof_operation_log_detail/bulk | Deletes a cof_operation_log_detail
[**findOnecofOperationLogDetail**](CofOperationLogDetailApi.md#findOnecofOperationLogDetail) | **GET** /api/v1/cof_operation_log_detail/findOne | Get first one from filtered data
[**getcofOperationLogDetail**](CofOperationLogDetailApi.md#getcofOperationLogDetail) | **GET** /api/v1/cof_operation_log_detail | Get list
[**getcofOperationLogDetailById**](CofOperationLogDetailApi.md#getcofOperationLogDetailById) | **GET** /api/v1/cof_operation_log_detail/{cof_operation_log_detailId} | Find cof_operation_log_detail by ID
[**getcofOperationLogDetailCount**](CofOperationLogDetailApi.md#getcofOperationLogDetailCount) | **GET** /api/v1/cof_operation_log_detail/count | Get cof_operation_log_detail count
[**updatecofOperationLogDetail**](CofOperationLogDetailApi.md#updatecofOperationLogDetail) | **PUT** /api/v1/cof_operation_log_detail/{cof_operation_log_detailId} | Updates a cof_operation_log_detail
[**updatecofOperationLogDetail_0**](CofOperationLogDetailApi.md#updatecofOperationLogDetail_0) | **PUT** /api/v1/cof_operation_log_detail/bulk | Updates a cof_operation_log_detail


<a name="addcofOperationLogDetail"></a>
# **addcofOperationLogDetail**
> addcofOperationLogDetail(body)

Add a new cof_operation_log_detail



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOperationLogDetailApi();

var body = new XgeneCloud.CofOperationLogDetail(); // CofOperationLogDetail | cof_operation_log_detail object that needs to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addcofOperationLogDetail(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CofOperationLogDetail**](CofOperationLogDetail.md)| cof_operation_log_detail object that needs to add | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkcofOperationLogDetailInsert"></a>
# **bulkcofOperationLogDetailInsert**
> bulkcofOperationLogDetailInsert(body)

Bulk cof_operation_log_detail insert



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOperationLogDetailApi();

var body = [new XgeneCloud.CofOperationLogDetail()]; // [CofOperationLogDetail] | cof_operation_log_detail objects


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkcofOperationLogDetailInsert(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofOperationLogDetail]**](CofOperationLogDetail.md)| cof_operation_log_detail objects | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="checkcofOperationLogDetailExists"></a>
# **checkcofOperationLogDetailExists**
> 'Boolean' checkcofOperationLogDetailExists(cofOperationLogDetailId)

Check cof_operation_log_detail with provided ID exists

Returns a single cof_operation_log_detail

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOperationLogDetailApi();

var cofOperationLogDetailId = 789; // Number | ID of cof_operation_log_detail


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkcofOperationLogDetailExists(cofOperationLogDetailId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofOperationLogDetailId** | **Number**| ID of cof_operation_log_detail | 

### Return type

**'Boolean'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cofOperationLogDetailAggregate"></a>
# **cofOperationLogDetailAggregate**
> CofOperationLogDetail cofOperationLogDetailAggregate(columnName, fields, func, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOperationLogDetailApi();

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
apiInstance.cofOperationLogDetailAggregate(columnName, fields, func, opts, callback);
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

[**CofOperationLogDetail**](CofOperationLogDetail.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cofOperationLogDetailDistinct"></a>
# **cofOperationLogDetailDistinct**
> [Object] cofOperationLogDetailDistinct(columnName, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOperationLogDetailApi();

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
apiInstance.cofOperationLogDetailDistinct(columnName, opts, callback);
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

<a name="cofOperationLogDetailDistribution"></a>
# **cofOperationLogDetailDistribution**
> [Object] cofOperationLogDetailDistribution(columnName, opts)





### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOperationLogDetailApi();

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
apiInstance.cofOperationLogDetailDistribution(columnName, opts, callback);
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

<a name="cofOperationLogDetailGroupByColumn"></a>
# **cofOperationLogDetailGroupByColumn**
> CofOperationLogDetail cofOperationLogDetailGroupByColumn(columnName, opts)

Group by column



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOperationLogDetailApi();

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
apiInstance.cofOperationLogDetailGroupByColumn(columnName, opts, callback);
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

[**CofOperationLogDetail**](CofOperationLogDetail.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletecofOperationLogDetail"></a>
# **deletecofOperationLogDetail**
> deletecofOperationLogDetail(cofOperationLogDetailId)

Deletes a cof_operation_log_detail



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOperationLogDetailApi();

var cofOperationLogDetailId = 789; // Number | ID of cof_operation_log_detail to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofOperationLogDetail(cofOperationLogDetailId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofOperationLogDetailId** | **Number**| ID of cof_operation_log_detail to return | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletecofOperationLogDetail_0"></a>
# **deletecofOperationLogDetail_0**
> deletecofOperationLogDetail_0(body)

Deletes a cof_operation_log_detail



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOperationLogDetailApi();

var body = [new XgeneCloud.CofOperationLogDetail()]; // [CofOperationLogDetail] | cof_operation_log_detail objects contains id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofOperationLogDetail_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofOperationLogDetail]**](CofOperationLogDetail.md)| cof_operation_log_detail objects contains id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findOnecofOperationLogDetail"></a>
# **findOnecofOperationLogDetail**
> CofOperationLogDetail findOnecofOperationLogDetail(opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOperationLogDetailApi();

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
apiInstance.findOnecofOperationLogDetail(opts, callback);
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

[**CofOperationLogDetail**](CofOperationLogDetail.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getcofOperationLogDetail"></a>
# **getcofOperationLogDetail**
> getcofOperationLogDetail(opts)

Get list



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOperationLogDetailApi();

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
apiInstance.getcofOperationLogDetail(opts, callback);
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

<a name="getcofOperationLogDetailById"></a>
# **getcofOperationLogDetailById**
> CofOperationLogDetail getcofOperationLogDetailById(cofOperationLogDetailId)

Find cof_operation_log_detail by ID

Returns a single cof_operation_log_detail

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOperationLogDetailApi();

var cofOperationLogDetailId = 789; // Number | ID of cof_operation_log_detail to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getcofOperationLogDetailById(cofOperationLogDetailId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofOperationLogDetailId** | **Number**| ID of cof_operation_log_detail to return | 

### Return type

[**CofOperationLogDetail**](CofOperationLogDetail.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getcofOperationLogDetailCount"></a>
# **getcofOperationLogDetailCount**
> Object getcofOperationLogDetailCount(opts)

Get cof_operation_log_detail count

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOperationLogDetailApi();

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
apiInstance.getcofOperationLogDetailCount(opts, callback);
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

<a name="updatecofOperationLogDetail"></a>
# **updatecofOperationLogDetail**
> updatecofOperationLogDetail(cofOperationLogDetailId, body)

Updates a cof_operation_log_detail



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOperationLogDetailApi();

var cofOperationLogDetailId = 789; // Number | ID of cof_operation_log_detail to return

var body = new XgeneCloud.CofOperationLogDetail(); // CofOperationLogDetail | cof_operation_log_detail object that needs to be added to the store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofOperationLogDetail(cofOperationLogDetailId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofOperationLogDetailId** | **Number**| ID of cof_operation_log_detail to return | 
 **body** | [**CofOperationLogDetail**](CofOperationLogDetail.md)| cof_operation_log_detail object that needs to be added to the store | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatecofOperationLogDetail_0"></a>
# **updatecofOperationLogDetail_0**
> updatecofOperationLogDetail_0(body)

Updates a cof_operation_log_detail



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOperationLogDetailApi();

var body = [new XgeneCloud.CofOperationLogDetail()]; // [CofOperationLogDetail] | cof_operation_log_detail objects with id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofOperationLogDetail_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofOperationLogDetail]**](CofOperationLogDetail.md)| cof_operation_log_detail objects with id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

