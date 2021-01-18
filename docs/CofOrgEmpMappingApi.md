# XgeneCloud.CofOrgEmpMappingApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addcofOrgEmpMapping**](CofOrgEmpMappingApi.md#addcofOrgEmpMapping) | **POST** /api/v1/cof_org_emp_mapping | Add a new cof_org_emp_mapping
[**bulkcofOrgEmpMappingInsert**](CofOrgEmpMappingApi.md#bulkcofOrgEmpMappingInsert) | **POST** /api/v1/cof_org_emp_mapping/bulk | Bulk cof_org_emp_mapping insert
[**checkcofOrgEmpMappingExists**](CofOrgEmpMappingApi.md#checkcofOrgEmpMappingExists) | **GET** /api/v1/cof_org_emp_mapping/{cof_org_emp_mappingId}/exists | Check cof_org_emp_mapping with provided ID exists
[**cofOrgEmpMappingAggregate**](CofOrgEmpMappingApi.md#cofOrgEmpMappingAggregate) | **GET** /api/v1/cof_org_emp_mapping/aggregate/{columnName} | Get first one from filtered data
[**cofOrgEmpMappingDistinct**](CofOrgEmpMappingApi.md#cofOrgEmpMappingDistinct) | **GET** /api/v1/cof_org_emp_mapping/distinct/{columnName} | Get first one from filtered data
[**cofOrgEmpMappingDistribution**](CofOrgEmpMappingApi.md#cofOrgEmpMappingDistribution) | **GET** /api/v1/cof_org_emp_mapping/distribution/{columnName} | 
[**cofOrgEmpMappingGroupByColumn**](CofOrgEmpMappingApi.md#cofOrgEmpMappingGroupByColumn) | **GET** /api/v1/cof_org_emp_mapping/groupby/{columnName} | Group by column
[**deletecofOrgEmpMapping**](CofOrgEmpMappingApi.md#deletecofOrgEmpMapping) | **DELETE** /api/v1/cof_org_emp_mapping/{cof_org_emp_mappingId} | Deletes a cof_org_emp_mapping
[**deletecofOrgEmpMapping_0**](CofOrgEmpMappingApi.md#deletecofOrgEmpMapping_0) | **DELETE** /api/v1/cof_org_emp_mapping/bulk | Deletes a cof_org_emp_mapping
[**findOnecofOrgEmpMapping**](CofOrgEmpMappingApi.md#findOnecofOrgEmpMapping) | **GET** /api/v1/cof_org_emp_mapping/findOne | Get first one from filtered data
[**getcofOrgEmpMapping**](CofOrgEmpMappingApi.md#getcofOrgEmpMapping) | **GET** /api/v1/cof_org_emp_mapping | Get list
[**getcofOrgEmpMappingById**](CofOrgEmpMappingApi.md#getcofOrgEmpMappingById) | **GET** /api/v1/cof_org_emp_mapping/{cof_org_emp_mappingId} | Find cof_org_emp_mapping by ID
[**getcofOrgEmpMappingCount**](CofOrgEmpMappingApi.md#getcofOrgEmpMappingCount) | **GET** /api/v1/cof_org_emp_mapping/count | Get cof_org_emp_mapping count
[**updatecofOrgEmpMapping**](CofOrgEmpMappingApi.md#updatecofOrgEmpMapping) | **PUT** /api/v1/cof_org_emp_mapping/{cof_org_emp_mappingId} | Updates a cof_org_emp_mapping
[**updatecofOrgEmpMapping_0**](CofOrgEmpMappingApi.md#updatecofOrgEmpMapping_0) | **PUT** /api/v1/cof_org_emp_mapping/bulk | Updates a cof_org_emp_mapping


<a name="addcofOrgEmpMapping"></a>
# **addcofOrgEmpMapping**
> addcofOrgEmpMapping(body)

Add a new cof_org_emp_mapping



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOrgEmpMappingApi();

var body = new XgeneCloud.CofOrgEmpMapping(); // CofOrgEmpMapping | cof_org_emp_mapping object that needs to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addcofOrgEmpMapping(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CofOrgEmpMapping**](CofOrgEmpMapping.md)| cof_org_emp_mapping object that needs to add | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkcofOrgEmpMappingInsert"></a>
# **bulkcofOrgEmpMappingInsert**
> bulkcofOrgEmpMappingInsert(body)

Bulk cof_org_emp_mapping insert



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOrgEmpMappingApi();

var body = [new XgeneCloud.CofOrgEmpMapping()]; // [CofOrgEmpMapping] | cof_org_emp_mapping objects


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkcofOrgEmpMappingInsert(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofOrgEmpMapping]**](CofOrgEmpMapping.md)| cof_org_emp_mapping objects | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="checkcofOrgEmpMappingExists"></a>
# **checkcofOrgEmpMappingExists**
> 'Boolean' checkcofOrgEmpMappingExists(cofOrgEmpMappingId)

Check cof_org_emp_mapping with provided ID exists

Returns a single cof_org_emp_mapping

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOrgEmpMappingApi();

var cofOrgEmpMappingId = 789; // Number | ID of cof_org_emp_mapping


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkcofOrgEmpMappingExists(cofOrgEmpMappingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofOrgEmpMappingId** | **Number**| ID of cof_org_emp_mapping | 

### Return type

**'Boolean'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cofOrgEmpMappingAggregate"></a>
# **cofOrgEmpMappingAggregate**
> CofOrgEmpMapping cofOrgEmpMappingAggregate(columnName, fields, func, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOrgEmpMappingApi();

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
apiInstance.cofOrgEmpMappingAggregate(columnName, fields, func, opts, callback);
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

[**CofOrgEmpMapping**](CofOrgEmpMapping.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cofOrgEmpMappingDistinct"></a>
# **cofOrgEmpMappingDistinct**
> [Object] cofOrgEmpMappingDistinct(columnName, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOrgEmpMappingApi();

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
apiInstance.cofOrgEmpMappingDistinct(columnName, opts, callback);
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

<a name="cofOrgEmpMappingDistribution"></a>
# **cofOrgEmpMappingDistribution**
> [Object] cofOrgEmpMappingDistribution(columnName, opts)





### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOrgEmpMappingApi();

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
apiInstance.cofOrgEmpMappingDistribution(columnName, opts, callback);
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

<a name="cofOrgEmpMappingGroupByColumn"></a>
# **cofOrgEmpMappingGroupByColumn**
> CofOrgEmpMapping cofOrgEmpMappingGroupByColumn(columnName, opts)

Group by column



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOrgEmpMappingApi();

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
apiInstance.cofOrgEmpMappingGroupByColumn(columnName, opts, callback);
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

[**CofOrgEmpMapping**](CofOrgEmpMapping.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletecofOrgEmpMapping"></a>
# **deletecofOrgEmpMapping**
> deletecofOrgEmpMapping(cofOrgEmpMappingId)

Deletes a cof_org_emp_mapping



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOrgEmpMappingApi();

var cofOrgEmpMappingId = 789; // Number | ID of cof_org_emp_mapping to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofOrgEmpMapping(cofOrgEmpMappingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofOrgEmpMappingId** | **Number**| ID of cof_org_emp_mapping to return | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletecofOrgEmpMapping_0"></a>
# **deletecofOrgEmpMapping_0**
> deletecofOrgEmpMapping_0(body)

Deletes a cof_org_emp_mapping



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOrgEmpMappingApi();

var body = [new XgeneCloud.CofOrgEmpMapping()]; // [CofOrgEmpMapping] | cof_org_emp_mapping objects contains id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofOrgEmpMapping_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofOrgEmpMapping]**](CofOrgEmpMapping.md)| cof_org_emp_mapping objects contains id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findOnecofOrgEmpMapping"></a>
# **findOnecofOrgEmpMapping**
> CofOrgEmpMapping findOnecofOrgEmpMapping(opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOrgEmpMappingApi();

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
apiInstance.findOnecofOrgEmpMapping(opts, callback);
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

[**CofOrgEmpMapping**](CofOrgEmpMapping.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getcofOrgEmpMapping"></a>
# **getcofOrgEmpMapping**
> getcofOrgEmpMapping(opts)

Get list



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOrgEmpMappingApi();

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
apiInstance.getcofOrgEmpMapping(opts, callback);
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

<a name="getcofOrgEmpMappingById"></a>
# **getcofOrgEmpMappingById**
> CofOrgEmpMapping getcofOrgEmpMappingById(cofOrgEmpMappingId)

Find cof_org_emp_mapping by ID

Returns a single cof_org_emp_mapping

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOrgEmpMappingApi();

var cofOrgEmpMappingId = 789; // Number | ID of cof_org_emp_mapping to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getcofOrgEmpMappingById(cofOrgEmpMappingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofOrgEmpMappingId** | **Number**| ID of cof_org_emp_mapping to return | 

### Return type

[**CofOrgEmpMapping**](CofOrgEmpMapping.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getcofOrgEmpMappingCount"></a>
# **getcofOrgEmpMappingCount**
> Object getcofOrgEmpMappingCount(opts)

Get cof_org_emp_mapping count

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOrgEmpMappingApi();

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
apiInstance.getcofOrgEmpMappingCount(opts, callback);
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

<a name="updatecofOrgEmpMapping"></a>
# **updatecofOrgEmpMapping**
> updatecofOrgEmpMapping(cofOrgEmpMappingId, body)

Updates a cof_org_emp_mapping



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOrgEmpMappingApi();

var cofOrgEmpMappingId = 789; // Number | ID of cof_org_emp_mapping to return

var body = new XgeneCloud.CofOrgEmpMapping(); // CofOrgEmpMapping | cof_org_emp_mapping object that needs to be added to the store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofOrgEmpMapping(cofOrgEmpMappingId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofOrgEmpMappingId** | **Number**| ID of cof_org_emp_mapping to return | 
 **body** | [**CofOrgEmpMapping**](CofOrgEmpMapping.md)| cof_org_emp_mapping object that needs to be added to the store | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatecofOrgEmpMapping_0"></a>
# **updatecofOrgEmpMapping_0**
> updatecofOrgEmpMapping_0(body)

Updates a cof_org_emp_mapping



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofOrgEmpMappingApi();

var body = [new XgeneCloud.CofOrgEmpMapping()]; // [CofOrgEmpMapping] | cof_org_emp_mapping objects with id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofOrgEmpMapping_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofOrgEmpMapping]**](CofOrgEmpMapping.md)| cof_org_emp_mapping objects with id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

