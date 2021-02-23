import "./App.css";
import LeftHandNav from "./left-hand-nav/LeftHandNav";
import PostSection from "./postsSection/PostSection";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* left hand fixed nav */}
        <LeftHandNav />

        {/* ordering of home route should be at bottom */}
        <Switch>
          <Route path="/Explore">
            <div>EXPLORE</div>
          </Route>
          <Route path="/Notifications">
            <div>Notifications</div>
          </Route>
          <Route path="/Messages">
            <div>Messages</div>
          </Route>
          <Route path="/">
            {/* center posts */}
            {/* right hand news */}
            <PostSection />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
