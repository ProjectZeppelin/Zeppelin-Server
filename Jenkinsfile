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
		sh 'sleep 6 # make the service wait for a database connection this is a bug in the docker version on macos'
            }
        }
        stage('Test') {
            steps {
                sh 'curl 0.0.0.0:3000/menu'
		            sh 'curl 0.0.0.0:3000/language'
            }
        }
    }
}

