# XgeneCloud.CofRoleApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addcofRole**](CofRoleApi.md#addcofRole) | **POST** /api/v1/cof_role | Add a new cof_role
[**bulkcofRoleInsert**](CofRoleApi.md#bulkcofRoleInsert) | **POST** /api/v1/cof_role/bulk | Bulk cof_role insert
[**checkcofRoleExists**](CofRoleApi.md#checkcofRoleExists) | **GET** /api/v1/cof_role/{cof_roleId}/exists | Check cof_role with provided ID exists
[**cofRoleAggregate**](CofRoleApi.md#cofRoleAggregate) | **GET** /api/v1/cof_role/aggregate/{columnName} | Get first one from filtered data
[**cofRoleDistinct**](CofRoleApi.md#cofRoleDistinct) | **GET** /api/v1/cof_role/distinct/{columnName} | Get first one from filtered data
[**cofRoleDistribution**](CofRoleApi.md#cofRoleDistribution) | **GET** /api/v1/cof_role/distribution/{columnName} | 
[**cofRoleGroupByColumn**](CofRoleApi.md#cofRoleGroupByColumn) | **GET** /api/v1/cof_role/groupby/{columnName} | Group by column
[**deletecofRole**](CofRoleApi.md#deletecofRole) | **DELETE** /api/v1/cof_role/{cof_roleId} | Deletes a cof_role
[**deletecofRole_0**](CofRoleApi.md#deletecofRole_0) | **DELETE** /api/v1/cof_role/bulk | Deletes a cof_role
[**findOnecofRole**](CofRoleApi.md#findOnecofRole) | **GET** /api/v1/cof_role/findOne | Get first one from filtered data
[**getcofRole**](CofRoleApi.md#getcofRole) | **GET** /api/v1/cof_role | Get list
[**getcofRoleById**](CofRoleApi.md#getcofRoleById) | **GET** /api/v1/cof_role/{cof_roleId} | Find cof_role by ID
[**getcofRoleCount**](CofRoleApi.md#getcofRoleCount) | **GET** /api/v1/cof_role/count | Get cof_role count
[**updatecofRole**](CofRoleApi.md#updatecofRole) | **PUT** /api/v1/cof_role/{cof_roleId} | Updates a cof_role
[**updatecofRole_0**](CofRoleApi.md#updatecofRole_0) | **PUT** /api/v1/cof_role/bulk | Updates a cof_role


<a name="addcofRole"></a>
# **addcofRole**
> addcofRole(body)

Add a new cof_role



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleApi();

var body = new XgeneCloud.CofRole(); // CofRole | cof_role object that needs to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addcofRole(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CofRole**](CofRole.md)| cof_role object that needs to add | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkcofRoleInsert"></a>
# **bulkcofRoleInsert**
> bulkcofRoleInsert(body)

Bulk cof_role insert



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleApi();

var body = [new XgeneCloud.CofRole()]; // [CofRole] | cof_role objects


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkcofRoleInsert(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofRole]**](CofRole.md)| cof_role objects | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="checkcofRoleExists"></a>
# **checkcofRoleExists**
> 'Boolean' checkcofRoleExists(cofRoleId)

Check cof_role with provided ID exists

Returns a single cof_role

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleApi();

var cofRoleId = 789; // Number | ID of cof_role


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkcofRoleExists(cofRoleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofRoleId** | **Number**| ID of cof_role | 

### Return type

**'Boolean'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cofRoleAggregate"></a>
# **cofRoleAggregate**
> CofRole cofRoleAggregate(columnName, fields, func, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleApi();

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
apiInstance.cofRoleAggregate(columnName, fields, func, opts, callback);
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

[**CofRole**](CofRole.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cofRoleDistinct"></a>
# **cofRoleDistinct**
> [Object] cofRoleDistinct(columnName, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleApi();

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
apiInstance.cofRoleDistinct(columnName, opts, callback);
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

<a name="cofRoleDistribution"></a>
# **cofRoleDistribution**
> [Object] cofRoleDistribution(columnName, opts)





### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleApi();

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
apiInstance.cofRoleDistribution(columnName, opts, callback);
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

<a name="cofRoleGroupByColumn"></a>
# **cofRoleGroupByColumn**
> CofRole cofRoleGroupByColumn(columnName, opts)

Group by column



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleApi();

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
apiInstance.cofRoleGroupByColumn(columnName, opts, callback);
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

[**CofRole**](CofRole.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletecofRole"></a>
# **deletecofRole**
> deletecofRole(cofRoleId)

Deletes a cof_role



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleApi();

var cofRoleId = 789; // Number | ID of cof_role to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofRole(cofRoleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofRoleId** | **Number**| ID of cof_role to return | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletecofRole_0"></a>
# **deletecofRole_0**
> deletecofRole_0(body)

Deletes a cof_role



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleApi();

var body = [new XgeneCloud.CofRole()]; // [CofRole] | cof_role objects contains id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofRole_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofRole]**](CofRole.md)| cof_role objects contains id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findOnecofRole"></a>
# **findOnecofRole**
> CofRole findOnecofRole(opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleApi();

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
apiInstance.findOnecofRole(opts, callback);
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

[**CofRole**](CofRole.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getcofRole"></a>
# **getcofRole**
> getcofRole(opts)

Get list



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleApi();

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
apiInstance.getcofRole(opts, callback);
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

<a name="getcofRoleById"></a>
# **getcofRoleById**
> CofRole getcofRoleById(cofRoleId)

Find cof_role by ID

Returns a single cof_role

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleApi();

var cofRoleId = 789; // Number | ID of cof_role to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getcofRoleById(cofRoleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofRoleId** | **Number**| ID of cof_role to return | 

### Return type

[**CofRole**](CofRole.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getcofRoleCount"></a>
# **getcofRoleCount**
> Object getcofRoleCount(opts)

Get cof_role count

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleApi();

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
apiInstance.getcofRoleCount(opts, callback);
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

<a name="updatecofRole"></a>
# **updatecofRole**
> updatecofRole(cofRoleId, body)

Updates a cof_role



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleApi();

var cofRoleId = 789; // Number | ID of cof_role to return

var body = new XgeneCloud.CofRole(); // CofRole | cof_role object that needs to be added to the store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofRole(cofRoleId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofRoleId** | **Number**| ID of cof_role to return | 
 **body** | [**CofRole**](CofRole.md)| cof_role object that needs to be added to the store | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatecofRole_0"></a>
# **updatecofRole_0**
> updatecofRole_0(body)

Updates a cof_role



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleApi();

var body = [new XgeneCloud.CofRole()]; // [CofRole] | cof_role objects with id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofRole_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofRole]**](CofRole.md)| cof_role objects with id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

