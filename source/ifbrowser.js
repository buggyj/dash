/*\
title: $:/bj/ifbrowser.js
type: application/javascript
module-type: macro

Macro to return a formatted version of the current time

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Information about this macro
*/

exports.name = "ifbrowser";

exports.params = [
	{name: "browser"},{name: "node"}
];

/*
Run the macro
*/
exports.run = function(browser,node) {
	return ($tw.browser?"{{"+browser+"}}":"{{"+node+"}}")
};

})();
