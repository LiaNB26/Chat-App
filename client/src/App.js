import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Join from "./pages/Join";

const App = () => {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
      </Router>
    </div>
  );
};

export default App;
