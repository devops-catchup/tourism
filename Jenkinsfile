pipeline {
	agent any
    	tools{
        jdk 'jdk17'
        nodejs 'node16'
	}
	stages {
	    stage('Checkout') {
	        steps {
			checkout scm			       
		      }}
		stage('Build') {
	           steps {
			  sh 'npm start'
	                 }}
}}
