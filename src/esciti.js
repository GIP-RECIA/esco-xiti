

//esciti.js.V.1..

// Charge le script escitiData.js contenant les données et le code pour les traitements xiti.
// Ce script contient aussi le code de gestion des cookies qui ne devrait pas changer.
// escitiDate.js est appelé avec un numero de version qui change tout les jours pour permettre 
// la  mise a jour malgrés les caches navigateur. 

//=============================================================================
// CookieENT4esciti Definition
// Contains general purpose javascript methods for managing html cookies
// copie de CookieLib.js
//=============================================================================

// object de gestion des cookies.	 
function CookieENT4esciti(){};

// si deux appele à ce meme script pas de reexecution du script des données.
if (typeof InfoENT4esciti == 'undefined' ) {

	// calcule de la date numero de version
	var date = new Date();
	var ds = 10000 * date.getFullYear() + 100 * date.getMonth()+date.getDate();

	// calcul si on est en test:
	var domain = document.domain;
	var isTest = domain.indexOf('test') >= 0;
	var fichierData = isTest ? 'escitiDataTest.js' : 'escitiData.js';

	// on recupere le chemin (url) de ce script: c'est le dernier script de la liste (il est en cour de chargement)
	var scripts= document.getElementsByTagName('script');
	// on deduit l'url d'appele : mettre en parametre le nom du script lui-meme.
	var path= scripts[scripts.length-1].src.split('esciti.js')[0]; 

	
	// le nom du fichier contenant les data et le code versionné (doit etre au meme endroit)
	var urlData = path + fichierData + '?v='+ ds ;
	
	InfoENT4esciti = new Object();

	InfoENT4esciti.urlPath=path; 

	// charge le script contenant les données. 
	// attention ce script ne sera evalué qu'apres la fin de celui dans lequel on est.
	document.write('<script type="text/javascript" src="'+urlData+'"></script>');
}
/**
 * Le reste est la gestion des cookies. 
*/
function CookieENT4esciti_setPath(path){
	CookieENT4esciti.PATH="; path=" + path;
}
CookieENT4esciti.setPath=CookieENT4esciti_setPath;
CookieENT4esciti.setPath("/");

function CookieENT4esciti_EXPIRES(delai) {
		var d = new Date();
		var time = d.getTime();
		time += 60000 * delai;
		d.setTime(time);
		return CookieENT4esciti.ATTRIB_DELIM + "expires" + CookieENT4esciti.ATTRIB_KEYVAL + d.toUTCString()+ CookieENT4esciti.ATTRIB_DELIM;
}
/**
 * Retrieves the specified cookie as a String of text
 * @param String name - name of cookie to retrieve
 * @return String cookie value or null if not found
 */
function CookieENT4esciti_getRawCookie(name) {
    var search = name + CookieENT4esciti.COOKIE_KEYVAL;
    if (document.cookie)
    {
        if (document.cookie.length > 0)
        {
            offset = document.cookie.indexOf(search);
            if (offset != -1)
            {
               offset += search.length;
               end = document.cookie.indexOf(CookieENT4esciti.COOKIE_DELIM, offset);
               if (end == -1) end = document.cookie.length;
               return unescape(document.cookie.substring(offset, end));
            }
        }
    }
    return null;
};

CookieENT4esciti.getRawCookie = CookieENT4esciti_getRawCookie;

/**
 * Cookies can hold multiple pieces of information.  This methods saves a key/value pair to
 * the specified cookie.  Each key/value pair is separated by a special character
 * defined by the ATTRIB_DELIM constant.  Setting an attribute's value to null or empty string
 * will remove it from the cookie.
 * @param cookieName String - name of cookie that will hold the key/value pair
 * @param attribName String - attribute key
 * @param attribValue String - attribute value
 */
function CookieENT4esciti_setCookieAttrib(cookieName, attribName, attribValue)
{
    var attribMap = CookieENT4esciti.getCookie(cookieName);
    attribMap[attribName] = attribValue;
    CookieENT4esciti.setCookie(cookieName,attribMap);
};
CookieENT4esciti.setCookieAttrib = CookieENT4esciti_setCookieAttrib;

/**
 * Cookies can hold multiple pieces of information.  This methods retrieves a value from the
 * specified cookie using the specified key (attribName).  Each key/value pair is separated by a
 * special character defined by the ATTRIB_DELIM constant.
 * @param cookieName String - name of cookie that that holds the key/value pair
 * @param attribName String - attribute key
 * @param attribValue String - attribute value
 * @return String value
 */
function CookieENT4esciti_getCookieAttrib(cookieName, attribName)
{
    var attribMap = CookieENT4esciti.getCookie(cookieName);
    return attribMap[attribName];
};
CookieENT4esciti.getCookieAttrib = CookieENT4esciti_getCookieAttrib;

/**
 * Retrieves a map of all key/value pairs (attributes) stored in the specified cookie.
 * @param cookieName String - name of cookie
 * @return Array of all attributes
 */
function CookieENT4esciti_getCookie(cookieName)
{
    var attribMap = new Array();
    var cookie = CookieENT4esciti.getRawCookie(cookieName);
    if (cookie != undefined && cookie != null)
    {
        var attribArray = cookie.split(CookieENT4esciti.ATTRIB_DELIM);
        for (var i=0;i<attribArray.length;i++)
        {
            var index = attribArray[i].indexOf(CookieENT4esciti.ATTRIB_KEYVAL);
            var name =  attribArray[i].substring(0,index);
            var value = attribArray[i].substring(index+1);
            attribMap[name] = value;
        }
    }
    return attribMap;
};
CookieENT4esciti.getCookie = CookieENT4esciti_getCookie;

/**
 * Saves a map of cookie attributes to the specified cookie.  Null or empty string values are not saved.
 * @param cookieName String - name of cookie to create
 * @param attribMap Array - holds key/value pairs to save in cookie
 */
function CookieENT4esciti_setCookie(cookieName, attribMap)
{
    var attrib = "";
    var expire= "";
    for (var name in attribMap)
    {
        var value = attribMap[name];
        if (value != undefined && value != null && value != "")
        {
            if (name.indexOf(CookieENT4esciti.ATTRIB_KEYVAL) < 0 && value.indexOf(CookieENT4esciti.ATTRIB_KEYVAL) < 0 &&
                name.indexOf(CookieENT4esciti.ATTRIB_DELIM) < 0 && value.indexOf(CookieENT4esciti.ATTRIB_DELIM) < 0)
            {
                attrib += ((attrib == "") ? "" : CookieENT4esciti.ATTRIB_DELIM);
                attrib += (name + CookieENT4esciti.ATTRIB_KEYVAL + value);
             }
            else
            {
                alert("Cookie attribute name and/or value contains a delimeter (" +
                		name + "," + value + ")(" +
                       CookieENT4esciti.ATTRIB_KEYVAL + " or " + CookieENT4esciti.ATTRIB_DELIM + ").");
            }
        }
    }
    if (CookieENT4esciti.EXPIRES > 0 ) {
			expire = CookieENT4esciti_EXPIRES(CookieENT4esciti.EXPIRES); 
	}
	console.log("cookie path = " + CookieENT4esciti.PATH);
    document.cookie = cookieName + CookieENT4esciti.COOKIE_KEYVAL + escape(attrib) + expire + CookieENT4esciti.PATH;
    
};
CookieENT4esciti.setCookie = CookieENT4esciti_setCookie;

