[![Project Zeppelin](https://raw.githubusercontent.com/MattZK/ProjectZeppelin/master/src/img/project-zeppelin-readme.png)](https://mattzk.github.io/ProjectZeppelin)

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
![Stage](https://img.shields.io/badge/Stage-Beta-orange.svg)
![Version](https://img.shields.io/badge/Version-1.0-green.svg)
![Required](https://img.shields.io/badge/Requires-Docker-orange.svg)
![Required](https://img.shields.io/badge/Requires-DockerCompose-orange.svg)
![Server](https://img.shields.io/badge/Server-JS-green.svg)
# Zeppelin Server
Backend with a rest API to supply language/menu information to the frontend 

*Languages used:  JS, YAML*


## Introduction

> Project zeppelin Server is the server side code for project zeppelin. It is written in Javascript using node with mongodb as the database.
Docker-compose is used for easy deployment

## Launch server

> Install docker/docker compose https://docs.docker.com/install/linux/docker-ce/ubuntu/ (for ubuntu)

> To launch the server clone https://github.com/ProjectZeppelin/Zeppelin-Server.git

> Afterward you cd into the directory and build the image + launch it

```
docker-compose build
docker-compose up -d express db
```

> This will launch our API exposed to the port specified in the docker-compose.yml file to change the port use this

```
express: 
  build: node
  restart: always
  ports:
    - "6000:3000"  # change 6000 to the desired port
  links:
    - db
```

> In the frontend change the IP and port to match your settings
If you have problems connecting to the database try to restart the express server
```
docker-compose restart express
```
If that didn't help try creating a collection named test in the database conect using localhost:27000 specified in the docker-compose.yml file


## change data

> If you wish to change the data containing in any frontend you will have to either update the database or change the default values in the source code located in node/var/* and node/server.js

> Adding a new languages is as simple as adding a new file in node/var/language_name.js
Use this template

```
(function () {
  let Data = {
     title: "Language_name",
     data: [  
    {
          title: "Template",
          subtitle: "Temp",
          gist: "https://aplearning.xyz/zeppelin/snippets/?snippet=F0xedb/<GIST.GITHUB.COM/LINK_TO_DATA>"
        },
     ]   
}

  module.exports.data = Data;
}());
```

> Don't forget to require the language in node/var/enviroments.js
Lastly you will have to add the data in the database instance
this is done in the file node/server.js
in the function saveDataFirstTime() ;

> First add a new menu entry 

```
let languageMenuItem = new Menu(env.data.language_menu);
  db.saveUnique('menu', languageMenuItem, {
    title: languageMenuItem.title
  });
```

>Than add the language data to the language collection in the database

```
let language = new Language(env.data.language);
  db.saveUnique('languages', language, {
    title: language.title
  });
```

> If that all is done you will have to restart the service in order for the changes to be written to the database don't forget to rebuild the image via
```
docker-compose kill express
docker-compose up -d --build express
```

> Note that when you have already made the language that the new changes won't take effect because they already exist in the database. You will either have to change the database or delete the entry.
For more info visit https://docs.mongodb.com/?_ga=2.114533582.898599719.1546866433-417632608.1546866433

## Jenkins

> If you wish to integrate jenkins with this tool you can do so by making a new Jenkins pipeline project
Fork this repo for your own development and add a github webhook for auto building.
Our current Jenkinsfile only check for a working setup. It doesn't deploy anythin yet you will have to supply your own stage
Something like this


```
pipeline {
    agent {
        docker {
            image 'server_express' 
            args '-p 3002:3000' 
        }
    }
    stages {
        stage('setup') { 
            steps {
                sh 'node server.js &> /dev/null &'
            }
        }
        stage('Test') {
            steps {
                sh 'curl 0.0.0.0:3000/menu' # curl would return a error if the response trows an error and thus break the build
                sh 'curl 0.0.0.0:3000/language'
            }
        }
        # deploy our backend if no error happend and our curl was succesfull
        stage('deploy') { 
            steps {
                sh 'scp user@localhost/* user@server/deployPath'
                sh 'rebuild_and_restart_server.sh'
            }
        }
    }
}

```

> Don't forget rebuild the docker image before launching the Jenkinsfile

```
docker build -t server_express . # . is the location of the Dockerfile
```



