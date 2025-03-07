pipeline {
    agent any
    tools {
        maven 'maven3.9.9'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'jp-jenkinsfile',  url: 'git@bitbucket.org:xploregroup/qurio-service.git'
            }
        }

        stage('Build, Test & Sonarqube Scan') {
            steps {
                sh 'chmod +x ./mvnw'
                withSonarQubeEnv(installationName: 'sq') {
                    sh './mvnw clean package org.sonarsource.scanner.maven:sonar-maven-plugin:5.0.0.4389:sonar'
                }
              }
        }

        stage('Docker Build') {
            steps {
                script {
                    def dockerHubCredentialsId = 'a3ef8e6c-2a4c-4030-82ac-1f1126b1fc71'

                    sh "docker build -t janpeterd/qurio-service:latest ."

                    withCredentials([usernamePassword(credentialsId: dockerHubCredentialsId, usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
                        sh "docker login -u \$DOCKERHUB_USERNAME -p \$DOCKERHUB_PASSWORD"
                        sh "docker push janpeterd/qurio-service:latest"
                    }
                }
            }
        }
    }
}
