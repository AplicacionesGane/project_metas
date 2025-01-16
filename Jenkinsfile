pipeline {
  agent any
    
  tools {
    nodejs 'node-v22'
  }

  environment {
    ENV_API_METAS = credentials('ENV_API_METAS')
    ENV_CLIENT_METAS = credentials('ENV_CLIENT_METAS')
    ENV_TNS_ORA = credentials('ENV_TNS_ORA_METAS')
  }
    
  stages {
    stage('Copy .env files') {
      steps {
        script {
            def env_api = readFile(ENV_API_METAS)
            def env_client = readFile(ENV_CLIENT_METAS)
            def env_tns_ora = readFile(ENV_TNS_ORA)
                    
            writeFile file: './api/.env', text: env_api
            writeFile file: './client/.env', text: env_client
            writeFile file: './api/tnsnames.ora', text: env_tns_ora
          }
        }
      }

      stage('Install Client Dependencies') {
        steps {
          script {
            dir('client') {
              sh 'pnpm install --no-frozen-lockfile'
            }
          }
        }
      }

      stage('Build Client') {
        steps {
          script {
            dir('client') {
              sh 'pnpm build'
            }
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
          def images = 'api-metas:v2.1'
            if (sh(script: "docker images -q ${images}", returnStdout: true).trim()) {
              sh "docker rmi ${images}"
            } else {
              echo "Image ${images} does not exist."
              echo "continuing... executing next steps"
            }
          }
        }
      }

      stage('copy folder instan client to api'){
          steps {
            script {
              sh 'cp -r /var/lib/jenkins/instantclient_11_2 ./api'
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
