/*\
module-type: library
tags: $:/tags/tiddlyclip
title: $:/bj/addjsondata.js
type: application/javascript

\*/

exports.name ="addjsondata";
exports.run  = function(jsonstr,text){

var x;
  if (false == jsonstr) {
    x = {};
  } else {
    try {
      x = JSON.parse (jsonstr);
    }  catch (e) { x= {}; }
  }
x[text] = "true";
return JSON.stringify(x);
};


