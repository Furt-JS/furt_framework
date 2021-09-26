# 👌 First Web Application
The first application that every programmer write is a 'Hello World' program. That means that when you start the program or the web server you see 'Hello World'
on the screen. First you need to type ```furt create-app <name>``` into your cli. With this command you can create the base structur of a furt app. Next type 
```furt generate --component <name>```. That makes you your own furt component, in this component we write your code. In the next step you need to go to the file
```<your component name>.component.furt``` its in the direction ```src/<your component name>```. Copy the following code and past it into the file:

```jsx

import { Component } from 'furt'

class HelloWorld extends BaseComponent {
    renderer() {
        return (<h1>Hello World</h1>);
    }
}

```

After that you need to go to the file ```src/app.component.furt```.
Write ```import { HelloWorld } from './src/"your component name"'.
Search the Method ```AppDOM()``` and type the following code between these {} clings:

```jsx

AppDOM.render(
    <HelloWorld />
);

```
