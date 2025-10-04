- Node.js Application with Docker

This project demonstrates how to containerize a Node.js application using Docker.
It uses an Ubuntu base image and installs Node.js 18.x manually before running the application.

- Dockerfile Overview

The Dockerfile performs the following steps:

Base Image: Starts from Ubuntu.

Node.js Installation:

Updates the package list.

Installs curl.

Adds Node.js 18.x setup script from NodeSource.

Installs Node.js and npm.

Copy Application Files:

Copies package.json, package-lock.json, and index.js into the container.

Install Dependencies:

Runs npm install to install required packages.

Run the Application:

Uses ENTRYPOINT to run the app via node index.js.

🐳 Docker Image

This project has been built and pushed to Docker Hub under the following image name:

vedantshingote/ubuntu-nodejs


You can pull it directly using:

docker pull vedantshingote/ubuntu-nodejs

⚙️ Build and Run Locally

If you want to build the image yourself:

1. Clone the Repository
git clone git@github.com:VedantShingote11/Docker.git
cd docker-node

2. Build the Docker Image
docker build -t ubuntu-nodejs-app .

3. Run the Container
docker run -d --name node-container ubuntu-nodejs-app


To check logs:

docker logs node-container


To stop the container:

docker stop node-container

📦 Folder Structure
├── Dockerfile
├── package.json
├── package-lock.json
└── index.js

📝 Example Output

When you run the container, you should see something like:

Server running on port 3000


(Depending on your index.js file)

💡 Notes

Make sure you have Docker installed before running these commands.

You can modify the Node.js version by changing the setup script in the Dockerfile