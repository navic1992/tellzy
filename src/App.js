import React from "react";
import "./App.css";
import Policy from "./Components/Reusable/Policy";
import Contact from "./Components/Contact";
import Admin from "./Components/Admin";
import Landing from "./Components/Landing";
import CreatingStory from "./Components/CreatingStory";
import ResultStory from "./Components/ResultStory";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditStory from "./Components/EditStory";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styling/general.css";
import "./styling/fonts.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <Navbar></Navbar>
      </header> */}
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/story" component={CreatingStory} />
          <Route exact path="/story/:storyId" component={ResultStory} />
          <Route path="/story/:storyId/:secret" component={EditStory} />
          <Route path="/policy" component={Policy} />
          <Route path="/contact" component={Contact} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
