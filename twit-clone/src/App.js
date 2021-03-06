import "./App.css";
import LeftHandNav from "./left-hand-nav/LeftHandNav";
import PostSection from "./postsSection/PostSection";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Messages from "./messages/Messages";
import { useState, useEffect } from "react";

function App() {
  // protect the routes based on which mode we are in
  // this will create certain routes during each mode
  // we also redirect the user if they hit a route
  // that isnt avaible
  const [fullRoutes, setFullRoutes] = useState(true);

  useEffect(() => {
    console.log("run once");

    return () => {};
  }, []);

  return (
    <Router>
      <div className="App">
        <button onClick={() => setFullRoutes(!fullRoutes)}>Route Tggle</button>
        {/* left hand fixed nav */}
        <LeftHandNav />

        {/* ordering of home route should be at bottom */}
        {fullRoutes && (
          <Switch>
            <Route path="/Explore">
              <div>EXPLORE</div>
            </Route>
            <Route path="/Notifications">
              <div>Notifications</div>
            </Route>
            <Route path="/Messages/:messageId">
              <Messages />
            </Route>
            <Route path="/Messages">
              <Messages />
            </Route>
            <Route path="/">
              {/* center posts */}
              {/* right hand news */}
              <PostSection />
            </Route>
          </Switch>
        )}

        {!fullRoutes && (
          <Switch>
            <Route exact path="/">
              {/* center posts */}
              {/* right hand news */}
              <PostSection />
            </Route>
            {/* routes that are unmatched will be redirected to the specified route, rerender will occur on the specified route comp
            because it becomes unmounted when we nav to the unmatched route and rendered when we redirect to it */}
            <Redirect to="/" />
          </Switch>
        )}
      </div>
    </Router>
  );
}

export default App;
