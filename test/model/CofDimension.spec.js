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
    describe('CofDimension', function() {
      beforeEach(function() {
        instance = new XgeneCloud.CofDimension();
      });

      it('should create an instance of CofDimension', function() {
        // TODO: update the code to test CofDimension
        expect(instance).to.be.a(XgeneCloud.CofDimension);
      });

      it('should have the property ID (base name: "ID")', function() {
        // TODO: update the code to test the property ID
        expect(instance).to.have.property('ID');
        // expect(instance.ID).to.be(expectedValueLiteral);
      });

      it('should have the property CODE (base name: "CODE")', function() {
        // TODO: update the code to test the property CODE
        expect(instance).to.have.property('CODE');
        // expect(instance.CODE).to.be(expectedValueLiteral);
      });

      it('should have the property NAME (base name: "NAME")', function() {
        // TODO: update the code to test the property NAME
        expect(instance).to.have.property('NAME');
        // expect(instance.NAME).to.be(expectedValueLiteral);
      });

      it('should have the property DESCRIPTION (base name: "DESCRIPTION")', function() {
        // TODO: update the code to test the property DESCRIPTION
        expect(instance).to.have.property('DESCRIPTION');
        // expect(instance.DESCRIPTION).to.be(expectedValueLiteral);
      });

      it('should have the property CREATE_TIME (base name: "CREATE_TIME")', function() {
        // TODO: update the code to test the property CREATE_TIME
        expect(instance).to.have.property('CREATE_TIME');
        // expect(instance.CREATE_TIME).to.be(expectedValueLiteral);
      });

      it('should have the property UPDATE_TIME (base name: "UPDATE_TIME")', function() {
        // TODO: update the code to test the property UPDATE_TIME
        expect(instance).to.have.property('UPDATE_TIME');
        // expect(instance.UPDATE_TIME).to.be(expectedValueLiteral);
      });

      it('should have the property TENANT_ID (base name: "TENANT_ID")', function() {
        // TODO: update the code to test the property TENANT_ID
        expect(instance).to.have.property('TENANT_ID');
        // expect(instance.TENANT_ID).to.be(expectedValueLiteral);
      });

      it('should have the property IS_MAIN (base name: "IS_MAIN")', function() {
        // TODO: update the code to test the property IS_MAIN
        expect(instance).to.have.property('IS_MAIN');
        // expect(instance.IS_MAIN).to.be(expectedValueLiteral);
      });

      it('should have the property IS_FIXED (base name: "IS_FIXED")', function() {
        // TODO: update the code to test the property IS_FIXED
        expect(instance).to.have.property('IS_FIXED');
        // expect(instance.IS_FIXED).to.be(expectedValueLiteral);
      });

    });
  });

}));