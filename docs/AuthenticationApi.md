# XgeneCloud.AuthenticationApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**emailValidate**](AuthenticationApi.md#emailValidate) | **POST** /api/v1/auth/email/validate/{tokenId} | Email validate link
[**facebookAuthentication**](AuthenticationApi.md#facebookAuthentication) | **GET** /api/v1/auth/facebook | Facebook authentication url
[**facebookAuthenticationCallback**](AuthenticationApi.md#facebookAuthenticationCallback) | **GET** /api/v1/auth/facebook/callback | Facebook authentication callback url
[**googleAuthentication**](AuthenticationApi.md#googleAuthentication) | **GET** /api/v1/auth/google | Google authentication url
[**googleAuthenticationCallback**](AuthenticationApi.md#googleAuthenticationCallback) | **GET** /api/v1/auth/google/callback | Google authentication callback url
[**login**](AuthenticationApi.md#login) | **POST** /api/v1/auth/signin | User login
[**logout**](AuthenticationApi.md#logout) | **GET** /api/v1/auth/signout | User logout
[**passwordChange**](AuthenticationApi.md#passwordChange) | **POST** /api/v1/user/password/change | Update user details
[**passwordForgot**](AuthenticationApi.md#passwordForgot) | **POST** /api/v1/auth/password/forgot | Password Forgot
[**passwordReset**](AuthenticationApi.md#passwordReset) | **POST** /api/v1/auth/password/reset/ | Password reset
[**passwordResetTokenValidate**](AuthenticationApi.md#passwordResetTokenValidate) | **GET** /api/v1/auth/token/validate/{tokenId} | Validate password reset token
[**signup**](AuthenticationApi.md#signup) | **POST** /api/v1/auth/signup | User signup
[**updateUserDetails**](AuthenticationApi.md#updateUserDetails) | **PUT** /api/v1/user | Update user details
[**userDetails**](AuthenticationApi.md#userDetails) | **GET** /api/v1/user/me | USer details


<a name="emailValidate"></a>
# **emailValidate**
> emailValidate(tokenId)

Email validate link



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.AuthenticationApi();

var tokenId = "tokenId_example"; // String | random token id received


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.emailValidate(tokenId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenId** | [**String**](.md)| random token id received | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="facebookAuthentication"></a>
# **facebookAuthentication**
> facebookAuthentication()

Facebook authentication url



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.AuthenticationApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.facebookAuthentication(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="facebookAuthenticationCallback"></a>
# **facebookAuthenticationCallback**
> facebookAuthenticationCallback()

Facebook authentication callback url



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.AuthenticationApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.facebookAuthenticationCallback(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="googleAuthentication"></a>
# **googleAuthentication**
> googleAuthentication()

Google authentication url



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.AuthenticationApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.googleAuthentication(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="googleAuthenticationCallback"></a>
# **googleAuthenticationCallback**
> googleAuthenticationCallback()

Google authentication callback url



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.AuthenticationApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.googleAuthenticationCallback(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="login"></a>
# **login**
> User login(body)

User login



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.AuthenticationApi();

var body = new XgeneCloud.UserAuth(); // UserAuth | Authentication user details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.login(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserAuth**](UserAuth.md)| Authentication user details | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logout"></a>
# **logout**
> logout()

User logout



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.AuthenticationApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.logout(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="passwordChange"></a>
# **passwordChange**
> passwordChange(body)

Update user details



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.AuthenticationApi();

var body = new XgeneCloud.Body2(); // Body2 | Current password and new password


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.passwordChange(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body2**](Body2.md)| Current password and new password | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="passwordForgot"></a>
# **passwordForgot**
> 'Boolean' passwordForgot(body)

Password Forgot



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.AuthenticationApi();

var body = new XgeneCloud.Body(); // Body | Signup user details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.passwordForgot(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body**](Body.md)| Signup user details | 

### Return type

**'Boolean'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="passwordReset"></a>
# **passwordReset**
> passwordReset(tokenId, body)

Password reset



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.AuthenticationApi();

var tokenId = "tokenId_example"; // String | random token id received

var body = new XgeneCloud.Body1(); // Body1 | Reset password details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.passwordReset(tokenId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenId** | [**String**](.md)| random token id received | 
 **body** | [**Body1**](Body1.md)| Reset password details | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="passwordResetTokenValidate"></a>
# **passwordResetTokenValidate**
> passwordResetTokenValidate(tokenId)

Validate password reset token



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.AuthenticationApi();

var tokenId = "tokenId_example"; // String | random token id received


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.passwordResetTokenValidate(tokenId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenId** | [**String**](.md)| random token id received | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="signup"></a>
# **signup**
> User signup(body)

User signup



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.AuthenticationApi();

var body = new XgeneCloud.User(); // User | Signup user details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.signup(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**User**](User.md)| Signup user details | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUserDetails"></a>
# **updateUserDetails**
> updateUserDetails(body)

Update user details



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.AuthenticationApi();

var body = new XgeneCloud.User(); // User | Updated user details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateUserDetails(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**User**](User.md)| Updated user details | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userDetails"></a>
# **userDetails**
> userDetails()

USer details



### Example
```javascript
var XgeneCloud = require('xgene_cloud');

var apiInstance = new XgeneCloud.AuthenticationApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.userDetails(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

