function CookieENT4esciti(){}if(typeof InfoENT4esciti=="undefined"){var date=new Date();var ds=10000*date.getFullYear()+100*date.getMonth()+date.getDate();var domain=document.domain;var isTest=domain.indexOf("test")>=0;var fichierData=isTest?"escitiDataTest.js":"escitiData.js";var scripts=document.getElementsByTagName("script");var path=scripts[scripts.length-1].src.split("esciti.js")[0];var urlData=path+fichierData+"?v="+ds;InfoENT4esciti=new Object();InfoENT4esciti.urlPath=path;document.write('<script type="text/javascript" src="'+urlData+'"><\/script>')}function CookieENT4esciti_setPath(a){CookieENT4esciti.PATH="; path="+a}CookieENT4esciti.setPath=CookieENT4esciti_setPath;CookieENT4esciti.setPath("/");function CookieENT4esciti_EXPIRES(b){var c=new Date();var a=c.getTime();a+=60000*b;c.setTime(a);return CookieENT4esciti.ATTRIB_DELIM+"expires"+CookieENT4esciti.ATTRIB_KEYVAL+c.toUTCString()+CookieENT4esciti.ATTRIB_DELIM}function CookieENT4esciti_getRawCookie(a){var b=a+CookieENT4esciti.COOKIE_KEYVAL;if(document.cookie){if(document.cookie.length>0){offset=document.cookie.indexOf(b);if(offset!=-1){offset+=b.length;end=document.cookie.indexOf(CookieENT4esciti.COOKIE_DELIM,offset);if(end==-1){end=document.cookie.length}return unescape(document.cookie.substring(offset,end))}}}return null}CookieENT4esciti.getRawCookie=CookieENT4esciti_getRawCookie;function CookieENT4esciti_setCookieAttrib(d,b,a){var c=CookieENT4esciti.getCookie(d);c[b]=a;CookieENT4esciti.setCookie(d,c)}CookieENT4esciti.setCookieAttrib=CookieENT4esciti_setCookieAttrib;function CookieENT4esciti_getCookieAttrib(c,a){var b=CookieENT4esciti.getCookie(c);return b[a]}CookieENT4esciti.getCookieAttrib=CookieENT4esciti_getCookieAttrib;function CookieENT4esciti_getCookie(h){var g=new Array();var d=CookieENT4esciti.getRawCookie(h);if(d!=undefined&&d!=null){var e=d.split(CookieENT4esciti.ATTRIB_DELIM);for(var c=0;c<e.length;c++){var b=e[c].indexOf(CookieENT4esciti.ATTRIB_KEYVAL);var a=e[c].substring(0,b);var f=e[c].substring(b+1);g[a]=f}}return g}CookieENT4esciti.getCookie=CookieENT4esciti_getCookie;function CookieENT4esciti_setCookie(f,e){var d="";var a="";for(var b in e){var c=e[b];if(c!=undefined&&c!=null&&c!=""){if(b.indexOf(CookieENT4esciti.ATTRIB_KEYVAL)<0&&c.indexOf(CookieENT4esciti.ATTRIB_KEYVAL)<0&&b.indexOf(CookieENT4esciti.ATTRIB_DELIM)<0&&c.indexOf(CookieENT4esciti.ATTRIB_DELIM)<0){d+=((d=="")?"":CookieENT4esciti.ATTRIB_DELIM);d+=(b+CookieENT4esciti.ATTRIB_KEYVAL+c)}else{alert("Cookie attribute name and/or value contains a delimeter ("+b+","+c+")("+CookieENT4esciti.ATTRIB_KEYVAL+" or "+CookieENT4esciti.ATTRIB_DELIM+").")}}}if(CookieENT4esciti.EXPIRES>0){a=CookieENT4esciti_EXPIRES(CookieENT4esciti.EXPIRES)}document.cookie=f+CookieENT4esciti.COOKIE_KEYVAL+escape(d)+a+CookieENT4esciti.PATH}CookieENT4esciti.setCookie=CookieENT4esciti_setCookie;