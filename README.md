# Party Starter Server Application

# Setting Up Dev Environment

## Install NodeJS

https://nodejs.org/en/download/

## Install MongoDB

### MacOS

https://zellwk.com/blog/install-mongodb/

### Windows

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

### Linux

https://docs.mongodb.com/manual/administration/install-on-linux/

## Install MongoDB Compass

This is a workbench tool for working with the database.

https://docs.mongodb.com/compass/master/install/

## Install Docker

### MacOS

https://docs.docker.com/docker-for-mac/install/

### Windows

https://docs.docker.com/docker-for-windows/install/

## Install GIT

https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

# Building and running the app

After cloning the repository install the node packages:

```bash
npm install
```

Containerize the app for Docker:

```bash
docker-compose build
```

Run the app:

```bash
docker-compose up
```

Stop the app:

```bash
docker-compose down
```

# Connecting with MongoDB Compass

To view your database changes and troubleshoot issues launch MongoDB Compass from your programs list.

Paste this into the connection string field:

```
mongodb://127.0.0.1:27017
```