pipeline {
     agent {
         label 'mean2'
     }
     stages {
        stage("Build") {
            steps {
                sh "yarn"
                sh "npx next build"

            }
        }
        stage("Deploy") {
            steps {
                sh "sudo pm2 restart openai-nextjs"
                sh "echo openai-integration.mobiloitte.io"
                
            }
        }
    }
}
