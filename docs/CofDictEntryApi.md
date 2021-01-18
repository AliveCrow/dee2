# XgeneCloud.CofDictEntryApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addcofDictEntry**](CofDictEntryApi.md#addcofDictEntry) | **POST** /api/v1/cof_dict_entry | Add a new cof_dict_entry
[**bulkcofDictEntryInsert**](CofDictEntryApi.md#bulkcofDictEntryInsert) | **POST** /api/v1/cof_dict_entry/bulk | Bulk cof_dict_entry insert
[**checkcofDictEntryExists**](CofDictEntryApi.md#checkcofDictEntryExists) | **GET** /api/v1/cof_dict_entry/{cof_dict_entryId}/exists | Check cof_dict_entry with provided ID exists
[**cofDictEntryAggregate**](CofDictEntryApi.md#cofDictEntryAggregate) | **GET** /api/v1/cof_dict_entry/aggregate/{columnName} | Get first one from filtered data
[**cofDictEntryDistinct**](CofDictEntryApi.md#cofDictEntryDistinct) | **GET** /api/v1/cof_dict_entry/distinct/{columnName} | Get first one from filtered data
[**cofDictEntryDistribution**](CofDictEntryApi.md#cofDictEntryDistribution) | **GET** /api/v1/cof_dict_entry/distribution/{columnName} | 
[**cofDictEntryGroupByColumn**](CofDictEntryApi.md#cofDictEntryGroupByColumn) | **GET** /api/v1/cof_dict_entry/groupby/{columnName} | Group by column
[**deletecofDictEntry**](CofDictEntryApi.md#deletecofDictEntry) | **DELETE** /api/v1/cof_dict_entry/{cof_dict_entryId} | Deletes a cof_dict_entry
[**deletecofDictEntry_0**](CofDictEntryApi.md#deletecofDictEntry_0) | **DELETE** /api/v1/cof_dict_entry/bulk | Deletes a cof_dict_entry
[**findOnecofDictEntry**](CofDictEntryApi.md#findOnecofDictEntry) | **GET** /api/v1/cof_dict_entry/findOne | Get first one from filtered data
[**getcofDictEntry**](CofDictEntryApi.md#getcofDictEntry) | **GET** /api/v1/cof_dict_entry | Get list
[**getcofDictEntryById**](CofDictEntryApi.md#getcofDictEntryById) | **GET** /api/v1/cof_dict_entry/{cof_dict_entryId} | Find cof_dict_entry by ID
[**getcofDictEntryCount**](CofDictEntryApi.md#getcofDictEntryCount) | **GET** /api/v1/cof_dict_entry/count | Get cof_dict_entry count
[**updatecofDictEntry**](CofDictEntryApi.md#updatecofDictEntry) | **PUT** /api/v1/cof_dict_entry/{cof_dict_entryId} | Updates a cof_dict_entry
[**updatecofDictEntry_0**](CofDictEntryApi.md#updatecofDictEntry_0) | **PUT** /api/v1/cof_dict_entry/bulk | Updates a cof_dict_entry


<a name="addcofDictEntry"></a>
# **addcofDictEntry**
> addcofDictEntry(body)

Add a new cof_dict_entry



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictEntryApi();

var body = new XgeneCloud.CofDictEntry(); // CofDictEntry | cof_dict_entry object that needs to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addcofDictEntry(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CofDictEntry**](CofDictEntry.md)| cof_dict_entry object that needs to add | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkcofDictEntryInsert"></a>
# **bulkcofDictEntryInsert**
> bulkcofDictEntryInsert(body)

Bulk cof_dict_entry insert



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictEntryApi();

var body = [new XgeneCloud.CofDictEntry()]; // [CofDictEntry] | cof_dict_entry objects


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkcofDictEntryInsert(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofDictEntry]**](CofDictEntry.md)| cof_dict_entry objects | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="checkcofDictEntryExists"></a>
# **checkcofDictEntryExists**
> 'Boolean' checkcofDictEntryExists(cofDictEntryId)

Check cof_dict_entry with provided ID exists

Returns a single cof_dict_entry

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictEntryApi();

var cofDictEntryId = 789; // Number | ID of cof_dict_entry


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkcofDictEntryExists(cofDictEntryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofDictEntryId** | **Number**| ID of cof_dict_entry | 

### Return type

**'Boolean'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cofDictEntryAggregate"></a>
# **cofDictEntryAggregate**
> CofDictEntry cofDictEntryAggregate(columnName, fields, func, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictEntryApi();

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
apiInstance.cofDictEntryAggregate(columnName, fields, func, opts, callback);
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

[**CofDictEntry**](CofDictEntry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cofDictEntryDistinct"></a>
# **cofDictEntryDistinct**
> [Object] cofDictEntryDistinct(columnName, opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictEntryApi();

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
apiInstance.cofDictEntryDistinct(columnName, opts, callback);
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

<a name="cofDictEntryDistribution"></a>
# **cofDictEntryDistribution**
> [Object] cofDictEntryDistribution(columnName, opts)





### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictEntryApi();

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
apiInstance.cofDictEntryDistribution(columnName, opts, callback);
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

<a name="cofDictEntryGroupByColumn"></a>
# **cofDictEntryGroupByColumn**
> CofDictEntry cofDictEntryGroupByColumn(columnName, opts)

Group by column



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictEntryApi();

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
apiInstance.cofDictEntryGroupByColumn(columnName, opts, callback);
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

[**CofDictEntry**](CofDictEntry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletecofDictEntry"></a>
# **deletecofDictEntry**
> deletecofDictEntry(cofDictEntryId)

Deletes a cof_dict_entry



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictEntryApi();

var cofDictEntryId = 789; // Number | ID of cof_dict_entry to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofDictEntry(cofDictEntryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofDictEntryId** | **Number**| ID of cof_dict_entry to return | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletecofDictEntry_0"></a>
# **deletecofDictEntry_0**
> deletecofDictEntry_0(body)

Deletes a cof_dict_entry



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictEntryApi();

var body = [new XgeneCloud.CofDictEntry()]; // [CofDictEntry] | cof_dict_entry objects contains id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletecofDictEntry_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofDictEntry]**](CofDictEntry.md)| cof_dict_entry objects contains id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findOnecofDictEntry"></a>
# **findOnecofDictEntry**
> CofDictEntry findOnecofDictEntry(opts)

Get first one from filtered data



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictEntryApi();

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
apiInstance.findOnecofDictEntry(opts, callback);
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

[**CofDictEntry**](CofDictEntry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getcofDictEntry"></a>
# **getcofDictEntry**
> getcofDictEntry(opts)

Get list



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictEntryApi();

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
apiInstance.getcofDictEntry(opts, callback);
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

<a name="getcofDictEntryById"></a>
# **getcofDictEntryById**
> CofDictEntry getcofDictEntryById(cofDictEntryId)

Find cof_dict_entry by ID

Returns a single cof_dict_entry

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictEntryApi();

var cofDictEntryId = 789; // Number | ID of cof_dict_entry to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getcofDictEntryById(cofDictEntryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofDictEntryId** | **Number**| ID of cof_dict_entry to return | 

### Return type

[**CofDictEntry**](CofDictEntry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getcofDictEntryCount"></a>
# **getcofDictEntryCount**
> Object getcofDictEntryCount(opts)

Get cof_dict_entry count

### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictEntryApi();

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
apiInstance.getcofDictEntryCount(opts, callback);
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

<a name="updatecofDictEntry"></a>
# **updatecofDictEntry**
> updatecofDictEntry(cofDictEntryId, body)

Updates a cof_dict_entry



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictEntryApi();

var cofDictEntryId = 789; // Number | ID of cof_dict_entry to return

var body = new XgeneCloud.CofDictEntry(); // CofDictEntry | cof_dict_entry object that needs to be added to the store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofDictEntry(cofDictEntryId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cofDictEntryId** | **Number**| ID of cof_dict_entry to return | 
 **body** | [**CofDictEntry**](CofDictEntry.md)| cof_dict_entry object that needs to be added to the store | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatecofDictEntry_0"></a>
# **updatecofDictEntry_0**
> updatecofDictEntry_0(body)

Updates a cof_dict_entry



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.CofDictEntryApi();

var body = [new XgeneCloud.CofDictEntry()]; // [CofDictEntry] | cof_dict_entry objects with id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatecofDictEntry_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CofDictEntry]**](CofDictEntry.md)| cof_dict_entry objects with id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

