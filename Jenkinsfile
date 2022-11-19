
pipeline {
    environment {
        registryFrontend = 'iamstarcode/team-boot-frontend'
        registryBackend = 'iamstarcode/team-boot-backend'
        registryCredential = 'dockerhub'
        dockerImageFrontend = ''
        dockerImageBackend = ''
    }

    agent any

    tools { nodejs 'Nodjs16' }

    stages {
            stage('Unit Tests') {
            steps {

                        dir('client') {
                        script {
                        sh 'npm install --verbose'
                        sh 'npm test -- --watchAll=false'
                         }
                        }
                        dir('server') {
                        script {
                        sh 'npm install --verbose'
                        sh 'npm test -- --watchAll=false'
                         }
                        }
            }
            }
    }

            stage('Building Docker Image') {
                steps {
                    script {
                        /* remove all container */
                        sh 'docker stop $(dcoker ps -aq)'

                        dir('client') {
                        dockerImageFrontend = docker.build registryFrontend + ':latest'
                        }

                        dir('server') {
                        dockerImageBackend = docker.build registryBackend + ':latest'
                        }
                    }
                }
            }

            stage('Deploying Docker Image to Dockerhub') {
                steps {
                    script {
                        docker.withRegistry('https://registry.hub.docker.com', registryCredential) {
                        dockerImageFrontend.push()
                        dockerImageBackend.push()
                        }
                    }
                }
            }

        stage('Deploying') {
                steps {
                sh 'docker stop  frontend || true'
                sh 'docker rm -f frontend || true'
                sh 'docker run --name frontend -p 80:3000 -d iamstarcode/team-boot-frontend:latest'

                sh 'docker stop  backend || true'
                sh 'docker rm -f backend || true'
                sh 'docker run --name backend -p 80:8000 -d iamstarcode/team-boot-backend:latest'

                sh 'docker stop  web-proxy || true'
                sh 'docker rm -f web-proxy || true'
                sh 'docker run --name web-proxy -p 80:80 -d iamstarcode/team-boot-frontend:latest'
                }
        }
}
}
