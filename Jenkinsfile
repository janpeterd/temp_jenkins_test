pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'jp-jenkinsfile',  url: 'https://github.com/janpeterd/temp_jenkins_test.git'
            }
        }

        stage('Docker Build') {
            steps {
                script {
                    def dockerHubCredentialsId = 'a3ef8e6c-2a4c-4030-82ac-1f1126b1fc71'

                    sh "docker build -t janpeterd/qurio-ui:latest ."

                    withCredentials([usernamePassword(credentialsId: dockerHubCredentialsId, usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
                        sh "docker login -u \$DOCKERHUB_USERNAME -p \$DOCKERHUB_PASSWORD"
                        sh "docker push janpeterd/qurio-ui:latest"
                    }
                }
            }
        }
    }
}
