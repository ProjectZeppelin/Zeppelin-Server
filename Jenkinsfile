pipeline {
    agent {
        docker {
            image 'server_express' 
            args '-p 3001:3000' 
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
                sh 'curl localhost:3001/menu'
		            sh 'curl curl localhost:3001/language'
            }
        }
    }
}

