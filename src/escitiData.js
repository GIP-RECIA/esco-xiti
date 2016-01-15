/**
 * Données et traitements pour xiti chargé par esciti.js
 *
 * version: le 1er chiffre change quand esciti.js est modifié , 
 * 			le suivant quand le code de escitiData.js est modifié 
 * 			et le dernier sur changement des données.
*/
InfoENT4esciti.version='1.4.2';
/**
 * le paramétrage du cookie 
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

// l'objet contenant les infos pour xiti est déclaré dans le script appelant esciti.js
//function InfoENT4esciti(){};

/**
 * Le paramétrage pour xiti:
 */

/**
 *  les paramètres communs à toutes les pages.
 */

InfoENT4esciti.projet="42";
InfoENT4esciti.plateforme="16";

/*
 * Exemple pour filtrer des utilisateurs en phase de recette.
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
* /

/**
 * Le tableau des collectivités associées au numéro de plate-forme. 
 */
InfoENT4esciti.collectivites = [ 
		[365203, 17], // 0  _Collectivité de Test 
		[566123, 16] // 1 	_Région Centre Val de Loire 	
];


/**
 * Les profiles XITI en fonction des objectClass ldap. 
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
 * Le couple [code structure, collectivité XITI] en fonction des SIRENs.
 * Doit contenir tous les SIRENs des structures à marquer.
 * Version test 
 *
InfoENT4esciti.siren2etab = {
		 "00000000000001" :  [65, 0],//["65", "LPO LYC METIER-FICTIF-ac-ORL._TOURS" ],
		 "88888888888888" : [66, 0], //["66", "CFA Fictif"],
		 "37373737373737" : [67, 0], //["67", "CLG-FICTIF37-ac-ORL._TOURS"],
		 "18450311800020" : [68, 0] //["68", "GIP-RECIA"],
};
*/
/**
 * Le couple [code structure, collectivité XITI] en fonction des SIRENs.
 * Doit contenir tous les SIRENs des structures à marquer.
 * Version prod (créé avec script/code_etab2js.pl)
*/
InfoENT4esciti.siren2etab = {
	"40213908300016" : [1, 1]  , //Berrichonne.Châteauroux 
	"77534903800064" : [2, 1]  , //CFA.BTP 28.Chartres 
	"77534903800080" : [3, 1]  , //CFA.BTP 36.Châteauroux 
	"77534903800031" : [4, 1]  , //CFA.BTP 37.Saint-Pierre-des-Corps 
	"77534903800072" : [5, 1]  , //CFA.BTP 41.Blois 
	"77534903800056" : [6, 1]  , //CFA.BTP 45.Orléans 
	"77534903800098" : [7, 1]  , //CFA.BTP CENTRE.Orléans 
	"33520212300031" : [8, 1]  , //CEMEA.Centre.Chartres 
	"33520212300032" : [9, 1]  , //CEMEA.CENTRE.Orléans 
	"33520212300030" : [10, 1]  , //CEMEA.Centre.Tours 
	"18360001400017" : [11, 1]  , //Centre de Formation.CCI de l'Indre.Châteauroux 
	"24450006200017" : [12, 1]  , //CFA.AGGLOMERATION ORLEANAISE.Orléans 
	"19280706300032" : [13, 1]  , //CFA AGRI DE L'EURE ET LOIR.Sours 
	"19360017800068" : [14, 1]  , //CFA AGRI DE L'INDRE.Châteauroux 
	"19370781700048" : [15, 1]  , //CFA AGRI DE L'INDRE ET LOIRE.Fondettes 
	"19370781700050" : [16, 1]  , //CFA AGRI DE L'INDRE ET LOIRE.Amboise 
	"19370781700049" : [17, 1]  , //CFA AGRI DE L'INDRE ET LOIRE.Chinon 
	"19180585200081" : [18, 1]  , //CFA AGRI DU CHER.Le Subdray 
	"19180585200082" : [19, 1]  , //CFA AGRI DU CHER.Saint-Amand-Montrond 
	"19410018600049" : [20, 1]  , //CFA AGRI DU LOIR ET CHER.Blois 
	"19410018600050" : [21, 1]  , //CFA AGRI DU LOIR ET CHER.Montoire-sur-le-Loir 
	"19410018600051" : [22, 1]  , //CFA AGRI DU LOIR ET CHER.Vendôme 
	"19450027800024" : [23, 1]  , //CFA AGRI DU LOIRET.Bellegarde 
	"18360002200036" : [24, 1]  , //CFA.CM de l'Indre.Châteauroux 
	"18450002300025" : [25, 1]  , //CFA.CM du Loiret.Orléans 
	"18410002200021" : [26, 1]  , //CFA.CM LOIR ET CHER.Blois 
	"18370002000021" : [27, 1]  , //CFA de la CMA d'Indre-et-Loire.Joué-lès-Tours 
	"77551109000019" : [28, 1]  , //CFA de la Mouillère.Orléans 
	"32570588700033" : [29, 1]  , //CFA de la Ville de Tours.Tours 
	"30804972500038" : [30, 1]  , //CFA DES TRANSPORTS.Vendôme 
	"30804972500036" : [31, 1]  , //CFA DU CHER.Bourges 
	"25450246100018" : [32, 1]  , //CFA EST LOIRET.Montargis 
	"88888888888888" : [33, 1]  , //CFA Fictif.Orléans 
	"30791852400017" : [34, 1]  , //CFA INTERPRO.Chartres 
	"77551105800056" : [35, 1]  , //CFA PHARMA.Orléans 
	"77551105800049" : [36, 1]  , //CFA PHARMA.Bourges 
	"77551105800031" : [37, 1]  , //CFA PHARMA DE TOURS.Joué-lès-Tours 
	"32187778900123" : [38, 1]  , //CFA Propreté INHNI Centre.Tours 
	"35353902600024" : [39, 1]  , //CFA REGIONAL MFR CENTRE.Orléans 
	"19410860100015" : [40, 1]  , //CLG.AUGUSTIN THIERRY.Blois 
	"19280957200014" : [41, 1]  , //CLG.EMILE ZOLA.Châteaudun 
	"24285254900110" : [42, 1]  , //CC DES PORTES DE PERCHE.La Loupe 
	"19180825200024" : [43, 1]  , //CREPS DE LA REGION CENTRE.Bourges 
	"30804972500037" : [44, 1]  , //Ecole des métiers.Bourges 
	"18180001200021" : [45, 1]  , //ECOLE HUBERT CURIEN.Bourges 
	"34344998900023" : [46, 1]  , //Ecuries du Val de l'Eure.Nogent-sur-Eure 
	"19280706300016" : [47, 1]  , //EPLEFPA DE CHARTRES.Sours 
	"19360050900015" : [48, 1]  , //EREA.ERIC TABARLY.Châteauroux 
	"19280659400011" : [49, 1]  , //EREA.FRANCOIS TRUFFAUT.Mainvilliers 
	"19451104400019" : [50, 1]  , //EREA.SIMONE VEIL.Amilly 
	"18180001200070" : [51, 1]  , //Estacom.Bourges 
	"40875084200036" : [52, 1]  , //FORMASAT CFA Sport Animation Tourisme.Orléans 
	"43906604400033" : [53, 1]  , //IPM DU SPORT.Tours 
	"77551154600035" : [54, 1]  , //IRFF.Châteauroux 
	"19370781700014" : [55, 1]  , //LA.Fondettes 
	"19180585200057" : [56, 1]  , //LEGTA. BOURGES LE SOLLIER.Le Subdray 
	"19360017800019" : [57, 1]  , //LEGTA.Châteauroux 
	"19410018600015" : [58, 1]  , //LEGTA. VENDOME BLOIS MONTOIRE.Vendôme 
	"19450094800048" : [59, 1]  , //LEGTA.LE CHESNOY.Montargis 
	"194500948000481" : [60, 1]  , //LEGTA.LES BARRES.Nogent-sur-Vernisson 
	"19180005100010" : [61, 1]  , //LG.ALAIN FOURNIER.Bourges 
	"19370035800024" : [62, 1]  , //LG.DESCARTES.Tours 
	"19360008700012" : [63, 1]  , //LG.JEAN GIRAUDOUX.Châteauroux 
	"19280007600015" : [64, 1]  , //LG.MARCEAU.Chartres 
	"19360002000013" : [65, 1]  , //LG.ROLLINAT.Argenton-sur-Creuse 
	"19450042700035" : [66, 1]  , //LGT.METIER-DURZY.Villemandeur 
	"19370038200016" : [67, 1]  , //LGT.METIER-GRANDMONT.Tours 
	"19370016800027" : [68, 1]  , //LGT.ALFRED DE VIGNY.Loches 
	"19370036600019" : [69, 1]  , //LGT.BALZAC.Tours 
	"19450029400013" : [70, 1]  , //LGT.BERNARD PALISSY.Gien 
	"19410959100017" : [71, 1]  , //LGT.CAMILLE CLAUDEL.Blois 
	"19457779700013" : [72, 1]  , //LGT.CHARLES PEGUY.Orléans 
	"19370037400013" : [73, 1]  , //LGT.CHOISEUL.Tours 
	"19410017800012" : [74, 1]  , //LGT.CLAUDE DE FRANCE.Romorantin-Lanthenay 
	"19450062500026" : [75, 1]  , //LGT.DUHAMEL DU MONCEAU.Pithiviers 
	"19280015900019" : [76, 1]  , //LGT.EMILE ZOLA.Châteaudun 
	"19450040100014" : [77, 1]  , //LGT.EN FORET.Montargis 
	"19410002000016" : [78, 1]  , //LGT.FRANCOIS PHILIBERT DESSAIGNES.Blois 
	"19450978200018" : [79, 1]  , //LGT.FRANCOIS VILLON.Beaugency 
	"19281047100024" : [80, 1]  , //LGT.FULBERT.Chartres 
	"19360024400019" : [81, 1]  , //LGT.HONORE DE BALZAC.Issoudun 
	"19180007700015" : [82, 1]  , //LGT.JACQUES COEUR.Bourges 
	"19371418500017" : [83, 1]  , //LGT.JACQUES DE VAUCANSON.Tours 
	"19451462600010" : [84, 1]  , //LGT.JACQUES MONOD.Saint-Jean-de-Braye 
	"19371417700014" : [85, 1]  , //LGT.JEAN MONNET.Joué-lès-Tours 
	"19180024200015" : [86, 1]  , //LGT.JEAN MOULIN.Saint-Amand-Montrond 
	"19370001000013" : [87, 1]  , //LGT.LEONARD DE VINCI.Amboise 
	"19180006900012" : [88, 1]  , //LGT.MARGUERITE DE NAVARRE.Bourges 
	"19370039000019" : [89, 1]  , //LGT.PAUL-LOUIS COURIER.Tours 
	"19360009500015" : [90, 1]  , //LGT.PIERRE ET MARIE CURIE.Châteauroux 
	"19450049200013" : [91, 1]  , //LGT.POTHIER.Orléans 
	"19280019100012" : [92, 1]  , //LGT.ROTROU.Dreux 
	"19450782800011" : [93, 1]  , //LGT.VOLTAIRE.Orléans 
	"78818245900040" : [94, 1]  , //Ligue du Centre de Tennis.Blois 
	"19370040800019" : [95, 1]  , //LP LYC METIER.ALBERT BAYET.Tours 
	"19410031900038" : [96, 1]  , //LP LYC METIER.ANDRE AMPERE.Vendôme 
	"19371211400019" : [97, 1]  , //LP LYC METIER.BEAUREGARD.Château-Renault 
	"19360003800015" : [98, 1]  , //LP LYC METIER.CHATEAUNEUF.Argenton-sur-Creuse 
	"19370888000011" : [99, 1]  , //LP LYC METIER.D ARSONVAL.Joué-lès-Tours 
	"19280864000010" : [100, 1]  , //LP LYC METIER.ELSA TRIOLET.Lucé 
	"19371258500010" : [101, 1]  , //LP LYC METIER.EMILE DELATAILLE.Loches 
	"19370032500023" : [102, 1]  , //LP LYC METIER.FRANCOIS CLOUET.Tours 
	"19451304000015" : [103, 1]  , //LP LYC METIER.FRANCOISE DOLTO.Olivet 
	"19450064100015" : [104, 1]  , //LP LYC METIER.GAUDIER-BRZESKA.Saint-Jean-de-Braye 
	"19280925900018" : [105, 1]  , //LP LYC METIER.GILBERT COURTOIS.Dreux 
	"19371099300018" : [106, 1]  , //LP LYC METIER.HENRI BECQUEREL.Tours 
	"19360026900016" : [107, 1]  , //LP LYC METIER.JEAN D ALEMBERT.Issoudun 
	"19180009300012" : [108, 1]  , //LP LYC METIER.JEAN DE BERRY.Bourges 
	"19450750500015" : [109, 1]  , //LP LYC METIER.JEAN DE LA TAILLE.Pithiviers 
	"19280700600015" : [110, 1]  , //LP LYC METIER.JEAN FELIX PAULSEN.Châteaudun 
	"19180025900019" : [111, 1]  , //LP LYC METIER.JEAN GUEHENNO.Saint-Amand-Montrond 
	"19180010100013" : [112, 1]  , //LP LYC METIER.JEAN MERMOZ.Bourges 
	"19360011100010" : [113, 1]  , //LP LYC METIER.LES CHARMILLES.Châteauroux 
	"19450066600020" : [114, 1]  , //LP LYC METIER.MAL LECLERC DE HAUTECLOCQUE.Saint-Jean-de-la-R 
	"19370054900010" : [115, 1]  , //LP LYC METIER.MARTIN NADAUD.Saint-Pierre-des-Corps 
	"19280022500026" : [116, 1]  , //LP LYC METIER.MAURICE VIOLLETTE.Dreux 
	"19450786900015" : [117, 1]  , //LP LYC METIER.PAUL GAUGUIN.Orléans 
	"19281021600015" : [118, 1]  , //LP LYC METIER.SULLY.Nogent-le-Rotrou 
	"19410718100019" : [119, 1]  , //LP LYC METIER.VAL DE CHER.Saint-Aignan 
	"19180823700017" : [120, 1]  , //LP LYC METIER.VAUVERT.Bourges 
	"19370771800014" : [121, 1]  , //LP LYC METIER.VICTOR LALOUX.Tours 
	"19451442800029" : [122, 1]  , //LP.CHATEAU BLANC.Châlette-sur-Loing 
	"19410036800019" : [123, 1]  , //LP.DENIS PAPIN.Romorantin-Lanthenay 
	"19280009200012" : [124, 1]  , //LP.DU BATIMENT PH DE L ORME.Lucé 
	"19370053100034" : [125, 1]  , //LP.GUSTAVE EIFFEL.Tours 
	"19180042400019" : [126, 1]  , //LP.JACQUES COEUR.Bourges 
	"19371123100012" : [127, 1]  , //LP.JEAN CHAPTAL.Amboise 
	"19451067300016" : [128, 1]  , //LP.JEAN LURCAT.Fleury-les-Aubrais 
	"19180026700012" : [129, 1]  , //LP.JEAN MOULIN.Saint-Amand-Montrond 
	"19450043500020" : [130, 1]  , //LP.JEANNETTE VERDIER.Montargis 
	"19371100900012" : [131, 1]  , //LP.JOSEPH CUGNOT.Chinon 
	"19451037600024" : [132, 1]  , //LP.MARGUERITE AUDOUX.Gien 
	"19410832000020" : [133, 1]  , //LP.SONIA DELAUNAY.Blois 
	"19370878100029" : [134, 1]  , //LPA.AMBOISE.Amboise 
	"19450027800016" : [135, 1]  , //LPA.DE BEAUNE LA ROLANDE.Beaune-la-Rolande 
	"19370859100014" : [136, 1]  , //LPA.DE CHAMBRAY-LES-TOURS.Chambray-lès-Tours 
	"194100186000151" : [137, 1]  , //LPA.DE MONTOIRE.Montoire-sur-le-Loir 
	"19280021700015" : [138, 1]  , //LPO LYC METIER.EDOUARD BRANLY.Dreux 
	"19180035800019" : [139, 1]  , //LPO LYC METIER.EDOUARD VAILLANT.Vierzon 
	"00000000000001" : [140, 1]  , //LPO LYC METIER.FICTIF.Orléans 
	"19180036600012" : [141, 1]  , //LPO LYC METIER.HENRI BRISSON.Vierzon 
	"19410899900013" : [142, 1]  , //LPO LYC METIER.HOTEL.ET TOURISME VAL DE LOIRE.Blois 
	"19280044900022" : [143, 1]  , //LPO LYC METIER.JEHAN DE BEAUCE.Chartres 
	"19180008500018" : [144, 1]  , //LPO LYC METIER.PIERRE-EMILE MARTIN.Bourges 
	"19280036500012" : [145, 1]  , //LPO LYC METIER.REMI BELLEAU.Nogent-le-Rotrou 
	"19281056200012" : [146, 1]  , //LPO LYC METIER.SILVIA MONFORT.Luisant 
	"19410001200013" : [147, 1]  , //LPO.AUGUSTIN THIERRY.Blois 
	"19450051800015" : [148, 1]  , //LPO.BENJAMIN FRANKLIN.Orléans 
	"19360043400016" : [149, 1]  , //LPO.BLAISE PASCAL.Châteauroux 
	"19370009300019" : [150, 1]  , //LPO.FRANCOIS RABELAIS.Chinon 
	"19360019400016" : [151, 1]  , //LPO.GEORGE SAND.La Châtre 
	"19450050000013" : [152, 1]  , //LPO.JEAN ZAY.Orléans 
	"19451483200014" : [153, 1]  , //LPO.MAURICE GENEVOIX.Ingré 
	"19360005300014" : [154, 1]  , //LPO.PASTEUR.Le Blanc 
	"19410030100010" : [155, 1]  , //LPO.RONSARD.Vendôme 
	"194100186000152" : [156, 1]  , //LYCEE HORTICOLE.Blois 
	"77551109000020" : [157, 1]  , //Lycée Privé de la Mouillère.Orléans 
	"77531648200014" : [158, 1]  , //MFEO.Sorigny 
	"77524634100017" : [159, 1]  , //MFR.Bourgueil 
	"77544864000018" : [160, 1]  , //MFR.Chaingy 
	"77547038800015" : [161, 1]  , //MFR.Gien 
	"77527666000021" : [162, 1]  , //MFR.Loches 
	"77531579900020" : [163, 1]  , //MFR.Noyant-de-Touraine 
	"77541137400017" : [164, 1]  , //MFR.Saint-Firmin-des-Prés 
	"30721264700019" : [165, 1]  , //MFR.Sainte-Geneviève-des-Bois 
	"77531640900017" : [166, 1]   //MFR VAL DE L'INDRE.Sorigny 
};



/**
 * Les codes établissements XITI en fonction des UAIs.
 * Doit contenir tous les UAIs des établissements à marquer. 
 */
/* les données de test 
InfoENT4esciti.uai2siren = {
		"0450822X" : "00000000000001", // lycee fictif
		"0333333Y" : "88888888888888" , // cfa-fictif
	//	"0377777U" : "67" , // college fictif
};
*/
/** version de prod (créé avec script/code_etab2js.pl) */
InfoENT4esciti.uai2siren = {
	"0360858M" : "40213908300016" , //Berrichonne.Châteauroux 
	"0280904F" : "77534903800064" , //CFA.BTP 28.Chartres 
	"0360709A" : "77534903800080" , //CFA.BTP 36.Châteauroux 
	"0370984U" : "77534903800031" , //CFA.BTP 37.Saint-Pierre-des-Corps 
	"0410592W" : "77534903800072" , //CFA.BTP 41.Blois 
	"0450810L" : "77534903800056" , //CFA.BTP 45.Orléans 
	"0450810Q" : "77534903800098" , //CFA.BTP CENTRE.Orléans 
	"0281159H" : "33520212300031" , //CEMEA.Centre.Chartres 
	"0451722C" : "33520212300032" , //CEMEA.CENTRE.Orléans 
	"0371715N" : "33520212300030" , //CEMEA.Centre.Tours 
	"0360777Z" : "18360001400017" , //Centre de Formation.CCI de l'Indre.Châteauroux 
	"0450807H" : "24450006200017" , //CFA.AGGLOMERATION ORLEANAISE.Orléans 
	"0281041E" : "19280706300032" , //CFA AGRI DE L'EURE ET LOIR.Sours 
	"0360766M" : "19360017800068" , //CFA AGRI DE L'INDRE.Châteauroux 
	"0371436K" : "19370781700048" , //CFA AGRI DE L'INDRE ET LOIRE.Fondettes 
	"0371588A" : "19370781700050" , //CFA AGRI DE L'INDRE ET LOIRE.Amboise 
	"0371587Z" : "19370781700049" , //CFA AGRI DE L'INDRE ET LOIRE.Chinon 
	"0180847Y" : "19180585200081" , //CFA AGRI DU CHER.Le Subdray 
	"0180924G" : "19180585200082" , //CFA AGRI DU CHER.Saint-Amand-Montrond 
	"0410955R" : "19410018600049" , //CFA AGRI DU LOIR ET CHER.Blois 
	"0411045N" : "19410018600050" , //CFA AGRI DU LOIR ET CHER.Montoire-sur-le-Loir 
	"0411065K" : "19410018600051" , //CFA AGRI DU LOIR ET CHER.Vendôme 
	"0451463W" : "19450027800024" , //CFA AGRI DU LOIRET.Bellegarde 
	"0360548A" : "18360002200036" , //CFA.CM de l'Indre.Châteauroux 
	"0450809K" : "18450002300025" , //CFA.CM du Loiret.Orléans 
	"0410590U" : "18410002200021" , //CFA.CM LOIR ET CHER.Blois 
	"0370811F" : "18370002000021" , //CFA de la CMA d'Indre-et-Loire.Joué-lès-Tours 
	"0451602X" : "77551109000019" , //CFA de la Mouillère.Orléans 
	"0370825W" : "32570588700033" , //CFA de la Ville de Tours.Tours 
	"0410892Y" : "30804972500038" , //CFA DES TRANSPORTS.Vendôme 
	"0180755Y" : "30804972500036" , //CFA DU CHER.Bourges 
	"0450808J" : "25450246100018" , //CFA EST LOIRET.Montargis 
	"0333333Y" : "88888888888888" , //CFA Fictif.Orléans 
	"0280738A" : "30791852400017" , //CFA INTERPRO.Chartres 
	"0450805F" : "77551105800056" , //CFA PHARMA.Orléans 
	"0180886R" : "77551105800049" , //CFA PHARMA.Bourges 
	"0371270E" : "77551105800031" , //CFA PHARMA DE TOURS.Joué-lès-Tours 
	"0371515W" : "32187778900123" , //CFA Propreté INHNI Centre.Tours 
	"0451715V" : "35353902600024" , //CFA REGIONAL MFR CENTRE.Orléans 
	"0410860M" : "19410860100015" , //CLG.AUGUSTIN THIERRY.Blois 
	"0280957N" : "19280957200014" , //CLG.EMILE ZOLA.Châteaudun 
	"0281164N" : "24285254900110" , //CC DES PORTES DE PERCHE.La Loupe 
	"0180981U" : "19180825200024" , //CREPS DE LA REGION CENTRE.Bourges 
	"0180939Y" : "30804972500037" , //Ecole des métiers.Bourges 
	"0180865T" : "18180001200021" , //ECOLE HUBERT CURIEN.Bourges 
	"0281155D" : "34344998900023" , //Ecuries du Val de l'Eure.Nogent-sur-Eure 
	"0280706R" : "19280706300016" , //EPLEFPA DE CHARTRES.Sours 
	"0360050J" : "19360050900015" , //EREA.ERIC TABARLY.Châteauroux 
	"0280659P" : "19280659400011" , //EREA.FRANCOIS TRUFFAUT.Mainvilliers 
	"0451104F" : "19451104400019" , //EREA.SIMONE VEIL.Amilly 
	"0180877F" : "18180001200070" , //Estacom.Bourges 
	"0451583B" : "40875084200036" , //FORMASAT CFA Sport Animation Tourisme.Orléans 
	"0371734J" : "43906604400033" , //IPM DU SPORT.Tours 
	"0360857L" : "77551154600035" , //IRFF.Châteauroux 
	"0370781Y" : "19370781700014" , //LA.Fondettes 
	"0180585N" : "19180585200057" , //LEGTA. BOURGES LE SOLLIER.Le Subdray 
	"0360017Y" : "19360017800019" , //LEGTA.Châteauroux 
	"0410018X" : "19410018600015" , //LEGTA. VENDOME BLOIS MONTOIRE.Vendôme 
	"0450094H" : "19450094800048" , //LEGTA.LE CHESNOY.Montargis 
	"0451535Z" : "194500948000481" , //LEGTA.LES BARRES.Nogent-sur-Vernisson 
	"0180005H" : "19180005100010" , //LG.ALAIN FOURNIER.Bourges 
	"0370035M" : "19370035800024" , //LG.DESCARTES.Tours 
	"0360008N" : "19360008700012" , //LG.JEAN GIRAUDOUX.Châteauroux 
	"0280007F" : "19280007600015" , //LG.MARCEAU.Chartres 
	"0360002G" : "19360002000013" , //LG.ROLLINAT.Argenton-sur-Creuse 
	"0450042B" : "19450042700035" , //LGT.METIER-DURZY.Villemandeur 
	"0370038R" : "19370038200016" , //LGT.METIER-GRANDMONT.Tours 
	"0370016S" : "19370016800027" , //LGT.ALFRED DE VIGNY.Loches 
	"0370036N" : "19370036600019" , //LGT.BALZAC.Tours 
	"0450029M" : "19450029400013" , //LGT.BERNARD PALISSY.Gien 
	"0410959V" : "19410959100017" , //LGT.CAMILLE CLAUDEL.Blois 
	"0451526P" : "19457779700013" , //LGT.CHARLES PEGUY.Orléans 
	"0370037P" : "19370037400013" , //LGT.CHOISEUL.Tours 
	"0410017W" : "19410017800012" , //LGT.CLAUDE DE FRANCE.Romorantin-Lanthenay 
	"0450062Y" : "19450062500026" , //LGT.DUHAMEL DU MONCEAU.Pithiviers 
	"0280015P" : "19280015900019" , //LGT.EMILE ZOLA.Châteaudun 
	"0450040Z" : "19450040100014" , //LGT.EN FORET.Montargis 
	"0410002E" : "19410002000016" , //LGT.FRANCOIS PHILIBERT DESSAIGNES.Blois 
	"0451484U" : "19450978200018" , //LGT.FRANCOIS VILLON.Beaugency 
	"0281047L" : "19281047100024" , //LGT.FULBERT.Chartres 
	"0360024F" : "19360024400019" , //LGT.HONORE DE BALZAC.Issoudun 
	"0180007K" : "19180007700015" , //LGT.JACQUES COEUR.Bourges 
	"0371418R" : "19371418500017" , //LGT.JACQUES DE VAUCANSON.Tours 
	"0451462V" : "19451462600010" , //LGT.JACQUES MONOD.Saint-Jean-de-Braye 
	"0371417P" : "19371417700014" , //LGT.JEAN MONNET.Joué-lès-Tours 
	"0180024D" : "19180024200015" , //LGT.JEAN MOULIN.Saint-Amand-Montrond 
	"0370001A" : "19370001000013" , //LGT.LEONARD DE VINCI.Amboise 
	"0180006J" : "19180006900012" , //LGT.MARGUERITE DE NAVARRE.Bourges 
	"0370039S" : "19370039000019" , //LGT.PAUL-LOUIS COURIER.Tours 
	"0360009P" : "19360009500015" , //LGT.PIERRE ET MARIE CURIE.Châteauroux 
	"0450049J" : "19450049200013" , //LGT.POTHIER.Orléans 
	"0280019U" : "19280019100012" , //LGT.ROTROU.Dreux 
	"0450782F" : "19450782800011" , //LGT.VOLTAIRE.Orléans 
	"0411064J" : "78818245900040" , //Ligue du Centre de Tennis.Blois 
	"0370040T" : "19370040800019" , //LP LYC METIER.ALBERT BAYET.Tours 
	"0410031L" : "19410031900038" , //LP LYC METIER.ANDRE AMPERE.Vendôme 
	"0371211R" : "19371211400019" , //LP LYC METIER.BEAUREGARD.Château-Renault 
	"0360003H" : "19360003800015" , //LP LYC METIER.CHATEAUNEUF.Argenton-sur-Creuse 
	"0370888P" : "19370888000011" , //LP LYC METIER.D ARSONVAL.Joué-lès-Tours 
	"0280864M" : "19280864000010" , //LP LYC METIER.ELSA TRIOLET.Lucé 
	"0371258S" : "19371258500010" , //LP LYC METIER.EMILE DELATAILLE.Loches 
	"0370032J" : "19370032500023" , //LP LYC METIER.FRANCOIS CLOUET.Tours 
	"0451304Y" : "19451304000015" , //LP LYC METIER.FRANCOISE DOLTO.Olivet 
	"0450064A" : "19450064100015" , //LP LYC METIER.GAUDIER-BRZESKA.Saint-Jean-de-Braye 
	"0280925D" : "19280925900018" , //LP LYC METIER.GILBERT COURTOIS.Dreux 
	"0371099U" : "19371099300018" , //LP LYC METIER.HENRI BECQUEREL.Tours 
	"0360026H" : "19360026900016" , //LP LYC METIER.JEAN D ALEMBERT.Issoudun 
	"0180009M" : "19180009300012" , //LP LYC METIER.JEAN DE BERRY.Bourges 
	"0450750W" : "19450750500015" , //LP LYC METIER.JEAN DE LA TAILLE.Pithiviers 
	"0280700J" : "19280700600015" , //LP LYC METIER.JEAN FELIX PAULSEN.Châteaudun 
	"0180025E" : "19180025900019" , //LP LYC METIER.JEAN GUEHENNO.Saint-Amand-Montrond 
	"0180010N" : "19180010100013" , //LP LYC METIER.JEAN MERMOZ.Bourges 
	"0360011S" : "19360011100010" , //LP LYC METIER.LES CHARMILLES.Châteauroux 
	"0450066C" : "19450066600020" , //LP LYC METIER.MAL LECLERC DE HAUTECLOCQUE.Saint-Jean-de-la-R 
	"0370054H" : "19370054900010" , //LP LYC METIER.MARTIN NADAUD.Saint-Pierre-des-Corps 
	"0280022X" : "19280022500026" , //LP LYC METIER.MAURICE VIOLLETTE.Dreux 
	"0450786K" : "19450786900015" , //LP LYC METIER.PAUL GAUGUIN.Orléans 
	"0281021H" : "19281021600015" , //LP LYC METIER.SULLY.Nogent-le-Rotrou 
	"0410718H" : "19410718100019" , //LP LYC METIER.VAL DE CHER.Saint-Aignan 
	"0180823X" : "19180823700017" , //LP LYC METIER.VAUVERT.Bourges 
	"0370771M" : "19370771800014" , //LP LYC METIER.VICTOR LALOUX.Tours 
	"0451442Y" : "19451442800029" , //LP.CHATEAU BLANC.Châlette-sur-Loing 
	"0410036S" : "19410036800019" , //LP.DENIS PAPIN.Romorantin-Lanthenay 
	"0280009H" : "19280009200012" , //LP.DU BATIMENT PH DE L ORME.Lucé 
	"0370053G" : "19370053100034" , //LP.GUSTAVE EIFFEL.Tours 
	"0180042Y" : "19180042400019" , //LP.JACQUES COEUR.Bourges 
	"0371123V" : "19371123100012" , //LP.JEAN CHAPTAL.Amboise 
	"0451067R" : "19451067300016" , //LP.JEAN LURCAT.Fleury-les-Aubrais 
	"0180026F" : "19180026700012" , //LP.JEAN MOULIN.Saint-Amand-Montrond 
	"0450043C" : "19450043500020" , //LP.JEANNETTE VERDIER.Montargis 
	"0371100V" : "19371100900012" , //LP.JOSEPH CUGNOT.Chinon 
	"0451037H" : "19451037600024" , //LP.MARGUERITE AUDOUX.Gien 
	"0410832G" : "19410832000020" , //LP.SONIA DELAUNAY.Blois 
	"0370878D" : "19370878100029" , //LPA.AMBOISE.Amboise 
	"0450027K" : "19450027800016" , //LPA.DE BEAUNE LA ROLANDE.Beaune-la-Rolande 
	"0370794M" : "19370859100014" , //LPA.DE CHAMBRAY-LES-TOURS.Chambray-lès-Tours 
	"0410626H" : "194100186000151" , //LPA.DE MONTOIRE.Montoire-sur-le-Loir 
	"0280021W" : "19280021700015" , //LPO LYC METIER.EDOUARD BRANLY.Dreux 
	"0180035R" : "19180035800019" , //LPO LYC METIER.EDOUARD VAILLANT.Vierzon 
	"0450822X" : "00000000000001" , //LPO LYC METIER.FICTIF.Orléans 
	"0180036S" : "19180036600012" , //LPO LYC METIER.HENRI BRISSON.Vierzon 
	"0410899E" : "19410899900013" , //LPO LYC METIER.HOTEL.ET TOURISME VAL DE LOIRE.Blois 
	"0280044W" : "19280044900022" , //LPO LYC METIER.JEHAN DE BEAUCE.Chartres 
	"0180008L" : "19180008500018" , //LPO LYC METIER.PIERRE-EMILE MARTIN.Bourges 
	"0280036M" : "19280036500012" , //LPO LYC METIER.REMI BELLEAU.Nogent-le-Rotrou 
	"0281077U" : "19281056200012" , //LPO LYC METIER.SILVIA MONFORT.Luisant 
	"0410001D" : "19410001200013" , //LPO.AUGUSTIN THIERRY.Blois 
	"0450051L" : "19450051800015" , //LPO.BENJAMIN FRANKLIN.Orléans 
	"0360043B" : "19360043400016" , //LPO.BLAISE PASCAL.Châteauroux 
	"0370009J" : "19370009300019" , //LPO.FRANCOIS RABELAIS.Chinon 
	"0360019A" : "19360019400016" , //LPO.GEORGE SAND.La Châtre 
	"0450050K" : "19450050000013" , //LPO.JEAN ZAY.Orléans 
	"0451483T" : "19451483200014" , //LPO.MAURICE GENEVOIX.Ingré 
	"0360005K" : "19360005300014" , //LPO.PASTEUR.Le Blanc 
	"0410030K" : "19410030100010" , //LPO.RONSARD.Vendôme 
	"0410629L" : "194100186000152" , //LYCEE HORTICOLE.Blois 
	"0451565G" : "77551109000020" , //Lycée Privé de la Mouillère.Orléans 
	"0370983T" : "77531648200014" , //MFEO.Sorigny 
	"0371686G" : "77524634100017" , //MFR.Bourgueil 
	"0451693W" : "77544864000018" , //MFR.Chaingy 
	"0451694X" : "77547038800015" , //MFR.Gien 
	"0371710H" : "77527666000021" , //MFR.Loches 
	"0371723X" : "77531579900020" , //MFR.Noyant-de-Touraine 
	"0411059D" : "77541137400017" , //MFR.Saint-Firmin-des-Prés 
	"0451691U" : "30721264700019" , //MFR.Sainte-Geneviève-des-Bois 
	"0371711J" : "77531640900017"  //MFR VAL DE L'INDRE.Sorigny 
};


/**
 * Les identifiants de service XITI en fonction de leurs libelles.
 * (Nomenclature voire doc CDC)
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
 * les services donnés par les contextes de portlet:
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
 * Les services déduits de la référence des ancres:
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
 * Autres déduction : pour moodle par exemple.
 */
InfoENT4esciti.txt2Service={
	"calendar" : "Gestion_Temps",
	"message" : "Courrier_Electronique",
	"files" : "Stockage_Partage",
	"forum" : "Travail_Collaboratif",
	"blog" : "Travail_Collaboratif",
	"badge" : "Gestion_Competences",
	"etherpad" : "Travail_Collaboratif",
	"/nag"  : "Gestion_Temps", //horde
	"/mmemo" : "Page_ENT", //horde
	"/kronolith" : "Gestion_Temps" //hord
}


/**
 * 
 * Les paramètres variable.
 * 
 */ 
 InfoENT4esciti.parametre={
		"%ancrePortail" : "a",
		"%ancrePortailMobile" : "a",
		"%portletPortail" : ".up-portlet-wrapper",
		"%portletPortailMobile" : "div.portal"
 }
/**
 * Sélecteurs CSS associés aux services xiti.
 * /
InfoENT4esciti.onClickSelector2service={
		".createListeDialog button" :  "Courrier_Electronique", // en test console.log
		"tr.email-row a" : "Courrier_Electronique",
		".sympaTopLevel #esupsympaAdminTabs li a" : "Courrier_Electronique",
		".sympaTopLevel a.mailLink" : "Courrier_Electronique"
}

/******************************************************************
 * 
 * 		FIN du PARAMÉTRAGE
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
 * Prend le numéro d'établissement (codé pour le cookie, avec l'index de collectivité),
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
 * Si la structure n'est pas trouvée on vide la structure du  cookie.
 * Si elle est vide en paramètre on garde celle du cookie.
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
 * Fixe l'établissement par l'uai.
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
 * Fixe le service XITI et fait l'appele au script XITI
 * ne doit donc être utilisé qu'après avoir renseigné toutes les autres infos. 
 * Vérifie que les info xiti sont complétes; 
 * si ok initialise les variables XITI appelle leur script.
 * sinon on ne marque pas.
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
 * Fait l'appel  le service XITI en fonction d'une liste de mot.
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
 * Fait l'appel XITI en cherchant le service correspondant au text.
 * il y a correspondance si text contient une clef de mot2service.
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
							// si la clee est dans la référence on marque:
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
