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
exports.run  = function(text,key,txtcase,len,middle) {
	var regex, x, keyesc;
	try {
	if ((text.length === 0)||(key.length === 0)) return text;
	keyesc = key.replace(/([^a-zA-Z0-9])/g, "\\$1");//escape special chars
	regex =new RegExp('('+keyesc+')',(txtcase === 'any')?'i':'');
    x = text.split(regex);
	x[0] = (x[0].length - len)<=0?x[0]:x[0].substring(x[0].length - len);
	for (var i=2; i < x.length-1; i+=2){
		x[i]= shortern(x[i],len,middle);//remove all but 2*len
	}
	x[x.length-1] = x[x.length-1].substring(0,len);
	return x.join('');
}catch(e){console.log (e)
	return '';
}
};
