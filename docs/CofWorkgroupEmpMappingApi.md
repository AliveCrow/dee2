# XgeneCloud.CofWorkgroupEmpMappingApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addcofWorkgroupEmpMapping**](CofWorkgroupEmpMappingApi.md#addcofWorkgroupEmpMapping) | **POST** /api/v1/cof_workgroup_emp_mapping | Add a new cof_workgroup_emp_mapping
[**bulkcofWorkgroupEmpMappingInsert**](CofWorkgroupEmpMappingApi.md#bulkcofWorkgroupEmpMappingInsert) | **POST** /api/v1/cof_workgroup_emp_mapping/bulk | Bulk cof_workgroup_emp_mapping insert
[**checkcofWorkgroupEmpMappingExists**](CofWorkgroupEmpMappingApi.md#checkcofWorkgroupEmpMappingExists) | **GET** /api/v1/cof_workgroup_emp_mapping/{cof_workgroup_emp_mappingId}/exists | Check cof_workgroup_emp_mapping with provided ID exists
[**cofWorkgroupEmpMappingAggregate**](CofWorkgroupEmpMappingApi.md#cofWorkgroupEmpMappingAggregate) | **GET** /api/v1/cof_workgroup_emp_mapping/aggregate/{columnName} | Get first one from filtered data
[**cofWorkgroupEmpMappingDistinct**](CofWorkgroupEmpMappingApi.md#cofWorkgroupEmpMappingDistinct) | **GET** /api/v1/cof_workgroup_emp_mapping/distinct/{columnName} | Get first one from filtered data
[**cofWorkgroupEmpMappingDistribution**](CofWorkgroupEmpMappingApi.md#cofWorkgroupEmpMappingDistribution) | **GET** /api/v1/cof_workgroup_emp_mapping/distribution/{columnName} | 
[**cofWorkgroupEmpMappingGroupByColumn**](CofWorkgroupEmpMappingApi.md#cofWorkgroupEmpMappingGroupByColumn) | **GET** /api/v1/cof_workgroup_emp_mapping/groupby/{columnName} | Group by column
[**deletecofWorkgroupEmpMapping**](CofWorkgroupEmpMappingApi.md#deletecofWorkgroupEmpMapping) | **DELETE** /api/v1/cof_workgroup_emp_mapping/{cof_workgroup_emp_mappingId} | Deletes a cof_workgroup_emp_mapping
[**deletecofWorkgroupEmpMapping_0**](CofWorkgroupEmpMappingApi.md#deletecofWorkgroupEmpMapping_0) | **DELETE** /api/v1/cof_workgroup_emp_mapping/bulk | Deletes a cof_workgroup_emp_mapping
[**findOnecofWorkgroupEmpMapping**](CofWorkgroupEmpMappingApi.md#findOnecofWorkgroupEmpMapping) | **GET** /api/v1/cof_workgroup_emp_mapping/findOne | Get first one from filtered data
[**getcofWorkgroupEmpMapping**](CofWorkgroupEmpMappingApi.md#getcofWorkgroupEmpMapping) | **GET** /api/v1/cof_workgroup_emp_mapping | Get list
[**getcofWorkgroupEmpMappingById**](CofWorkgroupEmpMappingApi.md#getcofWorkgroupEmpMappingById) | **GET** /api/v1/cof_workgroup_emp_mapping/{cof_workgroup_emp_mappingId} | Find cof_workgroup_emp_mapping by ID
[**getcofWorkgroupEmpMappingCount**](CofWorkgroupEmpMappingApi.md#getcofWorkgroupEmpMappingCount) | **GET** /api/v1/cof_workgroup_emp_mapping/count | Get cof_workgroup_emp_mapping count
[**updatecofWorkgroupEmpMapping**](CofWorkgroupEmpMappingApi.md#updatecofWorkgroupEmpMapping) | **PUT** /api/v1/cof_workgroup_emp_mapping/{cof_workgroup_emp_mappingId} | Updates a cof_workgroup_emp_mapping
[**updatecofWorkgroupEmpMapping_0**](CofWorkgroupEmpMappingApi.md#updatecofWorkgroupEmpMapping_0) | **PUT** /api/v1/cof_workgroup_emp_mapping/bulk | Updates a cof_workgroup_emp_mapping


<a name="addcofWorkgroupEmpMapping"></a>
# **addcofWorkgroupEmpMapping**
> addcofWorkgroupEmpMapping(body)

Add a new cof_workgroup_emp_mapping



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofWorkgroupEmpMappingApi();

var body = new XgeneCloud.CofWorkgroupEmpMapping(); // CofWorkgroupEmpMapping | cof_workgroup_emp_mapping object that needs to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addcofWorkgroupEmpMapping(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CofWorkgroupEmpMapping**](CofWorkgroupEmpMapping.md)| cof_workgroup_emp_mapping object that needs to add | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkcofWorkgroupEmpMappingInsert"></a>
# **bulkcofWorkgroupEmpMappingInsert**
> bulkcofWorkgroupEmpMappingInsert(body)

Bulk cof_workgroup_emp_mapping insert



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofWorkgroupEmpMappingApi();

var body = [new XgeneCloud.CofWorkgroupEmpMapping()]; // [CofWorkgroupEmpMapping] | cof_workgroup_emp_mapping objects


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkcofWorkgroupEmpMappingInsert(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofWorkgroupEmpMapping]**](CofWorkgroupEmpMapping.md)| cof_workgroup_emp_mapping objects | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="checkcofWorkgroupEmpMappingExists"></a>
# **checkcofWorkgroupEmpMappingExists**
> 'Boolean' checkcofWorkgroupEmpMappingExists(cofWorkgroupEmpMappingId)

Check cof_workgroup_emp_mapping with provided ID exists

Returns a single cof_workgroup_emp_mapping

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofWorkgroupEmpMappingApi();

var cofWorkgroupEmpMappingId = 789; // Number | ID of cof_workgroup_emp_mapping


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkcofWorkgroupEmpMappingExists(cofWorkgroupEmpMappingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofWorkgroupEmpMappingId** | **Number**| ID of cof_workgroup_emp_mapping | 

### Return type

**'Boolean'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cofWorkgroupEmpMappingAggregate"></a>
# **cofWorkgroupEmpMappingAggregate**
> CofWorkgroupEmpMapping cofWorkgroupEmpMappingAggregate(columnName, fields, func, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofWorkgroupEmpMappingApi();

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
apiInstance.cofWorkgroupEmpMappingAggregate(columnName, fields, func, opts, callback);
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

[**CofWorkgroupEmpMapping**](CofWorkgroupEmpMapping.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cofWorkgroupEmpMappingDistinct"></a>
# **cofWorkgroupEmpMappingDistinct**
> [Object] cofWorkgroupEmpMappingDistinct(columnName, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofWorkgroupEmpMappingApi();

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
apiInstance.cofWorkgroupEmpMappingDistinct(columnName, opts, callback);
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

<a name="cofWorkgroupEmpMappingDistribution"></a>
# **cofWorkgroupEmpMappingDistribution**
> [Object] cofWorkgroupEmpMappingDistribution(columnName, opts)





### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofWorkgroupEmpMappingApi();

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
apiInstance.cofWorkgroupEmpMappingDistribution(columnName, opts, callback);
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

<a name="cofWorkgroupEmpMappingGroupByColumn"></a>
# **cofWorkgroupEmpMappingGroupByColumn**
> CofWorkgroupEmpMapping cofWorkgroupEmpMappingGroupByColumn(columnName, opts)

Group by column



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofWorkgroupEmpMappingApi();

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
apiInstance.cofWorkgroupEmpMappingGroupByColumn(columnName, opts, callback);
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

[**CofWorkgroupEmpMapping**](CofWorkgroupEmpMapping.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletecofWorkgroupEmpMapping"></a>
# **deletecofWorkgroupEmpMapping**
> deletecofWorkgroupEmpMapping(cofWorkgroupEmpMappingId)

Deletes a cof_workgroup_emp_mapping



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofWorkgroupEmpMappingApi();

var cofWorkgroupEmpMappingId = 789; // Number | ID of cof_workgroup_emp_mapping to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofWorkgroupEmpMapping(cofWorkgroupEmpMappingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofWorkgroupEmpMappingId** | **Number**| ID of cof_workgroup_emp_mapping to return | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletecofWorkgroupEmpMapping_0"></a>
# **deletecofWorkgroupEmpMapping_0**
> deletecofWorkgroupEmpMapping_0(body)

Deletes a cof_workgroup_emp_mapping



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofWorkgroupEmpMappingApi();

var body = [new XgeneCloud.CofWorkgroupEmpMapping()]; // [CofWorkgroupEmpMapping] | cof_workgroup_emp_mapping objects contains id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofWorkgroupEmpMapping_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofWorkgroupEmpMapping]**](CofWorkgroupEmpMapping.md)| cof_workgroup_emp_mapping objects contains id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findOnecofWorkgroupEmpMapping"></a>
# **findOnecofWorkgroupEmpMapping**
> CofWorkgroupEmpMapping findOnecofWorkgroupEmpMapping(opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofWorkgroupEmpMappingApi();

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
apiInstance.findOnecofWorkgroupEmpMapping(opts, callback);
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

[**CofWorkgroupEmpMapping**](CofWorkgroupEmpMapping.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getcofWorkgroupEmpMapping"></a>
# **getcofWorkgroupEmpMapping**
> getcofWorkgroupEmpMapping(opts)

Get list



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofWorkgroupEmpMappingApi();

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
apiInstance.getcofWorkgroupEmpMapping(opts, callback);
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

<a name="getcofWorkgroupEmpMappingById"></a>
# **getcofWorkgroupEmpMappingById**
> CofWorkgroupEmpMapping getcofWorkgroupEmpMappingById(cofWorkgroupEmpMappingId)

Find cof_workgroup_emp_mapping by ID

Returns a single cof_workgroup_emp_mapping

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofWorkgroupEmpMappingApi();

var cofWorkgroupEmpMappingId = 789; // Number | ID of cof_workgroup_emp_mapping to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getcofWorkgroupEmpMappingById(cofWorkgroupEmpMappingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofWorkgroupEmpMappingId** | **Number**| ID of cof_workgroup_emp_mapping to return | 

### Return type

[**CofWorkgroupEmpMapping**](CofWorkgroupEmpMapping.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getcofWorkgroupEmpMappingCount"></a>
# **getcofWorkgroupEmpMappingCount**
> Object getcofWorkgroupEmpMappingCount(opts)

Get cof_workgroup_emp_mapping count

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofWorkgroupEmpMappingApi();

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
apiInstance.getcofWorkgroupEmpMappingCount(opts, callback);
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

<a name="updatecofWorkgroupEmpMapping"></a>
# **updatecofWorkgroupEmpMapping**
> updatecofWorkgroupEmpMapping(cofWorkgroupEmpMappingId, body)

Updates a cof_workgroup_emp_mapping



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofWorkgroupEmpMappingApi();

var cofWorkgroupEmpMappingId = 789; // Number | ID of cof_workgroup_emp_mapping to return

var body = new XgeneCloud.CofWorkgroupEmpMapping(); // CofWorkgroupEmpMapping | cof_workgroup_emp_mapping object that needs to be added to the store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofWorkgroupEmpMapping(cofWorkgroupEmpMappingId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofWorkgroupEmpMappingId** | **Number**| ID of cof_workgroup_emp_mapping to return | 
 **body** | [**CofWorkgroupEmpMapping**](CofWorkgroupEmpMapping.md)| cof_workgroup_emp_mapping object that needs to be added to the store | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatecofWorkgroupEmpMapping_0"></a>
# **updatecofWorkgroupEmpMapping_0**
> updatecofWorkgroupEmpMapping_0(body)

Updates a cof_workgroup_emp_mapping



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofWorkgroupEmpMappingApi();

var body = [new XgeneCloud.CofWorkgroupEmpMapping()]; // [CofWorkgroupEmpMapping] | cof_workgroup_emp_mapping objects with id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofWorkgroupEmpMapping_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofWorkgroupEmpMapping]**](CofWorkgroupEmpMapping.md)| cof_workgroup_emp_mapping objects with id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

