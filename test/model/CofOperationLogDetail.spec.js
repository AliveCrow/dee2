/*
 * XgeneCloud
 * Create APIs at the speed of your thoughts
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.XgeneCloud);
  }
}(this, function(expect, XgeneCloud) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('CofOperationLogDetail', function() {
      beforeEach(function() {
        instance = new XgeneCloud.CofOperationLogDetail();
      });

      it('should create an instance of CofOperationLogDetail', function() {
        // TODO: update the code to test CofOperationLogDetail
        expect(instance).to.be.a(XgeneCloud.CofOperationLogDetail);
      });

      it('should have the property ID (base name: "ID")', function() {
        // TODO: update the code to test the property ID
        expect(instance).to.have.property('ID');
        // expect(instance.ID).to.be(expectedValueLiteral);
      });

      it('should have the property OLD_DATA_JSON (base name: "OLD_DATA_JSON")', function() {
        // TODO: update the code to test the property OLD_DATA_JSON
        expect(instance).to.have.property('OLD_DATA_JSON');
        // expect(instance.OLD_DATA_JSON).to.be(expectedValueLiteral);
      });

      it('should have the property NEW_DATA_JSON (base name: "NEW_DATA_JSON")', function() {
        // TODO: update the code to test the property NEW_DATA_JSON
        expect(instance).to.have.property('NEW_DATA_JSON');
        // expect(instance.NEW_DATA_JSON).to.be(expectedValueLiteral);
      });

    });
  });

}));