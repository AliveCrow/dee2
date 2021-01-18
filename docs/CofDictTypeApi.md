# XgeneCloud.CofDictTypeApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addcofDictType**](CofDictTypeApi.md#addcofDictType) | **POST** /api/v1/cof_dict_type | Add a new cof_dict_type
[**bulkcofDictTypeInsert**](CofDictTypeApi.md#bulkcofDictTypeInsert) | **POST** /api/v1/cof_dict_type/bulk | Bulk cof_dict_type insert
[**checkcofDictTypeExists**](CofDictTypeApi.md#checkcofDictTypeExists) | **GET** /api/v1/cof_dict_type/{cof_dict_typeId}/exists | Check cof_dict_type with provided ID exists
[**cofDictTypeAggregate**](CofDictTypeApi.md#cofDictTypeAggregate) | **GET** /api/v1/cof_dict_type/aggregate/{columnName} | Get first one from filtered data
[**cofDictTypeDistinct**](CofDictTypeApi.md#cofDictTypeDistinct) | **GET** /api/v1/cof_dict_type/distinct/{columnName} | Get first one from filtered data
[**cofDictTypeDistribution**](CofDictTypeApi.md#cofDictTypeDistribution) | **GET** /api/v1/cof_dict_type/distribution/{columnName} | 
[**cofDictTypeGroupByColumn**](CofDictTypeApi.md#cofDictTypeGroupByColumn) | **GET** /api/v1/cof_dict_type/groupby/{columnName} | Group by column
[**deletecofDictType**](CofDictTypeApi.md#deletecofDictType) | **DELETE** /api/v1/cof_dict_type/{cof_dict_typeId} | Deletes a cof_dict_type
[**deletecofDictType_0**](CofDictTypeApi.md#deletecofDictType_0) | **DELETE** /api/v1/cof_dict_type/bulk | Deletes a cof_dict_type
[**findOnecofDictType**](CofDictTypeApi.md#findOnecofDictType) | **GET** /api/v1/cof_dict_type/findOne | Get first one from filtered data
[**getcofDictType**](CofDictTypeApi.md#getcofDictType) | **GET** /api/v1/cof_dict_type | Get list
[**getcofDictTypeById**](CofDictTypeApi.md#getcofDictTypeById) | **GET** /api/v1/cof_dict_type/{cof_dict_typeId} | Find cof_dict_type by ID
[**getcofDictTypeCount**](CofDictTypeApi.md#getcofDictTypeCount) | **GET** /api/v1/cof_dict_type/count | Get cof_dict_type count
[**updatecofDictType**](CofDictTypeApi.md#updatecofDictType) | **PUT** /api/v1/cof_dict_type/{cof_dict_typeId} | Updates a cof_dict_type
[**updatecofDictType_0**](CofDictTypeApi.md#updatecofDictType_0) | **PUT** /api/v1/cof_dict_type/bulk | Updates a cof_dict_type


<a name="addcofDictType"></a>
# **addcofDictType**
> addcofDictType(body)

Add a new cof_dict_type



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictTypeApi();

var body = new XgeneCloud.CofDictType(); // CofDictType | cof_dict_type object that needs to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addcofDictType(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CofDictType**](CofDictType.md)| cof_dict_type object that needs to add | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkcofDictTypeInsert"></a>
# **bulkcofDictTypeInsert**
> bulkcofDictTypeInsert(body)

Bulk cof_dict_type insert



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictTypeApi();

var body = [new XgeneCloud.CofDictType()]; // [CofDictType] | cof_dict_type objects


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkcofDictTypeInsert(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofDictType]**](CofDictType.md)| cof_dict_type objects | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="checkcofDictTypeExists"></a>
# **checkcofDictTypeExists**
> 'Boolean' checkcofDictTypeExists(cofDictTypeId)

Check cof_dict_type with provided ID exists

Returns a single cof_dict_type

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictTypeApi();

var cofDictTypeId = 789; // Number | ID of cof_dict_type


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkcofDictTypeExists(cofDictTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofDictTypeId** | **Number**| ID of cof_dict_type | 

### Return type

**'Boolean'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cofDictTypeAggregate"></a>
# **cofDictTypeAggregate**
> CofDictType cofDictTypeAggregate(columnName, fields, func, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictTypeApi();

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
apiInstance.cofDictTypeAggregate(columnName, fields, func, opts, callback);
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

[**CofDictType**](CofDictType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cofDictTypeDistinct"></a>
# **cofDictTypeDistinct**
> [Object] cofDictTypeDistinct(columnName, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictTypeApi();

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
apiInstance.cofDictTypeDistinct(columnName, opts, callback);
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

<a name="cofDictTypeDistribution"></a>
# **cofDictTypeDistribution**
> [Object] cofDictTypeDistribution(columnName, opts)





### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictTypeApi();

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
apiInstance.cofDictTypeDistribution(columnName, opts, callback);
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

<a name="cofDictTypeGroupByColumn"></a>
# **cofDictTypeGroupByColumn**
> CofDictType cofDictTypeGroupByColumn(columnName, opts)

Group by column



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictTypeApi();

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
apiInstance.cofDictTypeGroupByColumn(columnName, opts, callback);
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

[**CofDictType**](CofDictType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletecofDictType"></a>
# **deletecofDictType**
> deletecofDictType(cofDictTypeId)

Deletes a cof_dict_type



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictTypeApi();

var cofDictTypeId = 789; // Number | ID of cof_dict_type to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofDictType(cofDictTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofDictTypeId** | **Number**| ID of cof_dict_type to return | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletecofDictType_0"></a>
# **deletecofDictType_0**
> deletecofDictType_0(body)

Deletes a cof_dict_type



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictTypeApi();

var body = [new XgeneCloud.CofDictType()]; // [CofDictType] | cof_dict_type objects contains id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofDictType_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofDictType]**](CofDictType.md)| cof_dict_type objects contains id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findOnecofDictType"></a>
# **findOnecofDictType**
> CofDictType findOnecofDictType(opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictTypeApi();

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
apiInstance.findOnecofDictType(opts, callback);
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

[**CofDictType**](CofDictType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getcofDictType"></a>
# **getcofDictType**
> getcofDictType(opts)

Get list



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictTypeApi();

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
apiInstance.getcofDictType(opts, callback);
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

<a name="getcofDictTypeById"></a>
# **getcofDictTypeById**
> CofDictType getcofDictTypeById(cofDictTypeId)

Find cof_dict_type by ID

Returns a single cof_dict_type

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictTypeApi();

var cofDictTypeId = 789; // Number | ID of cof_dict_type to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getcofDictTypeById(cofDictTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofDictTypeId** | **Number**| ID of cof_dict_type to return | 

### Return type

[**CofDictType**](CofDictType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getcofDictTypeCount"></a>
# **getcofDictTypeCount**
> Object getcofDictTypeCount(opts)

Get cof_dict_type count

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictTypeApi();

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
apiInstance.getcofDictTypeCount(opts, callback);
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

<a name="updatecofDictType"></a>
# **updatecofDictType**
> updatecofDictType(cofDictTypeId, body)

Updates a cof_dict_type



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictTypeApi();

var cofDictTypeId = 789; // Number | ID of cof_dict_type to return

var body = new XgeneCloud.CofDictType(); // CofDictType | cof_dict_type object that needs to be added to the store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofDictType(cofDictTypeId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofDictTypeId** | **Number**| ID of cof_dict_type to return | 
 **body** | [**CofDictType**](CofDictType.md)| cof_dict_type object that needs to be added to the store | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatecofDictType_0"></a>
# **updatecofDictType_0**
> updatecofDictType_0(body)

Updates a cof_dict_type



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictTypeApi();

var body = [new XgeneCloud.CofDictType()]; // [CofDictType] | cof_dict_type objects with id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofDictType_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofDictType]**](CofDictType.md)| cof_dict_type objects with id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

