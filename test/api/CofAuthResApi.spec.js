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
    instance = new XgeneCloud.CofAuthResApi();
  });

  describe('(package)', function() {
    describe('CofAuthResApi', function() {
      describe('addcofAuthRes', function() {
        it('should call addcofAuthRes successfully', function(done) {
          // TODO: uncomment, update parameter values for addcofAuthRes call
          /*
          var body = new XgeneCloud.CofAuthRes();
          body.ID = "";
          body.TYPE = "";
          body.AUTH_TYPE = "";
          body.AUTH_ID = "";
          body.RES_TYPE = "";
          body.RES_ID = "";
          body.IS_FIXED = 0;

          instance.addcofAuthRes(body, function(error, data, response) {
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
      describe('bulkcofAuthResInsert', function() {
        it('should call bulkcofAuthResInsert successfully', function(done) {
          // TODO: uncomment, update parameter values for bulkcofAuthResInsert call
          /*
          var body = [new XgeneCloud.CofAuthRes()];
          body[0].ID = "";
          body[0].TYPE = "";
          body[0].AUTH_TYPE = "";
          body[0].AUTH_ID = "";
          body[0].RES_TYPE = "";
          body[0].RES_ID = "";
          body[0].IS_FIXED = 0;

          instance.bulkcofAuthResInsert(body, function(error, data, response) {
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
      describe('checkcofAuthResExists', function() {
        it('should call checkcofAuthResExists successfully', function(done) {
          // TODO: uncomment, update parameter values for checkcofAuthResExists call and complete the assertions
          /*
          var cofAuthResId = 789;

          instance.checkcofAuthResExists(cofAuthResId, function(error, data, response) {
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
      describe('cofAuthResAggregate', function() {
        it('should call cofAuthResAggregate successfully', function(done) {
          // TODO: uncomment, update parameter values for cofAuthResAggregate call and complete the assertions
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

          instance.cofAuthResAggregate(columnName, fields, func, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(XgeneCloud.CofAuthRes);
            expect(data.ID).to.be.a('string');
            expect(data.ID).to.be("");
            expect(data.TYPE).to.be.a('string');
            expect(data.TYPE).to.be("");
            expect(data.AUTH_TYPE).to.be.a('string');
            expect(data.AUTH_TYPE).to.be("");
            expect(data.AUTH_ID).to.be.a('string');
            expect(data.AUTH_ID).to.be("");
            expect(data.RES_TYPE).to.be.a('string');
            expect(data.RES_TYPE).to.be("");
            expect(data.RES_ID).to.be.a('string');
            expect(data.RES_ID).to.be("");
            expect(data.IS_FIXED).to.be.a('number');
            expect(data.IS_FIXED).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('cofAuthResDistinct', function() {
        it('should call cofAuthResDistinct successfully', function(done) {
          // TODO: uncomment, update parameter values for cofAuthResDistinct call and complete the assertions
          /*
          var columnName = null;
          var opts = {};
          opts.where = null;
          opts.limit = 789;
          opts.offset = 789;
          opts.sort = "sort_example";

          instance.cofAuthResDistinct(columnName, opts, function(error, data, response) {
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
      describe('cofAuthResDistribution', function() {
        it('should call cofAuthResDistribution successfully', function(done) {
          // TODO: uncomment, update parameter values for cofAuthResDistribution call and complete the assertions
          /*
          var columnName = null;
          var opts = {};
          opts.min = 789;
          opts.max = 789;
          opts.step = 789;
          opts.steps = 789;
          opts.func = "func_example";

          instance.cofAuthResDistribution(columnName, opts, function(error, data, response) {
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
      describe('cofAuthResGroupByColumn', function() {
        it('should call cofAuthResGroupByColumn successfully', function(done) {
          // TODO: uncomment, update parameter values for cofAuthResGroupByColumn call and complete the assertions
          /*
          var columnName = null;
          var opts = {};
          opts.where = null;
          opts.limit = 789;
          opts.offset = 789;
          opts.sort = "sort_example";

          instance.cofAuthResGroupByColumn(columnName, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(XgeneCloud.CofAuthRes);
            expect(data.ID).to.be.a('string');
            expect(data.ID).to.be("");
            expect(data.TYPE).to.be.a('string');
            expect(data.TYPE).to.be("");
            expect(data.AUTH_TYPE).to.be.a('string');
            expect(data.AUTH_TYPE).to.be("");
            expect(data.AUTH_ID).to.be.a('string');
            expect(data.AUTH_ID).to.be("");
            expect(data.RES_TYPE).to.be.a('string');
            expect(data.RES_TYPE).to.be("");
            expect(data.RES_ID).to.be.a('string');
            expect(data.RES_ID).to.be("");
            expect(data.IS_FIXED).to.be.a('number');
            expect(data.IS_FIXED).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deletecofAuthRes', function() {
        it('should call deletecofAuthRes successfully', function(done) {
          // TODO: uncomment, update parameter values for deletecofAuthRes call
          /*
          var cofAuthResId = 789;

          instance.deletecofAuthRes(cofAuthResId, function(error, data, response) {
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
      describe('deletecofAuthRes_0', function() {
        it('should call deletecofAuthRes_0 successfully', function(done) {
          // TODO: uncomment, update parameter values for deletecofAuthRes_0 call
          /*
          var body = [new XgeneCloud.CofAuthRes()];
          body[0].ID = "";
          body[0].TYPE = "";
          body[0].AUTH_TYPE = "";
          body[0].AUTH_ID = "";
          body[0].RES_TYPE = "";
          body[0].RES_ID = "";
          body[0].IS_FIXED = 0;

          instance.deletecofAuthRes_0(body, function(error, data, response) {
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
      describe('findOnecofAuthRes', function() {
        it('should call findOnecofAuthRes successfully', function(done) {
          // TODO: uncomment, update parameter values for findOnecofAuthRes call and complete the assertions
          /*
          var opts = {};
          opts.fields = null;
          opts.where = null;
          opts.limit = 789;
          opts.offset = 789;
          opts.sort = "sort_example";

          instance.findOnecofAuthRes(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(XgeneCloud.CofAuthRes);
            expect(data.ID).to.be.a('string');
            expect(data.ID).to.be("");
            expect(data.TYPE).to.be.a('string');
            expect(data.TYPE).to.be("");
            expect(data.AUTH_TYPE).to.be.a('string');
            expect(data.AUTH_TYPE).to.be("");
            expect(data.AUTH_ID).to.be.a('string');
            expect(data.AUTH_ID).to.be("");
            expect(data.RES_TYPE).to.be.a('string');
            expect(data.RES_TYPE).to.be("");
            expect(data.RES_ID).to.be.a('string');
            expect(data.RES_ID).to.be("");
            expect(data.IS_FIXED).to.be.a('number');
            expect(data.IS_FIXED).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getcofAuthRes', function() {
        it('should call getcofAuthRes successfully', function(done) {
          // TODO: uncomment, update parameter values for getcofAuthRes call
          /*
          var opts = {};
          opts.fields = null;
          opts.where = null;
          opts.limit = 789;
          opts.offset = 789;
          opts.sort = "sort_example";

          instance.getcofAuthRes(opts, function(error, data, response) {
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
      describe('getcofAuthResById', function() {
        it('should call getcofAuthResById successfully', function(done) {
          // TODO: uncomment, update parameter values for getcofAuthResById call and complete the assertions
          /*
          var cofAuthResId = 789;

          instance.getcofAuthResById(cofAuthResId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(XgeneCloud.CofAuthRes);
            expect(data.ID).to.be.a('string');
            expect(data.ID).to.be("");
            expect(data.TYPE).to.be.a('string');
            expect(data.TYPE).to.be("");
            expect(data.AUTH_TYPE).to.be.a('string');
            expect(data.AUTH_TYPE).to.be("");
            expect(data.AUTH_ID).to.be.a('string');
            expect(data.AUTH_ID).to.be("");
            expect(data.RES_TYPE).to.be.a('string');
            expect(data.RES_TYPE).to.be("");
            expect(data.RES_ID).to.be.a('string');
            expect(data.RES_ID).to.be("");
            expect(data.IS_FIXED).to.be.a('number');
            expect(data.IS_FIXED).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getcofAuthResCount', function() {
        it('should call getcofAuthResCount successfully', function(done) {
          // TODO: uncomment, update parameter values for getcofAuthResCount call and complete the assertions
          /*
          var opts = {};
          opts.where = null;

          instance.getcofAuthResCount(opts, function(error, data, response) {
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
      describe('updatecofAuthRes', function() {
        it('should call updatecofAuthRes successfully', function(done) {
          // TODO: uncomment, update parameter values for updatecofAuthRes call
          /*
          var cofAuthResId = 789;
          var body = new XgeneCloud.CofAuthRes();
          body.ID = "";
          body.TYPE = "";
          body.AUTH_TYPE = "";
          body.AUTH_ID = "";
          body.RES_TYPE = "";
          body.RES_ID = "";
          body.IS_FIXED = 0;

          instance.updatecofAuthRes(cofAuthResId, body, function(error, data, response) {
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
      describe('updatecofAuthRes_0', function() {
        it('should call updatecofAuthRes_0 successfully', function(done) {
          // TODO: uncomment, update parameter values for updatecofAuthRes_0 call
          /*
          var body = [new XgeneCloud.CofAuthRes()];
          body[0].ID = "";
          body[0].TYPE = "";
          body[0].AUTH_TYPE = "";
          body[0].AUTH_ID = "";
          body[0].RES_TYPE = "";
          body[0].RES_ID = "";
          body[0].IS_FIXED = 0;

          instance.updatecofAuthRes_0(body, function(error, data, response) {
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
