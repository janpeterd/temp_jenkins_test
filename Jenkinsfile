pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'jp-jenkinsfile',  url: 'https://github.com/janpeterd/temp_jenkins_test.git'
            }
        }
        stage('Install dependencies') {
            steps {
                script {
                    sh "npm install --include=dev"
                }
            }
        }
        stage('Run the UI') {
            steps {
                script {
                    sh "npm run dev &"
                }
            }

        }
        stage ('Run tests') {
            steps {
                script {
                    sh "npx playwright test"
                }
            }
        }
        stage ('SonarQube scan') {
            steps {
                script {
                    withSonarQubeEnv('sq') {
                        sh """
                            docker run --rm \
                            -e SONAR_HOST_URL=http://host.docker.internal:9001 \
                            -e SONAR_LOGIN=\$SONAR_LOGIN \
                            -v '.:/usr/src' \
                            sonarsource/sonar-scanner-cli \
                            -Dsonar.projectKey=\$PROJECT_KEY \
                            -Dsonar.sources=. \
                            -Dsonar.exclusions='node_modules,typings/**'
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
                    def dockerHubCredentialsId = 'a3ef8e6c-2a4c-4030-82ac-1f1126b1fc71'
                    withCredentials([usernamePassword(credentialsId: dockerHubCredentialsId, usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
                        sh "docker login -u \$DOCKERHUB_USERNAME -p \$DOCKERHUB_PASSWORD"
                        sh "docker push janpeterd/qurio-ui:latest"
                    }
                }
            }
        }
    }
}
