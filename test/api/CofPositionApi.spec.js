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
    instance = new XgeneCloud.CofPositionApi();
  });

  describe('(package)', function() {
    describe('CofPositionApi', function() {
      describe('addcofPosition', function() {
        it('should call addcofPosition successfully', function(done) {
          // TODO: uncomment, update parameter values for addcofPosition call
          /*
          var body = new XgeneCloud.CofPosition();
          body.ID = "";
          body.ORG_ID = "";
          body.CODE = "";
          body.NAME = "";
          body.DESCRIPTION = "";
          body.CREATE_TIME = "";
          body.UPDATE_TIME = "";
          body.TENANT_ID = "";
          body.TYPE = "";
          body.STATUS = "";
          body.PARENT_ID = "";
          body.SORT_NO = 0;
          body.IS_LEAF = 0;
          body.TREE_LEVEL = 0;
          body.SEQ = "";
          body.IS_FIXED = 0;

          instance.addcofPosition(body, function(error, data, response) {
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
      describe('bulkcofPositionInsert', function() {
        it('should call bulkcofPositionInsert successfully', function(done) {
          // TODO: uncomment, update parameter values for bulkcofPositionInsert call
          /*
          var body = [new XgeneCloud.CofPosition()];
          body[0].ID = "";
          body[0].ORG_ID = "";
          body[0].CODE = "";
          body[0].NAME = "";
          body[0].DESCRIPTION = "";
          body[0].CREATE_TIME = "";
          body[0].UPDATE_TIME = "";
          body[0].TENANT_ID = "";
          body[0].TYPE = "";
          body[0].STATUS = "";
          body[0].PARENT_ID = "";
          body[0].SORT_NO = 0;
          body[0].IS_LEAF = 0;
          body[0].TREE_LEVEL = 0;
          body[0].SEQ = "";
          body[0].IS_FIXED = 0;

          instance.bulkcofPositionInsert(body, function(error, data, response) {
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
      describe('checkcofPositionExists', function() {
        it('should call checkcofPositionExists successfully', function(done) {
          // TODO: uncomment, update parameter values for checkcofPositionExists call and complete the assertions
          /*
          var cofPositionId = 789;

          instance.checkcofPositionExists(cofPositionId, function(error, data, response) {
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
      describe('cofPositionAggregate', function() {
        it('should call cofPositionAggregate successfully', function(done) {
          // TODO: uncomment, update parameter values for cofPositionAggregate call and complete the assertions
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

          instance.cofPositionAggregate(columnName, fields, func, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(XgeneCloud.CofPosition);
            expect(data.ID).to.be.a('string');
            expect(data.ID).to.be("");
            expect(data.ORG_ID).to.be.a('string');
            expect(data.ORG_ID).to.be("");
            expect(data.CODE).to.be.a('string');
            expect(data.CODE).to.be("");
            expect(data.NAME).to.be.a('string');
            expect(data.NAME).to.be("");
            expect(data.DESCRIPTION).to.be.a('string');
            expect(data.DESCRIPTION).to.be("");
            expect(data.CREATE_TIME).to.be.a('string');
            expect(data.CREATE_TIME).to.be("");
            expect(data.UPDATE_TIME).to.be.a('string');
            expect(data.UPDATE_TIME).to.be("");
            expect(data.TENANT_ID).to.be.a('string');
            expect(data.TENANT_ID).to.be("");
            expect(data.TYPE).to.be.a('string');
            expect(data.TYPE).to.be("");
            expect(data.STATUS).to.be.a('string');
            expect(data.STATUS).to.be("");
            expect(data.PARENT_ID).to.be.a('string');
            expect(data.PARENT_ID).to.be("");
            expect(data.SORT_NO).to.be.a('number');
            expect(data.SORT_NO).to.be(0);
            expect(data.IS_LEAF).to.be.a('number');
            expect(data.IS_LEAF).to.be(0);
            expect(data.TREE_LEVEL).to.be.a('number');
            expect(data.TREE_LEVEL).to.be(0);
            expect(data.SEQ).to.be.a('string');
            expect(data.SEQ).to.be("");
            expect(data.IS_FIXED).to.be.a('number');
            expect(data.IS_FIXED).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('cofPositionDistinct', function() {
        it('should call cofPositionDistinct successfully', function(done) {
          // TODO: uncomment, update parameter values for cofPositionDistinct call and complete the assertions
          /*
          var columnName = null;
          var opts = {};
          opts.where = null;
          opts.limit = 789;
          opts.offset = 789;
          opts.sort = "sort_example";

          instance.cofPositionDistinct(columnName, opts, function(error, data, response) {
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
      describe('cofPositionDistribution', function() {
        it('should call cofPositionDistribution successfully', function(done) {
          // TODO: uncomment, update parameter values for cofPositionDistribution call and complete the assertions
          /*
          var columnName = null;
          var opts = {};
          opts.min = 789;
          opts.max = 789;
          opts.step = 789;
          opts.steps = 789;
          opts.func = "func_example";

          instance.cofPositionDistribution(columnName, opts, function(error, data, response) {
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
      describe('cofPositionGroupByColumn', function() {
        it('should call cofPositionGroupByColumn successfully', function(done) {
          // TODO: uncomment, update parameter values for cofPositionGroupByColumn call and complete the assertions
          /*
          var columnName = null;
          var opts = {};
          opts.where = null;
          opts.limit = 789;
          opts.offset = 789;
          opts.sort = "sort_example";

          instance.cofPositionGroupByColumn(columnName, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(XgeneCloud.CofPosition);
            expect(data.ID).to.be.a('string');
            expect(data.ID).to.be("");
            expect(data.ORG_ID).to.be.a('string');
            expect(data.ORG_ID).to.be("");
            expect(data.CODE).to.be.a('string');
            expect(data.CODE).to.be("");
            expect(data.NAME).to.be.a('string');
            expect(data.NAME).to.be("");
            expect(data.DESCRIPTION).to.be.a('string');
            expect(data.DESCRIPTION).to.be("");
            expect(data.CREATE_TIME).to.be.a('string');
            expect(data.CREATE_TIME).to.be("");
            expect(data.UPDATE_TIME).to.be.a('string');
            expect(data.UPDATE_TIME).to.be("");
            expect(data.TENANT_ID).to.be.a('string');
            expect(data.TENANT_ID).to.be("");
            expect(data.TYPE).to.be.a('string');
            expect(data.TYPE).to.be("");
            expect(data.STATUS).to.be.a('string');
            expect(data.STATUS).to.be("");
            expect(data.PARENT_ID).to.be.a('string');
            expect(data.PARENT_ID).to.be("");
            expect(data.SORT_NO).to.be.a('number');
            expect(data.SORT_NO).to.be(0);
            expect(data.IS_LEAF).to.be.a('number');
            expect(data.IS_LEAF).to.be(0);
            expect(data.TREE_LEVEL).to.be.a('number');
            expect(data.TREE_LEVEL).to.be(0);
            expect(data.SEQ).to.be.a('string');
            expect(data.SEQ).to.be("");
            expect(data.IS_FIXED).to.be.a('number');
            expect(data.IS_FIXED).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deletecofPosition', function() {
        it('should call deletecofPosition successfully', function(done) {
          // TODO: uncomment, update parameter values for deletecofPosition call
          /*
          var cofPositionId = 789;

          instance.deletecofPosition(cofPositionId, function(error, data, response) {
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
      describe('deletecofPosition_0', function() {
        it('should call deletecofPosition_0 successfully', function(done) {
          // TODO: uncomment, update parameter values for deletecofPosition_0 call
          /*
          var body = [new XgeneCloud.CofPosition()];
          body[0].ID = "";
          body[0].ORG_ID = "";
          body[0].CODE = "";
          body[0].NAME = "";
          body[0].DESCRIPTION = "";
          body[0].CREATE_TIME = "";
          body[0].UPDATE_TIME = "";
          body[0].TENANT_ID = "";
          body[0].TYPE = "";
          body[0].STATUS = "";
          body[0].PARENT_ID = "";
          body[0].SORT_NO = 0;
          body[0].IS_LEAF = 0;
          body[0].TREE_LEVEL = 0;
          body[0].SEQ = "";
          body[0].IS_FIXED = 0;

          instance.deletecofPosition_0(body, function(error, data, response) {
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
      describe('findOnecofPosition', function() {
        it('should call findOnecofPosition successfully', function(done) {
          // TODO: uncomment, update parameter values for findOnecofPosition call and complete the assertions
          /*
          var opts = {};
          opts.fields = null;
          opts.where = null;
          opts.limit = 789;
          opts.offset = 789;
          opts.sort = "sort_example";

          instance.findOnecofPosition(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(XgeneCloud.CofPosition);
            expect(data.ID).to.be.a('string');
            expect(data.ID).to.be("");
            expect(data.ORG_ID).to.be.a('string');
            expect(data.ORG_ID).to.be("");
            expect(data.CODE).to.be.a('string');
            expect(data.CODE).to.be("");
            expect(data.NAME).to.be.a('string');
            expect(data.NAME).to.be("");
            expect(data.DESCRIPTION).to.be.a('string');
            expect(data.DESCRIPTION).to.be("");
            expect(data.CREATE_TIME).to.be.a('string');
            expect(data.CREATE_TIME).to.be("");
            expect(data.UPDATE_TIME).to.be.a('string');
            expect(data.UPDATE_TIME).to.be("");
            expect(data.TENANT_ID).to.be.a('string');
            expect(data.TENANT_ID).to.be("");
            expect(data.TYPE).to.be.a('string');
            expect(data.TYPE).to.be("");
            expect(data.STATUS).to.be.a('string');
            expect(data.STATUS).to.be("");
            expect(data.PARENT_ID).to.be.a('string');
            expect(data.PARENT_ID).to.be("");
            expect(data.SORT_NO).to.be.a('number');
            expect(data.SORT_NO).to.be(0);
            expect(data.IS_LEAF).to.be.a('number');
            expect(data.IS_LEAF).to.be(0);
            expect(data.TREE_LEVEL).to.be.a('number');
            expect(data.TREE_LEVEL).to.be(0);
            expect(data.SEQ).to.be.a('string');
            expect(data.SEQ).to.be("");
            expect(data.IS_FIXED).to.be.a('number');
            expect(data.IS_FIXED).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getcofPosition', function() {
        it('should call getcofPosition successfully', function(done) {
          // TODO: uncomment, update parameter values for getcofPosition call
          /*
          var opts = {};
          opts.fields = null;
          opts.where = null;
          opts.limit = 789;
          opts.offset = 789;
          opts.sort = "sort_example";

          instance.getcofPosition(opts, function(error, data, response) {
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
      describe('getcofPositionById', function() {
        it('should call getcofPositionById successfully', function(done) {
          // TODO: uncomment, update parameter values for getcofPositionById call and complete the assertions
          /*
          var cofPositionId = 789;

          instance.getcofPositionById(cofPositionId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(XgeneCloud.CofPosition);
            expect(data.ID).to.be.a('string');
            expect(data.ID).to.be("");
            expect(data.ORG_ID).to.be.a('string');
            expect(data.ORG_ID).to.be("");
            expect(data.CODE).to.be.a('string');
            expect(data.CODE).to.be("");
            expect(data.NAME).to.be.a('string');
            expect(data.NAME).to.be("");
            expect(data.DESCRIPTION).to.be.a('string');
            expect(data.DESCRIPTION).to.be("");
            expect(data.CREATE_TIME).to.be.a('string');
            expect(data.CREATE_TIME).to.be("");
            expect(data.UPDATE_TIME).to.be.a('string');
            expect(data.UPDATE_TIME).to.be("");
            expect(data.TENANT_ID).to.be.a('string');
            expect(data.TENANT_ID).to.be("");
            expect(data.TYPE).to.be.a('string');
            expect(data.TYPE).to.be("");
            expect(data.STATUS).to.be.a('string');
            expect(data.STATUS).to.be("");
            expect(data.PARENT_ID).to.be.a('string');
            expect(data.PARENT_ID).to.be("");
            expect(data.SORT_NO).to.be.a('number');
            expect(data.SORT_NO).to.be(0);
            expect(data.IS_LEAF).to.be.a('number');
            expect(data.IS_LEAF).to.be(0);
            expect(data.TREE_LEVEL).to.be.a('number');
            expect(data.TREE_LEVEL).to.be(0);
            expect(data.SEQ).to.be.a('string');
            expect(data.SEQ).to.be("");
            expect(data.IS_FIXED).to.be.a('number');
            expect(data.IS_FIXED).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getcofPositionCount', function() {
        it('should call getcofPositionCount successfully', function(done) {
          // TODO: uncomment, update parameter values for getcofPositionCount call and complete the assertions
          /*
          var opts = {};
          opts.where = null;

          instance.getcofPositionCount(opts, function(error, data, response) {
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
      describe('updatecofPosition', function() {
        it('should call updatecofPosition successfully', function(done) {
          // TODO: uncomment, update parameter values for updatecofPosition call
          /*
          var cofPositionId = 789;
          var body = new XgeneCloud.CofPosition();
          body.ID = "";
          body.ORG_ID = "";
          body.CODE = "";
          body.NAME = "";
          body.DESCRIPTION = "";
          body.CREATE_TIME = "";
          body.UPDATE_TIME = "";
          body.TENANT_ID = "";
          body.TYPE = "";
          body.STATUS = "";
          body.PARENT_ID = "";
          body.SORT_NO = 0;
          body.IS_LEAF = 0;
          body.TREE_LEVEL = 0;
          body.SEQ = "";
          body.IS_FIXED = 0;

          instance.updatecofPosition(cofPositionId, body, function(error, data, response) {
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
      describe('updatecofPosition_0', function() {
        it('should call updatecofPosition_0 successfully', function(done) {
          // TODO: uncomment, update parameter values for updatecofPosition_0 call
          /*
          var body = [new XgeneCloud.CofPosition()];
          body[0].ID = "";
          body[0].ORG_ID = "";
          body[0].CODE = "";
          body[0].NAME = "";
          body[0].DESCRIPTION = "";
          body[0].CREATE_TIME = "";
          body[0].UPDATE_TIME = "";
          body[0].TENANT_ID = "";
          body[0].TYPE = "";
          body[0].STATUS = "";
          body[0].PARENT_ID = "";
          body[0].SORT_NO = 0;
          body[0].IS_LEAF = 0;
          body[0].TREE_LEVEL = 0;
          body[0].SEQ = "";
          body[0].IS_FIXED = 0;

          instance.updatecofPosition_0(body, function(error, data, response) {
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
