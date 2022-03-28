## Usage

To get started, make sure you have [Docker installed](https://docs.docker.com/docker-for-mac/install/) on your system, and then clone this repository.

Next, navigate in your terminal to the directory you cloned this, and spin up the containers for the web server by running `docker-compose up -d --build site`.

- **nginx** - `:81`
- **mysql** - `:3307`
- **php** - `:9000`


Additional containers are included that handle Composer and Artisan commands *without* having to have these platforms installed on your local computer. Use the following command examples from your project root, modifying them to fit your particular use case.

- `docker-compose run --rm composer update`
- `docker-compose run --rm artisan migrate` 


## Setup

## .env Copy
run the below commands from the root folder of the project using CLI

`cp .env.example .env`

## Migrate the DB schema and Seed the tables

`docker-compose run --rm artisan migrate` 
`docker-compose run --rm artisan db:seed` 

## Users Available

`admin` is the admin user.

Normal users are `john`, `jane`, `ronald`,`sam`,`susie`

All users default password is  `123456`

## Access URL

`http://localhost:81/login`

If you want to change the port that is running on docker feel free to change that in the docker yml file , remember to chnage the `.env` CROSS_ORIGIN param accordingly.

Login with admin details and create the trips , 10 cities already seeded so it can be available in the admin login.

## Front End

Front end of the application is built with Angular the source code can be found in the front_end folder.

## Access The CLI

docker ps

docker exec -it <redis container ID> redis-cli 

## MYSQL Access 

docker exec -it <postgres container ID> bash
root@containerID:/# mysql -u root -p

## Technology stack

PHP - 8.1.4 (Lumen Framework)
Angular - 12.1.1
MySQL - 5.7.9



