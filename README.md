# api-college


### - Clone Project
`git clone https://github.com/zjohnsilver/api-express-docker.git`
    
### - Add file .env following env.example

### - Install packages and start
`npm install & npm start`

### - Using Docker

`docker-compose up`

# How to add babel in your code

## Setup Babel

### Install Babel

	npm install @babel/core @babel/node @babel/preset-env --save-dev
	
After that create a file called .babelrc in root with the following json:
```
{
	"presets":  ["@babel/preset-env"]
}
```
Add babel-node on scripts in package.json
```
"scripts":  {
	"start":  "babel-node index.js"
}
```