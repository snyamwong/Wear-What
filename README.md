# Wear-What

## Install

* Node.js / npm
* MongoDB Community Edition

## Import Data into MongoDB Community Edition

Connect to the localhost database, default port should be 27017.

Create a new database called "clothes" (MongoDB doesn't allow you to export an entire database, just collections).

Import the .csv files into its respective databases.

i.e

mongoimport --db clothes --collection men --file WearWhatMenCollection.csv

mongoimport --db clothes --collection women --file WearWhatWomenCollection.csv

## Starting the Server

If you have nodemon installed, you can just run nodemon - package.json has already configured it to start the server via server.js.

If you don't have nodemon installed, you can just run the command node js/server.js. 

Nodemon was used for this project to restart the server automatically whenever a change is made in the file.

## npm

If you're cloning this repo, then you will need to run the command npm install to install all the node modules.
