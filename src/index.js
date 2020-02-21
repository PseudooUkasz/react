import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MyApp from './JS/MyApp';

//ReactDOM.render(<h1>hello</h1>, document.getElementById("root"))
//ReactDOM.render(<App />, document.getElementById('root'));
// https://create-react-app.dev/docs/getting-started/
// https://reactjs.org/docs/getting-started.html
// https://codepen.io/pen?&editable=true&editors=0010


ReactDOM.render(
  /*  <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>, */
    <MyApp/>,
    document.getElementById("root")

)














// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
