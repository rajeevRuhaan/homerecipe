# This homerecipe app is created for shcool project.
This project uses Reactjs and Bootstrap as front end.
The backend has writen in Symphony PHP.

### Features of this application
Post recipe to data base
see list of recipe available.
Search recipe on the baseis of recipe name.
view entire single recipe.
Feedback for purpose to send feedback but currently it is not working.


### To run this application locally you need to clone my project.
Open application using IDE


### `npm install`

When you want to run program locally.

### To test bakend locally we can use JSON server
`npm install json-server --save -dev`

After installing JSON server add this line in package.json

open package.json and inside scripts add
` "server": "json-server -p3001 --watch example.json"`
example.json is name of json file where your recipe add in backend
you also need to create example.json file outside root folder.

`npm run server`
this command will start local server

### Deploy front end
I have deployed my homerecipe app in netlify

https://happy-kilby-4009e8.netlify.app/

for backend you can check my repository 
`symfony-recipe-backend`


