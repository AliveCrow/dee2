# XgeneCloud.CofRoleTemplateApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addcofRoleTemplate**](CofRoleTemplateApi.md#addcofRoleTemplate) | **POST** /api/v1/cof_role_template | Add a new cof_role_template
[**bulkcofRoleTemplateInsert**](CofRoleTemplateApi.md#bulkcofRoleTemplateInsert) | **POST** /api/v1/cof_role_template/bulk | Bulk cof_role_template insert
[**checkcofRoleTemplateExists**](CofRoleTemplateApi.md#checkcofRoleTemplateExists) | **GET** /api/v1/cof_role_template/{cof_role_templateId}/exists | Check cof_role_template with provided ID exists
[**cofRoleTemplateAggregate**](CofRoleTemplateApi.md#cofRoleTemplateAggregate) | **GET** /api/v1/cof_role_template/aggregate/{columnName} | Get first one from filtered data
[**cofRoleTemplateDistinct**](CofRoleTemplateApi.md#cofRoleTemplateDistinct) | **GET** /api/v1/cof_role_template/distinct/{columnName} | Get first one from filtered data
[**cofRoleTemplateDistribution**](CofRoleTemplateApi.md#cofRoleTemplateDistribution) | **GET** /api/v1/cof_role_template/distribution/{columnName} | 
[**cofRoleTemplateGroupByColumn**](CofRoleTemplateApi.md#cofRoleTemplateGroupByColumn) | **GET** /api/v1/cof_role_template/groupby/{columnName} | Group by column
[**deletecofRoleTemplate**](CofRoleTemplateApi.md#deletecofRoleTemplate) | **DELETE** /api/v1/cof_role_template/{cof_role_templateId} | Deletes a cof_role_template
[**deletecofRoleTemplate_0**](CofRoleTemplateApi.md#deletecofRoleTemplate_0) | **DELETE** /api/v1/cof_role_template/bulk | Deletes a cof_role_template
[**findOnecofRoleTemplate**](CofRoleTemplateApi.md#findOnecofRoleTemplate) | **GET** /api/v1/cof_role_template/findOne | Get first one from filtered data
[**getcofRoleTemplate**](CofRoleTemplateApi.md#getcofRoleTemplate) | **GET** /api/v1/cof_role_template | Get list
[**getcofRoleTemplateById**](CofRoleTemplateApi.md#getcofRoleTemplateById) | **GET** /api/v1/cof_role_template/{cof_role_templateId} | Find cof_role_template by ID
[**getcofRoleTemplateCount**](CofRoleTemplateApi.md#getcofRoleTemplateCount) | **GET** /api/v1/cof_role_template/count | Get cof_role_template count
[**updatecofRoleTemplate**](CofRoleTemplateApi.md#updatecofRoleTemplate) | **PUT** /api/v1/cof_role_template/{cof_role_templateId} | Updates a cof_role_template
[**updatecofRoleTemplate_0**](CofRoleTemplateApi.md#updatecofRoleTemplate_0) | **PUT** /api/v1/cof_role_template/bulk | Updates a cof_role_template


<a name="addcofRoleTemplate"></a>
# **addcofRoleTemplate**
> addcofRoleTemplate(body)

Add a new cof_role_template



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleTemplateApi();

var body = new XgeneCloud.CofRoleTemplate(); // CofRoleTemplate | cof_role_template object that needs to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addcofRoleTemplate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CofRoleTemplate**](CofRoleTemplate.md)| cof_role_template object that needs to add | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkcofRoleTemplateInsert"></a>
# **bulkcofRoleTemplateInsert**
> bulkcofRoleTemplateInsert(body)

Bulk cof_role_template insert



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleTemplateApi();

var body = [new XgeneCloud.CofRoleTemplate()]; // [CofRoleTemplate] | cof_role_template objects


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkcofRoleTemplateInsert(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofRoleTemplate]**](CofRoleTemplate.md)| cof_role_template objects | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="checkcofRoleTemplateExists"></a>
# **checkcofRoleTemplateExists**
> 'Boolean' checkcofRoleTemplateExists(cofRoleTemplateId)

Check cof_role_template with provided ID exists

Returns a single cof_role_template

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleTemplateApi();

var cofRoleTemplateId = 789; // Number | ID of cof_role_template


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkcofRoleTemplateExists(cofRoleTemplateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofRoleTemplateId** | **Number**| ID of cof_role_template | 

### Return type

**'Boolean'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cofRoleTemplateAggregate"></a>
# **cofRoleTemplateAggregate**
> CofRoleTemplate cofRoleTemplateAggregate(columnName, fields, func, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleTemplateApi();

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
apiInstance.cofRoleTemplateAggregate(columnName, fields, func, opts, callback);
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

[**CofRoleTemplate**](CofRoleTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cofRoleTemplateDistinct"></a>
# **cofRoleTemplateDistinct**
> [Object] cofRoleTemplateDistinct(columnName, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleTemplateApi();

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
apiInstance.cofRoleTemplateDistinct(columnName, opts, callback);
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

<a name="cofRoleTemplateDistribution"></a>
# **cofRoleTemplateDistribution**
> [Object] cofRoleTemplateDistribution(columnName, opts)





### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleTemplateApi();

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
apiInstance.cofRoleTemplateDistribution(columnName, opts, callback);
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

<a name="cofRoleTemplateGroupByColumn"></a>
# **cofRoleTemplateGroupByColumn**
> CofRoleTemplate cofRoleTemplateGroupByColumn(columnName, opts)

Group by column



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleTemplateApi();

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
apiInstance.cofRoleTemplateGroupByColumn(columnName, opts, callback);
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

[**CofRoleTemplate**](CofRoleTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletecofRoleTemplate"></a>
# **deletecofRoleTemplate**
> deletecofRoleTemplate(cofRoleTemplateId)

Deletes a cof_role_template



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleTemplateApi();

var cofRoleTemplateId = 789; // Number | ID of cof_role_template to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofRoleTemplate(cofRoleTemplateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofRoleTemplateId** | **Number**| ID of cof_role_template to return | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletecofRoleTemplate_0"></a>
# **deletecofRoleTemplate_0**
> deletecofRoleTemplate_0(body)

Deletes a cof_role_template



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleTemplateApi();

var body = [new XgeneCloud.CofRoleTemplate()]; // [CofRoleTemplate] | cof_role_template objects contains id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofRoleTemplate_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofRoleTemplate]**](CofRoleTemplate.md)| cof_role_template objects contains id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findOnecofRoleTemplate"></a>
# **findOnecofRoleTemplate**
> CofRoleTemplate findOnecofRoleTemplate(opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleTemplateApi();

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
apiInstance.findOnecofRoleTemplate(opts, callback);
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

[**CofRoleTemplate**](CofRoleTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getcofRoleTemplate"></a>
# **getcofRoleTemplate**
> getcofRoleTemplate(opts)

Get list



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleTemplateApi();

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
apiInstance.getcofRoleTemplate(opts, callback);
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

<a name="getcofRoleTemplateById"></a>
# **getcofRoleTemplateById**
> CofRoleTemplate getcofRoleTemplateById(cofRoleTemplateId)

Find cof_role_template by ID

Returns a single cof_role_template

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleTemplateApi();

var cofRoleTemplateId = 789; // Number | ID of cof_role_template to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getcofRoleTemplateById(cofRoleTemplateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofRoleTemplateId** | **Number**| ID of cof_role_template to return | 

### Return type

[**CofRoleTemplate**](CofRoleTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getcofRoleTemplateCount"></a>
# **getcofRoleTemplateCount**
> Object getcofRoleTemplateCount(opts)

Get cof_role_template count

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleTemplateApi();

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
apiInstance.getcofRoleTemplateCount(opts, callback);
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

<a name="updatecofRoleTemplate"></a>
# **updatecofRoleTemplate**
> updatecofRoleTemplate(cofRoleTemplateId, body)

Updates a cof_role_template



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleTemplateApi();

var cofRoleTemplateId = 789; // Number | ID of cof_role_template to return

var body = new XgeneCloud.CofRoleTemplate(); // CofRoleTemplate | cof_role_template object that needs to be added to the store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofRoleTemplate(cofRoleTemplateId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofRoleTemplateId** | **Number**| ID of cof_role_template to return | 
 **body** | [**CofRoleTemplate**](CofRoleTemplate.md)| cof_role_template object that needs to be added to the store | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatecofRoleTemplate_0"></a>
# **updatecofRoleTemplate_0**
> updatecofRoleTemplate_0(body)

Updates a cof_role_template



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofRoleTemplateApi();

var body = [new XgeneCloud.CofRoleTemplate()]; // [CofRoleTemplate] | cof_role_template objects with id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofRoleTemplate_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofRoleTemplate]**](CofRoleTemplate.md)| cof_role_template objects with id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

