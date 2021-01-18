# XgeneCloud.CofDictTypeI18nApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addcofDictTypeI18n**](CofDictTypeI18nApi.md#addcofDictTypeI18n) | **POST** /api/v1/cof_dict_type_i18n | Add a new cof_dict_type_i18n
[**bulkcofDictTypeI18nInsert**](CofDictTypeI18nApi.md#bulkcofDictTypeI18nInsert) | **POST** /api/v1/cof_dict_type_i18n/bulk | Bulk cof_dict_type_i18n insert
[**checkcofDictTypeI18nExists**](CofDictTypeI18nApi.md#checkcofDictTypeI18nExists) | **GET** /api/v1/cof_dict_type_i18n/{cof_dict_type_i18nId}/exists | Check cof_dict_type_i18n with provided ID exists
[**cofDictTypeI18nAggregate**](CofDictTypeI18nApi.md#cofDictTypeI18nAggregate) | **GET** /api/v1/cof_dict_type_i18n/aggregate/{columnName} | Get first one from filtered data
[**cofDictTypeI18nDistinct**](CofDictTypeI18nApi.md#cofDictTypeI18nDistinct) | **GET** /api/v1/cof_dict_type_i18n/distinct/{columnName} | Get first one from filtered data
[**cofDictTypeI18nDistribution**](CofDictTypeI18nApi.md#cofDictTypeI18nDistribution) | **GET** /api/v1/cof_dict_type_i18n/distribution/{columnName} | 
[**cofDictTypeI18nGroupByColumn**](CofDictTypeI18nApi.md#cofDictTypeI18nGroupByColumn) | **GET** /api/v1/cof_dict_type_i18n/groupby/{columnName} | Group by column
[**deletecofDictTypeI18n**](CofDictTypeI18nApi.md#deletecofDictTypeI18n) | **DELETE** /api/v1/cof_dict_type_i18n/{cof_dict_type_i18nId} | Deletes a cof_dict_type_i18n
[**deletecofDictTypeI18n_0**](CofDictTypeI18nApi.md#deletecofDictTypeI18n_0) | **DELETE** /api/v1/cof_dict_type_i18n/bulk | Deletes a cof_dict_type_i18n
[**findOnecofDictTypeI18n**](CofDictTypeI18nApi.md#findOnecofDictTypeI18n) | **GET** /api/v1/cof_dict_type_i18n/findOne | Get first one from filtered data
[**getcofDictTypeI18n**](CofDictTypeI18nApi.md#getcofDictTypeI18n) | **GET** /api/v1/cof_dict_type_i18n | Get list
[**getcofDictTypeI18nById**](CofDictTypeI18nApi.md#getcofDictTypeI18nById) | **GET** /api/v1/cof_dict_type_i18n/{cof_dict_type_i18nId} | Find cof_dict_type_i18n by ID
[**getcofDictTypeI18nCount**](CofDictTypeI18nApi.md#getcofDictTypeI18nCount) | **GET** /api/v1/cof_dict_type_i18n/count | Get cof_dict_type_i18n count
[**updatecofDictTypeI18n**](CofDictTypeI18nApi.md#updatecofDictTypeI18n) | **PUT** /api/v1/cof_dict_type_i18n/{cof_dict_type_i18nId} | Updates a cof_dict_type_i18n
[**updatecofDictTypeI18n_0**](CofDictTypeI18nApi.md#updatecofDictTypeI18n_0) | **PUT** /api/v1/cof_dict_type_i18n/bulk | Updates a cof_dict_type_i18n


<a name="addcofDictTypeI18n"></a>
# **addcofDictTypeI18n**
> addcofDictTypeI18n(body)

Add a new cof_dict_type_i18n



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictTypeI18nApi();

var body = new XgeneCloud.CofDictTypeI18n(); // CofDictTypeI18n | cof_dict_type_i18n object that needs to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addcofDictTypeI18n(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CofDictTypeI18n**](CofDictTypeI18n.md)| cof_dict_type_i18n object that needs to add | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkcofDictTypeI18nInsert"></a>
# **bulkcofDictTypeI18nInsert**
> bulkcofDictTypeI18nInsert(body)

Bulk cof_dict_type_i18n insert



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictTypeI18nApi();

var body = [new XgeneCloud.CofDictTypeI18n()]; // [CofDictTypeI18n] | cof_dict_type_i18n objects


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkcofDictTypeI18nInsert(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofDictTypeI18n]**](CofDictTypeI18n.md)| cof_dict_type_i18n objects | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="checkcofDictTypeI18nExists"></a>
# **checkcofDictTypeI18nExists**
> 'Boolean' checkcofDictTypeI18nExists(cofDictTypeI18nId)

Check cof_dict_type_i18n with provided ID exists

Returns a single cof_dict_type_i18n

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictTypeI18nApi();

var cofDictTypeI18nId = 789; // Number | ID of cof_dict_type_i18n


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkcofDictTypeI18nExists(cofDictTypeI18nId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofDictTypeI18nId** | **Number**| ID of cof_dict_type_i18n | 

### Return type

**'Boolean'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cofDictTypeI18nAggregate"></a>
# **cofDictTypeI18nAggregate**
> CofDictTypeI18n cofDictTypeI18nAggregate(columnName, fields, func, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictTypeI18nApi();

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
apiInstance.cofDictTypeI18nAggregate(columnName, fields, func, opts, callback);
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

[**CofDictTypeI18n**](CofDictTypeI18n.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cofDictTypeI18nDistinct"></a>
# **cofDictTypeI18nDistinct**
> [Object] cofDictTypeI18nDistinct(columnName, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictTypeI18nApi();

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
apiInstance.cofDictTypeI18nDistinct(columnName, opts, callback);
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

<a name="cofDictTypeI18nDistribution"></a>
# **cofDictTypeI18nDistribution**
> [Object] cofDictTypeI18nDistribution(columnName, opts)





### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictTypeI18nApi();

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
apiInstance.cofDictTypeI18nDistribution(columnName, opts, callback);
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

<a name="cofDictTypeI18nGroupByColumn"></a>
# **cofDictTypeI18nGroupByColumn**
> CofDictTypeI18n cofDictTypeI18nGroupByColumn(columnName, opts)

Group by column



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictTypeI18nApi();

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
apiInstance.cofDictTypeI18nGroupByColumn(columnName, opts, callback);
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

[**CofDictTypeI18n**](CofDictTypeI18n.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletecofDictTypeI18n"></a>
# **deletecofDictTypeI18n**
> deletecofDictTypeI18n(cofDictTypeI18nId)

Deletes a cof_dict_type_i18n



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictTypeI18nApi();

var cofDictTypeI18nId = 789; // Number | ID of cof_dict_type_i18n to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofDictTypeI18n(cofDictTypeI18nId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofDictTypeI18nId** | **Number**| ID of cof_dict_type_i18n to return | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletecofDictTypeI18n_0"></a>
# **deletecofDictTypeI18n_0**
> deletecofDictTypeI18n_0(body)

Deletes a cof_dict_type_i18n



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictTypeI18nApi();

var body = [new XgeneCloud.CofDictTypeI18n()]; // [CofDictTypeI18n] | cof_dict_type_i18n objects contains id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofDictTypeI18n_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofDictTypeI18n]**](CofDictTypeI18n.md)| cof_dict_type_i18n objects contains id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findOnecofDictTypeI18n"></a>
# **findOnecofDictTypeI18n**
> CofDictTypeI18n findOnecofDictTypeI18n(opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictTypeI18nApi();

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
apiInstance.findOnecofDictTypeI18n(opts, callback);
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

[**CofDictTypeI18n**](CofDictTypeI18n.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getcofDictTypeI18n"></a>
# **getcofDictTypeI18n**
> getcofDictTypeI18n(opts)

Get list



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictTypeI18nApi();

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
apiInstance.getcofDictTypeI18n(opts, callback);
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

<a name="getcofDictTypeI18nById"></a>
# **getcofDictTypeI18nById**
> CofDictTypeI18n getcofDictTypeI18nById(cofDictTypeI18nId)

Find cof_dict_type_i18n by ID

Returns a single cof_dict_type_i18n

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictTypeI18nApi();

var cofDictTypeI18nId = 789; // Number | ID of cof_dict_type_i18n to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getcofDictTypeI18nById(cofDictTypeI18nId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofDictTypeI18nId** | **Number**| ID of cof_dict_type_i18n to return | 

### Return type

[**CofDictTypeI18n**](CofDictTypeI18n.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getcofDictTypeI18nCount"></a>
# **getcofDictTypeI18nCount**
> Object getcofDictTypeI18nCount(opts)

Get cof_dict_type_i18n count

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictTypeI18nApi();

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
apiInstance.getcofDictTypeI18nCount(opts, callback);
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

<a name="updatecofDictTypeI18n"></a>
# **updatecofDictTypeI18n**
> updatecofDictTypeI18n(cofDictTypeI18nId, body)

Updates a cof_dict_type_i18n



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictTypeI18nApi();

var cofDictTypeI18nId = 789; // Number | ID of cof_dict_type_i18n to return

var body = new XgeneCloud.CofDictTypeI18n(); // CofDictTypeI18n | cof_dict_type_i18n object that needs to be added to the store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofDictTypeI18n(cofDictTypeI18nId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofDictTypeI18nId** | **Number**| ID of cof_dict_type_i18n to return | 
 **body** | [**CofDictTypeI18n**](CofDictTypeI18n.md)| cof_dict_type_i18n object that needs to be added to the store | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatecofDictTypeI18n_0"></a>
# **updatecofDictTypeI18n_0**
> updatecofDictTypeI18n_0(body)

Updates a cof_dict_type_i18n



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictTypeI18nApi();

var body = [new XgeneCloud.CofDictTypeI18n()]; // [CofDictTypeI18n] | cof_dict_type_i18n objects with id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofDictTypeI18n_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofDictTypeI18n]**](CofDictTypeI18n.md)| cof_dict_type_i18n objects with id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

