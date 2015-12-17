#!/usr/bin/perl -p -i.org

# script pour marqué les pages moodle.
# prend en parametre la ou les pages a marquer
# typiquement les pages contenant un <body></body> dans theme/.../layout/*.php
# 

BEGIN { $dejaFait=0 };
if (/esciti/) {
	$dejaFait=1;
}
#print stderr "$dejaFait\n";
if (m[</body>] and not $dejaFait) {
	print "\n\t" , '<script  type="text/javascript" src="/esciti/js/esciti.js"></script>';
	print "\n\t", '<script  type="text/javascript">';
	print "\n\t\t", "if (typeof  InfoENT4esciti != 'undefined') {InfoENT4esciti.callById('body', 'Parcours_Pedagogiques');}";
	print "\n\t</script>\n";
	$dejaFait=0;
}


