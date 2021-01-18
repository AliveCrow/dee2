# XgeneCloud.CofResGroupApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addcofResGroup**](CofResGroupApi.md#addcofResGroup) | **POST** /api/v1/cof_res_group | Add a new cof_res_group
[**bulkcofResGroupInsert**](CofResGroupApi.md#bulkcofResGroupInsert) | **POST** /api/v1/cof_res_group/bulk | Bulk cof_res_group insert
[**checkcofResGroupExists**](CofResGroupApi.md#checkcofResGroupExists) | **GET** /api/v1/cof_res_group/{cof_res_groupId}/exists | Check cof_res_group with provided ID exists
[**cofResGroupAggregate**](CofResGroupApi.md#cofResGroupAggregate) | **GET** /api/v1/cof_res_group/aggregate/{columnName} | Get first one from filtered data
[**cofResGroupDistinct**](CofResGroupApi.md#cofResGroupDistinct) | **GET** /api/v1/cof_res_group/distinct/{columnName} | Get first one from filtered data
[**cofResGroupDistribution**](CofResGroupApi.md#cofResGroupDistribution) | **GET** /api/v1/cof_res_group/distribution/{columnName} | 
[**cofResGroupGroupByColumn**](CofResGroupApi.md#cofResGroupGroupByColumn) | **GET** /api/v1/cof_res_group/groupby/{columnName} | Group by column
[**deletecofResGroup**](CofResGroupApi.md#deletecofResGroup) | **DELETE** /api/v1/cof_res_group/{cof_res_groupId} | Deletes a cof_res_group
[**deletecofResGroup_0**](CofResGroupApi.md#deletecofResGroup_0) | **DELETE** /api/v1/cof_res_group/bulk | Deletes a cof_res_group
[**findOnecofResGroup**](CofResGroupApi.md#findOnecofResGroup) | **GET** /api/v1/cof_res_group/findOne | Get first one from filtered data
[**getcofResGroup**](CofResGroupApi.md#getcofResGroup) | **GET** /api/v1/cof_res_group | Get list
[**getcofResGroupById**](CofResGroupApi.md#getcofResGroupById) | **GET** /api/v1/cof_res_group/{cof_res_groupId} | Find cof_res_group by ID
[**getcofResGroupCount**](CofResGroupApi.md#getcofResGroupCount) | **GET** /api/v1/cof_res_group/count | Get cof_res_group count
[**updatecofResGroup**](CofResGroupApi.md#updatecofResGroup) | **PUT** /api/v1/cof_res_group/{cof_res_groupId} | Updates a cof_res_group
[**updatecofResGroup_0**](CofResGroupApi.md#updatecofResGroup_0) | **PUT** /api/v1/cof_res_group/bulk | Updates a cof_res_group


<a name="addcofResGroup"></a>
# **addcofResGroup**
> addcofResGroup(body)

Add a new cof_res_group



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofResGroupApi();

var body = new XgeneCloud.CofResGroup(); // CofResGroup | cof_res_group object that needs to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addcofResGroup(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CofResGroup**](CofResGroup.md)| cof_res_group object that needs to add | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkcofResGroupInsert"></a>
# **bulkcofResGroupInsert**
> bulkcofResGroupInsert(body)

Bulk cof_res_group insert



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofResGroupApi();

var body = [new XgeneCloud.CofResGroup()]; // [CofResGroup] | cof_res_group objects


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkcofResGroupInsert(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofResGroup]**](CofResGroup.md)| cof_res_group objects | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="checkcofResGroupExists"></a>
# **checkcofResGroupExists**
> 'Boolean' checkcofResGroupExists(cofResGroupId)

Check cof_res_group with provided ID exists

Returns a single cof_res_group

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofResGroupApi();

var cofResGroupId = 789; // Number | ID of cof_res_group


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkcofResGroupExists(cofResGroupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofResGroupId** | **Number**| ID of cof_res_group | 

### Return type

**'Boolean'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cofResGroupAggregate"></a>
# **cofResGroupAggregate**
> CofResGroup cofResGroupAggregate(columnName, fields, func, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofResGroupApi();

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
apiInstance.cofResGroupAggregate(columnName, fields, func, opts, callback);
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

[**CofResGroup**](CofResGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cofResGroupDistinct"></a>
# **cofResGroupDistinct**
> [Object] cofResGroupDistinct(columnName, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofResGroupApi();

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
apiInstance.cofResGroupDistinct(columnName, opts, callback);
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

<a name="cofResGroupDistribution"></a>
# **cofResGroupDistribution**
> [Object] cofResGroupDistribution(columnName, opts)





### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofResGroupApi();

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
apiInstance.cofResGroupDistribution(columnName, opts, callback);
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

<a name="cofResGroupGroupByColumn"></a>
# **cofResGroupGroupByColumn**
> CofResGroup cofResGroupGroupByColumn(columnName, opts)

Group by column



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofResGroupApi();

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
apiInstance.cofResGroupGroupByColumn(columnName, opts, callback);
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

[**CofResGroup**](CofResGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletecofResGroup"></a>
# **deletecofResGroup**
> deletecofResGroup(cofResGroupId)

Deletes a cof_res_group



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofResGroupApi();

var cofResGroupId = 789; // Number | ID of cof_res_group to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofResGroup(cofResGroupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofResGroupId** | **Number**| ID of cof_res_group to return | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletecofResGroup_0"></a>
# **deletecofResGroup_0**
> deletecofResGroup_0(body)

Deletes a cof_res_group



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofResGroupApi();

var body = [new XgeneCloud.CofResGroup()]; // [CofResGroup] | cof_res_group objects contains id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofResGroup_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofResGroup]**](CofResGroup.md)| cof_res_group objects contains id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findOnecofResGroup"></a>
# **findOnecofResGroup**
> CofResGroup findOnecofResGroup(opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofResGroupApi();

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
apiInstance.findOnecofResGroup(opts, callback);
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

[**CofResGroup**](CofResGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getcofResGroup"></a>
# **getcofResGroup**
> getcofResGroup(opts)

Get list



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofResGroupApi();

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
apiInstance.getcofResGroup(opts, callback);
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

<a name="getcofResGroupById"></a>
# **getcofResGroupById**
> CofResGroup getcofResGroupById(cofResGroupId)

Find cof_res_group by ID

Returns a single cof_res_group

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofResGroupApi();

var cofResGroupId = 789; // Number | ID of cof_res_group to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getcofResGroupById(cofResGroupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofResGroupId** | **Number**| ID of cof_res_group to return | 

### Return type

[**CofResGroup**](CofResGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getcofResGroupCount"></a>
# **getcofResGroupCount**
> Object getcofResGroupCount(opts)

Get cof_res_group count

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofResGroupApi();

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
apiInstance.getcofResGroupCount(opts, callback);
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

<a name="updatecofResGroup"></a>
# **updatecofResGroup**
> updatecofResGroup(cofResGroupId, body)

Updates a cof_res_group



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofResGroupApi();

var cofResGroupId = 789; // Number | ID of cof_res_group to return

var body = new XgeneCloud.CofResGroup(); // CofResGroup | cof_res_group object that needs to be added to the store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofResGroup(cofResGroupId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofResGroupId** | **Number**| ID of cof_res_group to return | 
 **body** | [**CofResGroup**](CofResGroup.md)| cof_res_group object that needs to be added to the store | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatecofResGroup_0"></a>
# **updatecofResGroup_0**
> updatecofResGroup_0(body)

Updates a cof_res_group



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofResGroupApi();

var body = [new XgeneCloud.CofResGroup()]; // [CofResGroup] | cof_res_group objects with id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofResGroup_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofResGroup]**](CofResGroup.md)| cof_res_group objects with id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

