# Node.js App with Docker

This project shows how to **containerize a Node.js app** using **Docker** on an **Ubuntu** base image (Node.js 18.x).

---

## 🐳 Docker Image
Image: `vedantshingote/ubuntu-nodejs`

Pull:
docker pull vedantshingote/ubuntu-nodejs

---

## Build & Run
```markdown
git clone git@github.com:VedantShingote11/Docker.git
cd docker-node
docker build -t ubuntu-nodejs-app .
docker run -d --name node-container ubuntu-nodejs-app
docker logs node-container
docker stop node-container
```

---

## 📂 Folder Structure
├── Dockerfile  
├── package.json  
├── package-lock.json  
└── index.js

---

## Dockerfile Steps
Base: Ubuntu  
Install curl & Node.js 18.x  
Copy app files  
Run npm install  
Start with node index.js

---

## Output
Server running on port 3000
