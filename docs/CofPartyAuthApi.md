# XgeneCloud.CofPartyAuthApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addcofPartyAuth**](CofPartyAuthApi.md#addcofPartyAuth) | **POST** /api/v1/cof_party_auth | Add a new cof_party_auth
[**bulkcofPartyAuthInsert**](CofPartyAuthApi.md#bulkcofPartyAuthInsert) | **POST** /api/v1/cof_party_auth/bulk | Bulk cof_party_auth insert
[**checkcofPartyAuthExists**](CofPartyAuthApi.md#checkcofPartyAuthExists) | **GET** /api/v1/cof_party_auth/{cof_party_authId}/exists | Check cof_party_auth with provided ID exists
[**cofPartyAuthAggregate**](CofPartyAuthApi.md#cofPartyAuthAggregate) | **GET** /api/v1/cof_party_auth/aggregate/{columnName} | Get first one from filtered data
[**cofPartyAuthDistinct**](CofPartyAuthApi.md#cofPartyAuthDistinct) | **GET** /api/v1/cof_party_auth/distinct/{columnName} | Get first one from filtered data
[**cofPartyAuthDistribution**](CofPartyAuthApi.md#cofPartyAuthDistribution) | **GET** /api/v1/cof_party_auth/distribution/{columnName} | 
[**cofPartyAuthGroupByColumn**](CofPartyAuthApi.md#cofPartyAuthGroupByColumn) | **GET** /api/v1/cof_party_auth/groupby/{columnName} | Group by column
[**deletecofPartyAuth**](CofPartyAuthApi.md#deletecofPartyAuth) | **DELETE** /api/v1/cof_party_auth/{cof_party_authId} | Deletes a cof_party_auth
[**deletecofPartyAuth_0**](CofPartyAuthApi.md#deletecofPartyAuth_0) | **DELETE** /api/v1/cof_party_auth/bulk | Deletes a cof_party_auth
[**findOnecofPartyAuth**](CofPartyAuthApi.md#findOnecofPartyAuth) | **GET** /api/v1/cof_party_auth/findOne | Get first one from filtered data
[**getcofPartyAuth**](CofPartyAuthApi.md#getcofPartyAuth) | **GET** /api/v1/cof_party_auth | Get list
[**getcofPartyAuthById**](CofPartyAuthApi.md#getcofPartyAuthById) | **GET** /api/v1/cof_party_auth/{cof_party_authId} | Find cof_party_auth by ID
[**getcofPartyAuthCount**](CofPartyAuthApi.md#getcofPartyAuthCount) | **GET** /api/v1/cof_party_auth/count | Get cof_party_auth count
[**updatecofPartyAuth**](CofPartyAuthApi.md#updatecofPartyAuth) | **PUT** /api/v1/cof_party_auth/{cof_party_authId} | Updates a cof_party_auth
[**updatecofPartyAuth_0**](CofPartyAuthApi.md#updatecofPartyAuth_0) | **PUT** /api/v1/cof_party_auth/bulk | Updates a cof_party_auth


<a name="addcofPartyAuth"></a>
# **addcofPartyAuth**
> addcofPartyAuth(body)

Add a new cof_party_auth



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofPartyAuthApi();

var body = new XgeneCloud.CofPartyAuth(); // CofPartyAuth | cof_party_auth object that needs to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addcofPartyAuth(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CofPartyAuth**](CofPartyAuth.md)| cof_party_auth object that needs to add | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkcofPartyAuthInsert"></a>
# **bulkcofPartyAuthInsert**
> bulkcofPartyAuthInsert(body)

Bulk cof_party_auth insert



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofPartyAuthApi();

var body = [new XgeneCloud.CofPartyAuth()]; // [CofPartyAuth] | cof_party_auth objects


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkcofPartyAuthInsert(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofPartyAuth]**](CofPartyAuth.md)| cof_party_auth objects | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="checkcofPartyAuthExists"></a>
# **checkcofPartyAuthExists**
> 'Boolean' checkcofPartyAuthExists(cofPartyAuthId)

Check cof_party_auth with provided ID exists

Returns a single cof_party_auth

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofPartyAuthApi();

var cofPartyAuthId = 789; // Number | ID of cof_party_auth


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkcofPartyAuthExists(cofPartyAuthId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofPartyAuthId** | **Number**| ID of cof_party_auth | 

### Return type

**'Boolean'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cofPartyAuthAggregate"></a>
# **cofPartyAuthAggregate**
> CofPartyAuth cofPartyAuthAggregate(columnName, fields, func, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofPartyAuthApi();

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
apiInstance.cofPartyAuthAggregate(columnName, fields, func, opts, callback);
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

[**CofPartyAuth**](CofPartyAuth.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cofPartyAuthDistinct"></a>
# **cofPartyAuthDistinct**
> [Object] cofPartyAuthDistinct(columnName, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofPartyAuthApi();

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
apiInstance.cofPartyAuthDistinct(columnName, opts, callback);
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

<a name="cofPartyAuthDistribution"></a>
# **cofPartyAuthDistribution**
> [Object] cofPartyAuthDistribution(columnName, opts)





### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofPartyAuthApi();

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
apiInstance.cofPartyAuthDistribution(columnName, opts, callback);
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

<a name="cofPartyAuthGroupByColumn"></a>
# **cofPartyAuthGroupByColumn**
> CofPartyAuth cofPartyAuthGroupByColumn(columnName, opts)

Group by column



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofPartyAuthApi();

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
apiInstance.cofPartyAuthGroupByColumn(columnName, opts, callback);
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

[**CofPartyAuth**](CofPartyAuth.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletecofPartyAuth"></a>
# **deletecofPartyAuth**
> deletecofPartyAuth(cofPartyAuthId)

Deletes a cof_party_auth



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofPartyAuthApi();

var cofPartyAuthId = 789; // Number | ID of cof_party_auth to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofPartyAuth(cofPartyAuthId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofPartyAuthId** | **Number**| ID of cof_party_auth to return | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletecofPartyAuth_0"></a>
# **deletecofPartyAuth_0**
> deletecofPartyAuth_0(body)

Deletes a cof_party_auth



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofPartyAuthApi();

var body = [new XgeneCloud.CofPartyAuth()]; // [CofPartyAuth] | cof_party_auth objects contains id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofPartyAuth_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofPartyAuth]**](CofPartyAuth.md)| cof_party_auth objects contains id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findOnecofPartyAuth"></a>
# **findOnecofPartyAuth**
> CofPartyAuth findOnecofPartyAuth(opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofPartyAuthApi();

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
apiInstance.findOnecofPartyAuth(opts, callback);
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

[**CofPartyAuth**](CofPartyAuth.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getcofPartyAuth"></a>
# **getcofPartyAuth**
> getcofPartyAuth(opts)

Get list



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofPartyAuthApi();

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
apiInstance.getcofPartyAuth(opts, callback);
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

<a name="getcofPartyAuthById"></a>
# **getcofPartyAuthById**
> CofPartyAuth getcofPartyAuthById(cofPartyAuthId)

Find cof_party_auth by ID

Returns a single cof_party_auth

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofPartyAuthApi();

var cofPartyAuthId = 789; // Number | ID of cof_party_auth to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getcofPartyAuthById(cofPartyAuthId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofPartyAuthId** | **Number**| ID of cof_party_auth to return | 

### Return type

[**CofPartyAuth**](CofPartyAuth.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getcofPartyAuthCount"></a>
# **getcofPartyAuthCount**
> Object getcofPartyAuthCount(opts)

Get cof_party_auth count

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofPartyAuthApi();

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
apiInstance.getcofPartyAuthCount(opts, callback);
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

<a name="updatecofPartyAuth"></a>
# **updatecofPartyAuth**
> updatecofPartyAuth(cofPartyAuthId, body)

Updates a cof_party_auth



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofPartyAuthApi();

var cofPartyAuthId = 789; // Number | ID of cof_party_auth to return

var body = new XgeneCloud.CofPartyAuth(); // CofPartyAuth | cof_party_auth object that needs to be added to the store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofPartyAuth(cofPartyAuthId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofPartyAuthId** | **Number**| ID of cof_party_auth to return | 
 **body** | [**CofPartyAuth**](CofPartyAuth.md)| cof_party_auth object that needs to be added to the store | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatecofPartyAuth_0"></a>
# **updatecofPartyAuth_0**
> updatecofPartyAuth_0(body)

Updates a cof_party_auth



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofPartyAuthApi();

var body = [new XgeneCloud.CofPartyAuth()]; // [CofPartyAuth] | cof_party_auth objects with id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofPartyAuth_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofPartyAuth]**](CofPartyAuth.md)| cof_party_auth objects with id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

