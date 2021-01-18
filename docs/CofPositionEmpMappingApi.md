# XgeneCloud.CofPositionEmpMappingApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addcofPositionEmpMapping**](CofPositionEmpMappingApi.md#addcofPositionEmpMapping) | **POST** /api/v1/cof_position_emp_mapping | Add a new cof_position_emp_mapping
[**bulkcofPositionEmpMappingInsert**](CofPositionEmpMappingApi.md#bulkcofPositionEmpMappingInsert) | **POST** /api/v1/cof_position_emp_mapping/bulk | Bulk cof_position_emp_mapping insert
[**checkcofPositionEmpMappingExists**](CofPositionEmpMappingApi.md#checkcofPositionEmpMappingExists) | **GET** /api/v1/cof_position_emp_mapping/{cof_position_emp_mappingId}/exists | Check cof_position_emp_mapping with provided ID exists
[**cofPositionEmpMappingAggregate**](CofPositionEmpMappingApi.md#cofPositionEmpMappingAggregate) | **GET** /api/v1/cof_position_emp_mapping/aggregate/{columnName} | Get first one from filtered data
[**cofPositionEmpMappingDistinct**](CofPositionEmpMappingApi.md#cofPositionEmpMappingDistinct) | **GET** /api/v1/cof_position_emp_mapping/distinct/{columnName} | Get first one from filtered data
[**cofPositionEmpMappingDistribution**](CofPositionEmpMappingApi.md#cofPositionEmpMappingDistribution) | **GET** /api/v1/cof_position_emp_mapping/distribution/{columnName} | 
[**cofPositionEmpMappingGroupByColumn**](CofPositionEmpMappingApi.md#cofPositionEmpMappingGroupByColumn) | **GET** /api/v1/cof_position_emp_mapping/groupby/{columnName} | Group by column
[**deletecofPositionEmpMapping**](CofPositionEmpMappingApi.md#deletecofPositionEmpMapping) | **DELETE** /api/v1/cof_position_emp_mapping/{cof_position_emp_mappingId} | Deletes a cof_position_emp_mapping
[**deletecofPositionEmpMapping_0**](CofPositionEmpMappingApi.md#deletecofPositionEmpMapping_0) | **DELETE** /api/v1/cof_position_emp_mapping/bulk | Deletes a cof_position_emp_mapping
[**findOnecofPositionEmpMapping**](CofPositionEmpMappingApi.md#findOnecofPositionEmpMapping) | **GET** /api/v1/cof_position_emp_mapping/findOne | Get first one from filtered data
[**getcofPositionEmpMapping**](CofPositionEmpMappingApi.md#getcofPositionEmpMapping) | **GET** /api/v1/cof_position_emp_mapping | Get list
[**getcofPositionEmpMappingById**](CofPositionEmpMappingApi.md#getcofPositionEmpMappingById) | **GET** /api/v1/cof_position_emp_mapping/{cof_position_emp_mappingId} | Find cof_position_emp_mapping by ID
[**getcofPositionEmpMappingCount**](CofPositionEmpMappingApi.md#getcofPositionEmpMappingCount) | **GET** /api/v1/cof_position_emp_mapping/count | Get cof_position_emp_mapping count
[**updatecofPositionEmpMapping**](CofPositionEmpMappingApi.md#updatecofPositionEmpMapping) | **PUT** /api/v1/cof_position_emp_mapping/{cof_position_emp_mappingId} | Updates a cof_position_emp_mapping
[**updatecofPositionEmpMapping_0**](CofPositionEmpMappingApi.md#updatecofPositionEmpMapping_0) | **PUT** /api/v1/cof_position_emp_mapping/bulk | Updates a cof_position_emp_mapping


<a name="addcofPositionEmpMapping"></a>
# **addcofPositionEmpMapping**
> addcofPositionEmpMapping(body)

Add a new cof_position_emp_mapping



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofPositionEmpMappingApi();

var body = new XgeneCloud.CofPositionEmpMapping(); // CofPositionEmpMapping | cof_position_emp_mapping object that needs to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addcofPositionEmpMapping(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CofPositionEmpMapping**](CofPositionEmpMapping.md)| cof_position_emp_mapping object that needs to add | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkcofPositionEmpMappingInsert"></a>
# **bulkcofPositionEmpMappingInsert**
> bulkcofPositionEmpMappingInsert(body)

Bulk cof_position_emp_mapping insert



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofPositionEmpMappingApi();

var body = [new XgeneCloud.CofPositionEmpMapping()]; // [CofPositionEmpMapping] | cof_position_emp_mapping objects


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkcofPositionEmpMappingInsert(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofPositionEmpMapping]**](CofPositionEmpMapping.md)| cof_position_emp_mapping objects | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="checkcofPositionEmpMappingExists"></a>
# **checkcofPositionEmpMappingExists**
> 'Boolean' checkcofPositionEmpMappingExists(cofPositionEmpMappingId)

Check cof_position_emp_mapping with provided ID exists

Returns a single cof_position_emp_mapping

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofPositionEmpMappingApi();

var cofPositionEmpMappingId = 789; // Number | ID of cof_position_emp_mapping


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkcofPositionEmpMappingExists(cofPositionEmpMappingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofPositionEmpMappingId** | **Number**| ID of cof_position_emp_mapping | 

### Return type

**'Boolean'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cofPositionEmpMappingAggregate"></a>
# **cofPositionEmpMappingAggregate**
> CofPositionEmpMapping cofPositionEmpMappingAggregate(columnName, fields, func, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofPositionEmpMappingApi();

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
apiInstance.cofPositionEmpMappingAggregate(columnName, fields, func, opts, callback);
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

[**CofPositionEmpMapping**](CofPositionEmpMapping.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cofPositionEmpMappingDistinct"></a>
# **cofPositionEmpMappingDistinct**
> [Object] cofPositionEmpMappingDistinct(columnName, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofPositionEmpMappingApi();

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
apiInstance.cofPositionEmpMappingDistinct(columnName, opts, callback);
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

<a name="cofPositionEmpMappingDistribution"></a>
# **cofPositionEmpMappingDistribution**
> [Object] cofPositionEmpMappingDistribution(columnName, opts)





### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofPositionEmpMappingApi();

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
apiInstance.cofPositionEmpMappingDistribution(columnName, opts, callback);
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

<a name="cofPositionEmpMappingGroupByColumn"></a>
# **cofPositionEmpMappingGroupByColumn**
> CofPositionEmpMapping cofPositionEmpMappingGroupByColumn(columnName, opts)

Group by column



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofPositionEmpMappingApi();

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
apiInstance.cofPositionEmpMappingGroupByColumn(columnName, opts, callback);
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

[**CofPositionEmpMapping**](CofPositionEmpMapping.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletecofPositionEmpMapping"></a>
# **deletecofPositionEmpMapping**
> deletecofPositionEmpMapping(cofPositionEmpMappingId)

Deletes a cof_position_emp_mapping



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofPositionEmpMappingApi();

var cofPositionEmpMappingId = 789; // Number | ID of cof_position_emp_mapping to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofPositionEmpMapping(cofPositionEmpMappingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofPositionEmpMappingId** | **Number**| ID of cof_position_emp_mapping to return | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletecofPositionEmpMapping_0"></a>
# **deletecofPositionEmpMapping_0**
> deletecofPositionEmpMapping_0(body)

Deletes a cof_position_emp_mapping



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofPositionEmpMappingApi();

var body = [new XgeneCloud.CofPositionEmpMapping()]; // [CofPositionEmpMapping] | cof_position_emp_mapping objects contains id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofPositionEmpMapping_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofPositionEmpMapping]**](CofPositionEmpMapping.md)| cof_position_emp_mapping objects contains id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findOnecofPositionEmpMapping"></a>
# **findOnecofPositionEmpMapping**
> CofPositionEmpMapping findOnecofPositionEmpMapping(opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofPositionEmpMappingApi();

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
apiInstance.findOnecofPositionEmpMapping(opts, callback);
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

[**CofPositionEmpMapping**](CofPositionEmpMapping.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getcofPositionEmpMapping"></a>
# **getcofPositionEmpMapping**
> getcofPositionEmpMapping(opts)

Get list



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofPositionEmpMappingApi();

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
apiInstance.getcofPositionEmpMapping(opts, callback);
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

<a name="getcofPositionEmpMappingById"></a>
# **getcofPositionEmpMappingById**
> CofPositionEmpMapping getcofPositionEmpMappingById(cofPositionEmpMappingId)

Find cof_position_emp_mapping by ID

Returns a single cof_position_emp_mapping

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofPositionEmpMappingApi();

var cofPositionEmpMappingId = 789; // Number | ID of cof_position_emp_mapping to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getcofPositionEmpMappingById(cofPositionEmpMappingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofPositionEmpMappingId** | **Number**| ID of cof_position_emp_mapping to return | 

### Return type

[**CofPositionEmpMapping**](CofPositionEmpMapping.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getcofPositionEmpMappingCount"></a>
# **getcofPositionEmpMappingCount**
> Object getcofPositionEmpMappingCount(opts)

Get cof_position_emp_mapping count

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofPositionEmpMappingApi();

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
apiInstance.getcofPositionEmpMappingCount(opts, callback);
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

<a name="updatecofPositionEmpMapping"></a>
# **updatecofPositionEmpMapping**
> updatecofPositionEmpMapping(cofPositionEmpMappingId, body)

Updates a cof_position_emp_mapping



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofPositionEmpMappingApi();

var cofPositionEmpMappingId = 789; // Number | ID of cof_position_emp_mapping to return

var body = new XgeneCloud.CofPositionEmpMapping(); // CofPositionEmpMapping | cof_position_emp_mapping object that needs to be added to the store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofPositionEmpMapping(cofPositionEmpMappingId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofPositionEmpMappingId** | **Number**| ID of cof_position_emp_mapping to return | 
 **body** | [**CofPositionEmpMapping**](CofPositionEmpMapping.md)| cof_position_emp_mapping object that needs to be added to the store | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatecofPositionEmpMapping_0"></a>
# **updatecofPositionEmpMapping_0**
> updatecofPositionEmpMapping_0(body)

Updates a cof_position_emp_mapping



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofPositionEmpMappingApi();

var body = [new XgeneCloud.CofPositionEmpMapping()]; // [CofPositionEmpMapping] | cof_position_emp_mapping objects with id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofPositionEmpMapping_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofPositionEmpMapping]**](CofPositionEmpMapping.md)| cof_position_emp_mapping objects with id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

