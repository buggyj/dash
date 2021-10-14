/*\
title: $:/bj/disableNotifications.js
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

exports.name = "disableNotifications";

exports.params = [

];

/*
Run the macro
*/
exports.run = function() {
$tw.notifier = {display:function () {}}
}
})();
