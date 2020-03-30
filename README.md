# Node_JS_Application

Progressive Web app With  Express server and NodeJS with Docker container 


Progressive web app using Vanilla JS, HTML, Bootstrap, CSS
Implementation of PWA

Name : Reetesh Kumar
Usn : 1RZ18MCA21

Steps : 

    • Install the NPM Modules in the working folder using (cmd : npm install)

// Running the application we need to create the server that can be create using the ExpressJS and running the nodejs file.
	
	>>> node sever.js

#The server can be created but it wont work without the localhost, we need something to run it in offline mode.
#The node server will work in the present system only as source code is available in the same system, we need something to make it work in other systems too, that can be done by creating the
dockerizing the cnontainer.
#We need Docker to Dockerize the container.

Docker Installation :

	# Update the system before installing Docker
		apt-get update
	# Now install Docker
		apt-get install docker-ce
	#Note : Sometimes you need to start the docker, use this command to start
		systemctl start docker

Docker-compose

	# install the docker-compose using the following command
		apt-get install docker-compose
	#to check the versions of the docker and docker-compose
    		docker --version
    		docker-compose --version
Building Docker Image

	docker build -t <imagename:version>
	>> docker build -t node-js-app:latest

Running Docker Container

	docker run -it -d -p 5000:9005 node-js-app:latest
	# 9005 is the default port number for the docker file

Zipping the Docker Image

	docker save o docker_image_node.tar nodejs-app
Loading Docker Image
	
	docker load -i docker_image_node.tar

Docker Commands
	
	To check docker version
		docker --version
	To check running docker images
		>>> docker images 
	To check the Docker processes
		>>> docker ps
	To stop a running process
    		>>> docker stop <docker-image-name>
	To build a docker image
		docker build -t <image-name>


Topics Covered

	Introduction to Progressive Web App
	Accelerated Mobile Pages
	AMP vs PWA vs Native Apps
	PWA Advantages
	Working of service worker
	Web Manifest file
	Creation of mainifest file
	Working with the JSON
	DOM and service worker thread
	Life cycle of service worker
	Audit with lighthouse tool
	Web app to device home screen
	service worker fetch event
	Getting caching assets
