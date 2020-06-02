How to use the docker-compose file.

### Setup

1. You need to install docker and log in with your dockeraccount ( You need no special access)
2. Run the command `docker-compose up`
3. That will create all the folders you need. When its done `Ctrl+c` to kill it
4. Now a folder called Neo4j in your home directory have been created, were you can add your databases.

### Work 

5. Now and forever you start Neo4j with `docker-compose up -d`
(As default graph.db will start, to point to another db
run eg: `db=movie.db docker-compose up -d`)
6. When you want to stop it you run `docker-compose down`

Extra: if you want to get feedback from neo4j enterprise only run `docker-compose up`, then its not in detached-mode. And your console will be occupied until you kill the docker-instance with `ctrl+c`


Have fun!