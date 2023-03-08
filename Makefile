DOCKER_COMMAND ?= docker
DOCKER = ${DOCKER_COMMAND} $(1)

build-db:
	@$(call DOCKER, build -t api/db db)

start-db:
	@$(call DOCKER, run \
	    -d \
	    --rm \
	    -p 3306:3306 \
	    -e "MARIADB_RANDOM_ROOT_PASSWORD=true" \
	    --name "db_container" \
	    api/db \
	)

start: build-db start-db

stop:
	@$(call DOCKER, stop db_container)