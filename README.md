# DevOps Git Workflow Ì∫Ä

This project demonstrates a simple Node.js app containerized with Docker, along with Git best practices such as branching, pull requests, tagging, and proper documentation.

---

## Ì≥¶ Project Overview

A basic Express.js application that returns a greeting message at the homepage. It‚Äôs containerized using Docker to ensure consistent deployment across environments.

---

## Ìª†Ô∏è Tech Stack

- Node.js
- Express.js
- Docker
- Git & GitHub

---

## Ì¥Å Full Setup Instructions

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
Hello, this is RAM's Node.js app running in Docker Ì∫Ä

# Ì≥Å Create and switch to a new feature branch
git checkout -b feature/docker-node-app

# Make a Small Change (Optional)
If you want, edit index.js slightly to simulate a real feature update:

# ‚úÖ Stage, commit, and push changes to GitHub
git add index.js
git commit -m "Update: improved homepage message"
git push origin feature/docker-node-app

# Ì¥Ä Create a Pull Request (PR) on GitHub:
# ‚Üí Go to GitHub repo
# ‚Üí Open a PR from feature/docker-node-app to main
# ‚Üí Review and merge it

# Ìø∑Ô∏è Tag the release after merge
git checkout main
git pull origin main
git tag v1.0
git push origin v1.0

---

Thank YouÌπå
