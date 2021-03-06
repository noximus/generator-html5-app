// Generated by CoffeeScript 1.8.0

/*
	generator-html5-app

	test-app.coffee

	@author admin
	
	@note Created on 7/12/2014 by PhpStorm
	@note uses Codoc
	@see https://github.com/coffeedoc/codo
 */

(function() {
  "use strict";
  var assert, helpers, os, path;

  path = require("path");

  assert = require("yeoman-generator").assert;

  helpers = require("yeoman-generator").test;

  os = require("os");

  describe("html5-app:app", function() {
    before(function(done) {
      return helpers.run(path.join(__dirname, "../app")).inDir(path.join(os.tmpdir(), "./temp-test")).withOptions({
        "skip-install": true
      }).withPrompt({
        someOption: true
      }).on("end", done);
    });
    it("creates project config files", function() {
      return assert.file(["bower.json", "package.json", ".editorconfig", ".jshintrc"]);
    });
    it("creates empty asset directories", function() {
      var emptyFolderList;
      emptyFolderList = ["img", "styles", "fonts", "scripts"];
      return assert.file(emptyFolderList);
    });
    it("creates a valid yeoman config file", function() {
      return assert.file(".yo-rc.json");
    });
    return it("saves the user's answers in the yeoman config file", function() {
      return assert.fileContent(".yo-rc.json", /"authorName"/);
    });
  });

}).call(this);

//# sourceMappingURL=test-app.js.map
