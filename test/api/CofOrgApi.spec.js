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
    instance = new XgeneCloud.CofOrgApi();
  });

  describe('(package)', function() {
    describe('CofOrgApi', function() {
      describe('addcofOrg', function() {
        it('should call addcofOrg successfully', function(done) {
          // TODO: uncomment, update parameter values for addcofOrg call
          /*
          var body = new XgeneCloud.CofOrg();
          body.ID = "";
          body.DIMENSION_ID = "";
          body.CODE = "";
          body.NAME = "";
          body.DESCRIPTION = "";
          body.CREATE_TIME = "";
          body.UPDATE_TIME = "";
          body.TENANT_ID = "";
          body.PARENT_ID = "";
          body.TYPE = "";
          body.STRATEGY = 0;
          body.DEGREE = "";
          body.STATUS = "";
          body.AREA = "";
          body.ADDRESS = "";
          body.ZIPCODE = "";
          body.LINK_MAN = "";
          body.LINK_TEL = "";
          body.EMAIL = "";
          body.MANAGER_ID = "";
          body.MAIN_DIMENSION_ORG_ID = "";
          body.WEBSITE = "";
          body.SORT_NO = 0;
          body.IS_LEAF = 0;
          body.TREE_LEVEL = 0;
          body.SEQ = "";
          body.IS_FIXED = 0;

          instance.addcofOrg(body, function(error, data, response) {
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
      describe('bulkcofOrgInsert', function() {
        it('should call bulkcofOrgInsert successfully', function(done) {
          // TODO: uncomment, update parameter values for bulkcofOrgInsert call
          /*
          var body = [new XgeneCloud.CofOrg()];
          body[0].ID = "";
          body[0].DIMENSION_ID = "";
          body[0].CODE = "";
          body[0].NAME = "";
          body[0].DESCRIPTION = "";
          body[0].CREATE_TIME = "";
          body[0].UPDATE_TIME = "";
          body[0].TENANT_ID = "";
          body[0].PARENT_ID = "";
          body[0].TYPE = "";
          body[0].STRATEGY = 0;
          body[0].DEGREE = "";
          body[0].STATUS = "";
          body[0].AREA = "";
          body[0].ADDRESS = "";
          body[0].ZIPCODE = "";
          body[0].LINK_MAN = "";
          body[0].LINK_TEL = "";
          body[0].EMAIL = "";
          body[0].MANAGER_ID = "";
          body[0].MAIN_DIMENSION_ORG_ID = "";
          body[0].WEBSITE = "";
          body[0].SORT_NO = 0;
          body[0].IS_LEAF = 0;
          body[0].TREE_LEVEL = 0;
          body[0].SEQ = "";
          body[0].IS_FIXED = 0;

          instance.bulkcofOrgInsert(body, function(error, data, response) {
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
      describe('checkcofOrgExists', function() {
        it('should call checkcofOrgExists successfully', function(done) {
          // TODO: uncomment, update parameter values for checkcofOrgExists call and complete the assertions
          /*
          var cofOrgId = 789;

          instance.checkcofOrgExists(cofOrgId, function(error, data, response) {
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
      describe('cofOrgAggregate', function() {
        it('should call cofOrgAggregate successfully', function(done) {
          // TODO: uncomment, update parameter values for cofOrgAggregate call and complete the assertions
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

          instance.cofOrgAggregate(columnName, fields, func, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(XgeneCloud.CofOrg);
            expect(data.ID).to.be.a('string');
            expect(data.ID).to.be("");
            expect(data.DIMENSION_ID).to.be.a('string');
            expect(data.DIMENSION_ID).to.be("");
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
            expect(data.PARENT_ID).to.be.a('string');
            expect(data.PARENT_ID).to.be("");
            expect(data.TYPE).to.be.a('string');
            expect(data.TYPE).to.be("");
            expect(data.STRATEGY).to.be.a('number');
            expect(data.STRATEGY).to.be(0);
            expect(data.DEGREE).to.be.a('string');
            expect(data.DEGREE).to.be("");
            expect(data.STATUS).to.be.a('string');
            expect(data.STATUS).to.be("");
            expect(data.AREA).to.be.a('string');
            expect(data.AREA).to.be("");
            expect(data.ADDRESS).to.be.a('string');
            expect(data.ADDRESS).to.be("");
            expect(data.ZIPCODE).to.be.a('string');
            expect(data.ZIPCODE).to.be("");
            expect(data.LINK_MAN).to.be.a('string');
            expect(data.LINK_MAN).to.be("");
            expect(data.LINK_TEL).to.be.a('string');
            expect(data.LINK_TEL).to.be("");
            expect(data.EMAIL).to.be.a('string');
            expect(data.EMAIL).to.be("");
            expect(data.MANAGER_ID).to.be.a('string');
            expect(data.MANAGER_ID).to.be("");
            expect(data.MAIN_DIMENSION_ORG_ID).to.be.a('string');
            expect(data.MAIN_DIMENSION_ORG_ID).to.be("");
            expect(data.WEBSITE).to.be.a('string');
            expect(data.WEBSITE).to.be("");
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
      describe('cofOrgDistinct', function() {
        it('should call cofOrgDistinct successfully', function(done) {
          // TODO: uncomment, update parameter values for cofOrgDistinct call and complete the assertions
          /*
          var columnName = null;
          var opts = {};
          opts.where = null;
          opts.limit = 789;
          opts.offset = 789;
          opts.sort = "sort_example";

          instance.cofOrgDistinct(columnName, opts, function(error, data, response) {
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
      describe('cofOrgDistribution', function() {
        it('should call cofOrgDistribution successfully', function(done) {
          // TODO: uncomment, update parameter values for cofOrgDistribution call and complete the assertions
          /*
          var columnName = null;
          var opts = {};
          opts.min = 789;
          opts.max = 789;
          opts.step = 789;
          opts.steps = 789;
          opts.func = "func_example";

          instance.cofOrgDistribution(columnName, opts, function(error, data, response) {
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
      describe('cofOrgGroupByColumn', function() {
        it('should call cofOrgGroupByColumn successfully', function(done) {
          // TODO: uncomment, update parameter values for cofOrgGroupByColumn call and complete the assertions
          /*
          var columnName = null;
          var opts = {};
          opts.where = null;
          opts.limit = 789;
          opts.offset = 789;
          opts.sort = "sort_example";

          instance.cofOrgGroupByColumn(columnName, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(XgeneCloud.CofOrg);
            expect(data.ID).to.be.a('string');
            expect(data.ID).to.be("");
            expect(data.DIMENSION_ID).to.be.a('string');
            expect(data.DIMENSION_ID).to.be("");
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
            expect(data.PARENT_ID).to.be.a('string');
            expect(data.PARENT_ID).to.be("");
            expect(data.TYPE).to.be.a('string');
            expect(data.TYPE).to.be("");
            expect(data.STRATEGY).to.be.a('number');
            expect(data.STRATEGY).to.be(0);
            expect(data.DEGREE).to.be.a('string');
            expect(data.DEGREE).to.be("");
            expect(data.STATUS).to.be.a('string');
            expect(data.STATUS).to.be("");
            expect(data.AREA).to.be.a('string');
            expect(data.AREA).to.be("");
            expect(data.ADDRESS).to.be.a('string');
            expect(data.ADDRESS).to.be("");
            expect(data.ZIPCODE).to.be.a('string');
            expect(data.ZIPCODE).to.be("");
            expect(data.LINK_MAN).to.be.a('string');
            expect(data.LINK_MAN).to.be("");
            expect(data.LINK_TEL).to.be.a('string');
            expect(data.LINK_TEL).to.be("");
            expect(data.EMAIL).to.be.a('string');
            expect(data.EMAIL).to.be("");
            expect(data.MANAGER_ID).to.be.a('string');
            expect(data.MANAGER_ID).to.be("");
            expect(data.MAIN_DIMENSION_ORG_ID).to.be.a('string');
            expect(data.MAIN_DIMENSION_ORG_ID).to.be("");
            expect(data.WEBSITE).to.be.a('string');
            expect(data.WEBSITE).to.be("");
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
      describe('deletecofOrg', function() {
        it('should call deletecofOrg successfully', function(done) {
          // TODO: uncomment, update parameter values for deletecofOrg call
          /*
          var cofOrgId = 789;

          instance.deletecofOrg(cofOrgId, function(error, data, response) {
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
      describe('deletecofOrg_0', function() {
        it('should call deletecofOrg_0 successfully', function(done) {
          // TODO: uncomment, update parameter values for deletecofOrg_0 call
          /*
          var body = [new XgeneCloud.CofOrg()];
          body[0].ID = "";
          body[0].DIMENSION_ID = "";
          body[0].CODE = "";
          body[0].NAME = "";
          body[0].DESCRIPTION = "";
          body[0].CREATE_TIME = "";
          body[0].UPDATE_TIME = "";
          body[0].TENANT_ID = "";
          body[0].PARENT_ID = "";
          body[0].TYPE = "";
          body[0].STRATEGY = 0;
          body[0].DEGREE = "";
          body[0].STATUS = "";
          body[0].AREA = "";
          body[0].ADDRESS = "";
          body[0].ZIPCODE = "";
          body[0].LINK_MAN = "";
          body[0].LINK_TEL = "";
          body[0].EMAIL = "";
          body[0].MANAGER_ID = "";
          body[0].MAIN_DIMENSION_ORG_ID = "";
          body[0].WEBSITE = "";
          body[0].SORT_NO = 0;
          body[0].IS_LEAF = 0;
          body[0].TREE_LEVEL = 0;
          body[0].SEQ = "";
          body[0].IS_FIXED = 0;

          instance.deletecofOrg_0(body, function(error, data, response) {
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
      describe('findOnecofOrg', function() {
        it('should call findOnecofOrg successfully', function(done) {
          // TODO: uncomment, update parameter values for findOnecofOrg call and complete the assertions
          /*
          var opts = {};
          opts.fields = null;
          opts.where = null;
          opts.limit = 789;
          opts.offset = 789;
          opts.sort = "sort_example";

          instance.findOnecofOrg(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(XgeneCloud.CofOrg);
            expect(data.ID).to.be.a('string');
            expect(data.ID).to.be("");
            expect(data.DIMENSION_ID).to.be.a('string');
            expect(data.DIMENSION_ID).to.be("");
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
            expect(data.PARENT_ID).to.be.a('string');
            expect(data.PARENT_ID).to.be("");
            expect(data.TYPE).to.be.a('string');
            expect(data.TYPE).to.be("");
            expect(data.STRATEGY).to.be.a('number');
            expect(data.STRATEGY).to.be(0);
            expect(data.DEGREE).to.be.a('string');
            expect(data.DEGREE).to.be("");
            expect(data.STATUS).to.be.a('string');
            expect(data.STATUS).to.be("");
            expect(data.AREA).to.be.a('string');
            expect(data.AREA).to.be("");
            expect(data.ADDRESS).to.be.a('string');
            expect(data.ADDRESS).to.be("");
            expect(data.ZIPCODE).to.be.a('string');
            expect(data.ZIPCODE).to.be("");
            expect(data.LINK_MAN).to.be.a('string');
            expect(data.LINK_MAN).to.be("");
            expect(data.LINK_TEL).to.be.a('string');
            expect(data.LINK_TEL).to.be("");
            expect(data.EMAIL).to.be.a('string');
            expect(data.EMAIL).to.be("");
            expect(data.MANAGER_ID).to.be.a('string');
            expect(data.MANAGER_ID).to.be("");
            expect(data.MAIN_DIMENSION_ORG_ID).to.be.a('string');
            expect(data.MAIN_DIMENSION_ORG_ID).to.be("");
            expect(data.WEBSITE).to.be.a('string');
            expect(data.WEBSITE).to.be("");
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
      describe('getcofOrg', function() {
        it('should call getcofOrg successfully', function(done) {
          // TODO: uncomment, update parameter values for getcofOrg call
          /*
          var opts = {};
          opts.fields = null;
          opts.where = null;
          opts.limit = 789;
          opts.offset = 789;
          opts.sort = "sort_example";

          instance.getcofOrg(opts, function(error, data, response) {
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
      describe('getcofOrgById', function() {
        it('should call getcofOrgById successfully', function(done) {
          // TODO: uncomment, update parameter values for getcofOrgById call and complete the assertions
          /*
          var cofOrgId = 789;

          instance.getcofOrgById(cofOrgId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(XgeneCloud.CofOrg);
            expect(data.ID).to.be.a('string');
            expect(data.ID).to.be("");
            expect(data.DIMENSION_ID).to.be.a('string');
            expect(data.DIMENSION_ID).to.be("");
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
            expect(data.PARENT_ID).to.be.a('string');
            expect(data.PARENT_ID).to.be("");
            expect(data.TYPE).to.be.a('string');
            expect(data.TYPE).to.be("");
            expect(data.STRATEGY).to.be.a('number');
            expect(data.STRATEGY).to.be(0);
            expect(data.DEGREE).to.be.a('string');
            expect(data.DEGREE).to.be("");
            expect(data.STATUS).to.be.a('string');
            expect(data.STATUS).to.be("");
            expect(data.AREA).to.be.a('string');
            expect(data.AREA).to.be("");
            expect(data.ADDRESS).to.be.a('string');
            expect(data.ADDRESS).to.be("");
            expect(data.ZIPCODE).to.be.a('string');
            expect(data.ZIPCODE).to.be("");
            expect(data.LINK_MAN).to.be.a('string');
            expect(data.LINK_MAN).to.be("");
            expect(data.LINK_TEL).to.be.a('string');
            expect(data.LINK_TEL).to.be("");
            expect(data.EMAIL).to.be.a('string');
            expect(data.EMAIL).to.be("");
            expect(data.MANAGER_ID).to.be.a('string');
            expect(data.MANAGER_ID).to.be("");
            expect(data.MAIN_DIMENSION_ORG_ID).to.be.a('string');
            expect(data.MAIN_DIMENSION_ORG_ID).to.be("");
            expect(data.WEBSITE).to.be.a('string');
            expect(data.WEBSITE).to.be("");
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
      describe('getcofOrgCount', function() {
        it('should call getcofOrgCount successfully', function(done) {
          // TODO: uncomment, update parameter values for getcofOrgCount call and complete the assertions
          /*
          var opts = {};
          opts.where = null;

          instance.getcofOrgCount(opts, function(error, data, response) {
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
      describe('updatecofOrg', function() {
        it('should call updatecofOrg successfully', function(done) {
          // TODO: uncomment, update parameter values for updatecofOrg call
          /*
          var cofOrgId = 789;
          var body = new XgeneCloud.CofOrg();
          body.ID = "";
          body.DIMENSION_ID = "";
          body.CODE = "";
          body.NAME = "";
          body.DESCRIPTION = "";
          body.CREATE_TIME = "";
          body.UPDATE_TIME = "";
          body.TENANT_ID = "";
          body.PARENT_ID = "";
          body.TYPE = "";
          body.STRATEGY = 0;
          body.DEGREE = "";
          body.STATUS = "";
          body.AREA = "";
          body.ADDRESS = "";
          body.ZIPCODE = "";
          body.LINK_MAN = "";
          body.LINK_TEL = "";
          body.EMAIL = "";
          body.MANAGER_ID = "";
          body.MAIN_DIMENSION_ORG_ID = "";
          body.WEBSITE = "";
          body.SORT_NO = 0;
          body.IS_LEAF = 0;
          body.TREE_LEVEL = 0;
          body.SEQ = "";
          body.IS_FIXED = 0;

          instance.updatecofOrg(cofOrgId, body, function(error, data, response) {
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
      describe('updatecofOrg_0', function() {
        it('should call updatecofOrg_0 successfully', function(done) {
          // TODO: uncomment, update parameter values for updatecofOrg_0 call
          /*
          var body = [new XgeneCloud.CofOrg()];
          body[0].ID = "";
          body[0].DIMENSION_ID = "";
          body[0].CODE = "";
          body[0].NAME = "";
          body[0].DESCRIPTION = "";
          body[0].CREATE_TIME = "";
          body[0].UPDATE_TIME = "";
          body[0].TENANT_ID = "";
          body[0].PARENT_ID = "";
          body[0].TYPE = "";
          body[0].STRATEGY = 0;
          body[0].DEGREE = "";
          body[0].STATUS = "";
          body[0].AREA = "";
          body[0].ADDRESS = "";
          body[0].ZIPCODE = "";
          body[0].LINK_MAN = "";
          body[0].LINK_TEL = "";
          body[0].EMAIL = "";
          body[0].MANAGER_ID = "";
          body[0].MAIN_DIMENSION_ORG_ID = "";
          body[0].WEBSITE = "";
          body[0].SORT_NO = 0;
          body[0].IS_LEAF = 0;
          body[0].TREE_LEVEL = 0;
          body[0].SEQ = "";
          body[0].IS_FIXED = 0;

          instance.updatecofOrg_0(body, function(error, data, response) {
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