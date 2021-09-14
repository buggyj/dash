/*\
module-type: library
tags: $:/tags/tiddlyclip
title: $:/bj/shortern.js
type: application/javascript

\*/

function shortern(text,len,middle) {
	if (text.length < len * 2) return text;
	return text.substring(0,len) + middle + text.substring(text.length - len);
};
exports.name ="shortern";
exports.run  = function(text,key,len,middle) {
	
	var x = text.split(key);
	x[0] = (x[0].length - len)<=0?x[0]:x[0].substring(x[0].length - len);
	for (var i=1; i < x.length-1; i++){
		x[i]= shortern(x[i],len,middle);//remove all but 2*len
	}
	x[x.length-1] = x[x.length-1].substring(0,len);
	return x.join(key);
};
