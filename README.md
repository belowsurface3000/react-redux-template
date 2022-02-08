# a basic React Redux example
A slightly advanced and scalable React app with Redux to manage state throughout the wrapped components. Also installed are the Redux Devtools (a browser Extension needs to be installed).

## Use it by cloning
1. clone the Repo by pressing the "Code" button and copying the link
2. in the editor do:
3. $ git clone LINK
4. $ cd react-context-template
5. $ npm i
6. $ npm start

## Recreate it by yourself (commands may only work in Ubuntu)
1. start a new React project with creating a new folder
2. $ cd FOLDERNAME
3. $ create-react-app .
4. $ npm i react-redux redux-devtools-extension
5. $ npm start
6. optional: delete content which is not needed (.css files, jsx content, logo, etc.)
To use Redux Devtools, add this extension to your browser: https://github.com/reduxjs/redux-devtools

## Part I - creating the Redux store, actions and reducers
7. within the projects "src" folder:
```
$ mkdir store
$ cd store
$ mkdir actions reducers
```
8. create some example actions:
```
$ cd actions
$ code exampleActions.js
```
9. within "exampleActions.js",
add three functions for managing the users cookie selection:
```
export const acceptCookies = () => {
    return {
        type: "ACCEPTCOOKIES"
    }
}
export const rejectCookies = () => {
    return {
        type: "REJECTCOOKIES"
    }
}
export const revokeCookies = () => {
    return {
        type: "REVOKECOOKIES"
    }
}
```
10. save the file and navigate to the "reducers" folder
and create the "allReducers.js" file:
```
$ cd ..
$ cd reducers
$ code allReducers.js
$ code examplesReducer.js
```
11. inside "allReducers.js" write the following.
Inside this file, additional reducers can be added later easily by adding a comma separated line after "exampleReducer: examplesReducer"
```
import { combineReducers } from "redux";
import { examplesReducer } from "./examplesReducer";
export const allReducers = combineReducers({
    exampleReducer: examplesReducer
});
```
12. finally, add the following code to the "examplesReducer.js" file,
which was created shortly before:
```
const initialState = {
    cookies: null
}
export const examplesReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case "ACCEPTCOOKIES":
            return {...state, cookies: true};
        case "REJECTCOOKIES":
            return {...state, cookies: false};
        case "REVOKECOOKIES":
            return {...state, cookies: null};
        default:
            return state;
    }
}
```

## Part II - make Redux work in the App
13. navigate to the "src" directory
14. open "index.js" and add the following lines to the top:
```
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { allReducers } from "./store/reducers/allReducers"
const myStore = createStore(allReducers, composeWithDevTools());
```
15. within the "ReactDOM.render()", 
wrap the "App" Component with:
```
<Provider store={myStore}>
</Provider>
```
16. within any component, were you want to access the state, add the following lines.
In the example case, it is added to "Component.js"
```
topline:
    import { useDispatch, useSelector } from 'react-redux';
    import { acceptCookies, rejectCookies, revokeCookies } from "./store/actions/exampleActions";

at the top of the "function Component() {" (before return):
    const dispatch = useDispatch();
    const cookiesAccepted = (useSelector((state) => state.exampleReducer.cookies));
    const confirmCookies = () => {
        dispatch(acceptCookies());
    };
    const declineCookies = () => {
        dispatch(rejectCookies());
    };
    const resetCookies = () => {
        dispatch(revokeCookies());
    }

within the "return()", add the following example code to change the Redux state
    <p>The variable "cookiesAccepted" currently holds this:</p> 
    <h1>{String(cookiesAccepted)}</h1>
    <button onClick={confirmCookies}>Accept Cookies</button>
    <button onClick={declineCookies}>Decline Cookies</button>
    {
        cookiesAccepted !== null &&
        <button onClick={resetCookies}>Revoke Cookies</button>
    }
```
17. done! check the result in
your browser
```
$ npm start
```
18. and
in the React Devtools extension:
```
- right click within the website content
- "inspect"
- after installing the browser extension, you will find "Redux" in the navigation of the inspector
- select "State" and you will see "exampleReducer: {cookies: null}
- press the "Accept Cookies" button to see the state change!
```