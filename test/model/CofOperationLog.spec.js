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
    describe('CofOperationLog', function() {
      beforeEach(function() {
        instance = new XgeneCloud.CofOperationLog();
      });

      it('should create an instance of CofOperationLog', function() {
        // TODO: update the code to test CofOperationLog
        expect(instance).to.be.a(XgeneCloud.CofOperationLog);
      });

      it('should have the property ID (base name: "ID")', function() {
        // TODO: update the code to test the property ID
        expect(instance).to.have.property('ID');
        // expect(instance.ID).to.be(expectedValueLiteral);
      });

      it('should have the property OPERATOR_ID (base name: "OPERATOR_ID")', function() {
        // TODO: update the code to test the property OPERATOR_ID
        expect(instance).to.have.property('OPERATOR_ID');
        // expect(instance.OPERATOR_ID).to.be(expectedValueLiteral);
      });

      it('should have the property OPERATOR_NAME (base name: "OPERATOR_NAME")', function() {
        // TODO: update the code to test the property OPERATOR_NAME
        expect(instance).to.have.property('OPERATOR_NAME');
        // expect(instance.OPERATOR_NAME).to.be(expectedValueLiteral);
      });

      it('should have the property OPERATE_TYPE (base name: "OPERATE_TYPE")', function() {
        // TODO: update the code to test the property OPERATE_TYPE
        expect(instance).to.have.property('OPERATE_TYPE');
        // expect(instance.OPERATE_TYPE).to.be(expectedValueLiteral);
      });

      it('should have the property OPERATE_DATE (base name: "OPERATE_DATE")', function() {
        // TODO: update the code to test the property OPERATE_DATE
        expect(instance).to.have.property('OPERATE_DATE');
        // expect(instance.OPERATE_DATE).to.be(expectedValueLiteral);
      });

      it('should have the property TARGET_TYPE (base name: "TARGET_TYPE")', function() {
        // TODO: update the code to test the property TARGET_TYPE
        expect(instance).to.have.property('TARGET_TYPE');
        // expect(instance.TARGET_TYPE).to.be(expectedValueLiteral);
      });

      it('should have the property TARGET_MODEL_ID (base name: "TARGET_MODEL_ID")', function() {
        // TODO: update the code to test the property TARGET_MODEL_ID
        expect(instance).to.have.property('TARGET_MODEL_ID');
        // expect(instance.TARGET_MODEL_ID).to.be(expectedValueLiteral);
      });

      it('should have the property TARGET_MODEL_NAME (base name: "TARGET_MODEL_NAME")', function() {
        // TODO: update the code to test the property TARGET_MODEL_NAME
        expect(instance).to.have.property('TARGET_MODEL_NAME');
        // expect(instance.TARGET_MODEL_NAME).to.be(expectedValueLiteral);
      });

      it('should have the property MESSAGE (base name: "MESSAGE")', function() {
        // TODO: update the code to test the property MESSAGE
        expect(instance).to.have.property('MESSAGE');
        // expect(instance.MESSAGE).to.be(expectedValueLiteral);
      });

      it('should have the property TENANT_ID (base name: "TENANT_ID")', function() {
        // TODO: update the code to test the property TENANT_ID
        expect(instance).to.have.property('TENANT_ID');
        // expect(instance.TENANT_ID).to.be(expectedValueLiteral);
      });

    });
  });

}));
