pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', credentialsId: '99f2f311-27c0-4a12-9bae-6ae66afe1ac9', url: 'git@bitbucket.org:xploregroup/qurio-ui.git'
            }
        }
        stage('Install dependencies') {
            steps {
                script {
                    sh "npm install --include=dev --legacy-peer-deps"
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    sh "npm run build"
                }
            }

        }
        stage('Run the UI') {
            steps {
                script {
                    sh "npm run start &"
                }
            }

        }
        stage ('Run tests') {
            steps {
                script {
                    sh "npx playwright install"
                    sh "npx playwright test"
                }
            }
        }
        stage ('SonarQube scan') {
            steps {
                script {
                    sh "ls /opt"
                    withSonarQubeEnv('sq') {
                        sh """
                            /opt/sonar-scanner/bin/sonar-scanner -Dproject.settings=sonar-project.properties

                        """
                    }
                }
            }
        }
        stage('Docker Build') {
            steps {
                script {
                    sh "docker build -t janpeterd/qurio-ui:latest ."
                }
            }
        }
        stage ('Docker push') {
            steps {
                script {
                    def dockerHubCredentialsId = 'd270cbff-acb9-4096-a6d9-8ad05ba3442e'
                    withCredentials([usernamePassword(credentialsId: dockerHubCredentialsId, usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
                        sh "docker login -u \$DOCKERHUB_USERNAME -p \$DOCKERHUB_PASSWORD"
                        sh "docker push janpeterd/qurio-ui:latest"
                    }
                }
            }
        }
    }
}
