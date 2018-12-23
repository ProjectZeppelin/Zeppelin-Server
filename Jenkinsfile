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
		sh 'sleep 6 # make the service wait for a database connection this is a bug in the docker version on macos'
            }
        }
        stage('Test') {
            steps {
                sh 'curl 192.168.1.122:3002/menu'
		            sh 'curl 192.168.1.122:3002/language'
            }
        }
    }
}

