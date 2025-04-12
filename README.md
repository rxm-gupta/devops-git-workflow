# DevOps Git Workflow 

This project demonstrates a simple Node.js app containerized with Docker, along with Git best practices such as branching, pull requests, tagging, and proper documentation.

---

## Project Overview

A basic Express.js application that returns a greeting message at the homepage. It’s containerized using Docker to ensure consistent deployment across environments.

---

## Tech Stack

- Node.js
- Express.js
- Docker
- Git & GitHub

---

## Full Setup Instructions

Follow these steps to clone and run the app inside Docker:

### 1. Clone the Repository

```bash
git clone https://github.com/rxm-gupta/devops-git-workflow.git
cd devops-git-workflow
```
### 2. Build the Docker Image

```bash
docker build -t node-app-image.
```
### 3. Run the Docker Container

```bash
docker run -p 3000:3000 node-app-image
```

### 4. Access the Application

```bash
http://localhost:3000
```

You should see:
Hello, this is RAM's Node.js app running in Docker

### Create and switch to a new feature branch
```bash
git checkout -b feature/docker-node-app
```

### Make a Small Change
If you want, edit index.js slightly to simulate a real feature update:

### ✅ Stage, commit, and push changes to GitHub
```bash
git add index.js
git commit -m "Update: improved homepage message"
git push origin feature/docker-node-app
```

### Create a Pull Request (PR) on GitHub:
#### → Go to GitHub repo
#### → Open a PR from feature/docker-node-app to main
#### → Review and merge it

### Tag the release after merge
```bash
git checkout main
git pull origin main
git tag v1.0
git push origin v1.0
```
---

![Image](https://github.com/user-attachments/assets/34aa06bd-075b-4c96-b8b5-37f22fed3652)

![Image](https://github.com/user-attachments/assets/aabb35a9-f183-4b9a-9f93-9622b5f9b678)

![Image](https://github.com/user-attachments/assets/8da528fc-76c2-4a7c-9684-52ec8690f9ff)

![Image](https://github.com/user-attachments/assets/eba1c104-cad9-482f-86da-e628c7b2d73a)

![Image](https://github.com/user-attachments/assets/b388f23e-1678-4816-9838-a7fda05adaf1)

# Thank You🙌
