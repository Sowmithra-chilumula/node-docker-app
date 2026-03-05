pipeline {
    agent any

    stages {

        stage('Checkout from GitHub') {
            steps {
                git branch: 'master',
                    url: 'https://github.com/Sowmithra-chilumula/node-docker-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                docker build -t node-docker-app:${BUILD_NUMBER} .
                docker tag node-docker-app:${BUILD_NUMBER} Sowmithra-chilumula/node-docker-app:${BUILD_NUMBER}
                '''
            }
        }

        
        
        
        
        
        stage('Create container') {
            steps {
                sh 'docker run -d -p 3000:8080 laxmi916/node-docker-app:${BUILD_NUMBER}'
            }
        }



    }
}
