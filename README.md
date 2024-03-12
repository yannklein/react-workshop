# React workshop

Let's build an app listing dev-friendly cafes in Tokyo ☕️

This tutorial covers the **React frontend** of the app. To learn how to build its **Rails backend**, jump on Doug Berkley's [Rails API tutorial](https://github.com/dmbf29/rails-api-tutorial) 💎. 

<img src=image-2.png width='640' style='border-radius: 5px;'>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#workshop-links">Workshop links</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#setup-the-project">Setup the project</a></li>
        <li><a href="#setup-the-your-code-editor">Setup the your code editor</a></li>
        <li><a href="#push-your-project-to-production-with-github-pages">ush your project to production with Github Pages</a></li>
      </ul>
    </li>
    <li><a href="#how-was-this-boilerplate-created">How was this boilerplate created?</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## Workshop links:

- [Slides](https://yannklein.github.io/react-workshop-ref/slides)
- [Final app example](https://yannklein.github.io/react-workshop-ref)

## Getting started

### 1. Setup the project

<details>
<summary>Open if you're not a Le Wagon student</summary>
You will need to install the softwares below if not done yet:

- Install NodeJS (https://nodejs.org/en/) version 16 or over

</details>

<details>
<summary>Open if you graduated more than 6 months ago</summary>
You need node v16 or over. Run the following in your terminal:

```bash
nvm install 16.15.1
nvm use 16.15.1
```

</details>
<br>
Follow these steps:

- In your terminal, **go to the folder in which you would like to build your react app**.

- Then, run the below code:

```bash
gh repo clone yannklein/react-workshop
cd react-workshop
rm -rf .git
cd ref
code .
cd ../workshop
git init
code .
rm -rf package-lock.json
rm -rf ./node_modules
npm install
npm run dev
```

It will open **2 VS codes!**:

- The `ref` one is the final code of this workshop (with the app built already) for your reference.
- The `workshop` one is the code base you will use to build your app during this workshop.

You should see this on your terminal:

<img src=image.png width='460' style='border-radius: 5px; margin: 16px 0;'>

- Open `http://localhost:5173/` in your browser, you should see this:

<img src=image-1.png width='200' style='border-radius: 5px; margin: 16px 0;'>

### 2. Setup the your code editor

#### Setup for VS code

Go to `Code > Preferences > Extensions`, search and install "Reactjs code snippets" (some [doc here](https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets))

#### Setup for Sublime Text

1. Go to `SublimeText > Preferences > Package Control`, search for "Package Control: Install Package" and press Enter. In the appearing list, search for "Babel" and press Enter.

2. Same operations for "Babel Snippets" (some [doc here](https://packagecontrol.io/packages/Babel%20Snippets))

3. Got to SublimeText > Preferences > Key Bindings

Add the code of this link on the right side.

## Push your project to production with Github Pages

1. First decide of a Github repo name. Go to the `workshop/vite.config.js` file and replace the base folder with your repo name:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/your-repo-name-here/"
})

```

2. In the terminal, commit your work, create your gh repository and push your code:

Make sure you replace `your-repo-name-here` in the below command ⚠️

```bash
git add .
git commit -m "finish the workshop base app"
gh repo create your-repo-name-here --public --source=.
gh browse
```

The Github repo webpage will open. Go to Settings > Pages and change `source` into 'Github Action'. The below shows were to click:

https://github.com/yannklein/react-workshop/assets/26819547/6ec8fbb9-4612-470f-801c-d4355be7ab38

Finally, run this command in your terminal:

```
git push origin master
gh browse
```

3. The github repo will open, your project should be building in the Action tab. Wait for a short while to see the URL appearing:
   
https://github.com/yannklein/react-workshop-feb2024/assets/26819547/cde3c3f3-6221-424d-8aa1-05b09ce9f458




## How was this boilerplate created?

The boilerplate has been create with [Vite](https://vitejs.dev/) a lightning fast Frontend framework builder.

To install Vite and create a react boilerplate, run the following code on your terminal:

```
npm create vite@latest
```

You will see a terminal step by step interface that will guide you through the creation process.

For this workshop, I used the following options:
- Project name: `react-workshop-feb2024`
- Select a framework: `React`
- Select a variant: `Javascript`

Then, run the sugggested 3 commands to start up the project.


## Acknowledgments

Thanks to the teams of:
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Le Wagon Tokyo](https://lewagon.com/tokyo)

And special thank to my backend teammate for this project, [Doug Berkley](https://www.douglasberkley.com/). ([@dmbf29](https://github.com/dmbf29))
Check out his [Rails backend API workshop repo](https://github.com/dmbf29/rails-api-tutorial) to learn to build a backend to your React application.
