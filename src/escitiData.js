/**
 * Données et traitements pour xiti chargé par esciti.js
 *
 * version: le 1er chiffre change quand esciti.js est modifier , 
 * 			le suivant quand le code de escitiData.js est modifié 
 * 			et le dernier sur changement des données.
*/
InfoENT4esciti.version='1.4.1_test';
/**
 * le parametrage du cookie 
 */
CookieENT4esciti.COOKIE_DELIM = ";";
CookieENT4esciti.COOKIE_KEYVAL = "=";
CookieENT4esciti.ATTRIB_DELIM = ";";
CookieENT4esciti.ATTRIB_KEYVAL = "=";
CookieENT4esciti.setPath("/");
CookieENT4esciti.EXPIRES=0;


// l'url du script fourni par xiti : 
var url_xiti_js = InfoENT4esciti.urlPath +"xtfirst_ENT.js";

// les noms des attributs dans le cookie.
var cookieName = "esciti";
var uidAtt = "uid";
var profileAtt = "profile";
var etabAtt="etab";

// l'object contenant les infos pour xiti est declarer dans le script appelant esciti.js
//function InfoENT4esciti(){};

/**
 * le parametrage pour xiti 
 */

/**
 *  les parametres communs à toutes les pages.
 */

InfoENT4esciti.projet="42";
InfoENT4esciti.plateforme="17";
/**
 * Le tableau des collectivitées associées au numero de plateforme. 
 */
InfoENT4esciti.collectivites = [ 
		[365203, 17], // 0  _Collectivité de Test 
		[******, **] // 1 	_Région Centre Val de Loire 	
];

/*
 * table des utilisateurs autorisé à marquer
 * si la table n'existe pas tout les utilisateur participe au marquage pourvue qu'ils soient dans un établissement déclaré.
 *
 *
   
InfoENT4esciti.uidAfiltre={
//Lycée fictif : 
//Enseignants
                "F1000ugu" : "noel.mivemi", //admin
                "F1000ufy" : "jean.janikef",
//Eleves :
                "F1000u4k" : "thibaut.dazozo",
                "F1000u74" : "benjamin.capali",
//Parents :
                "F1091nye" : "herve.dazozo" ,
                "F1091o6t" : "jean-francois.capali",
//Enseignant Documentaliste :
                "F1000uey" : "anne-laure.delidyk",
//Administratifs :
                "F1000ugg" : "christiane.rysesy",
                "F1000ugo" : "daniel.cinava",
//CFA Fictif :
//Apprenant :
                "F11702wy" : "ima.marvin",
//Formateur :
                "F11702xq" : "tucker.autumn"
}
*/



/**
 * les profiles XITI en fonction des objectClass ldap. 
 */
InfoENT4esciti.objClass2profile = {
		"ENTEleve" : "1",
		"ENTAuxEnseignant" : "2",
		"ENTAuxPersRelEleve" : "3",
		"ENTAuxNonEnsEtab" : "4",
		"ENTAuxNonEnsCollLoc" : "7",
		"Autre" : "6"
};

/**
 * Le couple [codes structure, collectivité XITI] en fonction des SIRENs.
 * Doit contenir tous les SIRENs des structures a marquer. 
 */
InfoENT4esciti.siren2etab = {
		 "00000000000001" :  [65, 0],//["65", "LPO LYC METIER-FICTIF-ac-ORL._TOURS" ],
		 "88888888888888" : [66, 0], //["66", "CFA Fictif"],
		 "37373737373737" : [67, 0], //["67", "CLG-FICTIF37-ac-ORL._TOURS"],
};


/**
 * Les codes etablissement XITI en fonction des UAIs.
 * Doit contenir tous les UAIs des établissements a marquer. 
 */
InfoENT4esciti.uai2siren = {
		"0450822X" : "00000000000001", // lycee fictif
		"0333333Y" : "88888888888888" , // cfa-fictif
		"0377777U" : "37373737373737" , // college fictif
};

/**
 * Les identifiants de service XITI en fonction de leurs libelles.
 */
InfoENT4esciti.service2id={
	"Stockage_Partage" : 1, 
	"Travail_Collaboratif" : 2, 
	"Notes" : 3, 
	"Absences" : 4, 
	"Services_Vie_Scolaire" : 5, 
	"Gestion_Competences" : 6, 
	"Gestion_Temps" : 7, 
	"Cahier_Textes" : 9, 
	"Courrier_Electronique" : 10, 
	"Actualites" : 11, 
	"Reservation_Ressources" : 12, 
	"Ressources_En_Ligne" : 13, 
	"Documentation_CDI" : 15, 
	"Orientation" : 16, 
	"Parcours_Pedagogiques" : 17, 
	"Services_Collectivites" : 18, 
	"Visioconference" : 19 ,
	"Page_ENT" : ""
}

/**
 * les services donnés par les contextes de portles 
 */
InfoENT4esciti.context2Service={
	//"InfosCG37" : ,
	//"aidesInfosCFA" : ,
	//aidesInfosRegion : ,
	//RECIA :,
	//annoncesRegion : ,
	"Agenda" : "Gestion_Temps", // horde
//	"annonces" : "Actualites",	
//	"annoncesCFA" : "Actualites",
//	"annoncesCLG37" : "Actualites",
	"Courriel" : "Courrier_Electronique",
	"DOCADMIN" : "Page_ENT",
	"ETOILE" : "Orientation",
	"EDT" : "Gestion_Temps",
	"EDUTILE" : "Ressources_En_Ligne",
	"email-preview-netocentre" : "Courrier_Electronique",
	"filemanager" : "Stockage_Partage",
	"Folios" : "Gestion_Competences",
	"GLPI" : "Page_ENT",
	"Grouper-UI" : "Page_ENT",
	"GRR" : "Reservation_Ressources",
	"infosEtoile" : "Orientation",
	"LettreActualites" : "Actualites",
	"LiensEdutiles" : "Ressources_En_Ligne",
	"LiensUtilAgri" : "Ressources_En_Ligne",
	"ListesDiffusion" : "Courrier_Electronique",
	"LPC" : "Gestion_Competences",
	"Memo" : "Page_ENT", //horde
	"MoodleWPP" : "Parcours_Pedagogiques",
	"OBII" : "Gestion_Competences",
	"Orientation" : "Orientation",
	"PMB" : "Documentation_CDI",
	"PublicationAnnonces" : "Actualites",
	"ressources" : "Ressources_En_Ligne",
	"RessourcesNumeriques" : "Ressources_En_Ligne",
	"Taches" : "Gestion_Temps", //horde
	"Teleservices" : "Services_Vie_Scolaire",
	"SACoche" : "Gestion_Competences",
	"SconetNotes" : "Notes",
	"SiecleVieScolaire" : "Absences",
	"UTILAGRI" : "Ressources_En_Ligne",
	"/VieScolaire" : "Services_Vie_Scolaire",
	"Ypareo" : "Services_Vie_Scolaire"
	//"liensUtilesCFA" : "Ressources_En_Ligne",
}

/**
 * Les services deduits de la reference des ancres
 */
InfoENT4esciti.href2Service={
	"Courriel" : "Courrier_Electronique",
	"Educagri" : "Orientation",
	"EDT" : "Gestion_Temps",
	"ESIDOC" : "Documentation_CDI",
	"filemanager" : "Stockage_Partage",
	"Folios" : "Gestion_Competences",
	"GLPI" : "Page_ENT",
	"GRR" : "Reservation_Ressources",
	"list.netocentre.fr/sympa" : "Page_ENT",
	"mailLink" : "Courrier_Electronique",
	"MoodleWPP" : "Parcours_Pedagogiques",
	"OBII" : "Gestion_Competences",
	"Orientation" : "Orientation",
	"PortailArenA" : "Page_ENT",
	"ListesDiffusion" : "Courrier_Electronique",
	"LPC" : "Gestion_Competences",
	"PMB" : "Documentation_CDI",
	"SACoche" : "Gestion_Competences",
	"SconetNotes" : "Notes",
	"SiecleVieScolaire" : "Absences",
	"SiteEtoile" : "Orientation",
	"SiteOnisep" : "Orientation",
	"sympa" : "Page_ENT",
	"Teleservices" : "Services_Vie_Scolaire",
	"VieScolaire" : "Services_Vie_Scolaire",
	"Webclasseur" : "Orientation",
	"www.etoile.regioncentre" : "Orientation",
	"Ypareo" : "Services_Vie_Scolaire"

}

/**
 * autres deduction : pour moodle par exemple
 */
InfoENT4esciti.txt2Service={
	"calendar" : "Gestion_Temps",
	"message" : "Courrier_Electronique",
	"files" : "Stockage_Partage",
	"forum" : "Travail_Collaboratif",
	"blog" : "Travail_Collaboratif",
	"badge" : "Gestion_Competences",
	"/nag"  : "Gestion_Temps", //horde
	"/mmemo" : "Page_ENT", //horde
	"/kronolith" : "Gestion_Temps" //hord
}


/**
 * 
 * Les parametres variable
 * 
 */ 
 InfoENT4esciti.parametre={
		"%ancrePortail" : "a",
		"%ancrePortailMobile" : "a",
		"%portletPortail" : ".up-portlet-wrapper",
		"%portletPortailMobile" : "div.portal"
 }
 
InfoENT4esciti.onClickSelector2service={
		".createListeDialog button" :  "Courrier_Electronique", // en test cosole.log
		"tr.email-row a" : "Courrier_Electronique",
		".sympaTopLevel #esupsympaAdminTabs li a" : "Courrier_Electronique",
		".sympaTopLevel a.mailLink" : "Courrier_Electronique"
}

/******************************************************************
 * 
 * 		FIN du PARAMETRAGE
 * 
 * ****************************************************************/



/**
 * Fixe la valeur d'un attribut du cookie.
 * Si la valeur est vide ne fait rien
 * 
 * return la valeur de l'attribut.
 */
function InfoENT4esciti_setAttr(attr, valeur){
		if (valeur != undefined && valeur != "") {
			CookieENT4esciti.setCookieAttrib(cookieName, attr, valeur);
			return valeur;			
		}
		return CookieENT4esciti.getCookieAttrib(cookieName, attr);
};



/**
 * fixe le profile utilisateur  par l'objectClass.
 * si l'objectClass n'est pas trouvé utilise "Autre".
 */
function InfoENT4esciti_setObjectClass(objectClass) {
		console.log("obj="+objectClass);
		var profile;
		if (objectClass !== undefined ) {
			profile = InfoENT4esciti.objClass2profile[objectClass];
			console.log("obj="+objectClass+" profile="+profile);
		} else {
			profile = CookieENT4esciti.getCookieAttrib(cookieName, profileAtt);
		}
		if (profile == undefined || profile == "" ){
			profile = InfoENT4esciti.objClass2profile["Autre"];
		}
		var res = InfoENT4esciti.profile = InfoENT4esciti_setAttr(profileAtt, profile);
		var test = res !== undefined && res !== "";
		console.log("profile="+profile + "info..=" +InfoENT4esciti.profile );
		console.log ("setObjectClass "+ objectClass +" return "+ test);
		return test;
};

InfoENT4esciti.setObjectClass=InfoENT4esciti_setObjectClass;


function InfoENT4esciti_etabBySiren(siren) {
		if (siren !== undefined && siren !== '') {
			var etabCol = InfoENT4esciti.siren2etab[siren];
			if (etabCol === undefined ){
					return etabCol;
			}
			return "" + etabCol[1]+ etabCol[0];
		}
}
/**
 * Prend le numero d'établissement (codé pour le cookie, avec l'index de collectivite),
 * et renvoie [etabXiti, collectiviteXiti, plateformeXiTi]
 */
function InfoENT4esciti_setInfoEtab(etab) {
	if (etab !== undefined && etab != '') {
		var tab = InfoENT4esciti.collectivites[etab.charAt(0)];
		InfoENT4esciti.collectivite = tab[0];
		InfoENT4esciti.plateforme = tab[1];
		InfoENT4esciti.etab = etab.substring(1);
	} else {
		InfoENT4esciti.etab = '';
	}
}


/**
 * Fixe la structure par le siren. 
 * Si la structure n'est pas trouvée on vide la structue du  cookie.
 * Si elle est vide en parametre on garde celle du cookie.
 * 
 */
function  InfoENT4esciti_setSiren(siren){
		var etab ;
		if (siren !== undefined && siren !== '') {
				console.log ("defined siren="+siren); 
				etab =  InfoENT4esciti_etabBySiren(siren);
				if (etab === undefined ){
					console.log ("undefined etab");
					CookieENT4esciti.setCookieAttrib(cookieName, etabAtt, '');
					InfoENT4esciti.etab = '';
				} else {
					console.log("defined etab=", etab);
					InfoENT4esciti_setInfoEtab(InfoENT4esciti_setAttr(etabAtt, etab));
				}
		} else {
			InfoENT4esciti_setInfoEtab(CookieENT4esciti.getCookieAttrib(cookieName, etabAtt));
		}
		var res = InfoENT4esciti.etab ;
		var test = res !== undefined && res !== "";
		console.log ("setSiren="+ siren + " etab=" + res + " return " +test);
		return test;
};


InfoENT4esciti.setSiren=InfoENT4esciti_setSiren;

/**
 * Fixe l'etablissement par l'uai.
 * Si l'établissement n'est pas trouvé utilise la structure  du cookie.
 *  
 */
function  InfoENT4esciti_setUai(uai){
		var etab ;
		if (uai !== undefined) {
				siren = InfoENT4esciti.uai2siren[uai];
				etab = InfoENT4esciti_etabBySiren(siren);
		}
		InfoENT4esciti_setInfoEtab(InfoENT4esciti_setAttr(etabAtt, etab));
};
InfoENT4esciti.setUai=InfoENT4esciti_setUai;


/**
 *  Fixe l'identifiant de personne XITI (uid ENT).
 * 
 */
function InfoENT4esciti_setUid(uid){		 
			var oldUid =  CookieENT4esciti.getCookieAttrib(cookieName, uidAtt);
			var test = true;
			var res;
			if (uid !== undefined && uid !== "" && uid !== oldUid) {
					test = typeof InfoENT4esciti.uidAfiltre == 'undefined' ||  InfoENT4esciti.uidAfiltre[uid];
					CookieENT4esciti.setCookieAttrib(cookieName, uidAtt, "");
					CookieENT4esciti.setCookieAttrib(cookieName, etabAtt, "");
					CookieENT4esciti.setCookieAttrib(cookieName, profileAtt, "");
			}
			if (test) {
				res = InfoENT4esciti.idPerso = InfoENT4esciti_setAttr(uidAtt, uid);
			}
			test = res !== undefined && res !== "";
			console.log("setUid "+ uid + " return " + test);
			return test;
};
/*
function InfoENT4esciti_setUid(uid){		 
			var oldUid =  CookieENT4esciti.getCookieAttrib(cookieName, uidAtt);
			if (uid !== undefined && uid !== "" && uid !== oldUid) {
					CookieENT4esciti.setCookieAttrib(cookieName, uidAtt, "");
					CookieENT4esciti.setCookieAttrib(cookieName, etabAtt, "");
					CookieENT4esciti.setCookieAttrib(cookieName, profileAtt, "");
			}
			var res = InfoENT4esciti.idPerso = InfoENT4esciti_setAttr(uidAtt, uid);
			var test = res !== undefined && res !== "";
			console.log("setUid "+ uid + " return " + test);
			return test;
};
*/
InfoENT4esciti.setUid=InfoENT4esciti_setUid;

/**
 * Verifie que les info xiti sont complete 
 * si ok initialise les variables XITI appelle leur script.
 * sinon on ne marque pas
 */

/**
 * Fixe le service XITI et fait l'appele au script XITI
 * ne doit donc être utilisé qu'après avoir renseigné toutes les autres infos. 
 */
function InfoENT4esciti_callByService(libService) {
	var idService = InfoENT4esciti.service2id[libService];
	if (idService == undefined) {
		// les valeurs du services par defaut
		libService = "Page_ENT";
		idService =  InfoENT4esciti.service2id[libService];
	}
	
	// partie qui remplace les marqueurs esciti
	if (	InfoENT4esciti_setUid() 
		&&  InfoENT4esciti_setSiren() 
		&& 	InfoENT4esciti_setObjectClass()) {
			
			console.log("check_all true");
			
			
			var xt_multc = 	"&x1="+ idService 
							+ "&x2=" + InfoENT4esciti.profile 
							+ "&x3=" + InfoENT4esciti.projet 
							+ "&x4=" + InfoENT4esciti.plateforme;
			
			
			
			var xt_at = InfoENT4esciti.idPerso;
			var xtidc = InfoENT4esciti.idPerso;
			var xt_ac = InfoENT4esciti.profile;	//category
			var xtpage = libService;	//page name (with the use of :: to create chapters)

			// les variables globales communes à chaque marqueur
			xtnv = document;	//parent.document or top.document or document
			xtsd = "https://logs";
			xtsite = InfoENT4esciti.collectivite;
			xtn2 = InfoENT4esciti.etab;	// level 2 site 
			
			xtdi = "";	//implication degree
			
			document.write("<script type=\"text/javascript\" >");
			document.write("xt_multc=\""+xt_multc+"\";\n");
			document.write("if (window.xtparam!=null){window.xtparam+=xt_multc;}\n");
			document.write("else{window.xtparam =xt_multc;};\n");
			document.write("xt_at=\""+xt_at+"\";\n");
			document.write("xtidc=\""+xtidc+"\";\n");
			document.write("xt_ac=\""+xt_ac+"\";\n");
			document.write("if (window.xtparam!=null){window.xtparam+=\"&ac=\"+xt_ac+\"&at=\"+xt_at;}\n");
			document.write("else{window.xtparam = \"&ac=\"+xt_ac+\"&at=\"+xt_at;};\n");
			document.write("xtpage=\""+xtpage+"\";\n");
			document.write('</script>');
			document.write('<script type="text/javascript" src="'+url_xiti_js+'" ></script>');

			console.log("fin xtfirst.js");
			return true;
	}
	console.log("callByService "+ InfoENT4esciti.collectivite + " return false");
	return false;
}

InfoENT4esciti.callByService=InfoENT4esciti_callByService;

/**
 * Fait l'appele  le service XITI en fonction d'une liste de mot.
 * un mot non trouvé ne marque pas.
 * return true si a marqué
 */
function InfoENT4esciti_callByList(context, mot2service) {
	var test = false;
	var service;
	var serviceOk = {};
	var contextKo = {};
	if (context !== undefined ) {
		var contextTab = context.split(' ');
		console.log(contextTab);
		if (contextTab !== undefined) {
			var max = contextTab.length;		
			for (var i = 0; i < max ; i++){
				var c = contextTab[i];
				console.log("context : " + c);
				var testC = contextKo[c];
				if (!testC ) {
					service = mot2service[c];
					if (service !== undefined && service != "" ) { 
						if (!serviceOk[service]) {
							serviceOk[service] = true; testC=true;
							console.log("service 1 : " + service);
							test |= InfoENT4esciti_callByService(service);
						}
					} else {
						for (var clee in mot2service) {
							if (c.indexOf(clee) >= 0) {
								service = mot2service[clee];
								if (service !== undefined && service != "" && !serviceOk[service]) {
									serviceOk[service] = true; testC = true;
									console.log("service 2 : " + service);
									test |= InfoENT4esciti_callByService(service);
									break;
								}
							}
						}
					}
					contextKo[c] = !testC;	
				}
			}					
		}
	}
	return test;
}
InfoENT4esciti.callByList=InfoENT4esciti_callByList

/**
 * Fait l'appele XITI en cherchant le service correspondant au text.
 * il y a correspondance si text contient une clee de mot2service.
 */
function InfoENT4esciti_callBySubString(text, mot2service){
		var test = false;
		if (text !== undefined) {
			for (var clee in mot2service) {
				if (text.indexOf(clee) > 0 ) {
					// si la clee est dans la reference on marque:
					var service = mot2service[clee];
					if (service != undefined && service !== '') {
						test = 	InfoENT4esciti_callByService(service);
						break;
					}
				}
			}
		}
		return test;
}

function InfoENT4esciti_callByTxtInList(JQueryLocal, selector, attribut, list2service) {
		console.log("selector = "+selector);
		console.log(JQueryLocal(selector));
		var allMot = JQueryLocal.map(
								JQueryLocal(selector), 
								function(elem) {
									return JQueryLocal(elem).attr(attribut);
								}
							).join();
		console.log(allMot);
	return InfoENT4esciti_callByList(allMot, list2service);
}

/**
 * 
 */
 function InfoENT4esciti_callByContextInCssClass(JQueryLocal, CssClassName){
	 console.log('CssClassName='+CssClassName);
	return InfoENT4esciti_callByTxtInList(JQueryLocal, InfoENT4esciti_getParam(CssClassName), 'class', InfoENT4esciti.context2Service);
 }
InfoENT4esciti.callByContextInCssClass=InfoENT4esciti_callByContextInCssClass;

function InfoENT4esciti_click(ancre , service){
	// alert ("handler for .click() call for " + service);
	var idService = InfoENT4esciti.service2id[service];
	var etab = InfoENT4esciti.etab;
	if (etab != '' && (idService != '' || service == "Page_ENT" )){
			var param = service+'&idclient='+InfoENT4esciti.idPerso+'&x1='+idService+'&x2='+InfoENT4esciti.profile+'&x3='+InfoENT4esciti.projet+'&x4='+InfoENT4esciti.plateforme;
			console.log("before xt_click" + param) ; // alert ("before xt_click " + param);
			xt_click(ancre, 'F', etab, param);
			console.log("after xt_click" + param) ; // alert ("after xt_click");
	}
	return true;
}
InfoENT4esciti.click=InfoENT4esciti_click;
	
	
function InfoENT4esciti_getParam(param) {
		if (param != undefined && param.charAt(0) == '%'){
				return InfoENT4esciti.parametre[param];
		} else {
				return param;
		}
}
/**
 * pour marqué les liens 
 */
 
 function InfoENT4esciti_marqueClick(JQueryLocal, ancre, service) {
		if (service != undefined && service !== '') {
			try {
				JQueryLocal(ancre).on("click", function () {InfoENT4esciti.click(ancre, service); });
			} catch(err) {
				JQueryLocal(ancre).click(function () {InfoENT4esciti.click(ancre, service); });
			}
			console.log("marque 1 ancre :", service + ":" + ancre);
			return true;
		}
		return false;
 }
 
 function InfoENT4esciti_marqueSomeClick(JQueryLocal, cssAncreSelector){
	 JQueryLocal.map(
			JQueryLocal(InfoENT4esciti_getParam(cssAncreSelector)),
			function(ancre) {
				var href = JQueryLocal(ancre).attr('href');
				if (href !== undefined) {
					for (var clee in InfoENT4esciti.href2Service) {
						if (href.indexOf(clee) >= 0 ) {
							// si la clee est dans la reference on marque:
							var service = InfoENT4esciti.href2Service[clee];
							if (InfoENT4esciti_marqueClick(JQueryLocal, ancre, service)) {
								break;
							}
						}
					}
				}
			}
		);
 }
 
 function InfoENT4esciti_marqueAllClick(JQueryLocal, cssAncreSelector, service){
	 JQueryLocal.map(
			JQueryLocal(cssAncreSelector),
			function(ancre) {
				InfoENT4esciti_marqueClick(JQueryLocal, ancre, service);
			}
		);
 }
 
 
 
 function InfoENT4esciti_marqueOnClick(JQueryLocal, cssAncreSelector){
	 InfoENT4esciti_marqueSomeClick(JQueryLocal, cssAncreSelector);
	 for (var selector in InfoENT4esciti.onClickSelector2service) {
			InfoENT4esciti_marqueAllClick(JQueryLocal, selector, InfoENT4esciti.onClickSelector2service[selector]);
	 }
 }
 
 InfoENT4esciti.marqueOnClick=InfoENT4esciti_marqueOnClick;
 
 function InfoENT4esciti_callByIdHtmlTag(JQueryLocal, selector, defautService){
	 var test = InfoENT4esciti_callByTxtInList(JQueryLocal, selector, 'id', InfoENT4esciti.txt2Service);
	 if (!test) {
			InfoENT4esciti_callByService(defautService);
	 }
 }
 function InfoENT4esciti_callById(tagName, defautService){
	var bodyTag = document.getElementsByTagName(tagName)[0];
	var test = InfoENT4esciti_callBySubString(bodyTag.id, InfoENT4esciti.txt2Service);
	if (!test) {
			InfoENT4esciti_callByService(defautService);
	 }
 }
 
 
InfoENT4esciti.callById=InfoENT4esciti_callById;
