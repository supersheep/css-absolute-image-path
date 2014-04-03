var assert = require("assert");
var fs = require("fs");
var Parser = require("../");
var parser = new Parser({
    root_dir:"./test/fixtures",
    root_path:"public",
    hosts: ["i1.cdn.com","i2.cdn.com","i3.cdn.com"]
});

require("should");

describe("css image path ", function(){
    it('should be transformed correctly', function(){
        var content = parser.parse("test/fixtures/css/a.css");
        content.should.equal(fs.readFileSync("test/expect/a.css","utf-8"))
    });
});