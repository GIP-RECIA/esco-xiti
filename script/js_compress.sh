#!/bin/bash
path=`dirname $0`
src=$path/../src
cd $src;
for jsFile in  esciti*.js ; do
	grep -v 'console.log' $jsFile | java -jar ../script/yuicompressor*.jar --type 'js'  > ../js/$jsFile
done;
