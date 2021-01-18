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
    instance = new XgeneCloud.CofRoleTemplateApi();
  });

  describe('(package)', function() {
    describe('CofRoleTemplateApi', function() {
      describe('addcofRoleTemplate', function() {
        it('should call addcofRoleTemplate successfully', function(done) {
          // TODO: uncomment, update parameter values for addcofRoleTemplate call
          /*
          var body = new XgeneCloud.CofRoleTemplate();
          body.ID = "";
          body.AUTH_TPL_ID = "";
          body.GROUP_ID = "";
          body.NAME = "";
          body.DESCRIPTION = "";
          body.CREATE_TIME = "";
          body.UPDATE_TIME = "";
          body.TENANT_ID = "";
          body.IS_FIXED = 0;

          instance.addcofRoleTemplate(body, function(error, data, response) {
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
      describe('bulkcofRoleTemplateInsert', function() {
        it('should call bulkcofRoleTemplateInsert successfully', function(done) {
          // TODO: uncomment, update parameter values for bulkcofRoleTemplateInsert call
          /*
          var body = [new XgeneCloud.CofRoleTemplate()];
          body[0].ID = "";
          body[0].AUTH_TPL_ID = "";
          body[0].GROUP_ID = "";
          body[0].NAME = "";
          body[0].DESCRIPTION = "";
          body[0].CREATE_TIME = "";
          body[0].UPDATE_TIME = "";
          body[0].TENANT_ID = "";
          body[0].IS_FIXED = 0;

          instance.bulkcofRoleTemplateInsert(body, function(error, data, response) {
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
      describe('checkcofRoleTemplateExists', function() {
        it('should call checkcofRoleTemplateExists successfully', function(done) {
          // TODO: uncomment, update parameter values for checkcofRoleTemplateExists call and complete the assertions
          /*
          var cofRoleTemplateId = 789;

          instance.checkcofRoleTemplateExists(cofRoleTemplateId, function(error, data, response) {
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
      describe('cofRoleTemplateAggregate', function() {
        it('should call cofRoleTemplateAggregate successfully', function(done) {
          // TODO: uncomment, update parameter values for cofRoleTemplateAggregate call and complete the assertions
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

          instance.cofRoleTemplateAggregate(columnName, fields, func, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(XgeneCloud.CofRoleTemplate);
            expect(data.ID).to.be.a('string');
            expect(data.ID).to.be("");
            expect(data.AUTH_TPL_ID).to.be.a('string');
            expect(data.AUTH_TPL_ID).to.be("");
            expect(data.GROUP_ID).to.be.a('string');
            expect(data.GROUP_ID).to.be("");
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
            expect(data.IS_FIXED).to.be.a('number');
            expect(data.IS_FIXED).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('cofRoleTemplateDistinct', function() {
        it('should call cofRoleTemplateDistinct successfully', function(done) {
          // TODO: uncomment, update parameter values for cofRoleTemplateDistinct call and complete the assertions
          /*
          var columnName = null;
          var opts = {};
          opts.where = null;
          opts.limit = 789;
          opts.offset = 789;
          opts.sort = "sort_example";

          instance.cofRoleTemplateDistinct(columnName, opts, function(error, data, response) {
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
      describe('cofRoleTemplateDistribution', function() {
        it('should call cofRoleTemplateDistribution successfully', function(done) {
          // TODO: uncomment, update parameter values for cofRoleTemplateDistribution call and complete the assertions
          /*
          var columnName = null;
          var opts = {};
          opts.min = 789;
          opts.max = 789;
          opts.step = 789;
          opts.steps = 789;
          opts.func = "func_example";

          instance.cofRoleTemplateDistribution(columnName, opts, function(error, data, response) {
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
      describe('cofRoleTemplateGroupByColumn', function() {
        it('should call cofRoleTemplateGroupByColumn successfully', function(done) {
          // TODO: uncomment, update parameter values for cofRoleTemplateGroupByColumn call and complete the assertions
          /*
          var columnName = null;
          var opts = {};
          opts.where = null;
          opts.limit = 789;
          opts.offset = 789;
          opts.sort = "sort_example";

          instance.cofRoleTemplateGroupByColumn(columnName, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(XgeneCloud.CofRoleTemplate);
            expect(data.ID).to.be.a('string');
            expect(data.ID).to.be("");
            expect(data.AUTH_TPL_ID).to.be.a('string');
            expect(data.AUTH_TPL_ID).to.be("");
            expect(data.GROUP_ID).to.be.a('string');
            expect(data.GROUP_ID).to.be("");
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
            expect(data.IS_FIXED).to.be.a('number');
            expect(data.IS_FIXED).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deletecofRoleTemplate', function() {
        it('should call deletecofRoleTemplate successfully', function(done) {
          // TODO: uncomment, update parameter values for deletecofRoleTemplate call
          /*
          var cofRoleTemplateId = 789;

          instance.deletecofRoleTemplate(cofRoleTemplateId, function(error, data, response) {
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
      describe('deletecofRoleTemplate_0', function() {
        it('should call deletecofRoleTemplate_0 successfully', function(done) {
          // TODO: uncomment, update parameter values for deletecofRoleTemplate_0 call
          /*
          var body = [new XgeneCloud.CofRoleTemplate()];
          body[0].ID = "";
          body[0].AUTH_TPL_ID = "";
          body[0].GROUP_ID = "";
          body[0].NAME = "";
          body[0].DESCRIPTION = "";
          body[0].CREATE_TIME = "";
          body[0].UPDATE_TIME = "";
          body[0].TENANT_ID = "";
          body[0].IS_FIXED = 0;

          instance.deletecofRoleTemplate_0(body, function(error, data, response) {
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
      describe('findOnecofRoleTemplate', function() {
        it('should call findOnecofRoleTemplate successfully', function(done) {
          // TODO: uncomment, update parameter values for findOnecofRoleTemplate call and complete the assertions
          /*
          var opts = {};
          opts.fields = null;
          opts.where = null;
          opts.limit = 789;
          opts.offset = 789;
          opts.sort = "sort_example";

          instance.findOnecofRoleTemplate(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(XgeneCloud.CofRoleTemplate);
            expect(data.ID).to.be.a('string');
            expect(data.ID).to.be("");
            expect(data.AUTH_TPL_ID).to.be.a('string');
            expect(data.AUTH_TPL_ID).to.be("");
            expect(data.GROUP_ID).to.be.a('string');
            expect(data.GROUP_ID).to.be("");
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
            expect(data.IS_FIXED).to.be.a('number');
            expect(data.IS_FIXED).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getcofRoleTemplate', function() {
        it('should call getcofRoleTemplate successfully', function(done) {
          // TODO: uncomment, update parameter values for getcofRoleTemplate call
          /*
          var opts = {};
          opts.fields = null;
          opts.where = null;
          opts.limit = 789;
          opts.offset = 789;
          opts.sort = "sort_example";

          instance.getcofRoleTemplate(opts, function(error, data, response) {
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
      describe('getcofRoleTemplateById', function() {
        it('should call getcofRoleTemplateById successfully', function(done) {
          // TODO: uncomment, update parameter values for getcofRoleTemplateById call and complete the assertions
          /*
          var cofRoleTemplateId = 789;

          instance.getcofRoleTemplateById(cofRoleTemplateId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(XgeneCloud.CofRoleTemplate);
            expect(data.ID).to.be.a('string');
            expect(data.ID).to.be("");
            expect(data.AUTH_TPL_ID).to.be.a('string');
            expect(data.AUTH_TPL_ID).to.be("");
            expect(data.GROUP_ID).to.be.a('string');
            expect(data.GROUP_ID).to.be("");
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
            expect(data.IS_FIXED).to.be.a('number');
            expect(data.IS_FIXED).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getcofRoleTemplateCount', function() {
        it('should call getcofRoleTemplateCount successfully', function(done) {
          // TODO: uncomment, update parameter values for getcofRoleTemplateCount call and complete the assertions
          /*
          var opts = {};
          opts.where = null;

          instance.getcofRoleTemplateCount(opts, function(error, data, response) {
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
      describe('updatecofRoleTemplate', function() {
        it('should call updatecofRoleTemplate successfully', function(done) {
          // TODO: uncomment, update parameter values for updatecofRoleTemplate call
          /*
          var cofRoleTemplateId = 789;
          var body = new XgeneCloud.CofRoleTemplate();
          body.ID = "";
          body.AUTH_TPL_ID = "";
          body.GROUP_ID = "";
          body.NAME = "";
          body.DESCRIPTION = "";
          body.CREATE_TIME = "";
          body.UPDATE_TIME = "";
          body.TENANT_ID = "";
          body.IS_FIXED = 0;

          instance.updatecofRoleTemplate(cofRoleTemplateId, body, function(error, data, response) {
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
      describe('updatecofRoleTemplate_0', function() {
        it('should call updatecofRoleTemplate_0 successfully', function(done) {
          // TODO: uncomment, update parameter values for updatecofRoleTemplate_0 call
          /*
          var body = [new XgeneCloud.CofRoleTemplate()];
          body[0].ID = "";
          body[0].AUTH_TPL_ID = "";
          body[0].GROUP_ID = "";
          body[0].NAME = "";
          body[0].DESCRIPTION = "";
          body[0].CREATE_TIME = "";
          body[0].UPDATE_TIME = "";
          body[0].TENANT_ID = "";
          body[0].IS_FIXED = 0;

          instance.updatecofRoleTemplate_0(body, function(error, data, response) {
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
