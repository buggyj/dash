/*\
title: $:/bj/overrideBeforeUnload.js
type: application/javascript
module-type: macro



\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Information about this macro
*/

exports.name = "overrideBeforeUnload";

exports.params = [

];

/*
Run the macro
*/
exports.run = function() {
	window.onbeforeunload=monkeyBeforeUnload(window.onbeforeunload);

	function monkeyBeforeUnload(oldFunc){

	   return (function (event){
		  $tw.wiki.addTiddler(new $tw.Tiddler({title: "$:/temp/bj/state", text: "click"}));
		  oldFunc(event);
		});
	}
}
})();
