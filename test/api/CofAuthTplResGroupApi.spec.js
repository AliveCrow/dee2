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
    instance = new XgeneCloud.CofAuthTplResGroupApi();
  });

  describe('(package)', function() {
    describe('CofAuthTplResGroupApi', function() {
      describe('addcofAuthTplResGroup', function() {
        it('should call addcofAuthTplResGroup successfully', function(done) {
          // TODO: uncomment, update parameter values for addcofAuthTplResGroup call
          /*
          var body = new XgeneCloud.CofAuthTplResGroup();
          body.ID = "";
          body.AUTH_TPL_ID = "";
          body.RES_GROUP_ID = "";
          body.IS_FIXED = 0;

          instance.addcofAuthTplResGroup(body, function(error, data, response) {
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
      describe('bulkcofAuthTplResGroupInsert', function() {
        it('should call bulkcofAuthTplResGroupInsert successfully', function(done) {
          // TODO: uncomment, update parameter values for bulkcofAuthTplResGroupInsert call
          /*
          var body = [new XgeneCloud.CofAuthTplResGroup()];
          body[0].ID = "";
          body[0].AUTH_TPL_ID = "";
          body[0].RES_GROUP_ID = "";
          body[0].IS_FIXED = 0;

          instance.bulkcofAuthTplResGroupInsert(body, function(error, data, response) {
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
      describe('checkcofAuthTplResGroupExists', function() {
        it('should call checkcofAuthTplResGroupExists successfully', function(done) {
          // TODO: uncomment, update parameter values for checkcofAuthTplResGroupExists call and complete the assertions
          /*
          var cofAuthTplResGroupId = 789;

          instance.checkcofAuthTplResGroupExists(cofAuthTplResGroupId, function(error, data, response) {
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
      describe('cofAuthTplResGroupAggregate', function() {
        it('should call cofAuthTplResGroupAggregate successfully', function(done) {
          // TODO: uncomment, update parameter values for cofAuthTplResGroupAggregate call and complete the assertions
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

          instance.cofAuthTplResGroupAggregate(columnName, fields, func, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(XgeneCloud.CofAuthTplResGroup);
            expect(data.ID).to.be.a('string');
            expect(data.ID).to.be("");
            expect(data.AUTH_TPL_ID).to.be.a('string');
            expect(data.AUTH_TPL_ID).to.be("");
            expect(data.RES_GROUP_ID).to.be.a('string');
            expect(data.RES_GROUP_ID).to.be("");
            expect(data.IS_FIXED).to.be.a('number');
            expect(data.IS_FIXED).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('cofAuthTplResGroupDistinct', function() {
        it('should call cofAuthTplResGroupDistinct successfully', function(done) {
          // TODO: uncomment, update parameter values for cofAuthTplResGroupDistinct call and complete the assertions
          /*
          var columnName = null;
          var opts = {};
          opts.where = null;
          opts.limit = 789;
          opts.offset = 789;
          opts.sort = "sort_example";

          instance.cofAuthTplResGroupDistinct(columnName, opts, function(error, data, response) {
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
      describe('cofAuthTplResGroupDistribution', function() {
        it('should call cofAuthTplResGroupDistribution successfully', function(done) {
          // TODO: uncomment, update parameter values for cofAuthTplResGroupDistribution call and complete the assertions
          /*
          var columnName = null;
          var opts = {};
          opts.min = 789;
          opts.max = 789;
          opts.step = 789;
          opts.steps = 789;
          opts.func = "func_example";

          instance.cofAuthTplResGroupDistribution(columnName, opts, function(error, data, response) {
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
      describe('cofAuthTplResGroupGroupByColumn', function() {
        it('should call cofAuthTplResGroupGroupByColumn successfully', function(done) {
          // TODO: uncomment, update parameter values for cofAuthTplResGroupGroupByColumn call and complete the assertions
          /*
          var columnName = null;
          var opts = {};
          opts.where = null;
          opts.limit = 789;
          opts.offset = 789;
          opts.sort = "sort_example";

          instance.cofAuthTplResGroupGroupByColumn(columnName, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(XgeneCloud.CofAuthTplResGroup);
            expect(data.ID).to.be.a('string');
            expect(data.ID).to.be("");
            expect(data.AUTH_TPL_ID).to.be.a('string');
            expect(data.AUTH_TPL_ID).to.be("");
            expect(data.RES_GROUP_ID).to.be.a('string');
            expect(data.RES_GROUP_ID).to.be("");
            expect(data.IS_FIXED).to.be.a('number');
            expect(data.IS_FIXED).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deletecofAuthTplResGroup', function() {
        it('should call deletecofAuthTplResGroup successfully', function(done) {
          // TODO: uncomment, update parameter values for deletecofAuthTplResGroup call
          /*
          var cofAuthTplResGroupId = 789;

          instance.deletecofAuthTplResGroup(cofAuthTplResGroupId, function(error, data, response) {
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
      describe('deletecofAuthTplResGroup_0', function() {
        it('should call deletecofAuthTplResGroup_0 successfully', function(done) {
          // TODO: uncomment, update parameter values for deletecofAuthTplResGroup_0 call
          /*
          var body = [new XgeneCloud.CofAuthTplResGroup()];
          body[0].ID = "";
          body[0].AUTH_TPL_ID = "";
          body[0].RES_GROUP_ID = "";
          body[0].IS_FIXED = 0;

          instance.deletecofAuthTplResGroup_0(body, function(error, data, response) {
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
      describe('findOnecofAuthTplResGroup', function() {
        it('should call findOnecofAuthTplResGroup successfully', function(done) {
          // TODO: uncomment, update parameter values for findOnecofAuthTplResGroup call and complete the assertions
          /*
          var opts = {};
          opts.fields = null;
          opts.where = null;
          opts.limit = 789;
          opts.offset = 789;
          opts.sort = "sort_example";

          instance.findOnecofAuthTplResGroup(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(XgeneCloud.CofAuthTplResGroup);
            expect(data.ID).to.be.a('string');
            expect(data.ID).to.be("");
            expect(data.AUTH_TPL_ID).to.be.a('string');
            expect(data.AUTH_TPL_ID).to.be("");
            expect(data.RES_GROUP_ID).to.be.a('string');
            expect(data.RES_GROUP_ID).to.be("");
            expect(data.IS_FIXED).to.be.a('number');
            expect(data.IS_FIXED).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getcofAuthTplResGroup', function() {
        it('should call getcofAuthTplResGroup successfully', function(done) {
          // TODO: uncomment, update parameter values for getcofAuthTplResGroup call
          /*
          var opts = {};
          opts.fields = null;
          opts.where = null;
          opts.limit = 789;
          opts.offset = 789;
          opts.sort = "sort_example";

          instance.getcofAuthTplResGroup(opts, function(error, data, response) {
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
      describe('getcofAuthTplResGroupById', function() {
        it('should call getcofAuthTplResGroupById successfully', function(done) {
          // TODO: uncomment, update parameter values for getcofAuthTplResGroupById call and complete the assertions
          /*
          var cofAuthTplResGroupId = 789;

          instance.getcofAuthTplResGroupById(cofAuthTplResGroupId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(XgeneCloud.CofAuthTplResGroup);
            expect(data.ID).to.be.a('string');
            expect(data.ID).to.be("");
            expect(data.AUTH_TPL_ID).to.be.a('string');
            expect(data.AUTH_TPL_ID).to.be("");
            expect(data.RES_GROUP_ID).to.be.a('string');
            expect(data.RES_GROUP_ID).to.be("");
            expect(data.IS_FIXED).to.be.a('number');
            expect(data.IS_FIXED).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getcofAuthTplResGroupCount', function() {
        it('should call getcofAuthTplResGroupCount successfully', function(done) {
          // TODO: uncomment, update parameter values for getcofAuthTplResGroupCount call and complete the assertions
          /*
          var opts = {};
          opts.where = null;

          instance.getcofAuthTplResGroupCount(opts, function(error, data, response) {
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
      describe('updatecofAuthTplResGroup', function() {
        it('should call updatecofAuthTplResGroup successfully', function(done) {
          // TODO: uncomment, update parameter values for updatecofAuthTplResGroup call
          /*
          var cofAuthTplResGroupId = 789;
          var body = new XgeneCloud.CofAuthTplResGroup();
          body.ID = "";
          body.AUTH_TPL_ID = "";
          body.RES_GROUP_ID = "";
          body.IS_FIXED = 0;

          instance.updatecofAuthTplResGroup(cofAuthTplResGroupId, body, function(error, data, response) {
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
      describe('updatecofAuthTplResGroup_0', function() {
        it('should call updatecofAuthTplResGroup_0 successfully', function(done) {
          // TODO: uncomment, update parameter values for updatecofAuthTplResGroup_0 call
          /*
          var body = [new XgeneCloud.CofAuthTplResGroup()];
          body[0].ID = "";
          body[0].AUTH_TPL_ID = "";
          body[0].RES_GROUP_ID = "";
          body[0].IS_FIXED = 0;

          instance.updatecofAuthTplResGroup_0(body, function(error, data, response) {
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