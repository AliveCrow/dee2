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

  beforeEach(function() {
    instance = new XgeneCloud.CofDictEntryI18nApi();
  });

  describe('(package)', function() {
    describe('CofDictEntryI18nApi', function() {
      describe('addcofDictEntryI18n', function() {
        it('should call addcofDictEntryI18n successfully', function(done) {
          // TODO: uncomment, update parameter values for addcofDictEntryI18n call
          /*
          var body = new XgeneCloud.CofDictEntryI18n();
          body.ID = "";
          body.DICT_ENTRY_ID = "";
          body.LOCALE = "";
          body.DICT_ENTRY_NAME = "";
          body.IS_FIXED = 0;

          instance.addcofDictEntryI18n(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('bulkcofDictEntryI18nInsert', function() {
        it('should call bulkcofDictEntryI18nInsert successfully', function(done) {
          // TODO: uncomment, update parameter values for bulkcofDictEntryI18nInsert call
          /*
          var body = [new XgeneCloud.CofDictEntryI18n()];
          body[0].ID = "";
          body[0].DICT_ENTRY_ID = "";
          body[0].LOCALE = "";
          body[0].DICT_ENTRY_NAME = "";
          body[0].IS_FIXED = 0;

          instance.bulkcofDictEntryI18nInsert(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('checkcofDictEntryI18nExists', function() {
        it('should call checkcofDictEntryI18nExists successfully', function(done) {
          // TODO: uncomment, update parameter values for checkcofDictEntryI18nExists call and complete the assertions
          /*
          var cofDictEntryI18nId = 789;

          instance.checkcofDictEntryI18nExists(cofDictEntryI18nId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a('boolean');
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('cofDictEntryI18nAggregate', function() {
        it('should call cofDictEntryI18nAggregate successfully', function(done) {
          // TODO: uncomment, update parameter values for cofDictEntryI18nAggregate call and complete the assertions
          /*
          var columnName = null;
          var fields = null;
          var func = null;
          var opts = {};
          opts.having = null;
          opts.fields2 = null;
          opts.limit = 789;
          opts.offset = 789;
          opts.sort = "sort_example";

          instance.cofDictEntryI18nAggregate(columnName, fields, func, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(XgeneCloud.CofDictEntryI18n);
            expect(data.ID).to.be.a('string');
            expect(data.ID).to.be("");
            expect(data.DICT_ENTRY_ID).to.be.a('string');
            expect(data.DICT_ENTRY_ID).to.be("");
            expect(data.LOCALE).to.be.a('string');
            expect(data.LOCALE).to.be("");
            expect(data.DICT_ENTRY_NAME).to.be.a('string');
            expect(data.DICT_ENTRY_NAME).to.be("");
            expect(data.IS_FIXED).to.be.a('number');
            expect(data.IS_FIXED).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('cofDictEntryI18nDistinct', function() {
        it('should call cofDictEntryI18nDistinct successfully', function(done) {
          // TODO: uncomment, update parameter values for cofDictEntryI18nDistinct call and complete the assertions
          /*
          var columnName = null;
          var opts = {};
          opts.where = null;
          opts.limit = 789;
          opts.offset = 789;
          opts.sort = "sort_example";

          instance.cofDictEntryI18nDistinct(columnName, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(Object);
              // expect(data).to.be(null);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('cofDictEntryI18nDistribution', function() {
        it('should call cofDictEntryI18nDistribution successfully', function(done) {
          // TODO: uncomment, update parameter values for cofDictEntryI18nDistribution call and complete the assertions
          /*
          var columnName = null;
          var opts = {};
          opts.min = 789;
          opts.max = 789;
          opts.step = 789;
          opts.steps = 789;
          opts.func = "func_example";

          instance.cofDictEntryI18nDistribution(columnName, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(Object);
              // expect(data).to.be(null);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('cofDictEntryI18nGroupByColumn', function() {
        it('should call cofDictEntryI18nGroupByColumn successfully', function(done) {
          // TODO: uncomment, update parameter values for cofDictEntryI18nGroupByColumn call and complete the assertions
          /*
          var columnName = null;
          var opts = {};
          opts.where = null;
          opts.limit = 789;
          opts.offset = 789;
          opts.sort = "sort_example";

          instance.cofDictEntryI18nGroupByColumn(columnName, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(XgeneCloud.CofDictEntryI18n);
            expect(data.ID).to.be.a('string');
            expect(data.ID).to.be("");
            expect(data.DICT_ENTRY_ID).to.be.a('string');
            expect(data.DICT_ENTRY_ID).to.be("");
            expect(data.LOCALE).to.be.a('string');
            expect(data.LOCALE).to.be("");
            expect(data.DICT_ENTRY_NAME).to.be.a('string');
            expect(data.DICT_ENTRY_NAME).to.be("");
            expect(data.IS_FIXED).to.be.a('number');
            expect(data.IS_FIXED).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deletecofDictEntryI18n', function() {
        it('should call deletecofDictEntryI18n successfully', function(done) {
          // TODO: uncomment, update parameter values for deletecofDictEntryI18n call
          /*
          var cofDictEntryI18nId = 789;

          instance.deletecofDictEntryI18n(cofDictEntryI18nId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deletecofDictEntryI18n_0', function() {
        it('should call deletecofDictEntryI18n_0 successfully', function(done) {
          // TODO: uncomment, update parameter values for deletecofDictEntryI18n_0 call
          /*
          var body = [new XgeneCloud.CofDictEntryI18n()];
          body[0].ID = "";
          body[0].DICT_ENTRY_ID = "";
          body[0].LOCALE = "";
          body[0].DICT_ENTRY_NAME = "";
          body[0].IS_FIXED = 0;

          instance.deletecofDictEntryI18n_0(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('findOnecofDictEntryI18n', function() {
        it('should call findOnecofDictEntryI18n successfully', function(done) {
          // TODO: uncomment, update parameter values for findOnecofDictEntryI18n call and complete the assertions
          /*
          var opts = {};
          opts.fields = null;
          opts.where = null;
          opts.limit = 789;
          opts.offset = 789;
          opts.sort = "sort_example";

          instance.findOnecofDictEntryI18n(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(XgeneCloud.CofDictEntryI18n);
            expect(data.ID).to.be.a('string');
            expect(data.ID).to.be("");
            expect(data.DICT_ENTRY_ID).to.be.a('string');
            expect(data.DICT_ENTRY_ID).to.be("");
            expect(data.LOCALE).to.be.a('string');
            expect(data.LOCALE).to.be("");
            expect(data.DICT_ENTRY_NAME).to.be.a('string');
            expect(data.DICT_ENTRY_NAME).to.be("");
            expect(data.IS_FIXED).to.be.a('number');
            expect(data.IS_FIXED).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getcofDictEntryI18n', function() {
        it('should call getcofDictEntryI18n successfully', function(done) {
          // TODO: uncomment, update parameter values for getcofDictEntryI18n call
          /*
          var opts = {};
          opts.fields = null;
          opts.where = null;
          opts.limit = 789;
          opts.offset = 789;
          opts.sort = "sort_example";

          instance.getcofDictEntryI18n(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getcofDictEntryI18nById', function() {
        it('should call getcofDictEntryI18nById successfully', function(done) {
          // TODO: uncomment, update parameter values for getcofDictEntryI18nById call and complete the assertions
          /*
          var cofDictEntryI18nId = 789;

          instance.getcofDictEntryI18nById(cofDictEntryI18nId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(XgeneCloud.CofDictEntryI18n);
            expect(data.ID).to.be.a('string');
            expect(data.ID).to.be("");
            expect(data.DICT_ENTRY_ID).to.be.a('string');
            expect(data.DICT_ENTRY_ID).to.be("");
            expect(data.LOCALE).to.be.a('string');
            expect(data.LOCALE).to.be("");
            expect(data.DICT_ENTRY_NAME).to.be.a('string');
            expect(data.DICT_ENTRY_NAME).to.be("");
            expect(data.IS_FIXED).to.be.a('number');
            expect(data.IS_FIXED).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getcofDictEntryI18nCount', function() {
        it('should call getcofDictEntryI18nCount successfully', function(done) {
          // TODO: uncomment, update parameter values for getcofDictEntryI18nCount call and complete the assertions
          /*
          var opts = {};
          opts.where = null;

          instance.getcofDictEntryI18nCount(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updatecofDictEntryI18n', function() {
        it('should call updatecofDictEntryI18n successfully', function(done) {
          // TODO: uncomment, update parameter values for updatecofDictEntryI18n call
          /*
          var cofDictEntryI18nId = 789;
          var body = new XgeneCloud.CofDictEntryI18n();
          body.ID = "";
          body.DICT_ENTRY_ID = "";
          body.LOCALE = "";
          body.DICT_ENTRY_NAME = "";
          body.IS_FIXED = 0;

          instance.updatecofDictEntryI18n(cofDictEntryI18nId, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updatecofDictEntryI18n_0', function() {
        it('should call updatecofDictEntryI18n_0 successfully', function(done) {
          // TODO: uncomment, update parameter values for updatecofDictEntryI18n_0 call
          /*
          var body = [new XgeneCloud.CofDictEntryI18n()];
          body[0].ID = "";
          body[0].DICT_ENTRY_ID = "";
          body[0].LOCALE = "";
          body[0].DICT_ENTRY_NAME = "";
          body[0].IS_FIXED = 0;

          instance.updatecofDictEntryI18n_0(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));