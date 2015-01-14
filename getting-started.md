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

If you don't want to install any2api-cli locally on your machine, you can go with one of the following alternatives.



<a name="any2api-cli-docker"></a>
## Alternative: Run any2api-cli inside Docker container

Instead of running any2api-cli locally, you can run it in a Docker container (prebuilt):

    docker run -ti any2api/any2api-cli

Alternatively, you may build a fresh container and run it:

    docker build -t any2api/any2api-cli github.com/any2api/any2api-cli
    docker run -ti any2api/any2api-cli

With this everything runs safely in an isolated container.



<a name="any2api-cli-vagrant"></a>
## Alternative: Run any2api-cli using Vagrant

Yet another way to run any2api-cli is using Vagrant. After cloning the [any2api-cli](https://github.com/any2api/any2api-cli) repository, run the following commands:

    vagrant up
    vagrant ssh

From now everything runs safely in a dedicated virtual machine.



## Generate API implementation for a Chef cookbook

Scan Chef cookbook and generate API spec:

    export COOKBOOK='mysql'
    export VERSION='5.6.1'
    any2api -o ./mysql-cb scan https://supermarket.chef.io/cookbooks/$COOKBOOK/versions/$VERSION/download

Generate API implementation:

    any2api -o ./mysql-api-impl gen ./mysql-cb

Prepare runtime for API implementation locally:

    cd ./mysql-api-impl
    npm run prepare-runtime
    
Or build a Docker container to run the API implementation:

    cd ./mysql-api-impl
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
