## Usage

To get started, make sure you have [Docker installed](https://docs.docker.com/docker-for-mac/install/) on your system, and then clone this repository.

Next, navigate in your terminal to the directory you cloned this, and spin up the containers for the web server by running `docker-compose up -d --build site`.

- **nginx** - `:81`
- **mysql** - `:3307`
- **php** - `:9000`


Three additional containers are included that handle Composer, NPM, and Artisan commands *without* having to have these platforms installed on your local computer. Use the following command examples from your project root, modifying them to fit your particular use case.

- `docker-compose run --rm composer update`
- `docker-compose run --rm npm run dev`
- `docker-compose run --rm artisan migrate` 


# Setup

## .env Copy
run the below commands from the root folder of the project using CLI
`cp .env.example .env`

## Migrate the DB schema and Seed the tables

`docker-compose run --rm artisan migrate` 
`docker-compose run --rm artisan db:seed` 

## Users Available

`admin` is the admin user.
`john`, `jane`, `ronald`,`sam`,`susie` all users default password is  `123456`

## Access URL

`http://localhost:81/login`
If you want to change the port that is running on docker feel free to change that in the docker yml file , remember to chnage the `.env` CROSS_ORIGIN param accordingly.

Login with admin details and create the trips , 10 cities already seeded so it can be available in the admin login.

## Access The CLI

docker ps

docker exec -it <redis container ID> redis-cli 

## MYSQL Access & Export Import

docker exec -it <postgres container ID> bash
root@containerID:/# mysql -u root -p

