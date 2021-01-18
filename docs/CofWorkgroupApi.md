# XgeneCloud.CofWorkgroupApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addcofWorkgroup**](CofWorkgroupApi.md#addcofWorkgroup) | **POST** /api/v1/cof_workgroup | Add a new cof_workgroup
[**bulkcofWorkgroupInsert**](CofWorkgroupApi.md#bulkcofWorkgroupInsert) | **POST** /api/v1/cof_workgroup/bulk | Bulk cof_workgroup insert
[**checkcofWorkgroupExists**](CofWorkgroupApi.md#checkcofWorkgroupExists) | **GET** /api/v1/cof_workgroup/{cof_workgroupId}/exists | Check cof_workgroup with provided ID exists
[**cofWorkgroupAggregate**](CofWorkgroupApi.md#cofWorkgroupAggregate) | **GET** /api/v1/cof_workgroup/aggregate/{columnName} | Get first one from filtered data
[**cofWorkgroupDistinct**](CofWorkgroupApi.md#cofWorkgroupDistinct) | **GET** /api/v1/cof_workgroup/distinct/{columnName} | Get first one from filtered data
[**cofWorkgroupDistribution**](CofWorkgroupApi.md#cofWorkgroupDistribution) | **GET** /api/v1/cof_workgroup/distribution/{columnName} | 
[**cofWorkgroupGroupByColumn**](CofWorkgroupApi.md#cofWorkgroupGroupByColumn) | **GET** /api/v1/cof_workgroup/groupby/{columnName} | Group by column
[**deletecofWorkgroup**](CofWorkgroupApi.md#deletecofWorkgroup) | **DELETE** /api/v1/cof_workgroup/{cof_workgroupId} | Deletes a cof_workgroup
[**deletecofWorkgroup_0**](CofWorkgroupApi.md#deletecofWorkgroup_0) | **DELETE** /api/v1/cof_workgroup/bulk | Deletes a cof_workgroup
[**findOnecofWorkgroup**](CofWorkgroupApi.md#findOnecofWorkgroup) | **GET** /api/v1/cof_workgroup/findOne | Get first one from filtered data
[**getcofWorkgroup**](CofWorkgroupApi.md#getcofWorkgroup) | **GET** /api/v1/cof_workgroup | Get list
[**getcofWorkgroupById**](CofWorkgroupApi.md#getcofWorkgroupById) | **GET** /api/v1/cof_workgroup/{cof_workgroupId} | Find cof_workgroup by ID
[**getcofWorkgroupCount**](CofWorkgroupApi.md#getcofWorkgroupCount) | **GET** /api/v1/cof_workgroup/count | Get cof_workgroup count
[**updatecofWorkgroup**](CofWorkgroupApi.md#updatecofWorkgroup) | **PUT** /api/v1/cof_workgroup/{cof_workgroupId} | Updates a cof_workgroup
[**updatecofWorkgroup_0**](CofWorkgroupApi.md#updatecofWorkgroup_0) | **PUT** /api/v1/cof_workgroup/bulk | Updates a cof_workgroup


<a name="addcofWorkgroup"></a>
# **addcofWorkgroup**
> addcofWorkgroup(body)

Add a new cof_workgroup



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofWorkgroupApi();

var body = new XgeneCloud.CofWorkgroup(); // CofWorkgroup | cof_workgroup object that needs to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addcofWorkgroup(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CofWorkgroup**](CofWorkgroup.md)| cof_workgroup object that needs to add | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkcofWorkgroupInsert"></a>
# **bulkcofWorkgroupInsert**
> bulkcofWorkgroupInsert(body)

Bulk cof_workgroup insert



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofWorkgroupApi();

var body = [new XgeneCloud.CofWorkgroup()]; // [CofWorkgroup] | cof_workgroup objects


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkcofWorkgroupInsert(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofWorkgroup]**](CofWorkgroup.md)| cof_workgroup objects | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="checkcofWorkgroupExists"></a>
# **checkcofWorkgroupExists**
> 'Boolean' checkcofWorkgroupExists(cofWorkgroupId)

Check cof_workgroup with provided ID exists

Returns a single cof_workgroup

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofWorkgroupApi();

var cofWorkgroupId = 789; // Number | ID of cof_workgroup


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkcofWorkgroupExists(cofWorkgroupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofWorkgroupId** | **Number**| ID of cof_workgroup | 

### Return type

**'Boolean'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cofWorkgroupAggregate"></a>
# **cofWorkgroupAggregate**
> CofWorkgroup cofWorkgroupAggregate(columnName, fields, func, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofWorkgroupApi();

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
apiInstance.cofWorkgroupAggregate(columnName, fields, func, opts, callback);
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

[**CofWorkgroup**](CofWorkgroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cofWorkgroupDistinct"></a>
# **cofWorkgroupDistinct**
> [Object] cofWorkgroupDistinct(columnName, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofWorkgroupApi();

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
apiInstance.cofWorkgroupDistinct(columnName, opts, callback);
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

<a name="cofWorkgroupDistribution"></a>
# **cofWorkgroupDistribution**
> [Object] cofWorkgroupDistribution(columnName, opts)





### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofWorkgroupApi();

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
apiInstance.cofWorkgroupDistribution(columnName, opts, callback);
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

<a name="cofWorkgroupGroupByColumn"></a>
# **cofWorkgroupGroupByColumn**
> CofWorkgroup cofWorkgroupGroupByColumn(columnName, opts)

Group by column



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofWorkgroupApi();

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
apiInstance.cofWorkgroupGroupByColumn(columnName, opts, callback);
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

[**CofWorkgroup**](CofWorkgroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletecofWorkgroup"></a>
# **deletecofWorkgroup**
> deletecofWorkgroup(cofWorkgroupId)

Deletes a cof_workgroup



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofWorkgroupApi();

var cofWorkgroupId = 789; // Number | ID of cof_workgroup to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofWorkgroup(cofWorkgroupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofWorkgroupId** | **Number**| ID of cof_workgroup to return | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletecofWorkgroup_0"></a>
# **deletecofWorkgroup_0**
> deletecofWorkgroup_0(body)

Deletes a cof_workgroup



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofWorkgroupApi();

var body = [new XgeneCloud.CofWorkgroup()]; // [CofWorkgroup] | cof_workgroup objects contains id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofWorkgroup_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofWorkgroup]**](CofWorkgroup.md)| cof_workgroup objects contains id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findOnecofWorkgroup"></a>
# **findOnecofWorkgroup**
> CofWorkgroup findOnecofWorkgroup(opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofWorkgroupApi();

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
apiInstance.findOnecofWorkgroup(opts, callback);
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

[**CofWorkgroup**](CofWorkgroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getcofWorkgroup"></a>
# **getcofWorkgroup**
> getcofWorkgroup(opts)

Get list



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofWorkgroupApi();

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
apiInstance.getcofWorkgroup(opts, callback);
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

<a name="getcofWorkgroupById"></a>
# **getcofWorkgroupById**
> CofWorkgroup getcofWorkgroupById(cofWorkgroupId)

Find cof_workgroup by ID

Returns a single cof_workgroup

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofWorkgroupApi();

var cofWorkgroupId = 789; // Number | ID of cof_workgroup to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getcofWorkgroupById(cofWorkgroupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofWorkgroupId** | **Number**| ID of cof_workgroup to return | 

### Return type

[**CofWorkgroup**](CofWorkgroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getcofWorkgroupCount"></a>
# **getcofWorkgroupCount**
> Object getcofWorkgroupCount(opts)

Get cof_workgroup count

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofWorkgroupApi();

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
apiInstance.getcofWorkgroupCount(opts, callback);
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

<a name="updatecofWorkgroup"></a>
# **updatecofWorkgroup**
> updatecofWorkgroup(cofWorkgroupId, body)

Updates a cof_workgroup



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofWorkgroupApi();

var cofWorkgroupId = 789; // Number | ID of cof_workgroup to return

var body = new XgeneCloud.CofWorkgroup(); // CofWorkgroup | cof_workgroup object that needs to be added to the store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofWorkgroup(cofWorkgroupId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofWorkgroupId** | **Number**| ID of cof_workgroup to return | 
 **body** | [**CofWorkgroup**](CofWorkgroup.md)| cof_workgroup object that needs to be added to the store | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatecofWorkgroup_0"></a>
# **updatecofWorkgroup_0**
> updatecofWorkgroup_0(body)

Updates a cof_workgroup



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofWorkgroupApi();

var body = [new XgeneCloud.CofWorkgroup()]; // [CofWorkgroup] | cof_workgroup objects with id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofWorkgroup_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofWorkgroup]**](CofWorkgroup.md)| cof_workgroup objects with id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

