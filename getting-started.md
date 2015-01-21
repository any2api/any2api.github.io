---
layout: page
title: Install & Get started
weight: 5
---

<a name="any2api-cli-npm"></a>
## Install any2api-cli on your machine

Prerequisites:

* Node.js &ge; 0.10 (or io.js &ge; 1.0)
* Ruby (for some scanners to produce better results)
* Optional: Docker (if you want to run generated APIs in a container)
* Optional: Vagrant (if you want to run generated APIs in a dedicated VM)

Install any2api-cli using npm:

    npm install any2api-cli -g

Check if installation was successful by showing help:

    any2api --help

Install all available modules, i.e., scanners, invokers, and generators:

    any2api install scanner all
    any2api install invoker all
    any2api install generator all

If you don't want to install any2api-cli locally on your machine, you can go with one of the following alternatives. Otherwise continue with [generating your first API implementation](#generate).



<a name="any2api-cli-docker"></a>
### Alternative: Run any2api-cli inside Docker container

Instead of running any2api-cli locally, you can run it in a Docker container (prebuilt):

    docker run -ti any2api/any2api-cli

Alternatively, you may build a fresh container and run it:

    docker build -t any2api/any2api-cli github.com/any2api/any2api-cli
    docker run -ti any2api/any2api-cli

From now everything runs safely in an isolated container.
**Caveat:** *With this approach you cannot run a generated API implementation in a separate container or virtual machine immediately from the container you are currently working in. Yes, there is a workaround to run containers in containers ([Docker-in-Docker](https://github.com/jpetazzo/dind)), but actually this is not necessary for reasons of isolation because you are running everything already in an isolated environment.*



<a name="any2api-cli-vagrant"></a>
### Alternative: Run any2api-cli using Vagrant

Yet another way to run any2api-cli is using Vagrant. After cloning the [any2api-cli](https://github.com/any2api/any2api-cli) repository, run the following commands:

    vagrant up
    vagrant ssh

From now everything runs safely in a dedicated virtual machine.
**Caveat:** *With this approach you cannot immediately run a generated API implementation in a separate virtual machine immediately from the virtual machine you are currently working in. There are workarounds available, but performance issues may occur. However, this is not necessary for reasons of isolation because you are running everything already in an isolated environment.*



<a name="generate"></a>
## Generate API implementation for a Chef cookbook

Scan Chef cookbook and generate API spec:

    any2api -o ./mysql-cb scan https://supermarket.chef.io/cookbooks/mysql/versions/5.6.1/download

Generate API implementation:

    any2api -o ./mysql-api-impl gen ./mysql-cb

Prepare runtime for API implementation locally:

    cd mysql-api-impl
    npm run prepare-runtime
    
Or build a Docker container to run the API implementation:

    cd mysql-api-impl
    docker build -t mysql-api-impl .
    docker run -tiP mysql-api-impl bash



## Test and start generated API implementation

Test API implementation (locally or in container):

    npm test

Start API implementation (locally or in container):

    npm start

Or directly run the Docker container:

    docker run -dP mysql-api-impl

The container is now running as a background process.

Alternatively, you can use Vagrant:

    vagrant up

The API implementation is now running in a dedicated virtual machine.



## Share API implementation

The directory `mysql-api-impl` contains the complete API implementation (self-contained), so you can easily store and share it as you wish. If you are using Docker, you can push the generated API implementation to [Docker Hub](https://hub.docker.com), so others can just pull the container and use it without knowing anything about any2api:

    docker push <yourname>/mysql-api-impl

Or even better: you can use [automated builds](http://docs.docker.com/docker-hub/builds) by committing the API implementation to a GitHub or Bitbucket repository and linking it with Docker Hub. With each commit a fresh container image gets built on Docker Hub automatically. This approach also improves the transparency because users can easily check all the code of the generated API implementation before using it.

If you don't want to share the API implementation, but keep it running locally on your machine and just make the API endpoint available for someone to use, check out [Vagrant Share](http://docs.vagrantup.com/v2/share).
