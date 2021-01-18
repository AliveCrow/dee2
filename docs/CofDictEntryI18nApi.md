# XgeneCloud.CofDictEntryI18nApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addcofDictEntryI18n**](CofDictEntryI18nApi.md#addcofDictEntryI18n) | **POST** /api/v1/cof_dict_entry_i18n | Add a new cof_dict_entry_i18n
[**bulkcofDictEntryI18nInsert**](CofDictEntryI18nApi.md#bulkcofDictEntryI18nInsert) | **POST** /api/v1/cof_dict_entry_i18n/bulk | Bulk cof_dict_entry_i18n insert
[**checkcofDictEntryI18nExists**](CofDictEntryI18nApi.md#checkcofDictEntryI18nExists) | **GET** /api/v1/cof_dict_entry_i18n/{cof_dict_entry_i18nId}/exists | Check cof_dict_entry_i18n with provided ID exists
[**cofDictEntryI18nAggregate**](CofDictEntryI18nApi.md#cofDictEntryI18nAggregate) | **GET** /api/v1/cof_dict_entry_i18n/aggregate/{columnName} | Get first one from filtered data
[**cofDictEntryI18nDistinct**](CofDictEntryI18nApi.md#cofDictEntryI18nDistinct) | **GET** /api/v1/cof_dict_entry_i18n/distinct/{columnName} | Get first one from filtered data
[**cofDictEntryI18nDistribution**](CofDictEntryI18nApi.md#cofDictEntryI18nDistribution) | **GET** /api/v1/cof_dict_entry_i18n/distribution/{columnName} | 
[**cofDictEntryI18nGroupByColumn**](CofDictEntryI18nApi.md#cofDictEntryI18nGroupByColumn) | **GET** /api/v1/cof_dict_entry_i18n/groupby/{columnName} | Group by column
[**deletecofDictEntryI18n**](CofDictEntryI18nApi.md#deletecofDictEntryI18n) | **DELETE** /api/v1/cof_dict_entry_i18n/{cof_dict_entry_i18nId} | Deletes a cof_dict_entry_i18n
[**deletecofDictEntryI18n_0**](CofDictEntryI18nApi.md#deletecofDictEntryI18n_0) | **DELETE** /api/v1/cof_dict_entry_i18n/bulk | Deletes a cof_dict_entry_i18n
[**findOnecofDictEntryI18n**](CofDictEntryI18nApi.md#findOnecofDictEntryI18n) | **GET** /api/v1/cof_dict_entry_i18n/findOne | Get first one from filtered data
[**getcofDictEntryI18n**](CofDictEntryI18nApi.md#getcofDictEntryI18n) | **GET** /api/v1/cof_dict_entry_i18n | Get list
[**getcofDictEntryI18nById**](CofDictEntryI18nApi.md#getcofDictEntryI18nById) | **GET** /api/v1/cof_dict_entry_i18n/{cof_dict_entry_i18nId} | Find cof_dict_entry_i18n by ID
[**getcofDictEntryI18nCount**](CofDictEntryI18nApi.md#getcofDictEntryI18nCount) | **GET** /api/v1/cof_dict_entry_i18n/count | Get cof_dict_entry_i18n count
[**updatecofDictEntryI18n**](CofDictEntryI18nApi.md#updatecofDictEntryI18n) | **PUT** /api/v1/cof_dict_entry_i18n/{cof_dict_entry_i18nId} | Updates a cof_dict_entry_i18n
[**updatecofDictEntryI18n_0**](CofDictEntryI18nApi.md#updatecofDictEntryI18n_0) | **PUT** /api/v1/cof_dict_entry_i18n/bulk | Updates a cof_dict_entry_i18n


<a name="addcofDictEntryI18n"></a>
# **addcofDictEntryI18n**
> addcofDictEntryI18n(body)

Add a new cof_dict_entry_i18n



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictEntryI18nApi();

var body = new XgeneCloud.CofDictEntryI18n(); // CofDictEntryI18n | cof_dict_entry_i18n object that needs to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addcofDictEntryI18n(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CofDictEntryI18n**](CofDictEntryI18n.md)| cof_dict_entry_i18n object that needs to add | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkcofDictEntryI18nInsert"></a>
# **bulkcofDictEntryI18nInsert**
> bulkcofDictEntryI18nInsert(body)

Bulk cof_dict_entry_i18n insert



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictEntryI18nApi();

var body = [new XgeneCloud.CofDictEntryI18n()]; // [CofDictEntryI18n] | cof_dict_entry_i18n objects


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkcofDictEntryI18nInsert(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofDictEntryI18n]**](CofDictEntryI18n.md)| cof_dict_entry_i18n objects | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="checkcofDictEntryI18nExists"></a>
# **checkcofDictEntryI18nExists**
> 'Boolean' checkcofDictEntryI18nExists(cofDictEntryI18nId)

Check cof_dict_entry_i18n with provided ID exists

Returns a single cof_dict_entry_i18n

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictEntryI18nApi();

var cofDictEntryI18nId = 789; // Number | ID of cof_dict_entry_i18n


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkcofDictEntryI18nExists(cofDictEntryI18nId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofDictEntryI18nId** | **Number**| ID of cof_dict_entry_i18n | 

### Return type

**'Boolean'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cofDictEntryI18nAggregate"></a>
# **cofDictEntryI18nAggregate**
> CofDictEntryI18n cofDictEntryI18nAggregate(columnName, fields, func, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictEntryI18nApi();

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
apiInstance.cofDictEntryI18nAggregate(columnName, fields, func, opts, callback);
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

[**CofDictEntryI18n**](CofDictEntryI18n.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cofDictEntryI18nDistinct"></a>
# **cofDictEntryI18nDistinct**
> [Object] cofDictEntryI18nDistinct(columnName, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictEntryI18nApi();

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
apiInstance.cofDictEntryI18nDistinct(columnName, opts, callback);
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

<a name="cofDictEntryI18nDistribution"></a>
# **cofDictEntryI18nDistribution**
> [Object] cofDictEntryI18nDistribution(columnName, opts)





### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictEntryI18nApi();

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
apiInstance.cofDictEntryI18nDistribution(columnName, opts, callback);
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

<a name="cofDictEntryI18nGroupByColumn"></a>
# **cofDictEntryI18nGroupByColumn**
> CofDictEntryI18n cofDictEntryI18nGroupByColumn(columnName, opts)

Group by column



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictEntryI18nApi();

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
apiInstance.cofDictEntryI18nGroupByColumn(columnName, opts, callback);
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

[**CofDictEntryI18n**](CofDictEntryI18n.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletecofDictEntryI18n"></a>
# **deletecofDictEntryI18n**
> deletecofDictEntryI18n(cofDictEntryI18nId)

Deletes a cof_dict_entry_i18n



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictEntryI18nApi();

var cofDictEntryI18nId = 789; // Number | ID of cof_dict_entry_i18n to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofDictEntryI18n(cofDictEntryI18nId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofDictEntryI18nId** | **Number**| ID of cof_dict_entry_i18n to return | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletecofDictEntryI18n_0"></a>
# **deletecofDictEntryI18n_0**
> deletecofDictEntryI18n_0(body)

Deletes a cof_dict_entry_i18n



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictEntryI18nApi();

var body = [new XgeneCloud.CofDictEntryI18n()]; // [CofDictEntryI18n] | cof_dict_entry_i18n objects contains id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofDictEntryI18n_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofDictEntryI18n]**](CofDictEntryI18n.md)| cof_dict_entry_i18n objects contains id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findOnecofDictEntryI18n"></a>
# **findOnecofDictEntryI18n**
> CofDictEntryI18n findOnecofDictEntryI18n(opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictEntryI18nApi();

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
apiInstance.findOnecofDictEntryI18n(opts, callback);
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

[**CofDictEntryI18n**](CofDictEntryI18n.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getcofDictEntryI18n"></a>
# **getcofDictEntryI18n**
> getcofDictEntryI18n(opts)

Get list



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictEntryI18nApi();

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
apiInstance.getcofDictEntryI18n(opts, callback);
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

<a name="getcofDictEntryI18nById"></a>
# **getcofDictEntryI18nById**
> CofDictEntryI18n getcofDictEntryI18nById(cofDictEntryI18nId)

Find cof_dict_entry_i18n by ID

Returns a single cof_dict_entry_i18n

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictEntryI18nApi();

var cofDictEntryI18nId = 789; // Number | ID of cof_dict_entry_i18n to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getcofDictEntryI18nById(cofDictEntryI18nId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofDictEntryI18nId** | **Number**| ID of cof_dict_entry_i18n to return | 

### Return type

[**CofDictEntryI18n**](CofDictEntryI18n.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getcofDictEntryI18nCount"></a>
# **getcofDictEntryI18nCount**
> Object getcofDictEntryI18nCount(opts)

Get cof_dict_entry_i18n count

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictEntryI18nApi();

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
apiInstance.getcofDictEntryI18nCount(opts, callback);
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

<a name="updatecofDictEntryI18n"></a>
# **updatecofDictEntryI18n**
> updatecofDictEntryI18n(cofDictEntryI18nId, body)

Updates a cof_dict_entry_i18n



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictEntryI18nApi();

var cofDictEntryI18nId = 789; // Number | ID of cof_dict_entry_i18n to return

var body = new XgeneCloud.CofDictEntryI18n(); // CofDictEntryI18n | cof_dict_entry_i18n object that needs to be added to the store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofDictEntryI18n(cofDictEntryI18nId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofDictEntryI18nId** | **Number**| ID of cof_dict_entry_i18n to return | 
 **body** | [**CofDictEntryI18n**](CofDictEntryI18n.md)| cof_dict_entry_i18n object that needs to be added to the store | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatecofDictEntryI18n_0"></a>
# **updatecofDictEntryI18n_0**
> updatecofDictEntryI18n_0(body)

Updates a cof_dict_entry_i18n



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictEntryI18nApi();

var body = [new XgeneCloud.CofDictEntryI18n()]; // [CofDictEntryI18n] | cof_dict_entry_i18n objects with id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofDictEntryI18n_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofDictEntryI18n]**](CofDictEntryI18n.md)| cof_dict_entry_i18n objects with id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

