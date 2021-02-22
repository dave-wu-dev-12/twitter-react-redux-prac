import "./App.css";
import LeftHandNav from "./left-hand-nav/LeftHandNav";
import PostSection from "./postsSection/PostSection";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* left hand fixed nav */}
        <LeftHandNav />

        {/* center posts */}
        {/* right hand news */}
        <PostSection />
      </div>
    </Router>
  );
}

export default App;
