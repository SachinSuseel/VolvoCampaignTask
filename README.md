# VolvoCampaignTask
 
## Node.js

1. Install [Node.js](https://nodejs.org/en/download/)

## Docker

1. To run the docker image , install [Docker Desktop](https://www.docker.com/)

## Allure Commandline

1. Allure requires [Java](https://www.java.com/en/download/)
2. Set Java variable [JAVA_HOME](C:\Program Files\Java\jdk-18.0.1.1) and add Java bin [Path](%JAVA_HOME%\bin)
3. `npm install -g allure-commandline`
4. Set Allure variable [Path](C:\Users\<user>\node_modules\allure-commandline\dist\bin\)

## Running Docker Image

1. `docker run --name=<container-name> sachinsuseel/volvo-campaign-task:v1` or `docker run sachinsuseel/volvo-campaign-task:v1` if the container name to be set dynamic

### Canvas installation issue

If you face canvas installation error while running the docker image see the [wiki](https://github.com/Automattic/node-canvas/wiki/Installation:-Windows)
or `npm install pkg-config cairo pango jpeg giflib` and `npm install canvas`

## Copying Allure Report to local folder

1. Go to the path where results files should be placed and open command prompt or open command prompt and change the directory to the path
2. `docker cp <container-name>:/usr/src/app/allure-report  allure-report`

## Generating Allure Report

1. `allure open`
