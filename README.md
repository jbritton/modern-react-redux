# React

## Essential Dependencies
* React - provides functionality for creating components and using JSX.
* ReactDOM - provides functionality for rendering components to the browser DOM.

Importing React libraries:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
```


## Defining Components

Functional component (aka "dumb component"):
```javascript

import React from 'react';

var ExampleLabel = function(){
    return <label>Hello World</label>
};
```

Functional component using ES6 arrow syntax:
```javascript
const ExampleLabel = () => {
    return <label>Hello World</label>
}
```

Class component using ES6 class syntax:
```javascript

import React, { Component } from 'react';

class ExampleLabel extends Component {
    constructor(props){
        super(props);

        this.state = { label: 'Hello World' }
    }

    render() {
        return (
            <label>{this.state.label}</label>
        );
    }
}

```

### More about Components
JSX
* JSX is a convenient HTML-like markup syntax used within React components that is written inline with javascript.
* JSX ultimately is transpiled into javascript using a transpiler like Babel.
* React must be imported for transpilation of JSX to work correctly.

Class components
* Extend the React.Component parent class, which gives it default behavior.
* Must implement the render() method and return JSX.
* Should be used when there is an internal state that must be maintained.


### Component State
* State is a plain javascript object that is used to record and react to user events.
* Each class-based component has its own state object.  Functional components DO NOT have state.
* Changes to a component's state forces the component and its child components to re-render.
* Before using state within a component, it needs to be initialized within the component's constructor method.  Initial state can be set using object literal syntax.
* Component state should be mutated ONLY by using the this.setState() method, which triggers internal rendering steps due to a state change.  NEVER do this:   ``` this.state.message = 'hello world'; ```



## Exporting Components

```javascript
import React from 'react';

const ExampleLabel = () => {
    return <label>Hello World</label>
}

export default ExampleLabel;

```

## Importing Components
Use a relative file path when importing project components:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import ExampleLabel from './components/example_label'

const App = () => {
    return <div>
        <ExampleLabel />
    </div>
}

ReactDOM.render(<App />, document.querySelector('.container'));
```



## Instantiating Components
Use the React.createElement() method to create an instance:
```javascript
React.createElement(<div />, null, 'hello world');
```

Use JSX element tag, which transpile to the React.createElement() invocation:
```javascript
<ExampleLabel />
```

## Rendering Components
Use the ReactDOM.render() method to append a component instance to a DOM element:
```javascript
ReactDOM.render(<App />, document.querySelector('.container'));
```


## Data Concepts
* Downwards Data Flow - the most parent component should be responsible for fetching data from an API or store.
* Properties - the ```props``` attribute is used to pass data into a component instance.
    * Functional components are passed a ```props``` argument.
    * Class components are instantiated with a props argument passed into the constructor.  Properties can be accessed by referencing ```this.props``` within the component.

    
## Redux
* Redux is a predictable state container for javascript applications.  In other words, it is the collection of data that describes the application.
* Redux centralizes all application state into a single object.
* React is the view.  Redux is the model.  
* A Redux Container is a react component that has a direct connection to the state managed by Redux.  Redux's Container class is an extension of the React Component class.  This is part of the ```react-redux``` library.  
* The most parent react component that is concerned with a particular piece of state should be a redux container. 
    

### Redux Concepts
* State - a global object that represents the current state of the application.  The view observes the state and reacts to changes.
* Action creator - a function that returns an action (ie. user clicks button -> calls an action creator)
* Action - an object that describes the details of a user interaction (ie. action, describing a book selection, is passed to all reducers)
* Action Types - string constants, defining unique identifiers for actions
* Reducer - a function that handles actions, using their data to produce a new state (ie. the reducer receives the action and updates the selectedBook property in the state object)
* Middleware - a function that intercepts an action, which can be used to act on the action (ie. logging, tranformation of payload, authentication),
and ultimately allow it to pass through to the reducer
* Container - a component that observes the Redux state


### React Router Concepts
* History library listens to changes to the URL
* React router updates components on the screen in response to a URL change
* React renders the updated components
* Routes define mappings between URL paths and components
* Nested routes concat child paths to parent paths.  Child components are passed via `props.children` so they can be rendered within the parent component
* IndexRoute is used to define a default nested component
* Nested routes/components provide a nice way to implement an Application Shell (parent) and child views (children)

### React Component Lifecycle Methods
* `componentWillMount()` - invoked when React is about to render the component for the first time.  Only called once.

    

### React/Redux Libraries
* redux-promise - redux middleware that intercepts and resolves promises within actions
* redux-thunk - redux middleware that intercepts and invokes async callbacks within actions, passing the redux dispatcher as an argument
* axios - promise-based http request library
* react-router - routing library for multi-viewed applications
* react-form - form helpers for react-based form components
* reselect - used to construct a derived (or computed) state from one or more pieces of redux state
* normalizr