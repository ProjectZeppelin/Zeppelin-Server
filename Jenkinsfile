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
		sh 'sleep 5 # make the service wait for a database connection this is a bug in the docker version on macos'
            }
        }
        stage('Test') {
            steps {
                sh 'curl localhost:3002/menu'
		            sh 'curl localhost:3002/language'
            }
        }
    }
}

