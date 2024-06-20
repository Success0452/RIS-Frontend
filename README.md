![NextJs](https://img.shields.io/badge/NextJS.x-red)
![Typescript](https://img.shields.io/badge/typescript-5.x-blue)
![Api](https://img.shields.io/badge/api-axios-blue)
![Yarn](https://img.shields.io/badge/yarn-3.6.4-blue)

## Table of Contents

- [Deployed Site](#deployed-site)
- [Running the Application](#running-the-application)
- [Deploy on Render](#deploy-on-render)

## Deployed Site

[Click Here to Explore Deployed Version Retail-Store](https://ris-frontend.onrender.com)

## Running the Application

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploy on Render

### Deploying a Next.js Project on Render

This guide will help you deploy your Next.js project on [Render](https://render.com/).

### Prerequisites

- A Render account. If you don't have one, you can [sign up][https://render.com/]

### Steps to Deploy

1. Push Your Code to GitHub
   - Ensure your Next.js project is pushed to a GitHub repository.

2. Connect Render to GitHub
    - Log in to your Render account.
    - Go to the Render dashboard and click on the "New +" button.
    - Select "Web Service".
3. Configure the New Web Service
    - Repository: Select the GitHub repository containing your Next.js project.
    - Branch: Choose the branch you want to deploy
    - Build Command: Set the build command to:
   ```bash
   yarn install && yarn build
   ```
    - Start Command: Set the start command to:
      bash
    ```bash
   Start Command: Set the start command to: bash
   ```
4. Set Environment Variables
- If your Next.js application requires environment variables, add them in the "Environment" section:
5. Deploy Your Service
- Click the "Create Web Service" button.
- Render will start the deployment process. This may take a few minutes.
6. Verify Deployment
- Once the deployment is complete, you will see the status as "Live".
- Click on the URL provided by Render to access your deployed Next.js application.
7. Continuous Deployment
- Every time you push changes to your GitHub repository, Render will automatically deploy the latest changes to your live site.
