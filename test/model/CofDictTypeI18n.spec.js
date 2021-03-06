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
    describe('CofDictTypeI18n', function() {
      beforeEach(function() {
        instance = new XgeneCloud.CofDictTypeI18n();
      });

      it('should create an instance of CofDictTypeI18n', function() {
        // TODO: update the code to test CofDictTypeI18n
        expect(instance).to.be.a(XgeneCloud.CofDictTypeI18n);
      });

      it('should have the property ID (base name: "ID")', function() {
        // TODO: update the code to test the property ID
        expect(instance).to.have.property('ID');
        // expect(instance.ID).to.be(expectedValueLiteral);
      });

      it('should have the property DICT_TYPE_ID (base name: "DICT_TYPE_ID")', function() {
        // TODO: update the code to test the property DICT_TYPE_ID
        expect(instance).to.have.property('DICT_TYPE_ID');
        // expect(instance.DICT_TYPE_ID).to.be(expectedValueLiteral);
      });

      it('should have the property LOCALE (base name: "LOCALE")', function() {
        // TODO: update the code to test the property LOCALE
        expect(instance).to.have.property('LOCALE');
        // expect(instance.LOCALE).to.be(expectedValueLiteral);
      });

      it('should have the property DICT_TYPE_NAME (base name: "DICT_TYPE_NAME")', function() {
        // TODO: update the code to test the property DICT_TYPE_NAME
        expect(instance).to.have.property('DICT_TYPE_NAME');
        // expect(instance.DICT_TYPE_NAME).to.be(expectedValueLiteral);
      });

      it('should have the property IS_FIXED (base name: "IS_FIXED")', function() {
        // TODO: update the code to test the property IS_FIXED
        expect(instance).to.have.property('IS_FIXED');
        // expect(instance.IS_FIXED).to.be(expectedValueLiteral);
      });

    });
  });

}));
