pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/TU_USUARIO/simple-node-js-react-npm-app.git'
      }
    }

    stage('Install dependencies') {
      steps {
        dir('react-app') {
          sh 'npm install'
        }
      }
    }

    stage('Run tests') {
      steps {
        dir('react-app') {
          sh 'npm test -- --watchAll=false'
        }
      }
    }

    stage('Build') {
      steps {
        dir('react-app') {
          sh 'npm run build'
        }
      }
    }
  }
}
