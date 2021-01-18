# XgeneCloud.CofAuthTplResGroupApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addcofAuthTplResGroup**](CofAuthTplResGroupApi.md#addcofAuthTplResGroup) | **POST** /api/v1/cof_auth_tpl_res_group | Add a new cof_auth_tpl_res_group
[**bulkcofAuthTplResGroupInsert**](CofAuthTplResGroupApi.md#bulkcofAuthTplResGroupInsert) | **POST** /api/v1/cof_auth_tpl_res_group/bulk | Bulk cof_auth_tpl_res_group insert
[**checkcofAuthTplResGroupExists**](CofAuthTplResGroupApi.md#checkcofAuthTplResGroupExists) | **GET** /api/v1/cof_auth_tpl_res_group/{cof_auth_tpl_res_groupId}/exists | Check cof_auth_tpl_res_group with provided ID exists
[**cofAuthTplResGroupAggregate**](CofAuthTplResGroupApi.md#cofAuthTplResGroupAggregate) | **GET** /api/v1/cof_auth_tpl_res_group/aggregate/{columnName} | Get first one from filtered data
[**cofAuthTplResGroupDistinct**](CofAuthTplResGroupApi.md#cofAuthTplResGroupDistinct) | **GET** /api/v1/cof_auth_tpl_res_group/distinct/{columnName} | Get first one from filtered data
[**cofAuthTplResGroupDistribution**](CofAuthTplResGroupApi.md#cofAuthTplResGroupDistribution) | **GET** /api/v1/cof_auth_tpl_res_group/distribution/{columnName} | 
[**cofAuthTplResGroupGroupByColumn**](CofAuthTplResGroupApi.md#cofAuthTplResGroupGroupByColumn) | **GET** /api/v1/cof_auth_tpl_res_group/groupby/{columnName} | Group by column
[**deletecofAuthTplResGroup**](CofAuthTplResGroupApi.md#deletecofAuthTplResGroup) | **DELETE** /api/v1/cof_auth_tpl_res_group/{cof_auth_tpl_res_groupId} | Deletes a cof_auth_tpl_res_group
[**deletecofAuthTplResGroup_0**](CofAuthTplResGroupApi.md#deletecofAuthTplResGroup_0) | **DELETE** /api/v1/cof_auth_tpl_res_group/bulk | Deletes a cof_auth_tpl_res_group
[**findOnecofAuthTplResGroup**](CofAuthTplResGroupApi.md#findOnecofAuthTplResGroup) | **GET** /api/v1/cof_auth_tpl_res_group/findOne | Get first one from filtered data
[**getcofAuthTplResGroup**](CofAuthTplResGroupApi.md#getcofAuthTplResGroup) | **GET** /api/v1/cof_auth_tpl_res_group | Get list
[**getcofAuthTplResGroupById**](CofAuthTplResGroupApi.md#getcofAuthTplResGroupById) | **GET** /api/v1/cof_auth_tpl_res_group/{cof_auth_tpl_res_groupId} | Find cof_auth_tpl_res_group by ID
[**getcofAuthTplResGroupCount**](CofAuthTplResGroupApi.md#getcofAuthTplResGroupCount) | **GET** /api/v1/cof_auth_tpl_res_group/count | Get cof_auth_tpl_res_group count
[**updatecofAuthTplResGroup**](CofAuthTplResGroupApi.md#updatecofAuthTplResGroup) | **PUT** /api/v1/cof_auth_tpl_res_group/{cof_auth_tpl_res_groupId} | Updates a cof_auth_tpl_res_group
[**updatecofAuthTplResGroup_0**](CofAuthTplResGroupApi.md#updatecofAuthTplResGroup_0) | **PUT** /api/v1/cof_auth_tpl_res_group/bulk | Updates a cof_auth_tpl_res_group


<a name="addcofAuthTplResGroup"></a>
# **addcofAuthTplResGroup**
> addcofAuthTplResGroup(body)

Add a new cof_auth_tpl_res_group



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthTplResGroupApi();

var body = new XgeneCloud.CofAuthTplResGroup(); // CofAuthTplResGroup | cof_auth_tpl_res_group object that needs to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addcofAuthTplResGroup(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CofAuthTplResGroup**](CofAuthTplResGroup.md)| cof_auth_tpl_res_group object that needs to add | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkcofAuthTplResGroupInsert"></a>
# **bulkcofAuthTplResGroupInsert**
> bulkcofAuthTplResGroupInsert(body)

Bulk cof_auth_tpl_res_group insert



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthTplResGroupApi();

var body = [new XgeneCloud.CofAuthTplResGroup()]; // [CofAuthTplResGroup] | cof_auth_tpl_res_group objects


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkcofAuthTplResGroupInsert(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofAuthTplResGroup]**](CofAuthTplResGroup.md)| cof_auth_tpl_res_group objects | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="checkcofAuthTplResGroupExists"></a>
# **checkcofAuthTplResGroupExists**
> 'Boolean' checkcofAuthTplResGroupExists(cofAuthTplResGroupId)

Check cof_auth_tpl_res_group with provided ID exists

Returns a single cof_auth_tpl_res_group

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthTplResGroupApi();

var cofAuthTplResGroupId = 789; // Number | ID of cof_auth_tpl_res_group


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkcofAuthTplResGroupExists(cofAuthTplResGroupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofAuthTplResGroupId** | **Number**| ID of cof_auth_tpl_res_group | 

### Return type

**'Boolean'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cofAuthTplResGroupAggregate"></a>
# **cofAuthTplResGroupAggregate**
> CofAuthTplResGroup cofAuthTplResGroupAggregate(columnName, fields, func, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthTplResGroupApi();

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
apiInstance.cofAuthTplResGroupAggregate(columnName, fields, func, opts, callback);
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

[**CofAuthTplResGroup**](CofAuthTplResGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cofAuthTplResGroupDistinct"></a>
# **cofAuthTplResGroupDistinct**
> [Object] cofAuthTplResGroupDistinct(columnName, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthTplResGroupApi();

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
apiInstance.cofAuthTplResGroupDistinct(columnName, opts, callback);
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

<a name="cofAuthTplResGroupDistribution"></a>
# **cofAuthTplResGroupDistribution**
> [Object] cofAuthTplResGroupDistribution(columnName, opts)





### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthTplResGroupApi();

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
apiInstance.cofAuthTplResGroupDistribution(columnName, opts, callback);
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

<a name="cofAuthTplResGroupGroupByColumn"></a>
# **cofAuthTplResGroupGroupByColumn**
> CofAuthTplResGroup cofAuthTplResGroupGroupByColumn(columnName, opts)

Group by column



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthTplResGroupApi();

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
apiInstance.cofAuthTplResGroupGroupByColumn(columnName, opts, callback);
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

[**CofAuthTplResGroup**](CofAuthTplResGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletecofAuthTplResGroup"></a>
# **deletecofAuthTplResGroup**
> deletecofAuthTplResGroup(cofAuthTplResGroupId)

Deletes a cof_auth_tpl_res_group



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthTplResGroupApi();

var cofAuthTplResGroupId = 789; // Number | ID of cof_auth_tpl_res_group to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofAuthTplResGroup(cofAuthTplResGroupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofAuthTplResGroupId** | **Number**| ID of cof_auth_tpl_res_group to return | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletecofAuthTplResGroup_0"></a>
# **deletecofAuthTplResGroup_0**
> deletecofAuthTplResGroup_0(body)

Deletes a cof_auth_tpl_res_group



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthTplResGroupApi();

var body = [new XgeneCloud.CofAuthTplResGroup()]; // [CofAuthTplResGroup] | cof_auth_tpl_res_group objects contains id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofAuthTplResGroup_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofAuthTplResGroup]**](CofAuthTplResGroup.md)| cof_auth_tpl_res_group objects contains id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findOnecofAuthTplResGroup"></a>
# **findOnecofAuthTplResGroup**
> CofAuthTplResGroup findOnecofAuthTplResGroup(opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthTplResGroupApi();

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
apiInstance.findOnecofAuthTplResGroup(opts, callback);
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

[**CofAuthTplResGroup**](CofAuthTplResGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getcofAuthTplResGroup"></a>
# **getcofAuthTplResGroup**
> getcofAuthTplResGroup(opts)

Get list



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthTplResGroupApi();

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
apiInstance.getcofAuthTplResGroup(opts, callback);
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

<a name="getcofAuthTplResGroupById"></a>
# **getcofAuthTplResGroupById**
> CofAuthTplResGroup getcofAuthTplResGroupById(cofAuthTplResGroupId)

Find cof_auth_tpl_res_group by ID

Returns a single cof_auth_tpl_res_group

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthTplResGroupApi();

var cofAuthTplResGroupId = 789; // Number | ID of cof_auth_tpl_res_group to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getcofAuthTplResGroupById(cofAuthTplResGroupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofAuthTplResGroupId** | **Number**| ID of cof_auth_tpl_res_group to return | 

### Return type

[**CofAuthTplResGroup**](CofAuthTplResGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getcofAuthTplResGroupCount"></a>
# **getcofAuthTplResGroupCount**
> Object getcofAuthTplResGroupCount(opts)

Get cof_auth_tpl_res_group count

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthTplResGroupApi();

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
apiInstance.getcofAuthTplResGroupCount(opts, callback);
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

<a name="updatecofAuthTplResGroup"></a>
# **updatecofAuthTplResGroup**
> updatecofAuthTplResGroup(cofAuthTplResGroupId, body)

Updates a cof_auth_tpl_res_group



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthTplResGroupApi();

var cofAuthTplResGroupId = 789; // Number | ID of cof_auth_tpl_res_group to return

var body = new XgeneCloud.CofAuthTplResGroup(); // CofAuthTplResGroup | cof_auth_tpl_res_group object that needs to be added to the store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofAuthTplResGroup(cofAuthTplResGroupId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofAuthTplResGroupId** | **Number**| ID of cof_auth_tpl_res_group to return | 
 **body** | [**CofAuthTplResGroup**](CofAuthTplResGroup.md)| cof_auth_tpl_res_group object that needs to be added to the store | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatecofAuthTplResGroup_0"></a>
# **updatecofAuthTplResGroup_0**
> updatecofAuthTplResGroup_0(body)

Updates a cof_auth_tpl_res_group



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthTplResGroupApi();

var body = [new XgeneCloud.CofAuthTplResGroup()]; // [CofAuthTplResGroup] | cof_auth_tpl_res_group objects with id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofAuthTplResGroup_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofAuthTplResGroup]**](CofAuthTplResGroup.md)| cof_auth_tpl_res_group objects with id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

