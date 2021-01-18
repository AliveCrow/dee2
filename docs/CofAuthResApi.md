# XgeneCloud.CofAuthResApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addcofAuthRes**](CofAuthResApi.md#addcofAuthRes) | **POST** /api/v1/cof_auth_res | Add a new cof_auth_res
[**bulkcofAuthResInsert**](CofAuthResApi.md#bulkcofAuthResInsert) | **POST** /api/v1/cof_auth_res/bulk | Bulk cof_auth_res insert
[**checkcofAuthResExists**](CofAuthResApi.md#checkcofAuthResExists) | **GET** /api/v1/cof_auth_res/{cof_auth_resId}/exists | Check cof_auth_res with provided ID exists
[**cofAuthResAggregate**](CofAuthResApi.md#cofAuthResAggregate) | **GET** /api/v1/cof_auth_res/aggregate/{columnName} | Get first one from filtered data
[**cofAuthResDistinct**](CofAuthResApi.md#cofAuthResDistinct) | **GET** /api/v1/cof_auth_res/distinct/{columnName} | Get first one from filtered data
[**cofAuthResDistribution**](CofAuthResApi.md#cofAuthResDistribution) | **GET** /api/v1/cof_auth_res/distribution/{columnName} | 
[**cofAuthResGroupByColumn**](CofAuthResApi.md#cofAuthResGroupByColumn) | **GET** /api/v1/cof_auth_res/groupby/{columnName} | Group by column
[**deletecofAuthRes**](CofAuthResApi.md#deletecofAuthRes) | **DELETE** /api/v1/cof_auth_res/{cof_auth_resId} | Deletes a cof_auth_res
[**deletecofAuthRes_0**](CofAuthResApi.md#deletecofAuthRes_0) | **DELETE** /api/v1/cof_auth_res/bulk | Deletes a cof_auth_res
[**findOnecofAuthRes**](CofAuthResApi.md#findOnecofAuthRes) | **GET** /api/v1/cof_auth_res/findOne | Get first one from filtered data
[**getcofAuthRes**](CofAuthResApi.md#getcofAuthRes) | **GET** /api/v1/cof_auth_res | Get list
[**getcofAuthResById**](CofAuthResApi.md#getcofAuthResById) | **GET** /api/v1/cof_auth_res/{cof_auth_resId} | Find cof_auth_res by ID
[**getcofAuthResCount**](CofAuthResApi.md#getcofAuthResCount) | **GET** /api/v1/cof_auth_res/count | Get cof_auth_res count
[**updatecofAuthRes**](CofAuthResApi.md#updatecofAuthRes) | **PUT** /api/v1/cof_auth_res/{cof_auth_resId} | Updates a cof_auth_res
[**updatecofAuthRes_0**](CofAuthResApi.md#updatecofAuthRes_0) | **PUT** /api/v1/cof_auth_res/bulk | Updates a cof_auth_res


<a name="addcofAuthRes"></a>
# **addcofAuthRes**
> addcofAuthRes(body)

Add a new cof_auth_res



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthResApi();

var body = new XgeneCloud.CofAuthRes(); // CofAuthRes | cof_auth_res object that needs to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addcofAuthRes(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CofAuthRes**](CofAuthRes.md)| cof_auth_res object that needs to add | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkcofAuthResInsert"></a>
# **bulkcofAuthResInsert**
> bulkcofAuthResInsert(body)

Bulk cof_auth_res insert



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthResApi();

var body = [new XgeneCloud.CofAuthRes()]; // [CofAuthRes] | cof_auth_res objects


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkcofAuthResInsert(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofAuthRes]**](CofAuthRes.md)| cof_auth_res objects | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="checkcofAuthResExists"></a>
# **checkcofAuthResExists**
> 'Boolean' checkcofAuthResExists(cofAuthResId)

Check cof_auth_res with provided ID exists

Returns a single cof_auth_res

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthResApi();

var cofAuthResId = 789; // Number | ID of cof_auth_res


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkcofAuthResExists(cofAuthResId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofAuthResId** | **Number**| ID of cof_auth_res | 

### Return type

**'Boolean'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cofAuthResAggregate"></a>
# **cofAuthResAggregate**
> CofAuthRes cofAuthResAggregate(columnName, fields, func, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthResApi();

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
apiInstance.cofAuthResAggregate(columnName, fields, func, opts, callback);
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

[**CofAuthRes**](CofAuthRes.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cofAuthResDistinct"></a>
# **cofAuthResDistinct**
> [Object] cofAuthResDistinct(columnName, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthResApi();

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
apiInstance.cofAuthResDistinct(columnName, opts, callback);
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

<a name="cofAuthResDistribution"></a>
# **cofAuthResDistribution**
> [Object] cofAuthResDistribution(columnName, opts)





### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthResApi();

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
apiInstance.cofAuthResDistribution(columnName, opts, callback);
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

<a name="cofAuthResGroupByColumn"></a>
# **cofAuthResGroupByColumn**
> CofAuthRes cofAuthResGroupByColumn(columnName, opts)

Group by column



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthResApi();

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
apiInstance.cofAuthResGroupByColumn(columnName, opts, callback);
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

[**CofAuthRes**](CofAuthRes.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletecofAuthRes"></a>
# **deletecofAuthRes**
> deletecofAuthRes(cofAuthResId)

Deletes a cof_auth_res



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthResApi();

var cofAuthResId = 789; // Number | ID of cof_auth_res to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofAuthRes(cofAuthResId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofAuthResId** | **Number**| ID of cof_auth_res to return | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletecofAuthRes_0"></a>
# **deletecofAuthRes_0**
> deletecofAuthRes_0(body)

Deletes a cof_auth_res



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthResApi();

var body = [new XgeneCloud.CofAuthRes()]; // [CofAuthRes] | cof_auth_res objects contains id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofAuthRes_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofAuthRes]**](CofAuthRes.md)| cof_auth_res objects contains id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findOnecofAuthRes"></a>
# **findOnecofAuthRes**
> CofAuthRes findOnecofAuthRes(opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthResApi();

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
apiInstance.findOnecofAuthRes(opts, callback);
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

[**CofAuthRes**](CofAuthRes.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getcofAuthRes"></a>
# **getcofAuthRes**
> getcofAuthRes(opts)

Get list



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthResApi();

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
apiInstance.getcofAuthRes(opts, callback);
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

<a name="getcofAuthResById"></a>
# **getcofAuthResById**
> CofAuthRes getcofAuthResById(cofAuthResId)

Find cof_auth_res by ID

Returns a single cof_auth_res

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthResApi();

var cofAuthResId = 789; // Number | ID of cof_auth_res to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getcofAuthResById(cofAuthResId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofAuthResId** | **Number**| ID of cof_auth_res to return | 

### Return type

[**CofAuthRes**](CofAuthRes.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getcofAuthResCount"></a>
# **getcofAuthResCount**
> Object getcofAuthResCount(opts)

Get cof_auth_res count

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthResApi();

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
apiInstance.getcofAuthResCount(opts, callback);
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

<a name="updatecofAuthRes"></a>
# **updatecofAuthRes**
> updatecofAuthRes(cofAuthResId, body)

Updates a cof_auth_res



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthResApi();

var cofAuthResId = 789; // Number | ID of cof_auth_res to return

var body = new XgeneCloud.CofAuthRes(); // CofAuthRes | cof_auth_res object that needs to be added to the store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofAuthRes(cofAuthResId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofAuthResId** | **Number**| ID of cof_auth_res to return | 
 **body** | [**CofAuthRes**](CofAuthRes.md)| cof_auth_res object that needs to be added to the store | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatecofAuthRes_0"></a>
# **updatecofAuthRes_0**
> updatecofAuthRes_0(body)

Updates a cof_auth_res



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthResApi();

var body = [new XgeneCloud.CofAuthRes()]; // [CofAuthRes] | cof_auth_res objects with id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofAuthRes_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofAuthRes]**](CofAuthRes.md)| cof_auth_res objects with id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

