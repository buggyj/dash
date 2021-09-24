/*\
module-type: library
tags: $:/tags/tiddlyclip
title: $:/bj/deljsondata.js
type: application/javascript

\*/

exports.name ="deljsondata";
exports.run  = function(tid,data){
try {
$tw.wiki.setText(tid,null,data,undefined);
}catch(e){ alert(e);}
};


