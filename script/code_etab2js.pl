#!/usr/bin/perl 

# construit les tables  javascript  uai2etab et siren2etab 
# a partir des fichiers contenant la correspondance uai=>noXiti et uai=>siren
#usage par exemple : code_etab2js.pl 1 code-etab.csv uai2siren.txt   > table.js
#

$collectivite = shift;

print "$collectivite \n";





while (<>) {
			# on recupere les uai associe au numero d'etab XiTi
	if (/,([^,]+),([^,]+),(\d+),/) {
#			print "\t\"$2\" : \"$3\" , //$1 \n" ; 
			$uai[$3] = $2;
			$nom[$3] = $1;
	}
	
		# on recupere les sirens par uai 
	if (/^(\w+)\t*(\d+)$/) {
			$uai2siren{$1}=$2;
	}
}

	# cree la table des uai => siren en XiTi
print 'InfoENT4esciti.uai2siren = {',"\n";
	for ($i = 1 ; $i < @uai ; $i++){
		$luai = $uai[$i];
		$siren = $uai2siren{$luai};
		if ($siren) {
				print "\t\"$luai\" : \"$siren\" , //$nom[$i] \n" ;
		}
	}
	
print '};' , "\n\n";

# creer la table siren => etab XiTi en js
print 'InfoENT4esciti.siren2etab = {',"\n";

for ($i = 0 ; $i < @uai ; $i++){
	if ($i) {
		$siren = $uai2siren{$uai[$i]};
		if ($siren) {
			print "\t\"$siren\" : [$i, $collectivite]  , //$nom[$i] \n" ;
		} 
	}
}

print '};',"\n\n";
