import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import './bootstrap.min.css';
import App from "./App";
import './index.css';
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
 <HashRouter>
   <App />
 </HashRouter>,
 document.getElementById("root")
);
registerServiceWorker();
