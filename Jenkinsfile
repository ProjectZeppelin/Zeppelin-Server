pipeline {
    agent any
    stages {
        stage('setup') { 
            steps {
                sh 'cd /home/zeus/Projects/Zeppelin/Zeppelin-Web; docker-compose up --build -d'
            }
        }
        stage('Test') {
            steps {
                sh 'curl localhost:3001/menu'
		sh 'curl curl localhost:3001/language'
            }
        }
        stage('Shutdown') { 
            steps {
                sh 'cd /home/zeus/Projects/Zeppelin/Zeppelin-Web;docker-compose kill angular; docker-compose kill db; docker-compose kill express' 
            }
        }
    }
}

