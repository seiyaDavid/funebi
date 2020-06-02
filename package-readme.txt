What Is This?
-------------

This archive contains:
1) The Neo4j Bloom plugins (.jar files) for Neo4j server which store Perspectives
   in the Neo4j database and enable sharing with multiple users. The plugin also
   hosts the Bloom web browser client on the Neo4j server itself.
2) The Bloom web application asset bundle (.zip file) for hosting it from an
   independent web server.


How Do I Use It?
----------------

The Bloom plugin (.jar file) to use depends on your Neo4j server version. Use the
3.x jar file for Neo4j 3.x and the 4.x jar file for Neo4j 4.x. The plugin needs
to be installed in the plugins/ directory of your Neo4j database instance(s). There
are also a number of configuration parameters that need to be set depending on what
features of the plugin you want to use. The plugin will also need a license file
to work. For details about these settings, refer to the Neo4j Bloom documentation
at https://neo4j.com/docs/#bloom.


In case you want to host Neo4j Bloom from an independent web server
-------------------------------------------------------------------

The web application asset bundle (the .zip file) can be hosted with 
a web server of your choice. You will also need to edit the file discovery.json
to point to the Neo4j database instance you will be using. Refer to Neo4j Bloom
documentation at https://neo4j.com/docs/#bloom for details about editing the file.

