Setting up a basic Node Server

1) Install NodeJS and NPM (node package manager) on your machine
- If you have a MAC and you have Brew installed, in terminal it's:
    
```
    brew install node
```

-   NPM should come with your NodeJS installation. If not, it's 'brew install npm'
-   Read more: http://treehouse.github.io/installation-guides/mac/node-mac.html


-   If you have Ubuntu in terminal it's: 
       
```
    sudo apt-get update

    sudo apt-get install nodejs

    sudo apt-get install npm
           
```

2) Create a new directory in terminal to house your server and application

```
mkdir basic_server
```

3) Navigate to the directory in terminal and type:
```
npm init
```

- This will create a package.json file
- None of the questions are mandatory and can be edited later.
- The package.json file keeps track of all the installed node packages

4) Inside the directory with terminal, create a server file called server.js
```
touch server.js

```

- this is where we will write our routing code in a moment.

4) In terminal, install the 'Express' and 'Mustache-Express' packages.
```
npm install express --save
npm install mustache-express --save
```

- Typing --save flag will update the package.json file after installation.
- Express is a package that will handle the server routing
    + It also handles asset serving.
    + Read more here: https://www.npmjs.com/package/express
- Mustache is a template engine for HTML files and does a lot of cool stuff
    + Read more about 'Usage' here: https://www.npmjs.com/package/mustache

5) Check to make sure your package.json file looks something like this:

-   Make note of 'dependencies' which should include "express" and "mustache-express"
-   And check "main" key to make sure it points to the server file we made (server.js)
```
{
  "name": "{{Whatever-name-you-want}}",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.14.0",
    "mustache-express": "^1.2.2"
  }
}

```

6) Now we can make HTML/CSS/Javascript files to make a real website and stuff. 

- In the root directory, make two folders

```
mkdir views
mkdir public
```

- Then make a couple of files

```
touch views/index.html
touch public/style.css
```

7) Simply copy/paste the content from the index.html and style.css files I've added to thie repo if you want a place to start from. Otherwise, make your own!

8) Okay! open your server.js file and start javascriptin'.

- First we need to require and assign the Express package
```
var express = require('express');
var app = express();
var mustache = require('mustache-express');

app.engine('html',mustache()); //tell Express to use mustache templating engine
app.set('view engine', 'html'); //tell Express to use html templates
app.set('views', __dirname+'/views'); //tell Express where to find the html files
app.use("/public", express.static(__dirname+'/public')); //tell Express where find the other dynamic files like css/js
```

- Then, beneath this code, we define a route

```

//Define the port
var port = 8080;

//Define what happens then a user visits the root route
app.get('/',function(req,res)
{
  res.render("index"); //Tell Express which html file to render for this route
});

//Start the server on the defined port
app.listen(port, function()
{
  console.log('Server running on port: '+port);
})

```

- The complete server.js file can be found in github repo
- You can run the server from terminal!
```
node server.js
```

- Make sure you visit your site on http://localhost:8080
- Now you have a basic node server!
