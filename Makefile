# Makefile

up:
	docker-compose up -d

down:
	docker-compose down

restart:
	docker-compose down && docker-compose up -d

logs:
	docker-compose logs -f

ps:
	docker-compose ps

build:
	docker-compose build

exec:
	docker-compose exec app /bin/sh

stop:
	docker-compose stop

start:
	docker-compose start

clean:
	docker-compose down -v --remove-orphans
