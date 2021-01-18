# XgeneCloud.CofAuthTemplateApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addcofAuthTemplate**](CofAuthTemplateApi.md#addcofAuthTemplate) | **POST** /api/v1/cof_auth_template | Add a new cof_auth_template
[**bulkcofAuthTemplateInsert**](CofAuthTemplateApi.md#bulkcofAuthTemplateInsert) | **POST** /api/v1/cof_auth_template/bulk | Bulk cof_auth_template insert
[**checkcofAuthTemplateExists**](CofAuthTemplateApi.md#checkcofAuthTemplateExists) | **GET** /api/v1/cof_auth_template/{cof_auth_templateId}/exists | Check cof_auth_template with provided ID exists
[**cofAuthTemplateAggregate**](CofAuthTemplateApi.md#cofAuthTemplateAggregate) | **GET** /api/v1/cof_auth_template/aggregate/{columnName} | Get first one from filtered data
[**cofAuthTemplateDistinct**](CofAuthTemplateApi.md#cofAuthTemplateDistinct) | **GET** /api/v1/cof_auth_template/distinct/{columnName} | Get first one from filtered data
[**cofAuthTemplateDistribution**](CofAuthTemplateApi.md#cofAuthTemplateDistribution) | **GET** /api/v1/cof_auth_template/distribution/{columnName} | 
[**cofAuthTemplateGroupByColumn**](CofAuthTemplateApi.md#cofAuthTemplateGroupByColumn) | **GET** /api/v1/cof_auth_template/groupby/{columnName} | Group by column
[**deletecofAuthTemplate**](CofAuthTemplateApi.md#deletecofAuthTemplate) | **DELETE** /api/v1/cof_auth_template/{cof_auth_templateId} | Deletes a cof_auth_template
[**deletecofAuthTemplate_0**](CofAuthTemplateApi.md#deletecofAuthTemplate_0) | **DELETE** /api/v1/cof_auth_template/bulk | Deletes a cof_auth_template
[**findOnecofAuthTemplate**](CofAuthTemplateApi.md#findOnecofAuthTemplate) | **GET** /api/v1/cof_auth_template/findOne | Get first one from filtered data
[**getcofAuthTemplate**](CofAuthTemplateApi.md#getcofAuthTemplate) | **GET** /api/v1/cof_auth_template | Get list
[**getcofAuthTemplateById**](CofAuthTemplateApi.md#getcofAuthTemplateById) | **GET** /api/v1/cof_auth_template/{cof_auth_templateId} | Find cof_auth_template by ID
[**getcofAuthTemplateCount**](CofAuthTemplateApi.md#getcofAuthTemplateCount) | **GET** /api/v1/cof_auth_template/count | Get cof_auth_template count
[**updatecofAuthTemplate**](CofAuthTemplateApi.md#updatecofAuthTemplate) | **PUT** /api/v1/cof_auth_template/{cof_auth_templateId} | Updates a cof_auth_template
[**updatecofAuthTemplate_0**](CofAuthTemplateApi.md#updatecofAuthTemplate_0) | **PUT** /api/v1/cof_auth_template/bulk | Updates a cof_auth_template


<a name="addcofAuthTemplate"></a>
# **addcofAuthTemplate**
> addcofAuthTemplate(body)

Add a new cof_auth_template



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthTemplateApi();

var body = new XgeneCloud.CofAuthTemplate(); // CofAuthTemplate | cof_auth_template object that needs to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addcofAuthTemplate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CofAuthTemplate**](CofAuthTemplate.md)| cof_auth_template object that needs to add | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkcofAuthTemplateInsert"></a>
# **bulkcofAuthTemplateInsert**
> bulkcofAuthTemplateInsert(body)

Bulk cof_auth_template insert



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthTemplateApi();

var body = [new XgeneCloud.CofAuthTemplate()]; // [CofAuthTemplate] | cof_auth_template objects


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkcofAuthTemplateInsert(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofAuthTemplate]**](CofAuthTemplate.md)| cof_auth_template objects | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="checkcofAuthTemplateExists"></a>
# **checkcofAuthTemplateExists**
> 'Boolean' checkcofAuthTemplateExists(cofAuthTemplateId)

Check cof_auth_template with provided ID exists

Returns a single cof_auth_template

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthTemplateApi();

var cofAuthTemplateId = 789; // Number | ID of cof_auth_template


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkcofAuthTemplateExists(cofAuthTemplateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofAuthTemplateId** | **Number**| ID of cof_auth_template | 

### Return type

**'Boolean'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cofAuthTemplateAggregate"></a>
# **cofAuthTemplateAggregate**
> CofAuthTemplate cofAuthTemplateAggregate(columnName, fields, func, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthTemplateApi();

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
apiInstance.cofAuthTemplateAggregate(columnName, fields, func, opts, callback);
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

[**CofAuthTemplate**](CofAuthTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cofAuthTemplateDistinct"></a>
# **cofAuthTemplateDistinct**
> [Object] cofAuthTemplateDistinct(columnName, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthTemplateApi();

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
apiInstance.cofAuthTemplateDistinct(columnName, opts, callback);
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

<a name="cofAuthTemplateDistribution"></a>
# **cofAuthTemplateDistribution**
> [Object] cofAuthTemplateDistribution(columnName, opts)





### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthTemplateApi();

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
apiInstance.cofAuthTemplateDistribution(columnName, opts, callback);
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

<a name="cofAuthTemplateGroupByColumn"></a>
# **cofAuthTemplateGroupByColumn**
> CofAuthTemplate cofAuthTemplateGroupByColumn(columnName, opts)

Group by column



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthTemplateApi();

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
apiInstance.cofAuthTemplateGroupByColumn(columnName, opts, callback);
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

[**CofAuthTemplate**](CofAuthTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletecofAuthTemplate"></a>
# **deletecofAuthTemplate**
> deletecofAuthTemplate(cofAuthTemplateId)

Deletes a cof_auth_template



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthTemplateApi();

var cofAuthTemplateId = 789; // Number | ID of cof_auth_template to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofAuthTemplate(cofAuthTemplateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofAuthTemplateId** | **Number**| ID of cof_auth_template to return | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletecofAuthTemplate_0"></a>
# **deletecofAuthTemplate_0**
> deletecofAuthTemplate_0(body)

Deletes a cof_auth_template



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthTemplateApi();

var body = [new XgeneCloud.CofAuthTemplate()]; // [CofAuthTemplate] | cof_auth_template objects contains id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofAuthTemplate_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofAuthTemplate]**](CofAuthTemplate.md)| cof_auth_template objects contains id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findOnecofAuthTemplate"></a>
# **findOnecofAuthTemplate**
> CofAuthTemplate findOnecofAuthTemplate(opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthTemplateApi();

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
apiInstance.findOnecofAuthTemplate(opts, callback);
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

[**CofAuthTemplate**](CofAuthTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getcofAuthTemplate"></a>
# **getcofAuthTemplate**
> getcofAuthTemplate(opts)

Get list



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthTemplateApi();

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
apiInstance.getcofAuthTemplate(opts, callback);
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

<a name="getcofAuthTemplateById"></a>
# **getcofAuthTemplateById**
> CofAuthTemplate getcofAuthTemplateById(cofAuthTemplateId)

Find cof_auth_template by ID

Returns a single cof_auth_template

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthTemplateApi();

var cofAuthTemplateId = 789; // Number | ID of cof_auth_template to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getcofAuthTemplateById(cofAuthTemplateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofAuthTemplateId** | **Number**| ID of cof_auth_template to return | 

### Return type

[**CofAuthTemplate**](CofAuthTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getcofAuthTemplateCount"></a>
# **getcofAuthTemplateCount**
> Object getcofAuthTemplateCount(opts)

Get cof_auth_template count

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthTemplateApi();

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
apiInstance.getcofAuthTemplateCount(opts, callback);
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

<a name="updatecofAuthTemplate"></a>
# **updatecofAuthTemplate**
> updatecofAuthTemplate(cofAuthTemplateId, body)

Updates a cof_auth_template



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthTemplateApi();

var cofAuthTemplateId = 789; // Number | ID of cof_auth_template to return

var body = new XgeneCloud.CofAuthTemplate(); // CofAuthTemplate | cof_auth_template object that needs to be added to the store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofAuthTemplate(cofAuthTemplateId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofAuthTemplateId** | **Number**| ID of cof_auth_template to return | 
 **body** | [**CofAuthTemplate**](CofAuthTemplate.md)| cof_auth_template object that needs to be added to the store | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatecofAuthTemplate_0"></a>
# **updatecofAuthTemplate_0**
> updatecofAuthTemplate_0(body)

Updates a cof_auth_template



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofAuthTemplateApi();

var body = [new XgeneCloud.CofAuthTemplate()]; // [CofAuthTemplate] | cof_auth_template objects with id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofAuthTemplate_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofAuthTemplate]**](CofAuthTemplate.md)| cof_auth_template objects with id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

