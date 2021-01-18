# XgeneCloud.CofRoleTemplateGroupApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addcofRoleTemplateGroup**](CofRoleTemplateGroupApi.md#addcofRoleTemplateGroup) | **POST** /api/v1/cof_role_template_group | Add a new cof_role_template_group
[**bulkcofRoleTemplateGroupInsert**](CofRoleTemplateGroupApi.md#bulkcofRoleTemplateGroupInsert) | **POST** /api/v1/cof_role_template_group/bulk | Bulk cof_role_template_group insert
[**checkcofRoleTemplateGroupExists**](CofRoleTemplateGroupApi.md#checkcofRoleTemplateGroupExists) | **GET** /api/v1/cof_role_template_group/{cof_role_template_groupId}/exists | Check cof_role_template_group with provided ID exists
[**cofRoleTemplateGroupAggregate**](CofRoleTemplateGroupApi.md#cofRoleTemplateGroupAggregate) | **GET** /api/v1/cof_role_template_group/aggregate/{columnName} | Get first one from filtered data
[**cofRoleTemplateGroupDistinct**](CofRoleTemplateGroupApi.md#cofRoleTemplateGroupDistinct) | **GET** /api/v1/cof_role_template_group/distinct/{columnName} | Get first one from filtered data
[**cofRoleTemplateGroupDistribution**](CofRoleTemplateGroupApi.md#cofRoleTemplateGroupDistribution) | **GET** /api/v1/cof_role_template_group/distribution/{columnName} | 
[**cofRoleTemplateGroupGroupByColumn**](CofRoleTemplateGroupApi.md#cofRoleTemplateGroupGroupByColumn) | **GET** /api/v1/cof_role_template_group/groupby/{columnName} | Group by column
[**deletecofRoleTemplateGroup**](CofRoleTemplateGroupApi.md#deletecofRoleTemplateGroup) | **DELETE** /api/v1/cof_role_template_group/{cof_role_template_groupId} | Deletes a cof_role_template_group
[**deletecofRoleTemplateGroup_0**](CofRoleTemplateGroupApi.md#deletecofRoleTemplateGroup_0) | **DELETE** /api/v1/cof_role_template_group/bulk | Deletes a cof_role_template_group
[**findOnecofRoleTemplateGroup**](CofRoleTemplateGroupApi.md#findOnecofRoleTemplateGroup) | **GET** /api/v1/cof_role_template_group/findOne | Get first one from filtered data
[**getcofRoleTemplateGroup**](CofRoleTemplateGroupApi.md#getcofRoleTemplateGroup) | **GET** /api/v1/cof_role_template_group | Get list
[**getcofRoleTemplateGroupById**](CofRoleTemplateGroupApi.md#getcofRoleTemplateGroupById) | **GET** /api/v1/cof_role_template_group/{cof_role_template_groupId} | Find cof_role_template_group by ID
[**getcofRoleTemplateGroupCount**](CofRoleTemplateGroupApi.md#getcofRoleTemplateGroupCount) | **GET** /api/v1/cof_role_template_group/count | Get cof_role_template_group count
[**updatecofRoleTemplateGroup**](CofRoleTemplateGroupApi.md#updatecofRoleTemplateGroup) | **PUT** /api/v1/cof_role_template_group/{cof_role_template_groupId} | Updates a cof_role_template_group
[**updatecofRoleTemplateGroup_0**](CofRoleTemplateGroupApi.md#updatecofRoleTemplateGroup_0) | **PUT** /api/v1/cof_role_template_group/bulk | Updates a cof_role_template_group


<a name="addcofRoleTemplateGroup"></a>
# **addcofRoleTemplateGroup**
> addcofRoleTemplateGroup(body)

Add a new cof_role_template_group



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleTemplateGroupApi();

var body = new XgeneCloud.CofRoleTemplateGroup(); // CofRoleTemplateGroup | cof_role_template_group object that needs to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addcofRoleTemplateGroup(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CofRoleTemplateGroup**](CofRoleTemplateGroup.md)| cof_role_template_group object that needs to add | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkcofRoleTemplateGroupInsert"></a>
# **bulkcofRoleTemplateGroupInsert**
> bulkcofRoleTemplateGroupInsert(body)

Bulk cof_role_template_group insert



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleTemplateGroupApi();

var body = [new XgeneCloud.CofRoleTemplateGroup()]; // [CofRoleTemplateGroup] | cof_role_template_group objects


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkcofRoleTemplateGroupInsert(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofRoleTemplateGroup]**](CofRoleTemplateGroup.md)| cof_role_template_group objects | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="checkcofRoleTemplateGroupExists"></a>
# **checkcofRoleTemplateGroupExists**
> 'Boolean' checkcofRoleTemplateGroupExists(cofRoleTemplateGroupId)

Check cof_role_template_group with provided ID exists

Returns a single cof_role_template_group

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleTemplateGroupApi();

var cofRoleTemplateGroupId = 789; // Number | ID of cof_role_template_group


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkcofRoleTemplateGroupExists(cofRoleTemplateGroupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofRoleTemplateGroupId** | **Number**| ID of cof_role_template_group | 

### Return type

**'Boolean'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cofRoleTemplateGroupAggregate"></a>
# **cofRoleTemplateGroupAggregate**
> CofRoleTemplateGroup cofRoleTemplateGroupAggregate(columnName, fields, func, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleTemplateGroupApi();

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
apiInstance.cofRoleTemplateGroupAggregate(columnName, fields, func, opts, callback);
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

[**CofRoleTemplateGroup**](CofRoleTemplateGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cofRoleTemplateGroupDistinct"></a>
# **cofRoleTemplateGroupDistinct**
> [Object] cofRoleTemplateGroupDistinct(columnName, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleTemplateGroupApi();

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
apiInstance.cofRoleTemplateGroupDistinct(columnName, opts, callback);
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

<a name="cofRoleTemplateGroupDistribution"></a>
# **cofRoleTemplateGroupDistribution**
> [Object] cofRoleTemplateGroupDistribution(columnName, opts)





### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleTemplateGroupApi();

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
apiInstance.cofRoleTemplateGroupDistribution(columnName, opts, callback);
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

<a name="cofRoleTemplateGroupGroupByColumn"></a>
# **cofRoleTemplateGroupGroupByColumn**
> CofRoleTemplateGroup cofRoleTemplateGroupGroupByColumn(columnName, opts)

Group by column



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleTemplateGroupApi();

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
apiInstance.cofRoleTemplateGroupGroupByColumn(columnName, opts, callback);
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

[**CofRoleTemplateGroup**](CofRoleTemplateGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletecofRoleTemplateGroup"></a>
# **deletecofRoleTemplateGroup**
> deletecofRoleTemplateGroup(cofRoleTemplateGroupId)

Deletes a cof_role_template_group



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleTemplateGroupApi();

var cofRoleTemplateGroupId = 789; // Number | ID of cof_role_template_group to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofRoleTemplateGroup(cofRoleTemplateGroupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofRoleTemplateGroupId** | **Number**| ID of cof_role_template_group to return | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletecofRoleTemplateGroup_0"></a>
# **deletecofRoleTemplateGroup_0**
> deletecofRoleTemplateGroup_0(body)

Deletes a cof_role_template_group



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleTemplateGroupApi();

var body = [new XgeneCloud.CofRoleTemplateGroup()]; // [CofRoleTemplateGroup] | cof_role_template_group objects contains id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofRoleTemplateGroup_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofRoleTemplateGroup]**](CofRoleTemplateGroup.md)| cof_role_template_group objects contains id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findOnecofRoleTemplateGroup"></a>
# **findOnecofRoleTemplateGroup**
> CofRoleTemplateGroup findOnecofRoleTemplateGroup(opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleTemplateGroupApi();

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
apiInstance.findOnecofRoleTemplateGroup(opts, callback);
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

[**CofRoleTemplateGroup**](CofRoleTemplateGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getcofRoleTemplateGroup"></a>
# **getcofRoleTemplateGroup**
> getcofRoleTemplateGroup(opts)

Get list



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleTemplateGroupApi();

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
apiInstance.getcofRoleTemplateGroup(opts, callback);
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

<a name="getcofRoleTemplateGroupById"></a>
# **getcofRoleTemplateGroupById**
> CofRoleTemplateGroup getcofRoleTemplateGroupById(cofRoleTemplateGroupId)

Find cof_role_template_group by ID

Returns a single cof_role_template_group

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleTemplateGroupApi();

var cofRoleTemplateGroupId = 789; // Number | ID of cof_role_template_group to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getcofRoleTemplateGroupById(cofRoleTemplateGroupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofRoleTemplateGroupId** | **Number**| ID of cof_role_template_group to return | 

### Return type

[**CofRoleTemplateGroup**](CofRoleTemplateGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getcofRoleTemplateGroupCount"></a>
# **getcofRoleTemplateGroupCount**
> Object getcofRoleTemplateGroupCount(opts)

Get cof_role_template_group count

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleTemplateGroupApi();

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
apiInstance.getcofRoleTemplateGroupCount(opts, callback);
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

<a name="updatecofRoleTemplateGroup"></a>
# **updatecofRoleTemplateGroup**
> updatecofRoleTemplateGroup(cofRoleTemplateGroupId, body)

Updates a cof_role_template_group



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleTemplateGroupApi();

var cofRoleTemplateGroupId = 789; // Number | ID of cof_role_template_group to return

var body = new XgeneCloud.CofRoleTemplateGroup(); // CofRoleTemplateGroup | cof_role_template_group object that needs to be added to the store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofRoleTemplateGroup(cofRoleTemplateGroupId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofRoleTemplateGroupId** | **Number**| ID of cof_role_template_group to return | 
 **body** | [**CofRoleTemplateGroup**](CofRoleTemplateGroup.md)| cof_role_template_group object that needs to be added to the store | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatecofRoleTemplateGroup_0"></a>
# **updatecofRoleTemplateGroup_0**
> updatecofRoleTemplateGroup_0(body)

Updates a cof_role_template_group



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleTemplateGroupApi();

var body = [new XgeneCloud.CofRoleTemplateGroup()]; // [CofRoleTemplateGroup] | cof_role_template_group objects with id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofRoleTemplateGroup_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofRoleTemplateGroup]**](CofRoleTemplateGroup.md)| cof_role_template_group objects with id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

