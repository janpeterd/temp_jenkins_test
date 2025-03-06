pipeline {
    agent any
    tools {
        maven 'maven3.9.9'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'jp-jenkinsfile', credentialsId: '99f2f311-27c0-4a12-9bae-6ae66afe1ac9', url: 'git@bitbucket.org:xploregroup/qurio-service.git'
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
                    def dockerHubCredentialsId = 'd270cbff-acb9-4096-a6d9-8ad05ba3442e'

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
