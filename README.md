
# Criaçao do Projeto
nodejs -v
sudo npm i -g @adonisjs/cli
adonis new ecommerce-realtime --api-only
adonis serve --dev
code .

# Adonis API application
This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.
1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

# Inicializar o Docker
To initialize the "base" filesystem, run:
$ sudo service docker start # Ubuntu/Debian
$ sudo service docker stop
$ sudo rm -rf /var/lib/docker
$ sudo service docker start

$ docker run --name florencantoMysqlDb -e MYSQL_ROOT_PASSWORD=ecommercert -d mysql:8.0
$ docker run -it --network florencantoMysqlDb--rm mysql mysql -hsome-mysql -uexample-user -p

https://hub.docker.com/r/linuxserver/mysql-workbench
docker create \
  --name=mysql-workbench \
  -e PUID=1000 \
  -e PGID=1000 \
  -e TZ=Europe/London \
  -p 3000:3000 \
  -v /path/to/config:/config \
  --cap-add="IPC_LOCK" \
  --restart unless-stopped \
  linuxserver/mysql-workbench

  eu podia usar o docker as decidi usar o banco online q ja tenho hospedado

# DEBUG
