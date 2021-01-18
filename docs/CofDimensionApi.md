# XgeneCloud.CofDimensionApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addcofDimension**](CofDimensionApi.md#addcofDimension) | **POST** /api/v1/cof_dimension | Add a new cof_dimension
[**bulkcofDimensionInsert**](CofDimensionApi.md#bulkcofDimensionInsert) | **POST** /api/v1/cof_dimension/bulk | Bulk cof_dimension insert
[**checkcofDimensionExists**](CofDimensionApi.md#checkcofDimensionExists) | **GET** /api/v1/cof_dimension/{cof_dimensionId}/exists | Check cof_dimension with provided ID exists
[**cofDimensionAggregate**](CofDimensionApi.md#cofDimensionAggregate) | **GET** /api/v1/cof_dimension/aggregate/{columnName} | Get first one from filtered data
[**cofDimensionDistinct**](CofDimensionApi.md#cofDimensionDistinct) | **GET** /api/v1/cof_dimension/distinct/{columnName} | Get first one from filtered data
[**cofDimensionDistribution**](CofDimensionApi.md#cofDimensionDistribution) | **GET** /api/v1/cof_dimension/distribution/{columnName} | 
[**cofDimensionGroupByColumn**](CofDimensionApi.md#cofDimensionGroupByColumn) | **GET** /api/v1/cof_dimension/groupby/{columnName} | Group by column
[**deletecofDimension**](CofDimensionApi.md#deletecofDimension) | **DELETE** /api/v1/cof_dimension/{cof_dimensionId} | Deletes a cof_dimension
[**deletecofDimension_0**](CofDimensionApi.md#deletecofDimension_0) | **DELETE** /api/v1/cof_dimension/bulk | Deletes a cof_dimension
[**findOnecofDimension**](CofDimensionApi.md#findOnecofDimension) | **GET** /api/v1/cof_dimension/findOne | Get first one from filtered data
[**getcofDimension**](CofDimensionApi.md#getcofDimension) | **GET** /api/v1/cof_dimension | Get list
[**getcofDimensionById**](CofDimensionApi.md#getcofDimensionById) | **GET** /api/v1/cof_dimension/{cof_dimensionId} | Find cof_dimension by ID
[**getcofDimensionCount**](CofDimensionApi.md#getcofDimensionCount) | **GET** /api/v1/cof_dimension/count | Get cof_dimension count
[**updatecofDimension**](CofDimensionApi.md#updatecofDimension) | **PUT** /api/v1/cof_dimension/{cof_dimensionId} | Updates a cof_dimension
[**updatecofDimension_0**](CofDimensionApi.md#updatecofDimension_0) | **PUT** /api/v1/cof_dimension/bulk | Updates a cof_dimension


<a name="addcofDimension"></a>
# **addcofDimension**
> addcofDimension(body)

Add a new cof_dimension



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDimensionApi();

var body = new XgeneCloud.CofDimension(); // CofDimension | cof_dimension object that needs to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addcofDimension(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CofDimension**](CofDimension.md)| cof_dimension object that needs to add | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkcofDimensionInsert"></a>
# **bulkcofDimensionInsert**
> bulkcofDimensionInsert(body)

Bulk cof_dimension insert



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDimensionApi();

var body = [new XgeneCloud.CofDimension()]; // [CofDimension] | cof_dimension objects


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkcofDimensionInsert(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofDimension]**](CofDimension.md)| cof_dimension objects | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="checkcofDimensionExists"></a>
# **checkcofDimensionExists**
> 'Boolean' checkcofDimensionExists(cofDimensionId)

Check cof_dimension with provided ID exists

Returns a single cof_dimension

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDimensionApi();

var cofDimensionId = 789; // Number | ID of cof_dimension


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkcofDimensionExists(cofDimensionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofDimensionId** | **Number**| ID of cof_dimension | 

### Return type

**'Boolean'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cofDimensionAggregate"></a>
# **cofDimensionAggregate**
> CofDimension cofDimensionAggregate(columnName, fields, func, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDimensionApi();

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
apiInstance.cofDimensionAggregate(columnName, fields, func, opts, callback);
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

[**CofDimension**](CofDimension.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cofDimensionDistinct"></a>
# **cofDimensionDistinct**
> [Object] cofDimensionDistinct(columnName, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDimensionApi();

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
apiInstance.cofDimensionDistinct(columnName, opts, callback);
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

<a name="cofDimensionDistribution"></a>
# **cofDimensionDistribution**
> [Object] cofDimensionDistribution(columnName, opts)





### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDimensionApi();

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
apiInstance.cofDimensionDistribution(columnName, opts, callback);
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

<a name="cofDimensionGroupByColumn"></a>
# **cofDimensionGroupByColumn**
> CofDimension cofDimensionGroupByColumn(columnName, opts)

Group by column



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDimensionApi();

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
apiInstance.cofDimensionGroupByColumn(columnName, opts, callback);
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

[**CofDimension**](CofDimension.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletecofDimension"></a>
# **deletecofDimension**
> deletecofDimension(cofDimensionId)

Deletes a cof_dimension



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDimensionApi();

var cofDimensionId = 789; // Number | ID of cof_dimension to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofDimension(cofDimensionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofDimensionId** | **Number**| ID of cof_dimension to return | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletecofDimension_0"></a>
# **deletecofDimension_0**
> deletecofDimension_0(body)

Deletes a cof_dimension



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDimensionApi();

var body = [new XgeneCloud.CofDimension()]; // [CofDimension] | cof_dimension objects contains id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofDimension_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofDimension]**](CofDimension.md)| cof_dimension objects contains id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findOnecofDimension"></a>
# **findOnecofDimension**
> CofDimension findOnecofDimension(opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDimensionApi();

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
apiInstance.findOnecofDimension(opts, callback);
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

[**CofDimension**](CofDimension.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getcofDimension"></a>
# **getcofDimension**
> getcofDimension(opts)

Get list



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDimensionApi();

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
apiInstance.getcofDimension(opts, callback);
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

<a name="getcofDimensionById"></a>
# **getcofDimensionById**
> CofDimension getcofDimensionById(cofDimensionId)

Find cof_dimension by ID

Returns a single cof_dimension

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDimensionApi();

var cofDimensionId = 789; // Number | ID of cof_dimension to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getcofDimensionById(cofDimensionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofDimensionId** | **Number**| ID of cof_dimension to return | 

### Return type

[**CofDimension**](CofDimension.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getcofDimensionCount"></a>
# **getcofDimensionCount**
> Object getcofDimensionCount(opts)

Get cof_dimension count

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDimensionApi();

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
apiInstance.getcofDimensionCount(opts, callback);
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

<a name="updatecofDimension"></a>
# **updatecofDimension**
> updatecofDimension(cofDimensionId, body)

Updates a cof_dimension



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDimensionApi();

var cofDimensionId = 789; // Number | ID of cof_dimension to return

var body = new XgeneCloud.CofDimension(); // CofDimension | cof_dimension object that needs to be added to the store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofDimension(cofDimensionId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofDimensionId** | **Number**| ID of cof_dimension to return | 
 **body** | [**CofDimension**](CofDimension.md)| cof_dimension object that needs to be added to the store | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatecofDimension_0"></a>
# **updatecofDimension_0**
> updatecofDimension_0(body)

Updates a cof_dimension



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDimensionApi();

var body = [new XgeneCloud.CofDimension()]; // [CofDimension] | cof_dimension objects with id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofDimension_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofDimension]**](CofDimension.md)| cof_dimension objects with id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

