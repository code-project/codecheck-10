var assert = require("chai").assert;
var Hello = require("../app/hello");

// Don't edit this file.


describe("test1", function() {
  it("a", function() {
    assert.equal(Hello.hello("a"), "Hello a");
  });
  it("bb", function() {
    assert.equal(Hello.hello("bb"), "Hello bb");
  });
  it("envvar - var1", function() {
    var var1 = process.env.VAR1
    assert.equal(Hello.hello(var1), "Hello Taro");
  });
});
