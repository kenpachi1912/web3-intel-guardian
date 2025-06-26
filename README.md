How to Edit This Code
There are several ways to edit and work with this project:

1. Using Your Preferred Code Editor
You can work locally using any modern IDE or code editor. Follow the steps below to get started:

sh
Copy
Edit
# Step 1: Clone the repository using the Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate into the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install project dependencies.
npm install

# Step 4: Start the development server.
npm run dev
This setup will give you hot-reloading and an instant preview of your app during development.

2. Editing Directly in GitHub
Go to the file you want to edit.

Click the pencil icon at the top right to edit.

Make your changes and commit them directly to the repository.

3. Using GitHub Codespaces
If you prefer a cloud-based development environment:

Go to your GitHub repository.

Click on the green Code button.

Select the Codespaces tab.

Click New codespace to launch a development workspace.

Once the Codespace is ready, you can edit, preview, and push changes directly from the browser.

Technologies Used
This project is built with:

Vite – Frontend tooling for fast development

TypeScript – Static type checking

React – UI component library

Tailwind CSS – Utility-first CSS framework

shadcn/ui – Accessible UI components

Deployment
To publish your site, use any of the following platforms:

Vercel

Netlify

Render

GitHub Pages (via static build)

First, create a production build with:

sh
Copy
Edit
npm run build
Then deploy the contents of the dist folder to your chosen platform.

Custom Domain Setup
To connect a custom domain:

Go to your hosting provider (e.g., Vercel, Netlify).

Locate the domain settings.

Add your custom domain name and point it to the correct DNS records.

Wait for DNS propagation and SSL certificate issuance.
