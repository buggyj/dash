/*\
module-type: library
tags: $:/tags/tiddlyclip
title: $:/bj/highlight.js
type: application/javascript

\*/
exports.name ="highlight";
exports.run  = function(text,key,txtcase) {
	var esctext, keyesc , regex, backtick ='`', 
          aSpace=' ', 
          prekey = '`<scan style = "background-color:yellow!important">`', 
          postkey = '`</scan>`';
	       if ((text.length === 0)||(key.length === 0)) return text;

          esctext = text.replaceAll('`', "&#96;"),
          keyesc = key.replace(/([^a-zA-Z0-9])/g, "\\$1"),//escape special chars
	      regex =new RegExp('('+keyesc+')',(txtcase === 'any')?'i':'');
          
    var  parts = esctext .split(regex );
    var result = backtick;
    if (parts[0].length === 0) result += aSpace;//avoid 2 touching backticks (first is external to this js)
    for (let i=1; i < parts.length;i+=2) parts[i] = prekey +parts[i]+postkey ;
    result += parts.join('');
    return result.replaceAll('``','');
};
