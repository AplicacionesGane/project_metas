pipeline {
  agent any
    
  tools {
    nodejs 'node-v22'
  }

  environment {
    ENV_API_METAS = credentials('ENV_API_METAS')
    ENV_CLIENT_METAS = credentials('ENV_CLIENT_METAS')
  }
    
  stages {
    stage('Copy .env files') {
      steps {
        script {
            def env_api = readFile(ENV_API_METAS)
            def env_client = readFile(ENV_CLIENT_METAS)
                    
            writeFile file: './api/.env', text: env_api
            writeFile file: './client/.env', text: env_client
          }
        }
      }

      stage('install dependencies') {
        steps {
          script {
            sh 'cd ./client && yarn'
            sh 'cd ./client && yarn build'
          }
        }
      }

      stage('down docker compose'){
        steps {
          script {
            sh 'docker compose down'
          }
        }
      }
      stage('delete images'){
        steps{
          script {
          def images = 'api-metas:v1.0'
            if (sh(script: "docker images -q ${images}", returnStdout: true).trim()) {
              sh "docker rmi ${images}"
            } else {
              echo "Image ${images} does not exist."
              echo "continuing... executing next steps"
            }
          }
        }
      }
      stage('run docker compose'){
        steps {
          script {
            sh 'docker compose up -d'
            }
          }
      }
    }
}