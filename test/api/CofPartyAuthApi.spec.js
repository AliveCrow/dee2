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
    instance = new XgeneCloud.CofPartyAuthApi();
  });

  describe('(package)', function() {
    describe('CofPartyAuthApi', function() {
      describe('addcofPartyAuth', function() {
        it('should call addcofPartyAuth successfully', function(done) {
          // TODO: uncomment, update parameter values for addcofPartyAuth call
          /*
          var body = new XgeneCloud.CofPartyAuth();
          body.ID = "";
          body.PARTY_TYPE = "";
          body.PARTY_ID = "";
          body.AUTH_TYPE = "";
          body.AUTH_ID = "";
          body.AUTH_OWNER_TYPE = "";
          body.AUTH_OWNER_ID = "";
          body.IS_FIXED = 0;

          instance.addcofPartyAuth(body, function(error, data, response) {
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
      describe('bulkcofPartyAuthInsert', function() {
        it('should call bulkcofPartyAuthInsert successfully', function(done) {
          // TODO: uncomment, update parameter values for bulkcofPartyAuthInsert call
          /*
          var body = [new XgeneCloud.CofPartyAuth()];
          body[0].ID = "";
          body[0].PARTY_TYPE = "";
          body[0].PARTY_ID = "";
          body[0].AUTH_TYPE = "";
          body[0].AUTH_ID = "";
          body[0].AUTH_OWNER_TYPE = "";
          body[0].AUTH_OWNER_ID = "";
          body[0].IS_FIXED = 0;

          instance.bulkcofPartyAuthInsert(body, function(error, data, response) {
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
      describe('checkcofPartyAuthExists', function() {
        it('should call checkcofPartyAuthExists successfully', function(done) {
          // TODO: uncomment, update parameter values for checkcofPartyAuthExists call and complete the assertions
          /*
          var cofPartyAuthId = 789;

          instance.checkcofPartyAuthExists(cofPartyAuthId, function(error, data, response) {
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
      describe('cofPartyAuthAggregate', function() {
        it('should call cofPartyAuthAggregate successfully', function(done) {
          // TODO: uncomment, update parameter values for cofPartyAuthAggregate call and complete the assertions
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

          instance.cofPartyAuthAggregate(columnName, fields, func, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(XgeneCloud.CofPartyAuth);
            expect(data.ID).to.be.a('string');
            expect(data.ID).to.be("");
            expect(data.PARTY_TYPE).to.be.a('string');
            expect(data.PARTY_TYPE).to.be("");
            expect(data.PARTY_ID).to.be.a('string');
            expect(data.PARTY_ID).to.be("");
            expect(data.AUTH_TYPE).to.be.a('string');
            expect(data.AUTH_TYPE).to.be("");
            expect(data.AUTH_ID).to.be.a('string');
            expect(data.AUTH_ID).to.be("");
            expect(data.AUTH_OWNER_TYPE).to.be.a('string');
            expect(data.AUTH_OWNER_TYPE).to.be("");
            expect(data.AUTH_OWNER_ID).to.be.a('string');
            expect(data.AUTH_OWNER_ID).to.be("");
            expect(data.IS_FIXED).to.be.a('number');
            expect(data.IS_FIXED).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('cofPartyAuthDistinct', function() {
        it('should call cofPartyAuthDistinct successfully', function(done) {
          // TODO: uncomment, update parameter values for cofPartyAuthDistinct call and complete the assertions
          /*
          var columnName = null;
          var opts = {};
          opts.where = null;
          opts.limit = 789;
          opts.offset = 789;
          opts.sort = "sort_example";

          instance.cofPartyAuthDistinct(columnName, opts, function(error, data, response) {
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
      describe('cofPartyAuthDistribution', function() {
        it('should call cofPartyAuthDistribution successfully', function(done) {
          // TODO: uncomment, update parameter values for cofPartyAuthDistribution call and complete the assertions
          /*
          var columnName = null;
          var opts = {};
          opts.min = 789;
          opts.max = 789;
          opts.step = 789;
          opts.steps = 789;
          opts.func = "func_example";

          instance.cofPartyAuthDistribution(columnName, opts, function(error, data, response) {
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
      describe('cofPartyAuthGroupByColumn', function() {
        it('should call cofPartyAuthGroupByColumn successfully', function(done) {
          // TODO: uncomment, update parameter values for cofPartyAuthGroupByColumn call and complete the assertions
          /*
          var columnName = null;
          var opts = {};
          opts.where = null;
          opts.limit = 789;
          opts.offset = 789;
          opts.sort = "sort_example";

          instance.cofPartyAuthGroupByColumn(columnName, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(XgeneCloud.CofPartyAuth);
            expect(data.ID).to.be.a('string');
            expect(data.ID).to.be("");
            expect(data.PARTY_TYPE).to.be.a('string');
            expect(data.PARTY_TYPE).to.be("");
            expect(data.PARTY_ID).to.be.a('string');
            expect(data.PARTY_ID).to.be("");
            expect(data.AUTH_TYPE).to.be.a('string');
            expect(data.AUTH_TYPE).to.be("");
            expect(data.AUTH_ID).to.be.a('string');
            expect(data.AUTH_ID).to.be("");
            expect(data.AUTH_OWNER_TYPE).to.be.a('string');
            expect(data.AUTH_OWNER_TYPE).to.be("");
            expect(data.AUTH_OWNER_ID).to.be.a('string');
            expect(data.AUTH_OWNER_ID).to.be("");
            expect(data.IS_FIXED).to.be.a('number');
            expect(data.IS_FIXED).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deletecofPartyAuth', function() {
        it('should call deletecofPartyAuth successfully', function(done) {
          // TODO: uncomment, update parameter values for deletecofPartyAuth call
          /*
          var cofPartyAuthId = 789;

          instance.deletecofPartyAuth(cofPartyAuthId, function(error, data, response) {
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
      describe('deletecofPartyAuth_0', function() {
        it('should call deletecofPartyAuth_0 successfully', function(done) {
          // TODO: uncomment, update parameter values for deletecofPartyAuth_0 call
          /*
          var body = [new XgeneCloud.CofPartyAuth()];
          body[0].ID = "";
          body[0].PARTY_TYPE = "";
          body[0].PARTY_ID = "";
          body[0].AUTH_TYPE = "";
          body[0].AUTH_ID = "";
          body[0].AUTH_OWNER_TYPE = "";
          body[0].AUTH_OWNER_ID = "";
          body[0].IS_FIXED = 0;

          instance.deletecofPartyAuth_0(body, function(error, data, response) {
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
      describe('findOnecofPartyAuth', function() {
        it('should call findOnecofPartyAuth successfully', function(done) {
          // TODO: uncomment, update parameter values for findOnecofPartyAuth call and complete the assertions
          /*
          var opts = {};
          opts.fields = null;
          opts.where = null;
          opts.limit = 789;
          opts.offset = 789;
          opts.sort = "sort_example";

          instance.findOnecofPartyAuth(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(XgeneCloud.CofPartyAuth);
            expect(data.ID).to.be.a('string');
            expect(data.ID).to.be("");
            expect(data.PARTY_TYPE).to.be.a('string');
            expect(data.PARTY_TYPE).to.be("");
            expect(data.PARTY_ID).to.be.a('string');
            expect(data.PARTY_ID).to.be("");
            expect(data.AUTH_TYPE).to.be.a('string');
            expect(data.AUTH_TYPE).to.be("");
            expect(data.AUTH_ID).to.be.a('string');
            expect(data.AUTH_ID).to.be("");
            expect(data.AUTH_OWNER_TYPE).to.be.a('string');
            expect(data.AUTH_OWNER_TYPE).to.be("");
            expect(data.AUTH_OWNER_ID).to.be.a('string');
            expect(data.AUTH_OWNER_ID).to.be("");
            expect(data.IS_FIXED).to.be.a('number');
            expect(data.IS_FIXED).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getcofPartyAuth', function() {
        it('should call getcofPartyAuth successfully', function(done) {
          // TODO: uncomment, update parameter values for getcofPartyAuth call
          /*
          var opts = {};
          opts.fields = null;
          opts.where = null;
          opts.limit = 789;
          opts.offset = 789;
          opts.sort = "sort_example";

          instance.getcofPartyAuth(opts, function(error, data, response) {
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
      describe('getcofPartyAuthById', function() {
        it('should call getcofPartyAuthById successfully', function(done) {
          // TODO: uncomment, update parameter values for getcofPartyAuthById call and complete the assertions
          /*
          var cofPartyAuthId = 789;

          instance.getcofPartyAuthById(cofPartyAuthId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(XgeneCloud.CofPartyAuth);
            expect(data.ID).to.be.a('string');
            expect(data.ID).to.be("");
            expect(data.PARTY_TYPE).to.be.a('string');
            expect(data.PARTY_TYPE).to.be("");
            expect(data.PARTY_ID).to.be.a('string');
            expect(data.PARTY_ID).to.be("");
            expect(data.AUTH_TYPE).to.be.a('string');
            expect(data.AUTH_TYPE).to.be("");
            expect(data.AUTH_ID).to.be.a('string');
            expect(data.AUTH_ID).to.be("");
            expect(data.AUTH_OWNER_TYPE).to.be.a('string');
            expect(data.AUTH_OWNER_TYPE).to.be("");
            expect(data.AUTH_OWNER_ID).to.be.a('string');
            expect(data.AUTH_OWNER_ID).to.be("");
            expect(data.IS_FIXED).to.be.a('number');
            expect(data.IS_FIXED).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getcofPartyAuthCount', function() {
        it('should call getcofPartyAuthCount successfully', function(done) {
          // TODO: uncomment, update parameter values for getcofPartyAuthCount call and complete the assertions
          /*
          var opts = {};
          opts.where = null;

          instance.getcofPartyAuthCount(opts, function(error, data, response) {
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
      describe('updatecofPartyAuth', function() {
        it('should call updatecofPartyAuth successfully', function(done) {
          // TODO: uncomment, update parameter values for updatecofPartyAuth call
          /*
          var cofPartyAuthId = 789;
          var body = new XgeneCloud.CofPartyAuth();
          body.ID = "";
          body.PARTY_TYPE = "";
          body.PARTY_ID = "";
          body.AUTH_TYPE = "";
          body.AUTH_ID = "";
          body.AUTH_OWNER_TYPE = "";
          body.AUTH_OWNER_ID = "";
          body.IS_FIXED = 0;

          instance.updatecofPartyAuth(cofPartyAuthId, body, function(error, data, response) {
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
      describe('updatecofPartyAuth_0', function() {
        it('should call updatecofPartyAuth_0 successfully', function(done) {
          // TODO: uncomment, update parameter values for updatecofPartyAuth_0 call
          /*
          var body = [new XgeneCloud.CofPartyAuth()];
          body[0].ID = "";
          body[0].PARTY_TYPE = "";
          body[0].PARTY_ID = "";
          body[0].AUTH_TYPE = "";
          body[0].AUTH_ID = "";
          body[0].AUTH_OWNER_TYPE = "";
          body[0].AUTH_OWNER_ID = "";
          body[0].IS_FIXED = 0;

          instance.updatecofPartyAuth_0(body, function(error, data, response) {
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